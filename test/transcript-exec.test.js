import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { fetchTranscriptContent } from '../src/processor.js';

// Stub tools record their argv (NUL-separated, one file per call) so the test can see
// exactly what fetchTranscriptContent passed, then write the files the real tools would.
function writeStub(file, body) {
  fs.writeFileSync(file, `#!/bin/sh\n${body}\n`);
  fs.chmodSync(file, 0o755);
}

function readCalls(logDir, prefix) {
  return fs.readdirSync(logDir)
    .filter(f => f.startsWith(prefix))
    .map(f => fs.readFileSync(path.join(logDir, f), 'utf8').split('\0').slice(0, -1));
}

describe('fetchTranscriptContent tool execution', { skip: process.platform === 'win32' }, () => {
  test('passes the URL to yt-dlp as one argument and never through a shell', async () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'smaug-transcript-exec-'));
    try {
      const logDir = path.join(root, 'logs');
      fs.mkdirSync(logDir);
      const marker = path.join(root, 'marker');

      const ytdlp = path.join(root, 'yt-dlp');
      writeStub(ytdlp, [
        `printf '%s\\0' "$@" > "$(mktemp "${logDir}/ytdlp.XXXXXX")"`,
        'out=""; prev=""; audio=0',
        'for a in "$@"; do',
        '  [ "$prev" = "-o" ] && out="$a"',
        '  [ "$a" = "-x" ] && audio=1',
        '  prev="$a"',
        'done',
        '[ "$audio" = 1 ] && : > "$out"',
        'exit 0'
      ].join('\n'));

      const whisper = path.join(root, 'whisper');
      writeStub(whisper, [
        `printf '%s\\0' "$@" > "$(mktemp "${logDir}/whisper.XXXXXX")"`,
        'outdir=""; prev=""',
        'for a in "$@"; do [ "$prev" = "--output_dir" ] && outdir="$a"; prev="$a"; done',
        'printf "stub transcript\\n" > "$outdir/audio.txt"'
      ].join('\n'));

      // Links reach this function after redirect expansion, which normalizes them with the
      // WHATWG URL parser. Check that the shell metacharacters survive that normalization.
      const url = new URL(`https://www.youtube.com/watch?v=abc$(touch\${IFS}${marker})`).href;
      assert.ok(url.includes('$(touch${IFS}'), `URL normalization changed the test input: ${url}`);

      const result = await fetchTranscriptContent(url, { whisperModel: 'tiny.en' }, { ytdlp, whisper });

      assert.strictEqual(fs.existsSync(marker), false, 'the URL was evaluated by a shell');
      assert.deepStrictEqual(result, { text: 'stub transcript', source: 'whisper' });

      const ytdlpCalls = readCalls(logDir, 'ytdlp.');
      assert.strictEqual(ytdlpCalls.length, 2, 'expected a captions call and an audio call');
      for (const argv of ytdlpCalls) {
        assert.strictEqual(argv.at(-1), url);
        assert.strictEqual(argv.at(-2), '--');
      }

      const [whisperArgv] = readCalls(logDir, 'whisper.');
      assert.ok(whisperArgv[0].endsWith('audio.mp3'));
      assert.deepStrictEqual(whisperArgv.slice(1, 3), ['--model', 'tiny.en']);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });
});

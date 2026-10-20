import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import childProcess from 'node:child_process';
import { syncBuiltinESMExports } from 'node:module';
import { parseJson3Transcript, parseVttTranscript, fetchTranscriptContent } from '../src/processor.js';

const json3 = texts => JSON.stringify({
  events: texts.map(text => ({ segs: [{ utf8: text }] }))
});

for (const [format, parse, encode] of [
  ['json3', parseJson3Transcript, json3],
  ['vtt', parseVttTranscript, texts => `WEBVTT\n\n${texts.join('\n')}`]
]) {
  test(`${format}: suppresses adjacent duplicates across empty input`, () => {
    assert.equal(parse(encode(['', 'Alpha', 'Alpha', '', '  ', 'Alpha', 'Beta', 'Beta'])), 'Alpha\nBeta');
  });

  test(`${format}: preserves nonadjacent repetitions and case differences`, () => {
    assert.equal(parse(encode(['Alpha', 'Beta', 'Alpha', 'alpha'])), 'Alpha\nBeta\nAlpha\nalpha');
  });

  test(`${format}: retains existing fixture output byte for byte`, () => {
    const content = fs.readFileSync(new URL(`./fixtures/sample-subtitles.${format}`, import.meta.url), 'utf8');
    const expected = format === 'json3'
      ? "Hello and welcome to this video.\nToday we'll be talking about\nartificial intelligence.\nLet's dive right in.\nFirst, let's define what AI means."
      : "Hello and welcome to this video.\nToday we'll be talking about\nartificial intelligence.\nToday we'll be talking about\nLet's dive right in.\nFirst, let&s define what AI means.";
    assert.deepEqual(Buffer.from(parse(content)), Buffer.from(expected));
  });

  test(`${format}: caption extraction returns without audio or Whisper`, async t => {
    const content = encode(['Alpha', '', 'Alpha', 'Beta', 'Alpha']);
    const commands = [];
    let tempDir;
    const originalExecSync = childProcess.execSync;
    t.after(() => {
      childProcess.execSync = originalExecSync;
      syncBuiltinESMExports();
    });
    childProcess.execSync = command => {
      commands.push(command);
      assert.match(command, /--skip-download/);
      const output = command.match(/-o "([^"]+)"/);
      assert.ok(output, 'caption command includes an output template');
      tempDir = path.dirname(output[1]);
      fs.writeFileSync(path.join(tempDir, `example.en.${format}`), content);
      return '';
    };
    syncBuiltinESMExports();

    const url = format === 'json3' ? 'https://www.youtube.com/watch?v=example' : 'https://example.com/video';
    const result = await fetchTranscriptContent(url, {}, { ytdlp: '/mock/yt-dlp', whisper: '/mock/whisper' });
    assert.deepEqual(result, { text: 'Alpha\nBeta\nAlpha', source: 'yt-dlp-captions' });
    assert.equal(commands.length, 1, 'only the mocked caption command runs');
    assert.equal(fs.existsSync(tempDir), false, 'temporary caption directory is cleaned up');
  });
}

test('json3: joins segments before trimming, without decoding entities', () => {
  const content = JSON.stringify({ events: [
    {}, { segs: [] }, { segs: [{ utf8: '  Alpha' }, {}, { utf8: ' Beta  ' }] },
    { segs: [{ utf8: '&nbsp;' }] }, { segs: [{ utf8: 'Alpha Beta' }] }
  ] });
  assert.equal(parseJson3Transcript(content), 'Alpha Beta\n&nbsp;\nAlpha Beta');
  assert.equal(parseJson3Transcript('not json'), '');
  assert.equal(parseJson3Transcript('{}'), '');
});

test('vtt: removes tags before deduplication and decodes entities after trimming', () => {
  const content = 'WEBVTT\nKind: captions\nLanguage: en\nNOTE ignored\n1\n00:00:00.000 --> 00:00:02.000\n<c>Alpha</c>\n<i></i>\nAlpha\n&nbsp;\n&nbsp;\nAlpha\n&nbsp;Beta&nbsp;\n&amp;lt;';
  assert.equal(parseVttTranscript(content), 'Alpha\n \nAlpha\n Beta \n<');
  assert.equal(parseVttTranscript(null), '');
  assert.equal(parseVttTranscript(''), '');
});

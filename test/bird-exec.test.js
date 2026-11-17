import { test, describe, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fetchBookmarks, fetchLikes, fetchTweet, fetchXArticleContent } from '../src/processor.js';

// A stub bird at config.birdPath records each call's argv (NUL-separated, one
// numbered file per call) and prints JSON the way the real CLI does, so these
// tests run the real subprocess path rather than a mocked one. A shell
// metacharacter in any argument would run `touch` and create the marker.
let root, logDir, marker, payload, config;

beforeEach(() => {
  root = fs.mkdtempSync(path.join(os.tmpdir(), 'smaug-bird-exec-'));
  logDir = path.join(root, 'calls');
  fs.mkdirSync(logDir);
  marker = path.join(root, 'marker');
  // Over 64 KB, so a pipe-sized truncation would show up as a parse failure
  // or a short array.
  payload = path.join(root, 'payload.json');
  const items = Array.from({ length: 3000 }, (_, i) => ({ id: String(i), text: `bookmark ${i} `.padEnd(40, '.') }));
  fs.writeFileSync(payload, JSON.stringify(items));
  assert.ok(fs.statSync(payload).size > 64 * 1024);

  // One article tweet with metadata and more than 500 characters, so
  // fetchXArticleContent returns at the search step and never reaches its
  // network fallback.
  const searchResult = JSON.stringify([{ id: '77', text: 'a'.repeat(600), article: { title: 'Stub article' } }]);

  const bird = path.join(root, 'bird');
  fs.writeFileSync(bird, [
    '#!/bin/sh',
    `n=$(ls "${logDir}" | wc -l)`,
    `printf '%s\\0' "$@" > "$(printf '%s/call.%03d' "${logDir}" "$n")"`,
    'case "$1" in',
    `  read) printf '{"id":"%s","text":"stub"}' "$2" ;;`,
    `  search) printf '%s' '${searchResult}' ;;`,
    `  *) cat "${payload}" ;;`,
    'esac',
    ''
  ].join('\n'));
  fs.chmodSync(bird, 0o755);
  config = { birdPath: bird };
});

afterEach(() => {
  fs.rmSync(root, { recursive: true, force: true });
});

function calls() {
  return fs.readdirSync(logDir).sort()
    .map(f => fs.readFileSync(path.join(logDir, f), 'utf8').split('\0').slice(0, -1));
}

const hostile = () => `1$(touch ${marker})`;

describe('bird runs without a shell', { skip: process.platform === 'win32' }, () => {
  test('fetchTweet passes the tweet ID as one argument', () => {
    const id = hostile();
    const tweet = fetchTweet(config, id);
    assert.equal(fs.existsSync(marker), false, 'the tweet ID was evaluated by a shell');
    assert.deepEqual(calls(), [['read', id, '--json']]);
    assert.equal(tweet.id, id);
  });

  test('fetchXArticleContent passes the source tweet ID and search query as single arguments', async () => {
    const id = hostile();
    const article = await fetchXArticleContent('https://x.com/i/article/123', config, id);
    assert.equal(fs.existsSync(marker), false, 'the source tweet ID was evaluated by a shell');
    assert.deepEqual(calls(), [
      ['read', id, '--json'],
      ['search', 'url:x.com/i/article/123', '-n', '5', '--json']
    ]);
    assert.equal(article.source, 'bird-cli-search');
    assert.equal(article.title, 'Stub article');
  });

  test('fetchBookmarks passes the folder ID as one argument and reads stdout from the temp file', () => {
    const folderId = hostile();
    const bookmarks = fetchBookmarks(config, 2, { folderId });
    assert.equal(fs.existsSync(marker), false, 'the folder ID was evaluated by a shell');
    assert.deepEqual(calls(), [['bookmarks', '--folder-id', folderId, '-n', '2', '--json']]);
    assert.deepEqual(bookmarks.map(b => b.id), ['0', '1']);
  });

  test('fetchLikes captures output larger than a pipe buffer intact', () => {
    const likes = fetchLikes(config, 5);
    assert.deepEqual(calls(), [['likes', '-n', '5', '--json']]);
    assert.equal(likes.length, 3000);
    assert.equal(likes.at(-1).id, '2999');
  });

  test('a failing bird surfaces its stderr in the thrown message', () => {
    fs.writeFileSync(config.birdPath, '#!/bin/sh\necho "stub bird: auth expired" >&2\nexit 3\n');
    assert.throws(() => fetchLikes(config, 1), /Failed to fetch likes: .*stub bird: auth expired/s);
  });
});

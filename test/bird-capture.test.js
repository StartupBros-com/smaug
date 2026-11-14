import { afterEach, beforeEach, mock, test } from 'node:test';
import assert from 'node:assert/strict';
import cp from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { syncBuiltinESMExports } from 'node:module';
import { fetchBookmarks, fetchLikes } from '../src/processor.js';

let events, output, failure;
beforeEach(() => {
  events = [];
  output = '[{"id":"one"},{"id":"two"}]';
  failure = null;
  mock.method(Date, 'now', () => 12345);
  mock.method(os, 'tmpdir', () => '/mock temp');
  mock.method(console, 'log', () => {});
  mock.method(cp, 'execSync', (...args) => {
    events.push(['exec', ...args]);
    if (failure === 'exec') throw new Error('exec failed');
  });
  mock.method(fs, 'readFileSync', (...args) => {
    events.push(['read', ...args]);
    if (failure === 'read') throw new Error('read failed');
    return output;
  });
  mock.method(fs, 'unlinkSync', (...args) => {
    events.push(['unlink', ...args]);
    if (failure === 'unlink') throw new Error('unlink failed');
  });
  syncBuiltinESMExports();
});
afterEach(() => { mock.restoreAll(); syncBuiltinESMExports(); });

for (const [kind, fetchItems] of [['bookmarks', fetchBookmarks], ['likes', fetchLikes]]) {
  test(`${kind}: preserves command, timeout, environment, encoding, and I/O order`, () => {
    const inherited = { ...process.env };
    const config = { birdPath: '/custom/bird', twitter: { authToken: 'synthetic-auth', ct0: 'synthetic-ct0' } };
    assert.deepEqual(fetchItems(config), [{ id: 'one' }, { id: 'two' }]);
    const tmpFile = path.join('/mock temp', `smaug-${kind}-12345.json`);
    assert.deepEqual(events, [
      ['exec', `/custom/bird ${kind} -n 10 --json > "${tmpFile}"`, {
        timeout: 60000, env: { ...inherited, AUTH_TOKEN: 'synthetic-auth', CT0: 'synthetic-ct0' }, shell: true
      }],
      ['read', tmpFile, 'utf8'], ['unlink', tmpFile]
    ]);
    assert.notStrictEqual(events[0][2].env, process.env);
    assert.deepEqual({ ...process.env }, inherited);
  });

  test(`${kind}: defaults bird path and preserves inherited environment with falsey overrides`, () => {
    fetchItems({ birdPath: '', twitter: { authToken: '', ct0: null } }, 3);
    assert.ok(events[0][1].startsWith(`bird ${kind} -n 3 --json`));
    assert.deepEqual(events[0][2].env, { ...process.env });
  });

  test(`${kind}: accepts arrays, wrapped tweets, missing tweets, and falsey tweets`, () => {
    for (const [raw, expected] of [['[]', []], ['{"tweets":[{"id":"wrapped"}],"nextCursor":"next"}', [{ id: 'wrapped' }]], ['{}', []], ['{"tweets":null}', []]]) {
      output = raw;
      assert.deepEqual(fetchItems({}), expected);
    }
  });

  for (const stage of ['exec', 'read', 'unlink']) {
    test(`${kind}: preserves ${stage} failure and stops subsequent I/O`, () => {
      failure = stage;
      assert.throws(() => fetchItems({}), { message: `Failed to fetch ${kind}: ${stage} failed` });
      assert.deepEqual(events.map(e => e[0]), ['exec', 'read', 'unlink'].slice(0, ['exec', 'read', 'unlink'].indexOf(stage) + 1));
    });
  }

  test(`${kind}: deletes captured output before malformed JSON fails`, () => {
    output = '{broken';
    let parseMessage;
    try { JSON.parse(output); } catch (error) { parseMessage = error.message; }
    assert.throws(() => fetchItems({}), { message: `Failed to fetch ${kind}: ${parseMessage}` });
    assert.deepEqual(events.map(e => e[0]), ['exec', 'read', 'unlink']);
  });

  test(`${kind}: unlink failure takes precedence over malformed JSON`, () => {
    output = '{broken';
    failure = 'unlink';
    assert.throws(() => fetchItems({}), { message: `Failed to fetch ${kind}: unlink failed` });
  });

  test(`${kind}: null response still fails after cleanup`, () => {
    output = 'null';
    assert.throws(() => fetchItems({}), new RegExp(`^Error: Failed to fetch ${kind}:`));
    assert.deepEqual(events.map(e => e[0]), ['exec', 'read', 'unlink']);
  });
}

for (const [count, options, expectedCommand, timeout] of [
  [50, {}, 'bookmarks -n 50', 60000],
  [51, {}, 'bookmarks --all --max-pages 10', 180000],
  [250, {}, 'bookmarks --all --max-pages 13', 180000],
  [2, { all: true, maxPages: 4 }, 'bookmarks --all --max-pages 4', 180000],
  [2, { all: true, maxPages: 0, folderId: 'folder' }, 'bookmarks --folder-id folder --all --max-pages 10', 180000],
  [2, { folderId: 'folder' }, 'bookmarks --folder-id folder -n 2', 60000]
]) {
  test(`bookmarks: preserves options ${JSON.stringify({ count, options })}`, () => {
    fetchBookmarks({}, count, options);
    assert.ok(events[0][1].startsWith(`bird ${expectedCommand} --json > `));
    assert.equal(events[0][2].timeout, timeout);
  });
}

test('bookmarks truncates captured results while likes leaves them intact', () => {
  assert.deepEqual(fetchBookmarks({}, 1), [{ id: 'one' }]);
  assert.deepEqual(fetchLikes({}, 1), [{ id: 'one' }, { id: 'two' }]);
});

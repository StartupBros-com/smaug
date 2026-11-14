import { afterEach, beforeEach, describe, mock, test } from 'node:test';
import assert from 'node:assert/strict';
import childProcess from 'node:child_process';
import fs from 'node:fs';
import { syncBuiltinESMExports } from 'node:module';
import { findWhisper, findYtDlp } from '../src/processor.js';

// The default execution path is mocked too: no installed tool or shell is used.
let defaultExec;
beforeEach(() => {
  defaultExec = mock.method(childProcess, 'execSync', () => '/mock/default\n');
  syncBuiltinESMExports();
});
afterEach(() => {
  mock.restoreAll();
  syncBuiltinESMExports();
});

for (const [binary, findTool] of [['yt-dlp', findYtDlp], ['whisper', findWhisper]]) {
  describe(`${binary} lookup policy`, () => {
    test('uses the original default command and options', () => {
      assert.equal(findTool(), '/mock/default');
      assert.deepEqual(defaultExec.mock.calls.map(({ arguments: args }) => args), [
        [`which ${binary}`, { encoding: 'utf8', timeout: 5000, stdio: 'pipe' }]
      ]);
    });

    test('returns an existing configured path unchanged without running which', () => {
      const configured = ' /configured/tool with spaces ';
      const exists = mock.method(fs, 'existsSync', () => true);
      const execSyncFn = mock.fn(() => { throw new Error('must not run'); });
      assert.equal(findTool({ configPath: configured, execSyncFn }), configured);
      assert.deepEqual(exists.mock.calls[0].arguments, [configured]);
      assert.equal(execSyncFn.mock.callCount(), 0);
      assert.equal(defaultExec.mock.callCount(), 0);
    });

    test('falls back when the configured path does not exist', () => {
      mock.method(fs, 'existsSync', () => false);
      const execSyncFn = mock.fn(() => ' \t/mock/path\n');
      assert.equal(findTool({ configPath: '/missing', execSyncFn }), '/mock/path');
      assert.deepEqual(execSyncFn.mock.calls[0].arguments, [
        `which ${binary}`, { encoding: 'utf8', timeout: 5000, stdio: 'pipe' }
      ]);
      assert.equal(defaultExec.mock.callCount(), 0);
    });

    test('falls back when checking the configured path throws', () => {
      mock.method(fs, 'existsSync', () => { throw new Error('unreadable'); });
      assert.equal(findTool({ configPath: '/unreadable' }), '/mock/default');
      assert.equal(defaultExec.mock.callCount(), 1);
    });

    test('skips existence checks for all falsey configured paths', () => {
      const exists = mock.method(fs, 'existsSync', () => { throw new Error('must not check'); });
      for (const configPath of [undefined, null, '', false, 0]) {
        assert.equal(findTool({ configPath }), '/mock/default');
      }
      assert.equal(exists.mock.callCount(), 0);
      assert.equal(defaultExec.mock.callCount(), 5);
    });

    test('retains the default executor for falsey overrides', () => {
      for (const execSyncFn of [undefined, null, false, 0, '']) {
        assert.equal(findTool({ execSyncFn }), '/mock/default');
      }
      assert.equal(defaultExec.mock.callCount(), 5);
    });

    test('returns null when the lookup command fails', () => {
      assert.equal(findTool({ execSyncFn: () => { throw new Error('not found'); } }), null);
      assert.equal(defaultExec.mock.callCount(), 0);
    });

    test('preserves empty output and multiple matches instead of choosing a line', () => {
      for (const output of ['', ' \n\t', '/first\n/second\n']) {
        assert.equal(findTool({ execSyncFn: () => output }), output.trim());
      }
    });

    test('returns null for executor results without a trim method', () => {
      for (const output of [undefined, null, 42, Buffer.from('/path')]) {
        assert.equal(findTool({ execSyncFn: () => output }), null);
      }
    });

    test('keeps options access order and exceptions outside the lookup catch', () => {
      const accesses = [];
      assert.equal(findTool({
        get execSyncFn() { accesses.push('executor'); return () => '/path'; },
        get configPath() { accesses.push('path'); return null; }
      }), '/path');
      assert.deepEqual(accesses, ['executor', 'path']);
      const error = new Error('options failure');
      assert.throws(() => findTool({ get configPath() { throw error; } }), (e) => e === error);
      assert.throws(() => findTool(null), TypeError);
    });
  });
}

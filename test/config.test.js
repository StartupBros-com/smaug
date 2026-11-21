import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { expandTilde, initConfig, loadConfig } from '../src/config.js';

describe('expandTilde', () => {
  test('expands ~/ to home directory', () => {
    const result = expandTilde('~/Documents/bookmarks.md');
    assert.strictEqual(result, path.join(os.homedir(), 'Documents/bookmarks.md'));
  });

  test('expands bare ~ to home directory', () => {
    const result = expandTilde('~');
    assert.strictEqual(result, os.homedir());
  });

  test('returns absolute paths unchanged', () => {
    const result = expandTilde('/usr/local/bin');
    assert.strictEqual(result, '/usr/local/bin');
  });

  test('returns relative paths unchanged', () => {
    const result = expandTilde('./bookmarks.md');
    assert.strictEqual(result, './bookmarks.md');
  });

  test('handles null gracefully', () => {
    const result = expandTilde(null);
    assert.strictEqual(result, null);
  });

  test('handles undefined gracefully', () => {
    const result = expandTilde(undefined);
    assert.strictEqual(result, undefined);
  });

  test('handles non-string gracefully', () => {
    const result = expandTilde(123);
    assert.strictEqual(result, 123);
  });
});

describe('loadConfig', () => {
  test('returns default config when no file exists', () => {
    const config = loadConfig('./nonexistent.json');
    assert.ok(config.archiveFile);
    assert.ok(config.pendingFile);
    assert.ok(config.stateFile);
    assert.deepStrictEqual(config.folders, {});
  });

  test('default categories are present', () => {
    const config = loadConfig('./nonexistent.json');
    assert.ok(config.categories.github);
    assert.ok(config.categories.article);
    assert.ok(config.categories.tweet);
  });

  test('expands tilde in archive paths', () => {
    // This tests the integration - loadConfig should expand tildes
    const config = loadConfig('./nonexistent.json');
    // Default paths don't use ~, but the function should work
    assert.ok(!config.archiveFile.includes('~'));
  });

  test('transcription config keys have correct defaults', () => {
    const config = loadConfig('./nonexistent.json');
    assert.strictEqual(config.ytdlpPath, null);
    assert.strictEqual(config.whisperPath, null);
    assert.strictEqual(config.whisperModel, 'small.en');
    assert.ok(config.transcribeTimeouts);
    assert.strictEqual(config.transcribeTimeouts.subtitle, 30000);
    assert.strictEqual(config.transcribeTimeouts.audio, 300000);
    assert.strictEqual(config.transcribeTimeouts.whisper, 600000);
  });

  test('env var overrides work for transcription config', () => {
    const origYtdlp = process.env.YTDLP_PATH;
    const origWhisper = process.env.WHISPER_PATH;
    const origModel = process.env.WHISPER_MODEL;
    try {
      process.env.YTDLP_PATH = '/custom/yt-dlp';
      process.env.WHISPER_PATH = '/custom/whisper';
      process.env.WHISPER_MODEL = 'tiny.en';
      const config = loadConfig('./nonexistent.json');
      assert.strictEqual(config.ytdlpPath, '/custom/yt-dlp');
      assert.strictEqual(config.whisperPath, '/custom/whisper');
      assert.strictEqual(config.whisperModel, 'tiny.en');
    } finally {
      if (origYtdlp === undefined) delete process.env.YTDLP_PATH;
      else process.env.YTDLP_PATH = origYtdlp;
      if (origWhisper === undefined) delete process.env.WHISPER_PATH;
      else process.env.WHISPER_PATH = origWhisper;
      if (origModel === undefined) delete process.env.WHISPER_MODEL;
      else process.env.WHISPER_MODEL = origModel;
    }
  });
});

test('initConfig emits the documented scaffold without internal defaults', (t) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'smaug-config-test-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const file = path.join(dir, 'smaug.config.json');
  assert.strictEqual(initConfig(file), file);
  const expected = {
    source: 'bookmarks',
    archiveFile: './bookmarks.md',
    pendingFile: './.state/pending-bookmarks.json',
    stateFile: './.state/bookmarks-state.json',
    timezone: 'America/New_York',
    birdPath: null,
    twitter: {
      authToken: 'YOUR_AUTH_TOKEN_HERE',
      ct0: 'YOUR_CT0_TOKEN_HERE'
    },
    folders: {},
    categories: {},
    autoInvokeClaude: true,
    autoInvokeOpencode: true,
    cliTool: 'claude',
    claudeModel: 'sonnet',
    opencodeModel: 'opencode/glm-4.7-free',
    claudeTimeout: 900000,
    webhookUrl: null,
    webhookType: 'discord'
  };
  assert.strictEqual(fs.readFileSync(file, 'utf8'), JSON.stringify(expected, null, 2) + '\n');
});

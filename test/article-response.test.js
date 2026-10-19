import { test } from 'node:test';
import assert from 'node:assert/strict';
import childProcess from 'node:child_process';
import { syncBuiltinESMExports } from 'node:module';
import { fetchArticleContent, fetchXArticleContent } from '../src/processor.js';

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36';
const ARTICLE_URL = 'https://example.invalid/article';
const X_URL = 'https://x.com/i/article/123';

// Every transport, clock, and bird interaction is synthetic. Test-file isolation
// keeps the temporary builtin replacement separate from the existing suite.
function setup(t, { html = 'a'.repeat(1000), fetchError, bodyError, abort = false, bird = [] } = {}) {
  const events = [];
  const controllers = [];
  const timers = [];
  t.mock.method(childProcess, 'execSync', (command) => {
    events.push(['bird', command]);
    return JSON.stringify(bird);
  });
  syncBuiltinESMExports();
  const abortControllerDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'AbortController');
  t.after(() => {
    Object.defineProperty(globalThis, 'AbortController', abortControllerDescriptor);
    t.mock.restoreAll();
    syncBuiltinESMExports();
  });
  // Node 20 exposes AbortController through a lazy accessor, not a value method.
  Object.defineProperty(globalThis, 'AbortController', { configurable: true, writable: true, value: class {
    constructor() {
      Object.defineProperty(this, 'signal', { value: { aborted: false } });
      this.abort = () => {
        this.signal.aborted = true;
        events.push(['abort']);
      };
      controllers.push(this);
      events.push(['controller']);
    }
  } });
  t.mock.method(globalThis, 'setTimeout', (callback, delay) => {
    const timer = { callback, delay };
    timers.push(timer);
    events.push(['timer', delay]);
    return timer;
  });
  t.mock.method(globalThis, 'clearTimeout', (timer) => {
    assert.ok(timers.includes(timer), 'clears the timer it created');
    events.push(['clear', timer.delay]);
  });
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    events.push(['fetch', url, options]);
    if (abort) timers.at(-1).callback();
    if (fetchError) throw fetchError;
    return {
      // Preserve the existing behavior of reading non-2xx response bodies.
      get ok() { assert.fail('must not add a response status check'); },
      get status() { assert.fail('must not add a response status check'); },
      async text() {
        events.push(['body']);
        assert.equal(events.at(-2)?.[0], 'clear', 'clear timer before body consumption');
        if (bodyError) throw bodyError;
        return html;
      }
    };
  });
  return { events, controllers, timers };
}

const callers = [
  { name: 'direct article', url: ARTICLE_URL, timeout: 30000, call: () => fetchArticleContent(ARTICLE_URL) },
  { name: 'X metadata fallback', url: X_URL, timeout: 15000, call: () => fetchXArticleContent(X_URL, { twitter: {} }) }
];

for (const caller of callers) {
  test(`${caller.name}: preserves request, timeout, signal, and header/body ordering`, async (t) => {
    const { events, controllers, timers } = setup(t);
    await caller.call();
    const transport = events.filter(([kind]) => kind !== 'bird');
    assert.deepEqual(transport.map(([kind]) => kind), ['controller', 'timer', 'fetch', 'clear', 'body']);
    assert.equal(timers.length, 1);
    assert.equal(timers[0].delay, caller.timeout);
    assert.equal(controllers.length, 1);
    assert.deepEqual(transport[2], ['fetch', caller.url, {
      headers: { 'User-Agent': USER_AGENT }, signal: controllers[0].signal, redirect: 'follow'
    }]);
    assert.equal(controllers[0].signal.aborted, false);
  });

  test(`${caller.name}: preserves fetch failure and pending timer behavior`, async (t) => {
    const error = new Error('synthetic fetch failure');
    const { events, timers } = setup(t, { fetchError: error });
    if (caller.url === ARTICLE_URL) await assert.rejects(caller.call(), (actual) => actual === error);
    else assert.deepEqual(await caller.call(), {
      articleId: '123', url: X_URL, source: 'x-article', error: error.message,
      note: 'X article - content extraction failed'
    });
    assert.equal(events.some(([kind]) => kind === 'clear' || kind === 'body'), false);
    assert.equal(timers[0].delay, caller.timeout);
  });

  test(`${caller.name}: timer aborts the same signal and preserves abort error`, async (t) => {
    const error = new Error('synthetic abort');
    error.name = 'AbortError';
    const { controllers, events } = setup(t, { abort: true, fetchError: error });
    if (caller.url === ARTICLE_URL) await assert.rejects(caller.call(), (actual) => actual === error);
    else assert.equal((await caller.call()).error, error.message);
    assert.equal(controllers[0].signal.aborted, true);
    assert.equal(events.filter(([kind]) => kind === 'abort').length, 1);
    assert.equal(events.some(([kind]) => kind === 'clear'), false);
  });

  test(`${caller.name}: body failure occurs after timer cleanup`, async (t) => {
    const error = new Error('synthetic body failure');
    const { events } = setup(t, { bodyError: error });
    if (caller.url === ARTICLE_URL) await assert.rejects(caller.call(), (actual) => actual === error);
    else assert.equal((await caller.call()).error, error.message);
    assert.deepEqual(events.slice(-2).map(([kind]) => kind), ['clear', 'body']);
  });
}

for (const [name, html, paywalled] of [
  ['short body', 'short', true],
  ['threshold body', 'a'.repeat(1000), false],
  ['subscribe and sign-in', 'Subscribe sign in' + 'a'.repeat(1000), true],
  ['subscribe only', 'Subscribe' + 'a'.repeat(1000), false],
  ['subscribers phrase', 'This article is for subscribers' + 'a'.repeat(1000), true],
  ['50KB truncation before paywall detection', 'a'.repeat(50000) + 'This article is for subscribers', false]
]) {
  test(`direct article: preserves ${name}`, async (t) => {
    setup(t, { html });
    assert.deepEqual(await fetchArticleContent(ARTICLE_URL), { text: html.slice(0, 50000), source: 'direct', paywalled });
  });
}

for (const [name, html, expected] of [
  ['Open Graph precedence', '<title>Fallback / X</title><meta name="description" content="fallback"><meta property="og:title" content="OG title"><meta property="og:description" content="OG desc"> @writer', { title: 'OG title', description: 'OG desc', author: 'writer' }],
  ['reversed attribute order', '<meta content="Title" property="og:title"><meta content="Description" name="description">', { title: 'Title', description: 'Description', author: null }],
  ['title suffix fallback', '<title>Title / X</title>', { title: 'Title', description: null, author: null }],
  ['missing metadata', '', { title: null, description: null, author: null }]
]) {
  test(`X metadata: preserves ${name}`, async (t) => {
    setup(t, { html });
    assert.deepEqual(await fetchXArticleContent(X_URL, {}), {
      articleId: '123', ...expected, url: X_URL, source: 'x-article-meta',
      note: 'X article content requires JavaScript rendering - metadata only'
    });
  });
}

test('X article with bird content never starts HTTP transport', async (t) => {
  const { events } = setup(t, { bird: [{ id: '456', text: 'a'.repeat(501) }] });
  const result = await fetchXArticleContent(X_URL, {});
  assert.equal(result.source, 'bird-cli-search');
  assert.equal(events.some(([kind]) => kind === 'fetch' || kind === 'timer'), false);
});

test('X invalid URL never starts bird or HTTP transport', async (t) => {
  const { events } = setup(t);
  assert.deepEqual(await fetchXArticleContent(ARTICLE_URL, {}), { error: 'Could not parse X article URL', source: 'x-article' });
  assert.deepEqual(events, []);
});

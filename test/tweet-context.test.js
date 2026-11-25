import assert from 'node:assert/strict';
import test from 'node:test';
import { buildTweetContext } from '../src/tweet-context.js';

test('tweet context preserves its packet fields and name fallback', () => {
  const packet = buildTweetContext({
    id: '123', author: { username: 'example', name: '' },
    text: 'primary', full_text: 'alternate'
  });
  assert.deepEqual(packet, {
    id: '123', author: 'example', authorName: 'example',
    text: 'primary', tweetUrl: 'https://x.com/example/status/123'
  });
  assert.deepEqual(Object.keys(packet), ['id', 'author', 'authorName', 'text', 'tweetUrl']);
  assert.equal(buildTweetContext({ id: '123', author: { username: 'example', name: 'Example' } }).authorName, 'Example');
});

test('full_text is a fallback for fetched context but not native quotes', () => {
  const tweet = { id: '456', text: '', full_text: 'full tweet' };
  assert.deepEqual(buildTweetContext(tweet), {
    id: '456', author: 'unknown', authorName: 'unknown',
    text: 'full tweet', tweetUrl: 'https://x.com/unknown/status/456'
  });
  assert.equal(buildTweetContext(tweet, { allowFullText: false }).text, '');
  assert.equal(buildTweetContext({ ...tweet, text: 'native' }, { allowFullText: false }).text, 'native');
  assert.equal(buildTweetContext({ id: '789' }).text, '');
});

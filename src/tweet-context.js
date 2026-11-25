// Fetched tweets may carry full_text; native bookmark quotes intentionally use text only.
export function buildTweetContext(tweet, { allowFullText = true } = {}) {
  const author = tweet.author?.username || 'unknown';

  return {
    id: tweet.id,
    author,
    authorName: tweet.author?.name || author,
    text: tweet.text || (allowFullText ? tweet.full_text : '') || '',
    tweetUrl: `https://x.com/${author}/status/${tweet.id}`
  };
}

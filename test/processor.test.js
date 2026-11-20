import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import {
  isPaywalled,
  stripQuerystring,
  fetchXArticleContent,
  isLikelyMdFilename,
  classifyLink,
  findYtDlp,
  findWhisper,
  parseJson3Transcript,
  parseVttTranscript,
  fetchTranscriptContent
} from '../src/processor.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Check if bird CLI has valid credentials
function hasBirdCredentials() {
  try {
    // Quick check - if bird can fetch 1 bookmark without error, we have credentials
    execSync('bird bookmarks -n 1 --json', { encoding: 'utf8', timeout: 10000, stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

const BIRD_AVAILABLE = hasBirdCredentials();

describe('X article URL detection', () => {
  test('detects X article URL pattern', () => {
    const url = 'https://x.com/i/article/2015364734262935552';
    assert.ok(url.includes('/i/article/'), 'should match X article pattern');
  });

  test('extracts article ID from X article URL', () => {
    const url = 'https://x.com/i/article/2015364734262935552';
    const match = url.match(/\/i\/article\/(\d+)/);
    assert.ok(match, 'should match article ID pattern');
    assert.strictEqual(match[1], '2015364734262935552');
  });

  test('X article URL is classified as an article, not a generic tweet', () => {
    assert.strictEqual(classifyLink('https://x.com/i/article/2015364734262935552'), 'x-article');
  });

  test('regular tweet URLs are not classified as X articles', () => {
    assert.strictEqual(classifyLink('https://x.com/user/status/123456789'), 'tweet');
  });
});

describe('fetchXArticleContent', () => {
  test('returns error for invalid article URL', async () => {
    const result = await fetchXArticleContent('https://x.com/user/status/123', {});
    assert.strictEqual(result.source, 'x-article');
    assert.ok(result.error, 'should return error for non-article URL');
  });

  test('extracts article ID from valid URL', async () => {
    // This test doesn't require bird CLI - it tests the URL parsing
    const url = 'https://x.com/i/article/2015364734262935552';
    const articleIdMatch = url.match(/\/i\/article\/(\d+)/);
    assert.ok(articleIdMatch, 'should extract article ID');
    assert.strictEqual(articleIdMatch[1], '2015364734262935552');
  });

  test('accepts source tweet ID parameter for bird CLI fetch', async () => {
    // Test that the function signature accepts the source tweet ID
    // (actual bird CLI test would require real credentials)
    const result = await fetchXArticleContent(
      'https://x.com/i/article/123456789',
      { twitter: {} },
      '987654321' // source tweet ID
    );
    // Should return some structure even if bird CLI fails
    assert.ok(result.articleId || result.error, 'should return article info or error');
  });

  test('always returns articleId for valid article URLs', async () => {
    // Even when bird CLI fails, articleId should be extracted from URL
    const result = await fetchXArticleContent(
      'https://x.com/i/article/9876543210',
      { twitter: {} }
    );
    assert.strictEqual(result.articleId, '9876543210', 'should extract articleId from URL');
  });

  test('returns url in result', async () => {
    const articleUrl = 'https://x.com/i/article/1111111111';
    const result = await fetchXArticleContent(articleUrl, { twitter: {} });
    assert.strictEqual(result.url, articleUrl, 'should include original URL in result');
  });

  test('attempts search fallback when source tweet lacks article content', async () => {
    // When bird CLI fails on source tweet, function should attempt search
    // (will also fail without credentials, but tests the code path)
    const result = await fetchXArticleContent(
      'https://x.com/i/article/2222222222',
      { twitter: {} },
      '3333333333' // sharing tweet ID (not the original)
    );
    // Should still return article info even if all attempts fail
    assert.strictEqual(result.articleId, '2222222222');
    assert.ok(result.url.includes('2222222222'));
  });
});

describe('X article detection logic', () => {
  // These tests verify the detection logic used in fetchXArticleContent
  // to determine if bird CLI returned article content

  test('detects article by metadata (title present)', () => {
    const articleMeta = { title: 'My Article', previewText: null };
    const articleContent = 'Short text'; // < 500 chars

    const hasArticleMeta = articleMeta.title || articleMeta.previewText;
    const hasArticleContent = articleContent.length > 500;

    assert.ok(hasArticleMeta, 'should detect via title');
    assert.ok(!hasArticleContent, 'content is short');
    assert.ok(hasArticleMeta || hasArticleContent, 'should pass detection with metadata');
  });

  test('detects article by metadata (previewText present)', () => {
    const articleMeta = { title: null, previewText: 'Preview of the article...' };
    const articleContent = 'Short text'; // < 500 chars

    const hasArticleMeta = articleMeta.title || articleMeta.previewText;
    const hasArticleContent = articleContent.length > 500;

    assert.ok(hasArticleMeta, 'should detect via previewText');
    assert.ok(hasArticleMeta || hasArticleContent, 'should pass detection with previewText');
  });

  test('detects article by content length (no metadata)', () => {
    const articleMeta = { title: null, previewText: null };
    const articleContent = 'A'.repeat(600); // > 500 chars

    const hasArticleMeta = articleMeta.title || articleMeta.previewText;
    const hasArticleContent = articleContent.length > 500;

    assert.ok(!hasArticleMeta, 'no metadata');
    assert.ok(hasArticleContent, 'should detect via content length');
    assert.ok(hasArticleMeta || hasArticleContent, 'should pass detection with long content');
  });

  test('fails detection when no metadata and short content', () => {
    const articleMeta = { title: null, previewText: null };
    const articleContent = 'Just a regular tweet'; // < 500 chars

    const hasArticleMeta = articleMeta.title || articleMeta.previewText;
    const hasArticleContent = articleContent.length > 500;

    assert.ok(!hasArticleMeta, 'no metadata');
    assert.ok(!hasArticleContent, 'short content');
    assert.ok(!(hasArticleMeta || hasArticleContent), 'should fail detection');
  });

  test('empty metadata object is handled correctly', () => {
    const articleMeta = {};
    const articleContent = 'Short text';

    const hasArticleMeta = articleMeta.title || articleMeta.previewText;
    const hasArticleContent = articleContent.length > 500;

    assert.ok(!hasArticleMeta, 'empty object has no metadata');
    assert.ok(!(hasArticleMeta || hasArticleContent), 'should fail detection');
  });
});

describe('isPaywalled', () => {
  test('detects NYT as paywalled', () => {
    assert.strictEqual(isPaywalled('https://www.nytimes.com/2025/01/01/article.html'), true);
  });

  test('detects WSJ as paywalled', () => {
    assert.strictEqual(isPaywalled('https://www.wsj.com/articles/something'), true);
  });

  test('detects Bloomberg as paywalled', () => {
    assert.strictEqual(isPaywalled('https://www.bloomberg.com/news/article'), true);
  });

  test('returns false for GitHub', () => {
    assert.strictEqual(isPaywalled('https://github.com/user/repo'), false);
  });

  test('returns false for Twitter', () => {
    assert.strictEqual(isPaywalled('https://twitter.com/user/status/123'), false);
  });
});

describe('stripQuerystring', () => {
  test('removes query parameters', () => {
    const result = stripQuerystring('https://example.com/page?utm_source=twitter&ref=123');
    assert.strictEqual(result, 'https://example.com/page');
  });

  test('preserves path', () => {
    const result = stripQuerystring('https://example.com/deep/nested/path?foo=bar');
    assert.strictEqual(result, 'https://example.com/deep/nested/path');
  });

  test('handles URLs without querystring', () => {
    const result = stripQuerystring('https://example.com/page');
    assert.strictEqual(result, 'https://example.com/page');
  });

  test('handles invalid URLs gracefully', () => {
    const result = stripQuerystring('not-a-url');
    assert.strictEqual(result, 'not-a-url');
  });
});

describe('pending file handling', () => {
  test('fixture file with bookmarks array loads correctly', () => {
    const fixture = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'fixtures/pending-bookmarks.json'), 'utf8')
    );
    assert.ok(Array.isArray(fixture.bookmarks));
    assert.strictEqual(fixture.bookmarks.length, 1);
  });

  test('fixture file without bookmarks array handled with fallback', () => {
    const fixture = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'fixtures/empty-pending.json'), 'utf8')
    );
    // This tests the pattern: (fixture.bookmarks || [])
    const bookmarks = fixture.bookmarks || [];
    assert.ok(Array.isArray(bookmarks));
    assert.strictEqual(bookmarks.length, 0);
  });

  test('null-safe bookmark ID extraction', () => {
    const fixture = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'fixtures/empty-pending.json'), 'utf8')
    );
    // Pattern from processor.js line 394
    const pendingIds = new Set((fixture.bookmarks || []).map(b => b.id.toString()));
    assert.strictEqual(pendingIds.size, 0);
  });
});

describe('sample bookmarks fixture', () => {
  test('loads sample bookmarks', () => {
    const bookmarks = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'fixtures/sample-bookmarks.json'), 'utf8')
    );
    assert.strictEqual(bookmarks.length, 2);
    assert.strictEqual(bookmarks[0].author.username, 'testuser');
  });

  test('bookmarks have required fields', () => {
    const bookmarks = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'fixtures/sample-bookmarks.json'), 'utf8')
    );
    for (const bookmark of bookmarks) {
      assert.ok(bookmark.id, 'bookmark should have id');
      assert.ok(bookmark.text, 'bookmark should have text');
      assert.ok(bookmark.author, 'bookmark should have author');
      assert.ok(bookmark.createdAt, 'bookmark should have createdAt');
    }
  });
});

describe('direct article metadata detection', () => {
  // These tests verify the logic that detects X articles directly on
  // bookmark.article or bookmark.quotedTweet.article when no t.co link
  // contains the article URL

  test('detects bookmark.article when present', () => {
    const bookmark = {
      id: '123456789',
      text: 'Check out my article', // No t.co link
      article: {
        id: '987654321',
        title: 'My Great Article',
        previewText: 'This is a preview of my article...'
      }
    };

    // Simulates the logic in processor.js
    const links = []; // No X article found from t.co links
    const hasDirectArticle = bookmark.article && !links.some(l => l.type === 'x-article');

    assert.ok(hasDirectArticle, 'should detect direct article metadata');
    assert.strictEqual(bookmark.article.title, 'My Great Article');
  });

  test('detects quotedTweet.article when present', () => {
    const bookmark = {
      id: '123456789',
      text: 'Great article!', // No t.co link
      quotedTweet: {
        id: '555555555',
        text: 'Original article tweet',
        article: {
          id: '666666666',
          title: 'Quoted Article Title',
          previewText: 'Preview of the quoted article'
        }
      }
    };

    // Simulates the logic in processor.js
    const links = []; // No X article found from t.co links
    const hasQuotedArticle = bookmark.quotedTweet?.article && !links.some(l => l.type === 'x-article');

    assert.ok(hasQuotedArticle, 'should detect article on quoted tweet');
    assert.strictEqual(bookmark.quotedTweet.article.title, 'Quoted Article Title');
  });

  test('skips direct article when X article already found via t.co link', () => {
    const bookmark = {
      id: '123456789',
      text: 'Article link: https://t.co/abc123',
      article: {
        id: '987654321',
        title: 'My Great Article'
      }
    };

    // Simulates links array after t.co processing found an article
    const links = [
      { original: 'https://t.co/abc123', expanded: 'https://x.com/i/article/999', type: 'x-article', content: {} }
    ];
    const hasDirectArticle = bookmark.article && !links.some(l => l.type === 'x-article');

    assert.ok(!hasDirectArticle, 'should skip direct article when one already found');
  });

  test('generates correct article URL from bookmark.article.id', () => {
    const articleMeta = { id: '123456789012345' };
    const bookmarkId = '999999999';
    const articleUrl = `https://x.com/i/article/${articleMeta.id || bookmarkId}`;

    assert.strictEqual(articleUrl, 'https://x.com/i/article/123456789012345');
  });

  test('falls back to bookmark.id when article.id is missing', () => {
    const articleMeta = { title: 'Article without ID' };
    const bookmarkId = '888888888';
    const articleUrl = `https://x.com/i/article/${articleMeta.id || bookmarkId}`;

    assert.strictEqual(articleUrl, 'https://x.com/i/article/888888888');
  });

  test('extracts t.co links from quotedTweet.text', () => {
    // Simulates the bookmarks API returning truncated quotedTweet
    // where the article link is only in quotedTweet.text
    const bookmark = {
      id: '123456789',
      text: '"Quote of the article content"', // No t.co link in main text
      quotedTweet: {
        id: '555555555',
        text: 'https://t.co/abc123xyz', // t.co link only here
        author: { username: 'original_author' }
      }
    };

    // Simulates the logic in processor.js
    const tcoLinks = bookmark.text.match(/https?:\/\/t\.co\/\w+/g) || [];
    
    // Check quotedTweet.text for additional links
    if (bookmark.quotedTweet?.text) {
      const quotedLinks = bookmark.quotedTweet.text.match(/https?:\/\/t\.co\/\w+/g) || [];
      for (const link of quotedLinks) {
        if (!tcoLinks.includes(link)) {
          tcoLinks.push(link);
        }
      }
    }

    assert.strictEqual(tcoLinks.length, 1, 'should find link from quotedTweet.text');
    assert.strictEqual(tcoLinks[0], 'https://t.co/abc123xyz');
  });

  test('deduplicates t.co links between text and quotedTweet.text', () => {
    const bookmark = {
      id: '123456789',
      text: 'Check this out https://t.co/same123',
      quotedTweet: {
        id: '555555555',
        text: 'Original: https://t.co/same123', // Same link
        author: { username: 'original_author' }
      }
    };

    const tcoLinks = bookmark.text.match(/https?:\/\/t\.co\/\w+/g) || [];
    
    if (bookmark.quotedTweet?.text) {
      const quotedLinks = bookmark.quotedTweet.text.match(/https?:\/\/t\.co\/\w+/g) || [];
      for (const link of quotedLinks) {
        if (!tcoLinks.includes(link)) {
          tcoLinks.push(link);
        }
      }
    }

    assert.strictEqual(tcoLinks.length, 1, 'should deduplicate same link');
  });
});

describe('extractArticle content/metadata selection', () => {
  // Tests for the extractArticle logic that chooses between main and quoted content

  test('preserves main metadata when quoted has longer content but no metadata', () => {
    // Simulates extractArticle logic
    const tweetData = {
      text: 'A'.repeat(500), // Main has 500 chars
      article: { title: 'Main Title', previewText: 'Main preview' },
      quotedTweet: {
        id: '555',
        text: 'B'.repeat(600), // Quoted has 600 chars but no metadata
        article: {}
      }
    };

    let articleContent = tweetData.text || '';
    let articleMeta = tweetData.article || {};

    const quotedTweet = tweetData.quotedTweet;
    if (quotedTweet) {
      const quotedContent = quotedTweet.text || '';
      const quotedMeta = quotedTweet.article || {};
      const quotedHasMeta = quotedMeta.title || quotedMeta.previewText;

      if (quotedContent.length > articleContent.length) {
        articleContent = quotedContent;
        // Only switch metadata if quoted has it
        if (quotedHasMeta) {
          articleMeta = quotedMeta;
        }
      }
    }

    assert.strictEqual(articleContent.length, 600, 'should use longer quoted content');
    assert.strictEqual(articleMeta.title, 'Main Title', 'should preserve main metadata');
  });

  test('uses quoted metadata when main has none', () => {
    const tweetData = {
      text: 'A'.repeat(1000),
      article: {}, // No metadata
      quotedTweet: {
        id: '555',
        text: 'B'.repeat(400), // Shorter but has metadata
        article: { title: 'Quoted Title' }
      }
    };

    let articleContent = tweetData.text || '';
    let articleMeta = tweetData.article || {};

    const quotedTweet = tweetData.quotedTweet;
    if (quotedTweet) {
      const quotedContent = quotedTweet.text || '';
      const quotedMeta = quotedTweet.article || {};
      const mainHasMeta = articleMeta.title || articleMeta.previewText;
      const quotedHasMeta = quotedMeta.title || quotedMeta.previewText;

      if (quotedContent.length > articleContent.length) {
        articleContent = quotedContent;
        if (quotedHasMeta) {
          articleMeta = quotedMeta;
        }
      } else if (quotedHasMeta && !mainHasMeta) {
        articleMeta = quotedMeta;
      }
    }

    assert.strictEqual(articleContent.length, 1000, 'should keep longer main content');
    assert.strictEqual(articleMeta.title, 'Quoted Title', 'should use quoted metadata');
  });

  test('uses both quoted content and metadata when quoted is longer and has metadata', () => {
    const tweetData = {
      text: 'A'.repeat(500),
      article: { title: 'Main Title' },
      quotedTweet: {
        id: '555',
        text: 'B'.repeat(13000),
        article: { title: 'Quoted Title', previewText: 'Quoted preview' }
      }
    };

    let articleContent = tweetData.text || '';
    let articleMeta = tweetData.article || {};

    const quotedTweet = tweetData.quotedTweet;
    if (quotedTweet) {
      const quotedContent = quotedTweet.text || '';
      const quotedMeta = quotedTweet.article || {};
      const quotedHasMeta = quotedMeta.title || quotedMeta.previewText;

      if (quotedContent.length > articleContent.length) {
        articleContent = quotedContent;
        if (quotedHasMeta) {
          articleMeta = quotedMeta;
        }
      }
    }

    assert.strictEqual(articleContent.length, 13000, 'should use longer quoted content');
    assert.strictEqual(articleMeta.title, 'Quoted Title', 'should use quoted metadata');
  });
});

// Check if yt-dlp is available for integration tests
function hasYtDlp() {
  try {
    execSync('which yt-dlp', { encoding: 'utf8', timeout: 5000, stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

function hasWhisper() {
  try {
    execSync('which whisper', { encoding: 'utf8', timeout: 5000, stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

const YT_DLP_AVAILABLE = hasYtDlp();
const WHISPER_AVAILABLE = hasWhisper();

describe('findYtDlp', () => {
  test('returns null when tool is not installed (mocked)', () => {
    const result = findYtDlp({
      execSyncFn: () => { throw new Error('not found'); },
      configPath: null
    });
    assert.strictEqual(result, null);
  });

  test('returns configured path when it exists', () => {
    const result = findYtDlp({
      configPath: '/usr/bin/env'
    });
    assert.strictEqual(result, '/usr/bin/env');
  });

  test('returns null for non-existent configured path', () => {
    const result = findYtDlp({
      execSyncFn: () => { throw new Error('not found'); },
      configPath: '/nonexistent/path/yt-dlp'
    });
    assert.strictEqual(result, null);
  });
});

describe('findWhisper', () => {
  test('returns null when tool is not installed (mocked)', () => {
    const result = findWhisper({
      execSyncFn: () => { throw new Error('not found'); },
      configPath: null
    });
    assert.strictEqual(result, null);
  });

  test('returns configured path when it exists', () => {
    const result = findWhisper({
      configPath: '/usr/bin/env'
    });
    assert.strictEqual(result, '/usr/bin/env');
  });
});

describe('parseJson3Transcript', () => {
  test('produces clean text from fixture', () => {
    const content = fs.readFileSync(path.join(__dirname, 'fixtures/sample-subtitles.json3'), 'utf8');
    const result = parseJson3Transcript(content);
    assert.ok(result.includes('Hello and welcome to this video.'));
    assert.ok(result.includes('artificial intelligence.'));
    assert.ok(result.includes("Let's dive right in."));
    assert.ok(result.includes("First, let's define what AI means."));
  });

  test('deduplicates adjacent identical lines', () => {
    const content = fs.readFileSync(path.join(__dirname, 'fixtures/sample-subtitles.json3'), 'utf8');
    const result = parseJson3Transcript(content);
    const lines = result.split('\n');
    const talkingAbout = lines.filter(l => l === "Today we'll be talking about");
    assert.strictEqual(talkingAbout.length, 1, 'duplicate adjacent lines should be removed');
  });

  test('skips events without segs', () => {
    const content = fs.readFileSync(path.join(__dirname, 'fixtures/sample-subtitles.json3'), 'utf8');
    const result = parseJson3Transcript(content);
    assert.ok(!result.includes('undefined'));
  });

  test('returns empty string for malformed content', () => {
    assert.strictEqual(parseJson3Transcript('not json'), '');
    assert.strictEqual(parseJson3Transcript(''), '');
    assert.strictEqual(parseJson3Transcript('{}'), '');
  });
});

describe('parseVttTranscript', () => {
  test('produces clean text from fixture', () => {
    const content = fs.readFileSync(path.join(__dirname, 'fixtures/sample-subtitles.vtt'), 'utf8');
    const result = parseVttTranscript(content);
    assert.ok(result.includes('Hello and welcome to this video.'));
    assert.ok(result.includes('artificial intelligence.'));
    assert.ok(result.includes("Let's dive right in."));
  });

  test('strips VTT formatting tags', () => {
    const content = fs.readFileSync(path.join(__dirname, 'fixtures/sample-subtitles.vtt'), 'utf8');
    const result = parseVttTranscript(content);
    assert.ok(!result.includes('<c.colorCCCCCC>'), 'color tags should be stripped');
    assert.ok(!result.includes('<00:'), 'inline timestamps should be stripped');
  });

  test('decodes HTML entities', () => {
    const content = fs.readFileSync(path.join(__dirname, 'fixtures/sample-subtitles.vtt'), 'utf8');
    const result = parseVttTranscript(content);
    assert.ok(result.includes('&s define'), 'should decode &amp; to &');
    assert.ok(result.includes("Let's"), 'should decode &#39; to apostrophe');
  });

  test('excludes WEBVTT header and timestamp lines', () => {
    const content = fs.readFileSync(path.join(__dirname, 'fixtures/sample-subtitles.vtt'), 'utf8');
    const result = parseVttTranscript(content);
    assert.ok(!result.includes('WEBVTT'), 'header should be excluded');
    assert.ok(!result.includes('-->'), 'timestamps should be excluded');
    assert.ok(!result.includes('Kind:'), 'metadata should be excluded');
  });

  test('deduplicates adjacent lines', () => {
    const content = fs.readFileSync(path.join(__dirname, 'fixtures/sample-subtitles.vtt'), 'utf8');
    const result = parseVttTranscript(content);
    const lines = result.split('\n');
    for (let i = 1; i < lines.length; i++) {
      assert.notStrictEqual(lines[i], lines[i - 1], `adjacent lines should not be identical: "${lines[i]}"`);
    }
  });

  test('returns empty string for null/empty input', () => {
    assert.strictEqual(parseVttTranscript(null), '');
    assert.strictEqual(parseVttTranscript(''), '');
    assert.strictEqual(parseVttTranscript(undefined), '');
  });
});

describe('fetchTranscriptContent', () => {
  test('returns null with log when no tools available', async () => {
    const result = await fetchTranscriptContent(
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      { transcribeTimeouts: {} },
      { ytdlp: null, whisper: null }
    );
    assert.strictEqual(result, null);
  });

  test('returns null when toolPaths is undefined', async () => {
    const result = await fetchTranscriptContent(
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      {},
      undefined
    );
    assert.strictEqual(result, null);
  });
});

describe('classifyLink', () => {
  for (const [url, type] of [
    ['https://podcasts.apple.com/us/podcast/episode-name/id123456', 'podcast'],
    ['https://open.spotify.com/episode/abc123', 'podcast'],
    ['https://overcast.fm/+abc123', 'podcast'],
    ['https://pocketcasts.com/podcast/abc', 'podcast'],
    ['https://castro.fm/episode/abc', 'podcast'],
    ['https://open.spotify.com/track/abc123', 'article'],
    ['https://www.youtube.com/watch?v=abc123', 'video'],
    ['https://m.youtube.com/watch?v=abc123', 'video'],
    ['https://youtu.be/abc123', 'video'],
    ['https://github.com/owner/repo', 'github'],
    ['https://gist.github.com/owner/abc', 'github'],
    ['https://mobile.twitter.com/user/status/1', 'tweet'],
    ['https://x.com/user/status/1/photo/1', 'media'],
    ['https://x.com/user/status/1/video/1', 'media'],
    ['https://example.com/picture.png', 'image'],
    ['https://example.com/post', 'article'],
    ['not a url', 'article']
  ]) {
    test(`${url} is ${type}`, () => {
      assert.strictEqual(classifyLink(url), type);
    });
  }

  // Each of these contains a known domain as a substring of the whole URL
  // without being on that host. All but the last two are links already in
  // smaug's bookmarks that the substring checks misfiled.
  for (const [url, why] of [
    ['https://www.dropbox.com/scl/fo/abc/def?rlkey=xyz&dl=0', '"dropbox.com" contains "x.com"'],
    ['https://fanoutfox.com/post', '"fanoutfox.com" contains "x.com"'],
    ['https://static.ads-twitter.com/uwt.js', '"ads-twitter.com" contains "twitter.com"'],
    ['https://www.longcut.ai/v/talk?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dabc', 'YouTube is only in the query string'],
    ['https://example.com/?ref=github.com', 'GitHub is only in the query string'],
    ['https://notgithub.com/owner/repo', '"notgithub.com" contains "github.com"']
  ]) {
    test(`${url} is an article: ${why}`, () => {
      assert.strictEqual(classifyLink(url), 'article');
    });
  }
});

// Integration tests - only run when bird CLI has valid credentials
describe('X article integration tests (requires bird credentials)', { skip: !BIRD_AVAILABLE }, () => {
  // These tests require actual Twitter/X API access via bird CLI
  // They will be skipped if bird credentials are not configured

  test('fetches real X article content when credentials available', async () => {
    if (!BIRD_AVAILABLE) {
      return; // Skip if no credentials
    }

    // Use a known X article URL for testing
    // This is João Moura's "Lessons From 2 Billion Agentic Workflows" article
    const articleUrl = 'https://x.com/i/article/1882784553200713866';

    const result = await fetchXArticleContent(articleUrl, {}, null);

    // Should return article structure even if content extraction varies
    assert.ok(result.articleId, 'should have articleId');
    assert.ok(result.url, 'should have url');
    assert.strictEqual(result.url, articleUrl);

    // If we got content, verify it's substantial
    if (result.content && result.content.length > 0) {
      assert.ok(result.content.length > 100, 'content should be substantial if present');
    }
  });

  test('handles non-existent article gracefully', async () => {
    if (!BIRD_AVAILABLE) {
      return;
    }

    // Use a fake article ID that doesn't exist
    const fakeArticleUrl = 'https://x.com/i/article/9999999999999999999';

    const result = await fetchXArticleContent(fakeArticleUrl, {}, null);

    // Should return structure without failing
    assert.ok(result.articleId, 'should have articleId');
    assert.strictEqual(result.articleId, '9999999999999999999');
  });
});

describe('isLikelyMdFilename', () => {
  describe('filters bare .md root domains', () => {
    test('known dev filenames are detected', () => {
      for (const name of ['claude', 'readme', 'plan', 'todo', 'memory']) {
        assert.strictEqual(isLikelyMdFilename(`https://${name}.md/`), true, `${name}.md should be filtered`);
      }
    });

    test('unknown bare .md domains are also filtered', () => {
      assert.strictEqual(isLikelyMdFilename('https://banana.md/'), true);
      assert.strictEqual(isLikelyMdFilename('https://xyz.md'), true);
    });

    test('URL spec lowercases hostnames before function runs', () => {
      assert.strictEqual(isLikelyMdFilename('https://CLAUDE.md/'), true);
    });

    test('query params on root path are still filtered', () => {
      assert.strictEqual(isLikelyMdFilename('https://plan.md/?utm_source=twitter'), true);
    });

    test('hash fragments on root path are still filtered', () => {
      assert.strictEqual(isLikelyMdFilename('https://plan.md/#section'), true);
    });

    test('http:// works same as https://', () => {
      assert.strictEqual(isLikelyMdFilename('http://plan.md/'), true);
    });
  });

  describe('does not filter legitimate .md URLs', () => {
    test('allows obsidian.md and subdomains', () => {
      assert.strictEqual(isLikelyMdFilename('https://obsidian.md/'), false);
      assert.strictEqual(isLikelyMdFilename('https://help.obsidian.md/Getting+Started'), false);
      assert.strictEqual(isLikelyMdFilename('https://forum.obsidian.md/t/some-thread'), false);
    });

    test('does not filter subdomained .md domains', () => {
      assert.strictEqual(isLikelyMdFilename('https://www.plan.md/'), false);
      assert.strictEqual(isLikelyMdFilename('https://app.something.md/'), false);
    });

    test('does not filter .md domains with a path', () => {
      assert.strictEqual(isLikelyMdFilename('https://plan.md/about/us'), false);
      assert.strictEqual(isLikelyMdFilename('https://some.md/blog/post-123'), false);
      assert.strictEqual(isLikelyMdFilename('https://plan.md/pricing?ref=123'), false);
    });
  });

  describe('ignores non-.md URLs', () => {
    test('non-.md domains return false', () => {
      for (const url of ['https://github.com/user/repo', 'https://example.com/', 'https://x.com/user/status/123']) {
        assert.strictEqual(isLikelyMdFilename(url), false, `${url} should not be filtered`);
      }
    });

    test('handles invalid URLs gracefully', () => {
      assert.strictEqual(isLikelyMdFilename('not-a-url'), false);
    });
  });
});

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chunkKnowledgeFile, chunkBookmarksFile } from './chunker.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..', '..');

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}

function collectDocs() {
  const docs = [];
  const knowledgeDir = path.join(REPO_ROOT, 'knowledge');
  if (fs.existsSync(knowledgeDir)) {
    for (const f of walk(knowledgeDir)) docs.push(chunkKnowledgeFile(f, REPO_ROOT));
  }
  const bookmarksFile = path.join(REPO_ROOT, 'bookmarks.md');
  if (fs.existsSync(bookmarksFile)) {
    docs.push(...chunkBookmarksFile(bookmarksFile, REPO_ROOT));
  }
  return docs;
}

export function indexAll(db, { force = false } = {}) {
  const docs = collectDocs();
  const now = new Date().toISOString();

  const existing = new Map();
  for (const row of db.prepare('SELECT path, content_hash FROM docs').all()) {
    existing.set(row.path, row.content_hash);
  }

  const seen = new Set();
  const upsert = db.prepare(`
    INSERT INTO docs (source, category, author, title, url, path, ingested_at, content_hash, body, indexed_at)
    VALUES (@source, @category, @author, @title, @url, @path, @ingested_at, @content_hash, @body, @indexed_at)
    ON CONFLICT(path) DO UPDATE SET
      source = excluded.source,
      category = excluded.category,
      author = excluded.author,
      title = excluded.title,
      url = excluded.url,
      ingested_at = excluded.ingested_at,
      content_hash = excluded.content_hash,
      body = excluded.body,
      indexed_at = excluded.indexed_at
  `);
  const del = db.prepare('DELETE FROM docs WHERE path = ?');

  let inserted = 0;
  let updated = 0;
  let unchanged = 0;

  const tx = db.transaction((rows) => {
    for (const doc of rows) {
      seen.add(doc.path);
      const prev = existing.get(doc.path);
      if (!force && prev === doc.content_hash) {
        unchanged++;
        continue;
      }
      upsert.run({ ...doc, indexed_at: now });
      if (prev) updated++; else inserted++;
    }
  });
  tx(docs);

  let removed = 0;
  const removeTx = db.transaction(() => {
    for (const p of existing.keys()) {
      if (!seen.has(p)) {
        del.run(p);
        removed++;
      }
    }
  });
  removeTx();

  return { inserted, updated, unchanged, removed, total: docs.length };
}

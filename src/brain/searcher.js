function escapeFts(query) {
  // FTS5 tokenizes on non-alphanumerics; quoting each bare term preserves hyphens/dots
  // and lets users pass free-form queries without caring about FTS syntax.
  const tokens = query
    .split(/\s+/)
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => {
      if (/^(AND|OR|NOT|NEAR)$/i.test(t)) return t.toUpperCase();
      if (t.startsWith('"') && t.endsWith('"')) return t;
      const cleaned = t.replace(/"/g, '');
      return `"${cleaned}"`;
    });
  return tokens.join(' ');
}

function sinceCutoffISO(since) {
  if (!since) return null;
  const m = since.match(/^(\d+)([dwmy])$/i);
  if (!m) return since; // assume already ISO
  const n = parseInt(m[1], 10);
  const unit = m[2].toLowerCase();
  const now = new Date();
  const days = unit === 'd' ? n : unit === 'w' ? n * 7 : unit === 'm' ? n * 30 : n * 365;
  now.setUTCDate(now.getUTCDate() - days);
  return now.toISOString().slice(0, 10);
}

export function search(db, { query, category = null, since = null, author = null, limit = 10 } = {}) {
  if (!query || !query.trim()) return [];
  const fts = escapeFts(query);

  const where = ['docs_fts MATCH ?'];
  const params = [fts];
  if (category) { where.push('docs.category = ?'); params.push(category); }
  if (author) { where.push('docs.author = ?'); params.push(author); }
  const cutoff = sinceCutoffISO(since);
  if (cutoff) { where.push('(docs.ingested_at IS NULL OR docs.ingested_at >= ?)'); params.push(cutoff); }

  const sql = `
    SELECT docs.id, docs.source, docs.category, docs.author, docs.title, docs.url,
           docs.path, docs.ingested_at,
           snippet(docs_fts, 1, '[[', ']]', '…', 16) AS snippet,
           bm25(docs_fts) AS score
    FROM docs_fts
    JOIN docs ON docs.id = docs_fts.rowid
    WHERE ${where.join(' AND ')}
    ORDER BY score
    LIMIT ?
  `;
  params.push(limit);
  return db.prepare(sql).all(...params);
}

export function logQuery(db, { query, category = null, results = 0 }) {
  db.prepare('INSERT INTO query_log(query, category, results, ts) VALUES (?, ?, ?, ?)')
    .run(query, category, results, new Date().toISOString());
}

export function stats(db) {
  const total = db.prepare('SELECT COUNT(*) AS n FROM docs').get().n;
  const bySource = db.prepare('SELECT source, COUNT(*) AS n FROM docs GROUP BY source').all();
  const byCategory = db.prepare('SELECT category, COUNT(*) AS n FROM docs WHERE category IS NOT NULL GROUP BY category').all();
  const lastIndexed = db.prepare('SELECT MAX(indexed_at) AS ts FROM docs').get().ts;
  const queries = db.prepare('SELECT COUNT(*) AS n FROM query_log').get().n;
  const zeroResult = db.prepare('SELECT COUNT(*) AS n FROM query_log WHERE results = 0').get().n;
  return { total, bySource, byCategory, lastIndexed, queries, zeroResult };
}

export function doctor(db) {
  const issues = [];
  const nullTitles = db.prepare("SELECT COUNT(*) AS n FROM docs WHERE title IS NULL OR title = ''").get().n;
  if (nullTitles) issues.push({ kind: 'missing-title', count: nullTitles });
  const nullBodies = db.prepare("SELECT COUNT(*) AS n FROM docs WHERE body IS NULL OR body = ''").get().n;
  if (nullBodies) issues.push({ kind: 'empty-body', count: nullBodies });
  const dupeHashes = db.prepare(`
    SELECT content_hash, COUNT(*) AS n FROM docs
    GROUP BY content_hash HAVING n > 1
  `).all();
  if (dupeHashes.length) issues.push({ kind: 'duplicate-content', count: dupeHashes.length });
  return issues;
}

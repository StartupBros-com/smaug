export const SCHEMA_VERSION = 1;

export const DDL = `
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS meta (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS docs (
  id INTEGER PRIMARY KEY,
  source TEXT NOT NULL,
  category TEXT,
  author TEXT,
  title TEXT,
  url TEXT,
  path TEXT NOT NULL UNIQUE,
  ingested_at TEXT,
  content_hash TEXT NOT NULL,
  body TEXT NOT NULL,
  indexed_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_docs_source ON docs(source);
CREATE INDEX IF NOT EXISTS idx_docs_category ON docs(category);
CREATE INDEX IF NOT EXISTS idx_docs_author ON docs(author);
CREATE INDEX IF NOT EXISTS idx_docs_ingested_at ON docs(ingested_at);

CREATE VIRTUAL TABLE IF NOT EXISTS docs_fts USING fts5(
  title, body, author, category,
  content='docs',
  content_rowid='id',
  tokenize = 'porter unicode61'
);

CREATE TRIGGER IF NOT EXISTS docs_ai AFTER INSERT ON docs BEGIN
  INSERT INTO docs_fts(rowid, title, body, author, category)
  VALUES (new.id, new.title, new.body, new.author, new.category);
END;

CREATE TRIGGER IF NOT EXISTS docs_ad AFTER DELETE ON docs BEGIN
  INSERT INTO docs_fts(docs_fts, rowid, title, body, author, category)
  VALUES ('delete', old.id, old.title, old.body, old.author, old.category);
END;

CREATE TRIGGER IF NOT EXISTS docs_au AFTER UPDATE ON docs BEGIN
  INSERT INTO docs_fts(docs_fts, rowid, title, body, author, category)
  VALUES ('delete', old.id, old.title, old.body, old.author, old.category);
  INSERT INTO docs_fts(rowid, title, body, author, category)
  VALUES (new.id, new.title, new.body, new.author, new.category);
END;

CREATE TABLE IF NOT EXISTS query_log (
  id INTEGER PRIMARY KEY,
  query TEXT NOT NULL,
  category TEXT,
  results INTEGER NOT NULL,
  ts TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_query_log_ts ON query_log(ts);
`;

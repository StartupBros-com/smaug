import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { open } from './db.js';
import { search, logQuery, stats } from './searcher.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..', '..');

function textResult(obj) {
  return { content: [{ type: 'text', text: JSON.stringify(obj, null, 2) }] };
}

function slimDoc(row, { includeBody = false } = {}) {
  const out = {
    source: row.source,
    category: row.category,
    author: row.author,
    title: row.title,
    url: row.url,
    path: row.path,
    ingested_at: row.ingested_at
  };
  if (row.snippet) out.snippet = row.snippet;
  if (row.score !== undefined) out.score = Number(row.score.toFixed(3));
  if (includeBody) out.body = row.body;
  return out;
}

export async function runServe() {
  const db = open();
  const server = new McpServer(
    { name: 'smaug-brain', version: '0.1.0' },
    { capabilities: { tools: {} } }
  );

  server.registerTool(
    'smaug_search',
    {
      title: 'Search Smaug brain',
      description:
        'Full-text search over your X bookmark archive (bookmarks.md) and processed knowledge/ notes. Returns ranked matches with snippets. Supports category filter (articles|tools|videos), @author filter, and a time window.',
      inputSchema: {
        query: z.string().min(1).describe('Search query. Free-form text; FTS5 handles tokenization.'),
        category: z.enum(['articles', 'tools', 'videos']).optional().describe('Filter knowledge/ docs to one category.'),
        since: z.string().optional().describe('Relative (e.g. "30d", "6m", "1y") or ISO date (YYYY-MM-DD).'),
        author: z.string().optional().describe('Restrict to an @handle, e.g. "@gkisokay".'),
        limit: z.number().int().min(1).max(50).optional().describe('Max results. Default 10.')
      }
    },
    async ({ query, category, since, author, limit }) => {
      const results = search(db, { query, category, since, author, limit: limit ?? 10 });
      logQuery(db, { query, category: category ?? null, results: results.length });
      return textResult({
        query, category, since, author,
        count: results.length,
        results: results.map((r) => slimDoc(r))
      });
    }
  );

  server.registerTool(
    'smaug_read',
    {
      title: 'Read a Smaug doc',
      description:
        'Returns the full body of a single doc by its `path` (as produced by smaug_search). For bookmark entries the path looks like "bookmarks.md#author-slug"; for knowledge docs it is a real filesystem path.',
      inputSchema: {
        path: z.string().min(1).describe('Path value returned by smaug_search.')
      }
    },
    async ({ path: docPath }) => {
      const row = db.prepare('SELECT * FROM docs WHERE path = ?').get(docPath);
      if (!row) return textResult({ error: 'not_found', path: docPath });
      return textResult(slimDoc(row, { includeBody: true }));
    }
  );

  server.registerTool(
    'smaug_recent',
    {
      title: 'Recent Smaug docs',
      description: 'Most-recently-ingested bookmarks and knowledge files, by ingested_at date.',
      inputSchema: {
        category: z.enum(['articles', 'tools', 'videos']).optional(),
        source: z.enum(['bookmarks', 'knowledge']).optional(),
        limit: z.number().int().min(1).max(50).optional()
      }
    },
    async ({ category, source, limit }) => {
      const where = ['ingested_at IS NOT NULL'];
      const params = [];
      if (category) { where.push('category = ?'); params.push(category); }
      if (source) { where.push('source = ?'); params.push(source); }
      const sql = `SELECT * FROM docs WHERE ${where.join(' AND ')} ORDER BY ingested_at DESC LIMIT ?`;
      params.push(limit ?? 15);
      const rows = db.prepare(sql).all(...params);
      return textResult({ count: rows.length, results: rows.map((r) => slimDoc(r)) });
    }
  );

  server.registerTool(
    'smaug_by_author',
    {
      title: 'Smaug docs by author',
      description: 'All bookmark entries by a specific @handle.',
      inputSchema: {
        author: z.string().min(2).describe('@handle, e.g. "@karpathy" (with or without leading @).'),
        limit: z.number().int().min(1).max(100).optional()
      }
    },
    async ({ author, limit }) => {
      const handle = author.startsWith('@') ? author : `@${author}`;
      const rows = db.prepare(
        'SELECT * FROM docs WHERE author = ? ORDER BY ingested_at DESC LIMIT ?'
      ).all(handle, limit ?? 25);
      return textResult({ author: handle, count: rows.length, results: rows.map((r) => slimDoc(r)) });
    }
  );

  server.registerTool(
    'smaug_stats',
    {
      title: 'Smaug brain stats',
      description: 'Corpus size, breakdown by source/category, last-indexed timestamp, query-log totals.',
      inputSchema: {}
    },
    async () => textResult(stats(db))
  );

  server.registerTool(
    'smaug_random',
    {
      title: 'Random Smaug doc',
      description: 'Returns a random sample of docs, optionally filtered. Useful for agent-side exploration.',
      inputSchema: {
        category: z.enum(['articles', 'tools', 'videos']).optional(),
        source: z.enum(['bookmarks', 'knowledge']).optional(),
        limit: z.number().int().min(1).max(10).optional()
      }
    },
    async ({ category, source, limit }) => {
      const where = ['1 = 1'];
      const params = [];
      if (category) { where.push('category = ?'); params.push(category); }
      if (source) { where.push('source = ?'); params.push(source); }
      const sql = `SELECT * FROM docs WHERE ${where.join(' AND ')} ORDER BY RANDOM() LIMIT ?`;
      params.push(limit ?? 3);
      const rows = db.prepare(sql).all(...params);
      return textResult({ count: rows.length, results: rows.map((r) => slimDoc(r, { includeBody: true })) });
    }
  );

  const transport = new StdioServerTransport();
  await server.connect(transport);
  process.stderr.write(`smaug-brain MCP ready (repo: ${REPO_ROOT})\n`);

  const shutdown = async () => {
    try { await server.close(); } catch {}
    try { db.close(); } catch {}
    process.exit(0);
  };
  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

// Keep imports happy: silence unused warnings for fs (reserved for future resource support)
void fs;

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const MONTHS = {
  January: '01', February: '02', March: '03', April: '04',
  May: '05', June: '06', July: '07', August: '08',
  September: '09', October: '10', November: '11', December: '12'
};

function sha1(s) {
  return crypto.createHash('sha1').update(s).digest('hex');
}

function parseFrontmatter(text) {
  if (!text.startsWith('---\n')) return { meta: {}, body: text };
  const end = text.indexOf('\n---\n', 4);
  if (end === -1) return { meta: {}, body: text };
  const yamlBlock = text.slice(4, end);
  const body = text.slice(end + 5);
  const meta = {};
  for (const line of yamlBlock.split('\n')) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    let [, key, value] = m;
    value = value.trim();
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
    meta[key] = value;
  }
  return { meta, body };
}

export function chunkKnowledgeFile(filePath, repoRoot) {
  const text = fs.readFileSync(filePath, 'utf8');
  const { meta, body } = parseFrontmatter(text);
  const rel = path.relative(repoRoot, filePath);
  const category = path.basename(path.dirname(filePath));
  const titleFromBody = (body.match(/^#\s+(.+)$/m) || [])[1];
  return {
    source: 'knowledge',
    category,
    author: meta.author || null,
    title: meta.title || titleFromBody || path.basename(filePath, '.md'),
    url: meta.source || null,
    path: rel,
    ingested_at: meta.date_added || null,
    content_hash: sha1(text),
    body: body.trim()
  };
}

export function chunkBookmarksFile(filePath, repoRoot) {
  const text = fs.readFileSync(filePath, 'utf8');
  const rel = path.relative(repoRoot, filePath);
  const lines = text.split('\n');
  const entries = [];
  const seenAnchors = new Map();

  let currentDate = null;
  let entry = null;

  const flush = () => {
    if (!entry) return;
    const body = entry.lines.join('\n').trim();
    if (!body) { entry = null; return; }
    let anchor = entry.anchor;
    const n = (seenAnchors.get(anchor) || 0) + 1;
    seenAnchors.set(anchor, n);
    if (n > 1) anchor = `${anchor}-${n}`;
    const urlMatch = body.match(/\*\*Tweet:\*\*\s*(\S+)/);
    entries.push({
      source: 'bookmarks',
      category: null,
      author: entry.author,
      title: entry.title,
      url: urlMatch ? urlMatch[1] : null,
      path: `${rel}#${anchor}`,
      ingested_at: currentDate,
      content_hash: sha1(`${anchor}::${body}`),
      body
    });
    entry = null;
  };

  for (const line of lines) {
    const dateMatch = line.match(/^#\s+\w+day,\s+(\w+)\s+(\d{1,2}),\s+(\d{4})\s*$/);
    if (dateMatch) {
      flush();
      const [, month, day, year] = dateMatch;
      const mm = MONTHS[month];
      if (mm) currentDate = `${year}-${mm}-${String(day).padStart(2, '0')}`;
      continue;
    }
    const entryMatch = line.match(/^##\s+(@[\w.-]+)\s+-\s+(.+?)\s*$/);
    if (entryMatch) {
      flush();
      const [, author, title] = entryMatch;
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80);
      entry = {
        author,
        title,
        anchor: `${author.replace('@', '')}-${slug}`,
        lines: []
      };
      continue;
    }
    if (entry) entry.lines.push(line);
  }
  flush();
  return entries;
}

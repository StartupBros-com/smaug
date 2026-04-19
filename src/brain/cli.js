import { open } from './db.js';
import { indexAll } from './indexer.js';
import { search, logQuery, stats, doctor } from './searcher.js';

function parseFlag(args, name, { bool = false } = {}) {
  const idx = args.findIndex((a) => a === name || a.startsWith(`${name}=`));
  if (idx === -1) return bool ? false : null;
  if (args[idx].includes('=')) return args[idx].split('=').slice(1).join('=');
  if (bool) return true;
  return args[idx + 1] ?? null;
}

function formatResult(r) {
  const bits = [];
  bits.push(`  [${r.source}${r.category ? `/${r.category}` : ''}] ${r.title || '(untitled)'}`);
  if (r.author) bits.push(`    author: ${r.author}`);
  if (r.ingested_at) bits.push(`    date:   ${r.ingested_at}`);
  bits.push(`    path:   ${r.path}`);
  if (r.url) bits.push(`    url:    ${r.url}`);
  if (r.snippet) bits.push(`    ${r.snippet.replace(/\s+/g, ' ').trim()}`);
  bits.push(`    score:  ${r.score.toFixed(3)}`);
  return bits.join('\n');
}

export async function runSearch(args) {
  const query = args.find((a) => !a.startsWith('--'));
  if (!query) {
    console.error('Usage: smaug search "<query>" [--category=articles] [--since=30d] [--author=@handle] [--limit=10] [--json]');
    process.exit(2);
  }
  const category = parseFlag(args, '--category');
  const since = parseFlag(args, '--since');
  const author = parseFlag(args, '--author');
  const limit = parseInt(parseFlag(args, '--limit') || '10', 10);
  const json = parseFlag(args, '--json', { bool: true });

  const db = open();
  const results = search(db, { query, category, since, author, limit });
  logQuery(db, { query, category, results: results.length });

  if (json) {
    console.log(JSON.stringify({ query, category, since, author, limit, count: results.length, results }, null, 2));
  } else {
    if (!results.length) {
      console.log(`No matches for "${query}".`);
    } else {
      console.log(`${results.length} result${results.length === 1 ? '' : 's'} for "${query}":\n`);
      console.log(results.map(formatResult).join('\n\n'));
    }
  }
  db.close();
}

export async function runBrain(args) {
  const sub = args[0];
  const rest = args.slice(1);
  switch (sub) {
    case 'index': {
      const force = rest.includes('--force') || rest.includes('-f');
      const db = open();
      const t0 = Date.now();
      const res = indexAll(db, { force });
      const ms = Date.now() - t0;
      console.log(`Indexed ${res.total} docs in ${ms}ms: +${res.inserted} ~${res.updated} =${res.unchanged} -${res.removed}`);
      db.close();
      break;
    }
    case 'stats': {
      const db = open();
      const s = stats(db);
      console.log(JSON.stringify(s, null, 2));
      db.close();
      break;
    }
    case 'doctor': {
      const db = open();
      const issues = doctor(db);
      if (!issues.length) console.log('No issues.');
      else console.log(JSON.stringify(issues, null, 2));
      db.close();
      break;
    }
    default:
      console.log(`Smaug brain commands:
  smaug brain index [--force]   Index or refresh knowledge/ and bookmarks.md
  smaug brain stats             Show corpus + query-log stats
  smaug brain doctor            Report index health issues

See also: smaug search "<query>"`);
  }
}

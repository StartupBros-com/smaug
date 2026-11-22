const VALUE_FLAGS = new Set(['--category', '--since', '--author', '--limit']);

// Consume recognized option values before selecting the positional query.
// Validate every occurrence, but retain the first well-formed value.
export function parseSearchArgs(args) {
  let query;
  let json = false;
  let hasJson = false;
  const values = new Map();
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const eq = arg.indexOf('=');
    const name = eq === -1 ? arg : arg.slice(0, eq);
    if (VALUE_FLAGS.has(name)) {
      const value = eq === -1 ? args[++i] : arg.slice(eq + 1);
      if (value == null || value === '' || (eq === -1 && value.startsWith('--'))) {
        throw new Error(`Missing value for ${name}`);
      }
      if (!values.has(name)) values.set(name, value);
    } else if (name === '--json') {
      if (!hasJson) json = eq === -1 ? true : arg.slice(eq + 1);
      hasJson = true;
    } else if (query === undefined && !arg.startsWith('--')) {
      query = arg;
    }
  }
  if (!query) throw new Error('Missing search query');
  return {
    query,
    category: values.get('--category') ?? null,
    since: values.get('--since') ?? null,
    author: values.get('--author') ?? null,
    limit: parseInt(values.get('--limit') || '10', 10),
    json
  };
}

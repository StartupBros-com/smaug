export function docFilter({ category, source }, { requireIngestedAt = false } = {}) {
  const where = [requireIngestedAt ? 'ingested_at IS NOT NULL' : '1 = 1'];
  const params = [];
  if (category) { where.push('category = ?'); params.push(category); }
  if (source) { where.push('source = ?'); params.push(source); }
  return { where, params };
}

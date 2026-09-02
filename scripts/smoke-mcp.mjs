import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');

const transport = new StdioClientTransport({
  command: 'node',
  args: [path.join(REPO_ROOT, 'src', 'cli.js'), 'serve']
});

const client = new Client({ name: 'smaug-smoke', version: '0.0.1' }, { capabilities: {} });
await client.connect(transport);

const tools = await client.listTools();
console.log('tools:', tools.tools.map((t) => t.name).join(', '));

const stats = await client.callTool({ name: 'smaug_stats', arguments: {} });
console.log('stats:', JSON.parse(stats.content[0].text).total, 'docs');

const search = await client.callTool({
  name: 'smaug_search',
  arguments: { query: 'karpathy autoresearch', limit: 2 }
});
const searchPayload = JSON.parse(search.content[0].text);
console.log('search count:', searchPayload.count);
console.log('search top:', searchPayload.results[0]?.title);

const recent = await client.callTool({
  name: 'smaug_recent',
  arguments: { category: 'tools', limit: 2 }
});
const recentPayload = JSON.parse(recent.content[0].text);
console.log('recent tools:', recentPayload.results.map((r) => r.title).join(' | '));

const byAuthor = await client.callTool({
  name: 'smaug_by_author',
  arguments: { author: 'gkisokay', limit: 2 }
});
const authorPayload = JSON.parse(byAuthor.content[0].text);
console.log('by author count:', authorPayload.count);

await client.close();
console.log('smoke: ok');

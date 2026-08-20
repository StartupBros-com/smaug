---
title: "TencentDB-Agent-Memory"
type: tool
date_added: 2026-08-05
source: "https://github.com/TencentCloud/TencentDB-Agent-Memory"
tags: [agent-memory, long-term-memory, tencent, openclaw, claude-code, vector-search, local-first]
via: "Twitter bookmark from @trending_repos"
---

Tencent Cloud's TencentDB-Agent-Memory is a team-level memory hub for AI agents. It turns conversations, docs, and code into four reusable, governed assets — Chat Memory, Skill, LLM-Wiki, and Code-Graph — that can be shared and equipped across agents and frameworks instead of living as per-session notes. Tagline: "Agents remember. Humans innovate." TypeScript, MIT, Node >= 22.16, ~23k stars at capture. npm package is `@tencentdb-agent-memory/memory-tencentdb`.

The integration trick is a proxy, not a plugin. One Proxy, unchanged protocol, zero-code: point the agent's base URL at the proxy and Claude Code, Codex, DeepSeek Harness, CodeBuddy, WorkBuddy, Hermes, and OpenClaw all hit the same memory server. No hook or MCP server is required for that path, though the repo also ships as an OpenClaw plugin. Local-first stack is `memory-core` + `memory-hub` + `proxy` launched together; a web panel lands on `http://localhost:8125`. Older v1/v0 installs migrate through a v2→v3 data-migration tool.

## Key Features

- Four memory asset types: Chat Memory, Skill, LLM-Wiki, Code-Graph
- Team-scoped, governed sharing across agents rather than one-user scratchpads
- Proxy integration: change base URL, keep the client protocol
- Works with Claude Code, Codex, OpenClaw, Hermes, DeepSeek Harness, CodeBuddy, WorkBuddy
- Local-first embeddings / vector search; two LLM param groups (memory + proxy)
- One-command `start-all.sh` bring-up and a hosted panel on port 8125

## Quick Start

```bash
git clone https://github.com/TencentCloud/TencentDB-Agent-Memory.git
cd TencentDB-Agent-Memory/deploy/global-images
cp .env.example .env
# Fill in two sets of LLM parameters (memory group + proxy group)
./start-all.sh
# Open http://localhost:8125 — the script also prints a one-liner for Claude
```

See INSTALL.md for standalone Memory Hub, per-client proxy config, ports, and cleanup. Existing v1/v0 data: `MemoryCore/scripts/migrate-v2-to-v3/`.

## Links

- [GitHub](https://github.com/TencentCloud/TencentDB-Agent-Memory)
- [npm](https://www.npmjs.com/package/@tencentdb-agent-memory/memory-tencentdb)
- [Original Tweet](https://x.com/trending_repos/status/2084974573070516571)

---
title: "Graft"
type: tool
date_added: 2026-08-07
source: "https://github.com/NanoNets/Graft"
tags: [ai-agents, claude-code, code-graph, context-engineering, tree-sitter, mcp]
via: "Twitter bookmark from @AISuperDomain"
---

Graft is an open-source, local context layer for coding agents including Claude Code, Codex, Cursor, and Gemini. It analyzes a repository with tree-sitter and builds a regenerable code graph so an agent can orient itself through relevant symbols, dependencies, and relationships instead of starting each task with repeated file reads and searches.

`graft init` builds the local graph and can wire selected agents into the repository. The project describes the graph as a local cache, not an artifact to commit: the setup in `.claude/` can be shared while each developer rebuilds their own `graft/` directory. It also offers graph-aware `graft grep` and `graft map` commands plus visualization and MCP integration.

The project reports a 162-run controlled benchmark in which its added context reduced tool calls by 46%, tokens by 42%, and elapsed time by 60% for Claude Code; it also reports higher SWE-bench Verified correctness. Those are maintainer-reported benchmark claims rather than independently verified results.

## Key Features

- Tree-sitter-based static analysis that produces a local code graph without model inference or telemetry.
- Context retrieval for coding agents, designed to avoid rediscovering repository structure on every task.
- `graft grep` and `graft map` commands for graph-aware code search and orientation.
- Dependency tracing, a visual graph, monorepo support, and automatic background rebuilding after changes.
- Agent integrations for Claude Code and other coding clients, including an MCP server.

## Links

- [GitHub Repository](https://github.com/NanoNets/Graft)
- [Original Tweet](https://x.com/AISuperDomain/status/2085746071553314895)

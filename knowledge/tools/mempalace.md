---
title: "MemPalace"
type: tool
date_added: 2026-04-06
source: "https://github.com/MemPalace/mempalace"
tags: [ai, memory, llm, chromadb, mcp, python, local-first]
via: "Twitter bookmark from @waynesutton"
---

MemPalace is an open-source, local-first AI memory system for storing conversations verbatim and retrieving them through semantic search. It organizes content into a navigable “palace” structure: people and projects are wings, topics are rooms, and original material sits in drawers. The repository describes a pluggable retrieval layer backed by ChromaDB by default, with no API calls or automatic cloud transfer required.

The project ships a CLI and can be used to mine conversation history into a locally retained, searchable corpus. Wayne Sutton bookmarked its launch after Ben Sigman and Milla Jovovich described it as an AI-memory system made with Claude; their quoted post also makes benchmark and compression claims that should be independently evaluated before relying on them.

## Key Features

- Verbatim local storage with semantic retrieval rather than a cloud-hosted background agent
- Structured memory organization across people, projects, topics, and original source material
- Pluggable retrieval backends, with ChromaDB as the documented default
- CLI for initializing a local palace and mining a project or transcript collection
- Open-source Python project with MCP and memory-related integrations

## Links

- [GitHub](https://github.com/MemPalace/mempalace)
- [Original Tweet](https://x.com/waynesutton/status/2041315863404707862)
- [Quoted Launch Post](https://x.com/bensig/status/2041236952998171118)

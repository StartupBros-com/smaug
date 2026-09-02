---
title: "GBrain"
type: tool
date_added: 2026-04-10
source: "https://github.com/garrytan/gbrain"
tags: [ai-agents, knowledge-management, memory, vector-search, typescript, openclaw, hermes]
via: "Twitter bookmark from @garrytan"
---

GBrain is a persistent knowledge-base layer designed to give AI agents long-term memory over large markdown file collections (10,000+ files). It uses PGLite (embedded Postgres, no server required) for local storage, OpenAI embeddings for vector search, and optionally Anthropic for query expansion. It is MIT-licensed, built in TypeScript/Bun, and specifically designed to be installed and operated by an AI agent rather than a human. Garry Tan describes it as his personal OpenClaw/Hermes Agent setup made open source.

The core loop: all notes, meetings, emails, tweets, and calendar events flow into a searchable knowledge base. Before every agent response, GBrain retrieves relevant context; after every conversation, the agent writes new entities back. The brain compounds over time via a nightly "dream cycle" that runs entity sweeps, citation fixes, and memory consolidation.

Requires a frontier model — tested with Claude Opus 4.6 and GPT-5.4 Thinking. Smaller models are likely to break the install flow. Setup takes approximately 30 minutes end-to-end and is handled by the agent itself after cloning.

## Key Features

- PGLite embedded database — ready in 2 seconds, no server needed
- Vector embeddings via OpenAI; keyword search works without embeddings
- `gbrain import`, `gbrain embed`, `gbrain query` CLI workflow
- Integration recipes for email, calendar, voice, Twitter — agent-installed via credential prompts
- Designed for OpenClaw and Hermes Agent but works as a standalone CLI
- MECE directory schema for the brain repo (people/, companies/, concepts/, etc.)
- Recurring cron jobs: live sync every 15 min, auto-update check daily, dream cycle nightly
- `gbrain doctor` health checks, `gbrain integrations doctor` integration validation

## Links

- [GitHub](https://github.com/garrytan/gbrain)
- [Original Tweet](https://x.com/garrytan/status/2042497872114090069)

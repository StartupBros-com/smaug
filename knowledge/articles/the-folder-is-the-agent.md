---
title: "The Folder Is the Agent"
type: article
date_added: 2026-04-13
source: "https://every.to/source-code/the-folder-is-the-agent"
author: "Kieran Klaassen"
tags: [agents, claude-code, architecture, every, CLAUDE-md]
via: "Twitter bookmark from @kieranklaassen"
---

Kieran Klaassen argues that the simplest mental model for an AI agent is just a model pointed at a folder with a CLAUDE.md. Running 44 agents across multiple projects for his company Cora, each specialized agent is literally a directory with context: a source folder, a customer support folder, a bug investigation folder. No framework lock-in, no complex orchestration layer needed at the start. Orchestration lives one level up and spawns work across folders. The essay pushes a "build brick by brick" philosophy — start with simple, folder-scoped agents before reaching for mega-swarm architectures.

## Key Takeaways

- A folder + CLAUDE.md is already a fully functional agent — no framework required
- Each agent has a narrow job defined by its folder context, reducing cognitive overhead
- Orchestration is a thin layer that dispatches into folder-agents, not a monolithic system
- 44 agents running in parallel is achievable with this low-overhead approach
- The discipline is: new domain = new folder, not new dependency

## Links

- [Article](https://every.to/source-code/the-folder-is-the-agent)
- [Original Tweet](https://x.com/kieranklaassen/status/2043735546242183327)

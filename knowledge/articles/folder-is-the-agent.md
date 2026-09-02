---
title: "The Folder Is the Agent"
type: article
date_added: 2026-04-13
source: "https://every.to/source-code/the-folder-is-the-agent"
author: "Kieran Klaassen"
tags: [agents, claude-code, workflow, architecture, ai-engineering]
via: "Twitter bookmark from @kieranklaassen"
---

Kieran Klaassen argues that the complexity of agentic systems is overblown: a folder containing a CLAUDE.md file is already a functioning agent. Running 44 AI agents across multiple projects at CoraComputer, he organizes each domain (source code, customer support, bug investigation) as its own folder-agent. This approach requires no lock-in, no framework dependency, and no complex orchestration layer. Orchestration becomes a single lightweight layer that spawns work across these folder-agents. The insight reframes agent architecture: start with the primitive (folder + context file), compose upward, and only add infrastructure when you genuinely need it.

## Key Takeaways

- A folder + CLAUDE.md = a functional agent; no framework required
- New discipline or project area = new folder; keeps agents isolated and focused
- Orchestration layer is thin: it just spawns work across the folder-agents
- This pattern enables 44 parallel agents with minimal infrastructure overhead
- "Build brick by brick first" — resist the pull toward mega-swarm complexity

## Links

- [Article](https://every.to/source-code/the-folder-is-the-agent)
- [Original Tweet](https://x.com/kieranklaassen/status/2043735546242183327)

---
title: "How To Dominate Projects With Hermes Agent Kanban Board"
type: article
date_added: 2026-05-29
source: "https://x.com/i/article/2060205510750552067"
author: "Tony Simons"
tags: [ai-agents, kanban, task-orchestration, durable-state, hermes-agent]
via: "Twitter bookmark from @tonysimons_"
---

Tony Simons presents Hermes Agent Kanban as durable coordination for work that outgrows a single agent chat. The argument is that a long transcript cannot reliably manage parallel tasks, review, crashes, or handoffs; boards, task records, profiles, parent dependencies, workspaces, runs, logs, and events provide state that remains inspectable after an agent or shell fails.

The guide favors small, explicit task contracts over a general-purpose worker. It recommends separating research, drafting, and review into dependent tasks, assigning each a focused profile and bounded runtime, then ending work with summaries and machine-readable metadata so downstream agents can verify what changed and where files live.

## Key Takeaways

- Create a board with a default workspace, explicitly switch boards before task creation, and use absolute workspaces so output does not disappear into scratch directories.
- Use `--parent` when a dependency is known at creation time; use `hermes kanban link` to repair dependency graphs that were created out of order.
- Treat claims as expiring leases, distinguish triage, blocked, scheduled, and running states, and set task runtime limits to prevent abandoned work from appearing alive indefinitely.
- Diagnose suspected stale tasks from receipts—task state, runs, logs, events, and live processes—before reclaiming a task whose board status and process state disagree.
- A board is unnecessary ceremony for tiny one-shot tasks, but it becomes valuable for work requiring parallelism, review gates, retries, durable handoff, or recovery across sessions.

## Links

- [Article](https://x.com/i/article/2060205510750552067)
- [Original Tweet](https://x.com/tonysimons_/status/2060527240098587085)

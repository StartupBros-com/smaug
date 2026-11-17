---
title: "Building always-on agents"
type: article
date_added: 2026-11-14
source: "https://claude.com/resources/articles/building-always-on-agents"
author: "Anthropic"
tags: [agents, architecture, claude, memory, permissions]
via: "Twitter bookmark from @TekonBurns"
---

Anthropic's engineering guide (published Nov 13, 2026) on agents that run indefinitely, deciding how and when to act across many sessions. The page body was not extractable (raw HTML truncated), so this summary relies on the guide's description and @TekonBurns' distillation. The central point is that an always-on agent does not run 24/7: it sleeps most of the day, wakes for short runs, saves state, and sleeps again.

## Key Takeaways

- Event inbox: put a database table between webhooks and the agent; ack webhooks fast, run one active worker per user so runs never collide, and batch rapid-fire messages
- Timers: keep them in a table separate from the inbox, split into one-off follow-ups and recurring schedules; a background poller drops due timers into the inbox
- Lean memory plus dreaming: store only what cannot be looked up again (user instructions, notes, past messages, task progress), load a small index at wakeup, and run periodic dreaming passes to prune stale facts
- Unattended permissions: never put raw API keys in the sandbox, inject them via an outside proxy, and use deferred tool calls to pause risky actions for approval without blocking the worker
- Outbox: queue outgoing replies so the agent paces notifications instead of spamming users at 3 AM

## Links

- [Article](https://claude.com/resources/articles/building-always-on-agents)
- [Original Tweet](https://x.com/TekonBurns/status/2121328737174388847)

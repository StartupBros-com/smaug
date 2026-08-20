---
title: "Single-agent AI coding is a nightmare for engineers"
type: article
date_added: 2026-04-16
source: "https://x.com/i/article/2044831470041321472"
author: "Sarah Chieng and 0xSero"
tags: [ai-agents, multi-agent-systems, coding-agents, orchestration, verification]
via: "Twitter bookmark from @MilksandMatcha"
---

Sarah Chieng and 0xSero argue that a single coding agent becomes unreliable and frustrating once a task exceeds a small prototype: it consumes one context window for planning, implementation, exploration, and recovery, leaving a developer to repeatedly compact and restate the work. Their proposed alternative is a “back of house” workflow in which a tool-limited orchestrator decomposes a goal into small, testable tickets and delegates execution to fresh-context subagents.

The article uses restaurant roles to distinguish planning, implementation, validation, documentation, and human selection. It presents five operating patterns: independent option generation, parallel work on isolated scopes, phased waves for dependency chains, sequential handoffs, and separate verification before a result is accepted. Reported performance figures and product claims are the authors’ examples rather than independently validated benchmarks.

## Key Takeaways

- Constrain an orchestrator to planning and delegation so detailed file work and tool output do not consume its primary context window.
- Make subagent tickets narrow, explicit, and verifiable; the authors treat vague scopes as a principal source of agent failure.
- Parallelize only tasks with separate ownership and no shared-file conflicts; use phased execution where dependencies exist.
- Separate building from testing and review so validation can reject or return faulty work before it reaches later stages.
- Use independent generations for taste-driven exploration, then have a human curate the alternatives instead of expecting a model to supply taste.

## Links

- [Article](https://x.com/i/article/2044831470041321472)
- [Original Tweet](https://x.com/MilksandMatcha/status/2044863551186309460)

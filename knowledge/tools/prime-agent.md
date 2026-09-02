---
title: "Prime Agent"
type: tool
date_added: 2026-08-05
source: "https://github.com/PrimeIntellect-ai/prime-agent"
tags: [coding-agents, recursive-language-models, autonomous-agents, typescript]
via: "Twitter bookmark from @PrimeIntellect"
---

Prime Agent is an open-source coding and research agent for long-running work. It pairs a persistent Python/IPython control environment with Recursive Language Model (RLM) primitives for treating context as variables and subagents as programmatic calls. Its continual harness persists supplementary prompts, memory, skills, and reusable agent specifications so they can be refined with evidence-backed, session-local changes.

## Key Features

- Runs a persistent REPL where model-directed file operations, shell commands, tool use, and subagents are performed through code.
- Starts child agents programmatically with `rlm(...)`, including parallel or background work that returns results to the parent.
- Preserves supplemental harness state, snapshots changes for rollback, and offers `/refine` for bounded improvements without rewriting the base system prompt.
- Supports long-lived work through daemon-backed sessions, compaction, goals, heartbeats, schedules, and direct agent-to-agent messaging.

## Links

- [GitHub](https://github.com/PrimeIntellect-ai/prime-agent)
- [Original Tweet](https://x.com/PrimeIntellect/status/2085087014710657496)

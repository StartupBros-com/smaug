---
title: "gnhf"
type: tool
date_added: 2026-04-01
source: "https://github.com/kunchenguid/gnhf"
tags: [agents, automation, claude-code, overnight-agents, orchestration]
via: "Twitter bookmark from @kunchenguid"
---

gnhf ("good night, have fun") is a dead-simple overnight agent orchestrator inspired by Geoffrey Huntley's ralph loop and Andrej Karpathy's autoresearch. It runs Claude Code, Codex, OpenCode, or Rovo Dev in a loop while you sleep, committing each successful iteration to git and rolling back failures — so you wake up to a branch full of incremental, clean work rather than a half-broken mess.

The key design principle is goal-directed iteration: you give it a measurable objective, it makes one small committed change per cycle, retries with exponential backoff on failure, and aborts after three consecutive failures. This makes overnight runs safe and auditable.

## Key Features

- Agent-agnostic — works with Claude Code, Codex, Rovo Dev, and OpenCode
- Each successful iteration is committed; failures trigger `git reset --hard` and backoff
- Configurable `--max-iterations` and `--max-tokens` caps to control spend
- Maintains a `notes.md` context file across iterations so the agent builds on prior work
- Aborts automatically after 3 consecutive failures to avoid runaway loops
- Cross-platform: macOS, Linux, Windows

## Links

- [GitHub](https://github.com/kunchenguid/gnhf)
- [Original Tweet](https://x.com/kunchenguid/status/2039458683831415271)

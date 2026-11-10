---
title: "claude-auto-handoff"
type: tool
date_added: 2026-10-03
source: "https://github.com/alexknowshtml/claude-auto-handoff"
tags: [claude-code, context-management, mod, typescript]
via: "Twitter bookmark from @alexhillman"
---

A Claude Code mod that replaces auto-compact. When context passes a threshold, it refuses new tool calls, has Haiku write a structured handoff brief to disk (work in progress, decisions, assumptions, dead ends, last request, next step), runs /clear, and seeds the fresh session with a pointer to the brief so work continues with a much smaller context.

## Key Features

- Threshold check after each turn and before each model request, blocking tool bursts that would overflow the window
- Fixed, editable brief structure; files, commits and issues sections extracted from the transcript in code
- Status panel above the prompt, plus a viewer page served over Tailscale or localhost
- Optional status line link to the previous brief

## Links

- [GitHub](https://github.com/alexknowshtml/claude-auto-handoff)
- [Original Tweet](https://x.com/alexhillman/status/2106464115447463942)

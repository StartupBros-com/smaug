---
title: "A Guide to Claude Code 2.0 and Getting Better at Using Coding Agents"
type: article
date_added: 2026-01-04
source: "https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/"
author: "Sankalp"
tags: [claude-code, coding-agents, context-engineering, subagents, skills, mcp]
via: "Twitter bookmark from @GuarEmperor"
---

Sankalp presents Claude Code as a general-purpose agent whose usefulness depends on operational discipline rather than elaborate configuration. The guide argues that clear requirements, iterative feedback, lean context, and informed human judgment transfer across coding agents.

## Key Takeaways

- Monitor context with `/context`; for complex work, compact or hand off around 50–60% usage rather than letting a session become unwieldy.
- Turn stable, repeated workflows into custom slash commands, including a structured handoff command for ongoing work.
- Use subagents for bounded exploration, but have the main agent inspect critical files because summaries can omit important implementation details.
- Prototype difficult features in a disposable first pass, learn from its failures, and restart with sharper requirements when that is more efficient than patching blindly.
- Keep persistent instructions and available tools focused; prefer on-demand skills over overloading `CLAUDE.md` or attaching unnecessary MCP servers.
- Separate implementation and independent review when useful, using a second model or agent to challenge the first pass.

## Links

- [Article](https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/)

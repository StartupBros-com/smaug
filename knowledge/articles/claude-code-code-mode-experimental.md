---
title: "Run tool calls from code with Code Mode (Claude Code docs)"
type: article
date_added: 2026-11-15
source: "https://code.claude.com/docs/en/code-mode.md"
author: "Anthropic (Claude Code docs)"
tags: [claude-code, code-mode, tool-calls, experimental]
via: "Twitter bookmark from @TekonBurns"
---

Official documentation for Code Mode, an experimental and off-by-default Claude Code feature in which Claude writes JavaScript that makes several tool calls (Bash, Read, Edit and so on) in one step, instead of requesting each call and reading each result before deciding the next. One script can run commands in parallel, feed one result into the next call, and return only the part of the output Claude needs to read.

## Key Takeaways

- Enable with `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1` (shell or user `settings.json`; project settings ignore it). Requires Claude Code v2.1.323+ and a confirmation on first use.
- Best for changes repeated across many files, searches whose results need filtering first, and independent commands that can run concurrently.
- You see the resulting tool calls in the conversation, not the code; press `Ctrl+O` for the transcript viewer, where code appears as collapsed Code rows.
- Limits: sessions resume only in the terminal with Code Mode on; auto mode's classifier reviews the code rather than each call; long-running code stops after ten minutes unless backgrounded; hooks behave differently (refused PreToolUse calls, withheld output for UserPromptSubmit).
- Unavailable with Remote Control, Claude in Chrome, computer use, `-p`, the Agent SDK, the VS Code panel, Desktop app and cloud sessions; also not via Bedrock, gateways, HIPAA or zero-data-retention orgs.
- Supported models listed: Opus 5.5, Sonnet 5.5, Haiku 5.5, Fable 5.2. Feedback via `/feedback`.
- The tweet's claim that limits stretch much further is the author's inference; the doc itself frames it as fewer round trips.

## Links

- [Article](https://code.claude.com/docs/en/code-mode.md)
- [Original Tweet](https://x.com/TekonBurns/status/2121311300928364717)

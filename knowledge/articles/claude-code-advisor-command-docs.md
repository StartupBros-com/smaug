---
title: "Claude Code Docs: Escalate hard decisions with the advisor tool"
type: article
date_added: 2026-10-02
source: "https://code.claude.com/docs/en/advisor"
author: "Anthropic"
tags: [claude-code, advisor, subagents, multi-model, orchestration]
via: "Twitter bookmark from @thedelost"
---

The Claude Code docs page on the advisor tool, shared by @thedelost as the basis for a multi-model setup: a strong main session plans and merges, cheaper Sonnet subagents do the reading, editing and test runs, and a separate advisor model (enabled with `/advisor`) reviews the full session at a few decision points. Only the page title was recoverable from the fetched content, so the details below come from the tweet's description of the setup.

## Key Takeaways

- Consult the advisor at three points: before committing to a plan, when the same error keeps recurring, and before declaring a long task done.
- Delegate grunt work (explorer, worker, researcher roles) to Sonnet subagents at medium effort, reserving the main model for planning and merging.
- Settings that can switch the advisor off or override effort include CLAUDE_CODE_DISABLE_ADVISOR_TOOL, DISABLE_TELEMETRY and CLAUDE_CODE_EFFORT_LEVEL; the tweet suggests reporting them rather than changing them blindly.
- A rule in CLAUDE.md telling the agent when to consult the advisor makes the pattern habitual.

## Links

- [Advisor docs](https://code.claude.com/docs/en/advisor)
- [Original Tweet](https://x.com/thedelost/status/2106121351798927652)

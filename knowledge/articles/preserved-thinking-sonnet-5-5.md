---
title: "Preserved Thinking with Sonnet 5.5 (Claude Platform docs)"
type: article
date_added: 2026-09-28
source: "https://platform.claude.com/docs/en/build-with-claude/preserved-thinking"
author: "Anthropic"
tags: [claude, extended-thinking, api, security]
via: "Twitter bookmark from @ClaudeDevs"
---

Anthropic's docs page on preserved thinking, announced by @ClaudeDevs as being extended to Sonnet 5.5. To curb distillation attacks via account-switching, thinking blocks stay in the original organization that generated them. If a user switches accounts mid-session, Claude rereads the session and generates fresh thinking instead of reusing the old blocks. The fetched page content was only HTML boilerplate, so this summary comes from the tweet.

## Key Takeaways

- Preserved thinking now extends to Sonnet 5.5.
- Thinking is bound to the org that generated it, as an anti-distillation measure.
- Switching accounts mid-session triggers a session reread and new thinking, which may change behavior and cost.
- Parent tweet advice: Opus for large projects, Sonnet where quality must balance speed and cost; Claude apps default to medium effort, Platform to high.

## Links

- [Article](https://platform.claude.com/docs/en/build-with-claude/preserved-thinking)
- [Original Tweet](https://x.com/ClaudeDevs/status/2104641322137293209)

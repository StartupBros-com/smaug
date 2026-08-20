---
title: "How To Kill The Bloat In Claude Code's System Prompt"
type: article
date_added: 2026-07-07
source: "https://www.aihero.dev/how-to-kill-the-bloat-in-claude-codes-system-prompt"
author: "Matt Pocock"
tags: [claude-code, system-prompts, context-efficiency, developer-tools]
via: "Twitter bookmark from @jalendport"
---

Matt Pocock outlines a practical process for reducing the initial system-prompt payload that Claude Code sends at the start of a session. The approach begins by running a proxy to inspect the actual request, then uses configuration changes to remove unnecessary prompt material rather than optimizing blindly.

The tweet provides a practical result from Jalen Davenport's own environment: applying the method reduced the per-turn payload from 21,654 to 13,644 tokens, an 8,010-token reduction of roughly 37%. The outcome will vary by configuration and usage history, but the workflow makes hidden context overhead measurable and actionable.

## Key Takeaways

- Inspect the request payload with a proxy before changing configuration so reductions are based on observed context.
- Use targeted Claude Code settings changes to remove avoidable system-prompt material.
- Measure the before-and-after token counts to verify that the configuration has a meaningful effect.
- Jalen Davenport reported a reduction from 21,654 to 13,644 tokens per turn after following the process.

## Links

- [Article](https://www.aihero.dev/how-to-kill-the-bloat-in-claude-codes-system-prompt)
- [Original Tweet](https://x.com/jalendport/status/2074579375157022961)

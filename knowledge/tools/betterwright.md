---
title: "BetterWright"
type: tool
date_added: 2026-08-18
source: "https://github.com/BetterWright/betterwright"
tags: [browser, playwright, agents, typescript, token-efficiency]
via: "Twitter bookmark from @AniC_dev"
---

BetterWright is a persistent, policy-guarded Playwright browser built for AI agents rather than test scripts. The observation stack is the product: compressed, diffable accessibility snapshots with `[ref=eN]` action markers instead of raw HTML or a full a11y dump, so the observe → decide → act loop spends far fewer tokens per turn. Author Nav (@NavDoesTech) claims ~70% fewer tokens on navigate+extract, ~80% on multi-step forms, and ~90% on a full agent browsing loop versus stock Playwright.

You can drive it from an existing agent (skill, MCP, or JS API) or hand a whole task to `betterwright exec` and get one JSON result back, with the browsing transcript kept out of the parent context. Sessions persist across turns so login and navigation are not re-paid every step.

## Key Features

- Compressed agent snapshots, post-action diffs, and interactive-only filters priced for a context window
- One long-lived managed browser (sessions share a cookie jar; profiles are separate identities)
- Dual use: your agent steps the browser, or BetterWright's own loop runs the task
- AES-256-GCM credential vault — forms fill without the secret entering the conversation
- Network policy on every request (cloud metadata endpoints always blocked); sandboxed model JS
- Proof screenshots, CAPTCHA handoff, and a live-view takeover when a human needs to intervene
- Installs as a Claude / Cursor / Codex skill, MCP server, Pi plugin, or `npm` JS API

## Quick Start

```bash
npm install -g betterwright && betterwright init
betterwright run -c "await page.goto('https://example.com'); return page.title()"
```

## Links

- [GitHub](https://github.com/BetterWright/betterwright)
- [Homepage](https://betterwright.com)
- [Original Tweet](https://x.com/AniC_dev/status/2089696634493915248)
- [Author Tweet](https://x.com/NavDoesTech/status/2089681406947639350)

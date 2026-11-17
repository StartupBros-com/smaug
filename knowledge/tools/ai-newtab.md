---
title: "ai-newtab (AI Homepage)"
type: tool
date_added: 2026-11-10
source: "https://github.com/ThariqS/ai-newtab"
tags: [claude, chrome-extension, personal-ai, agents, github]
via: "Twitter bookmark from @trq212"
---

AI Homepage is Thariq's open-source Chrome extension that replaces the new-tab page with a homepage an agent writes for you each day. It summarizes your browsing history, opens up to 8 pages you follow in your signed-in browser, and has Claude generate a fresh page from what it finds. It runs on your own Anthropic API key, which ties into Anthropic's new monthly API credits bundled with Max plans.

## Key Features

- Builds a daily personalized homepage from browsing history plus the contents of pages you actually read
- Free-form instructions control both content and look (newspaper, dashboard, terminal, zine)
- Per-site blocklist (webmail, banking and private hosts skipped by default); local-network hosts always blocked
- Choice of Claude model (Sonnet default, Haiku cheapest, Opus most careful); optional automatic morning rebuild
- Privacy: sends history summary and cleaned HTML of up to 8 pages to the Anthropic API; sessions deleted after each build
- Install: clone, `pnpm install && pnpm build`, load unpacked from `apps/extension/.output/chrome-mv3`

## Links

- [GitHub](https://github.com/ThariqS/ai-newtab)
- [Original Tweet](https://x.com/trq212/status/2108312534222778407)

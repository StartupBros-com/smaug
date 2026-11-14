---
title: "REM: Reverse Engineer Marketing"
type: tool
date_added: 2026-11-14
source: "https://github.com/dansugc/reverse-engineer-marketing"
tags: [marketing, competitor-analysis, mcp, seo, claude-code]
via: "Twitter bookmark from @CY160909"
---

Open-source TypeScript tool (CLI, local web app and MCP server) that takes a company URL and reconstructs its marketing machine from public evidence: paid ads, organic social, SEO, Reddit, founders, funnel and positioning history. Every claim in the report cites its evidence, and anything it could not see is listed as unknown. Built by DansUGC and inspired by REA (Reverse Engineer Anything).

## Key Features

- `npx reverse-engineer-marketing <domain>` works with no API keys: website, tracking pixels (including ones hidden in Google Tag Manager), sitemaps/SEO, AI-crawler stance, Wayback positioning history, app stores, Hacker News
- With a Scrape Creators key: Meta/Google/LinkedIn ad libraries (long-running ads signal winners), TikTok/Instagram/YouTube/X posts, founders, Reddit
- Web app (`rem web`) can write the report using your Claude Code or Codex subscription instead of an API key
- `rem diff <domain>` shows what changed since the last run: new/killed ads, repositioning
- `rem mcp` exposes it to agents; output goes to `report.md` plus `evidence.json`

## Links

- [GitHub](https://github.com/dansugc/reverse-engineer-marketing)
- [Original Tweet](https://x.com/CY160909/status/2120723508938317907)

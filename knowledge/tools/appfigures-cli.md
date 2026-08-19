---
title: "appfigures/cli"
type: tool
date_added: 2026-08-18
source: "https://github.com/appfigures/cli"
tags: [aso, app-store, cli, mcp, analytics, keywords, apple-ads, appfigures]
via: "Twitter bookmark from @appfigures"
---

Official Appfigures CLI (`@appfigures/cli`, alias `af`) and local MCP server for querying app metrics, reviews, and store-catalog data from a terminal or an agent. v3.0.0 is a keyword release: Apple Ads keyword and search-term performance, hourly and daily rank trends for tracked keywords, and model-based keyword suggestions on top of the existing apps / explorer / metrics / reviews surface.

Install with `npm i -g @appfigures/cli` (Node 22+) or run via `npx @appfigures/cli`. Auth is either a browser login that stores a token in the OS credential manager (`af auth login --interactive`) or an unattended `APPFIGURES_API_KEY` personal access token. `af mcp` exposes the same commands over stdio for Claude Code, Cursor, and other MCP clients.

The explorer layer searches millions of products across Apple, Google Play, Amazon, and other storefronts with 120+ fields (ranks, ratings, download/revenue estimates, SDKs, demographics). Other command groups resolve app identity (`apps search|tracked|get`) so metrics and review queries have a product ID to hang on.

## Key Features

- Apple Ads keyword and search-term performance (v3)
- Hourly and daily rank trends for tracked keywords (v3)
- Model-based keyword suggestions (v3)
- Local MCP server (`af mcp` / `npx -y @appfigures/cli mcp`)
- Catalog explorer with filters, aggregates, and 120+ fields across major stores
- App identity lookup, tracked-app list, reviews, and estimates.sales / estimates.revenue metrics
- Agent-friendly auth: print a URL, paste a code, or inject `APPFIGURES_API_KEY`

## Links

- [GitHub](https://github.com/appfigures/cli)
- [npm](https://www.npmjs.com/package/@appfigures/cli)
- [Original Tweet](https://x.com/appfigures/status/2089876614733566287)

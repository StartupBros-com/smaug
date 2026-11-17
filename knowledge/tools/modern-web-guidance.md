---
title: "modern-web-guidance"
type: tool
date_added: 2026-11-14
source: "https://github.com/GoogleChrome/modern-web-guidance"
tags: [web, agent-skills, css, accessibility, google-chrome]
via: "Twitter bookmark from @don_tech1"
---

Modern Web Guidance is a set of agent skills from the Chrome, Edge, Firefox and MDN teams (plus the web community) that embeds current web platform best practices and browser compatibility data into coding agents. LLM training data is full of legacy front-end code, so agents default to bloated JavaScript for things the platform now does natively; this CLI returns short, expert-curated guides straight into the agent's context to steer it toward modern APIs. The tweet claims it hit #1 on GitHub trending within 48 hours and lifted an eval pass rate from 56% to 88% across 212 modern web features, usable with Claude, Codex and Copilot. The repo has about 12k stars.

## Key Features

- Install via `npx modern-web-guidance@latest install` (interactive wizard)
- `search` to find guides, `retrieve <id>` to fetch one, `legacy-scan .` to find legacy patterns in a codebase
- Covers view transitions, container queries, subgrid, oklch, Popover and dialog APIs, anchor positioning, `:user-invalid`, scheduler.yield and INP diagnostics, accessibility
- Guides are token-efficient and pruned by evals to drop what models already know
- Prefers sensible lightweight fallbacks over heavy polyfills

## Links

- [GitHub](https://github.com/GoogleChrome/modern-web-guidance)
- [Original Tweet](https://x.com/don_tech1/status/2121060480714469728)

---
title: "OpenCodex"
type: tool
date_added: 2026-08-19
source: "https://github.com/lidge-jun/opencodex"
tags: [codex, claude-code, llm-proxy, openai, multi-provider, typescript, openrouter]
via: "Twitter bookmark from @kostasbotonakis"
---

OpenCodex is a local universal-provider proxy for OpenAI Codex (CLI, App, SDK), Claude Code, Claude Desktop, and Grok Build. It translates Codex's Responses API into whatever the target provider speaks — streaming, tool calls, reasoning tokens, and images in both directions — so those clients can run Claude, Gemini, Grok, GLM, DeepSeek, Kimi, Qwen, Ollama, OpenRouter, or any OpenAI-compatible endpoint instead of (or in addition to) the stock subscription model.

The bookmark pitch is the quota-escape hatch: when remaining Codex subscription usage is 0%, point the client at OpenCodex and keep working on another provider. It can also manage a ChatGPT account pool for Codex auth — add accounts, refresh 5h / weekly / 30d quotas in a dashboard, and route new sessions to the lowest-usage healthy account while pinning existing threads to the account that started them.

## Key Features

- Two-command start: `npm i -g @bitkyc08/opencodex` then `ocx start` (proxy + dashboard on localhost:10100)
- 40+ built-in providers plus any OpenAI-compatible base URL
- Works with Codex CLI/App/SDK, Claude Code, Claude Desktop, and Grok Build
- ChatGPT / Codex account pool with quota refresh and affinity-preserving routing
- Web dashboard for providers, models, and accounts (`ocx gui` to reopen)
- TypeScript; Node 18+; Bun runtime bundled; source install on Bun canary for unreleased fixes

## Quick Start

```bash
npm install -g @bitkyc08/opencodex
ocx start
```

Open http://localhost:10100 to add providers and pick models.

## Links

- [GitHub](https://github.com/lidge-jun/opencodex)
- [npm](https://www.npmjs.com/package/@bitkyc08/opencodex)
- [Docs](https://opencodex.me/)
- [Original Tweet](https://x.com/kostasbotonakis/status/2090023250197680366)
---

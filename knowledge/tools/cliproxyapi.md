---
title: "CLIProxyAPI"
type: tool
date_added: 2026-08-12
source: "https://github.com/router-for-me/CLIProxyAPI"
tags: [api-gateway, claude-code, codex, gemini, grok, kimi, openai, go, proxy]
via: "Twitter bookmark from @geekbb"
---

Go proxy that exposes subscription coding CLIs — Claude Code, ChatGPT Codex, Google Antigravity/Gemini, Grok Build, and Kimi — as local OpenAI-, Gemini-, Claude-, and Codex-compatible HTTP APIs. The pitch is multi-account OAuth plus protocol translation so any OpenAI/Claude/Gemini client or SDK can consume those subscriptions without each app speaking the vendor CLI. 47k+ stars.

In a six-gateway bake-off (sub2api, EasyCLIProxyAPI, new-api, opencodex, TokenHub, this), @geekbb called CLIProxyAPI plus CPA Usage Keeper the most usable combo after running the others; TokenHub was still untried. @LinearUncle framed it as the personal-use star of the set: wrap Codex/Kimi/Grok subscriptions and hand the resulting API to other projects. Desktop users are pointed at the Tauri/React companion EasyCLIProxyAPI for OAuth, tray control, usage charts, and one-click agent config (Claude Code, Codex, OpenCode, OpenClaw, Hermes, Pi, ZCode, Kimi Code, Grok Build).

Wrapping vendor subscriptions as a generic API can conflict with upstream terms; treat that as an operator risk, not a feature.

## Key Features

- Local OpenAI (including Responses), Gemini (including Interactions), Claude, and Codex-compatible endpoints
- OAuth/multi-account for Claude, Codex, Antigravity, Kimi, and xAI
- Protocol conversion so mixed clients can share one listening port
- Pairs with EasyCLIProxyAPI for GUI lifecycle, quota inspection, model aliases, and agent client sync
- Commonly paired with CPA Usage Keeper for durable local usage accounting

## Links

- [GitHub](https://github.com/router-for-me/CLIProxyAPI)
- [EasyCLIProxyAPI desktop client](https://github.com/router-for-me/EasyCLIProxyAPI)
- [Original Tweet](https://x.com/geekbb/status/2087437919296561203)

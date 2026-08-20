---
title: "Nanocodex"
type: tool
date_added: 2026-07-19
source: "https://github.com/gakonst/nanocodex"
tags: [rust, ai-agents, coding-agents, web-search, openai]
via: "Twitter bookmark from @gakonst"
---

Nanocodex is a Rust-first library for embedding a complete OpenAI coding-agent lifecycle in another product. Rather than requiring each host application to coordinate chat history, tool results, events, retries, and subprocess cleanup itself, it exposes a retained agent session with typed results and event streams. The bookmarked web-search module is notable for reimplementing and examining an undocumented Codex `/v1/alpha/search` endpoint, including domain-specific query paths such as sports and finance.

## Key Features

- Provides a retained-session agent loop with typed history, prompts, tool calls, events, and cleanup.
- Lets applications build their own interface while consuming ordered typed events from the Rust-owned lifecycle.
- Supports Rust, JavaScript, and Python consumers around the same agent contract.
- Includes a web-search tool implementation informed by an undocumented Codex alpha search endpoint.
- Targets products that need coding-agent behavior without rebuilding orchestration and session management.

## Links

- [GitHub](https://github.com/gakonst/nanocodex)
- [Bookmarked web-search module](https://github.com/gakonst/nanocodex/blob/master/crates/nanocodex-tools/src/web_search/mod.rs)
- [Original Tweet](https://x.com/gakonst/status/2078927695875068379)

---
title: "freellmapi"
type: tool
date_added: 2026-05-19
source: "https://github.com/tashfeenahmed/freellmapi"
tags: [llm, api, proxy, model-routing]
via: "Twitter bookmark from @DeRonin_"
---

FreeLLMAPI is an OpenAI-compatible proxy that aggregates free-tier model endpoints from 28 providers, alongside any custom compatible endpoint, behind one `/v1` API. It routes requests to available models, fails over when a provider is rate-limited, tracks usage by key, and stores keys encrypted; the project describes itself as intended for personal experimentation.

## Key Features

- Aggregates roughly 358 free model endpoints and approximately four billion tokens per month across supported providers.
- Exposes a single OpenAI-compatible API for chat, embeddings, image, and audio endpoints.
- Applies smart routing, automatic failover, and per-key usage tracking to stay within individual free-tier limits.
- Supports custom OpenAI-compatible endpoints in addition to its catalog of free providers.

## Links

- [GitHub](https://github.com/tashfeenahmed/freellmapi)
- [Original Tweet](https://x.com/DeRonin_/status/2056813470557901261)

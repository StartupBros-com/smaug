---
title: "Migrating from Claude to DeepSeek"
type: article
date_added: 2026-06-25
source: "https://x.com/i/article/2042782926245629952"
author: "Lindy"
tags: [ai-agents, llm-inference, model-routing, production-evals]
via: "Twitter bookmark from @Altimor"
---

Lindy describes moving most of its managed-agent traffic from Claude/Sonnet and Gemini paths to DeepSeek V4 Flash on Atlas Cloud, reducing inference costs by about 90% on the migrated routes while preserving product quality. The article argues that the essential work is operational validation rather than selecting a cheaper model: replay real workloads in offline evaluations, test the model with the intended provider and stack, optimize prompts, ramp gradually through internal and external users, then watch online evaluations and retention before completing rollout.

A failed Kimi K2.5 experiment illustrates why offline scores alone are insufficient: despite performing well in evaluation, it felt abruptly different to users in production. Lindy frames model routing as an application-company discipline of identifying where lower-cost intelligence is good enough, allowing frontier models to remain available for explicit or genuinely higher-intelligence paths.

## Key Takeaways

- A production model migration evaluates the combined model, inference provider, serving stack, prompts, and product workflow—not a model label in isolation.
- Offline task replays and prompt optimization establish a baseline, but internal users, online evaluations, and multi-week retention data reveal quality regressions that static evaluation misses.
- Routing suitable work to cheaper models can improve an AI application's unit economics without making users manage model choices themselves.

## Links

- [Article](https://x.com/i/article/2042782926245629952)
- [Original Tweet](https://x.com/Altimor/status/2070261931286597700)

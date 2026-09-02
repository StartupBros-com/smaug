---
title: "How my $600 Mac Mini Runs a 35B AI Model"
type: article
date_added: 2026-04-13
source: "https://x.com/i/article/2043294907477942272"
author: "leopardracer"
tags: [local-llm, mac-mini, llama-cpp, mmap, moe, gemma4, qwen, ollama, ai-agents, inference]
via: "Twitter bookmark from @leopardracer"
---

A detailed technical walkthrough of running a three-tier local LLM inference stack on a $599 base Mac Mini M4 (16GB), including a 35B MoE model that should require far more RAM. The author runs it as a headless AI automation server handling iMessages, emails, and 35+ specialized skills — with Claude Code as the primary "brain" but local models handling 70-80% of the routine preprocessing work.

The key technical insight: Mixture-of-Experts models (specifically Qwen3.5 35B-A3B, which has only 3B active parameters per token) combined with `llama.cpp`'s `--mmap` flag allow the OS to page expert weights from NVMe SSD on demand rather than loading the entire model into RAM. Result: 17.3 tok/s at 81% free memory, zero swap, on a machine that should be completely unable to run this model.

## Key Takeaways

- `--mmap` in llama.cpp + MoE architecture = run models far beyond your RAM ceiling on Apple Silicon
- Disable "thinking" mode for classification tasks: 30x speed improvement (30s → <1s) with same accuracy
- Three-tier routing: 2.3B fast (Ollama, ~2s/triage) → 4.5B primary (Ollama, summarization) → 35B heavy (llama.cpp, signal compression + fallback)
- `OLLAMA_MAX_LOADED_MODELS=1` is critical on 16GB — without it the system crashes trying to hold two models at once
- Google Gemma 4 (Apache 2.0) replaced Qwen for fast/primary tiers: 4.4x faster classification (8.5s → 1.9s), multimodal (images + audio) on E2B/E4B
- Resilience chain: Claude Sonnet → Haiku → Local 35B → Local Primary → OpenRouter → Queue
- Local preprocessing reduces Claude API sessions by 30-40%; signal compression saves ~15x tokens before Opus planning calls
- Centralize model name constants in one file — saved hours during the Qwen→Gemma swap (only 2 constants to change)
- Apple's "LLM in a Flash" paper (Dec 2023) describes the NVMe-as-memory approach formally
- `--n-gpu-layers 0` intentional on Apple Silicon when using mmap: let OS handle paging rather than GPU offload

## Links

- [Article](https://x.com/i/article/2043294907477942272)
- [Original Tweet](https://x.com/leopardracer/status/2043631410045452360)

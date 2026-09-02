---
title: "Latent Briefing: Efficient Memory Sharing for Multi-Agent Systems via KV Cache Compaction"
type: article
date_added: 2026-04-10
source: "https://x.com/i/article/2042631550261510144"
author: "Ben Geist / Ramp Labs"
tags: [multi-agent, kv-cache, llm-efficiency, token-optimization, inference, agents]
via: "Twitter bookmark from @RampLabs"
---

Ramp Labs introduces "Latent Briefing" — a technique for efficiently sharing the orchestrator's accumulated reasoning context with worker agents in multi-agent hierarchies by operating directly on the KV cache rather than using lossy text summarization or brittle RAG retrieval.

The core problem: in Recursive Language Model (RLM) architectures, an orchestrator accumulates rich reasoning trajectories (hypotheses tested, dead ends eliminated, cross-references discovered) across many worker calls. Passing this as raw text inflates token costs per call. Standard workarounds — LLM summarization (20-60s latency, lossy) and RAG (brittle, misses cross-chunk dependencies) — all have significant drawbacks.

The solution builds on the Attention Matching (AM) framework for KV cache compaction. Key modifications: (1) task-guided query vectors derived from the orchestrator's task prompt rather than sampled from context, enabling compression that prioritizes task-relevant information; (2) shared global token selection via consensus scoring across all attention heads, enabling batched GPU execution; (3) MAD-normalized thresholding instead of fixed top-k selection for more adaptive compression.

Benchmarked on LongBench v2 (126 questions, 0-100k token documents) with Claude Sonnet 4 as orchestrator and Qwen-14B as worker:

- Comparable or improved accuracy vs baseline (up to +3pp)
- 42-57% median worker token reduction at optimal thresholds
- 21-31% total token reduction
- ~1.7s median compaction overhead (down from 30+ seconds in sequential AM)
- 65% reduction in worker model token consumption

Key finding: optimal compression threshold varies by document length and question difficulty. Longer documents need lighter compaction (preserve broad coverage); harder questions benefit from aggressive compaction (strip speculative orchestrator reasoning to give worker a cleaner signal).

## Key Takeaways

- KV cache compaction can share orchestrator memory with workers without the latency cost of summarization
- Task-guided queries enable compression targeted at what the worker actually needs, not what's generally important
- Shared global token selection (consensus across heads) enables batched GPU execution, dropping latency from 30s to 1.7s
- Token savings of 42-57% on worker calls with accuracy parity or improvement is a meaningful efficiency gain for production agent systems
- Context management across agents is becoming a first-order engineering concern as agent hierarchies deepen

## Links

- [Article](https://x.com/i/article/2042631550261510144)
- [Original Tweet](https://x.com/RampLabs/status/2042660310851449223)

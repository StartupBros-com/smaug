---
title: "inference-optimisation-skill"
type: tool
date_added: 2026-11-22
source: "https://github.com/sybil-solutions/inference-optimisation-skill"
tags: [agent-skill, claude-code, inference, llm, speculative-decoding, benchmarking]
via: "Twitter bookmark from @0xSero"
---

An agent skill (SKILL.md format, usable with Claude Code or any agent that loads such skills; also a PROMPT.md for other models) for hill-climbing the speed of a local LLM server on any hardware and quantization. It covers single-user and concurrent decode, speculative decoding, prefill, KV cache size, startup time and time to first token, under a memory cap and with a full-context stability check on every result. Bookmarked because @0xSero calls it his magnum opus and is collecting reports of 30% to 5x speedups from people using it.

## Key Features

- Workflow: compute the theoretical ceiling (bytes per token over bandwidth), change one thing at a time, measure against interleaved controls, log every result including failures, gate on long-context retrieval, qualify a clean pinned build before publishing
- Accepts a change only if it beats both neighbouring controls and regresses nothing by more than 3%
- Reported results from the source hill-climbs: Intel Arc B390 iGPU decode 43.6 to 53 tok/s and 256K prefill 297 to 628 tok/s; RTX 3090 with Qwen 27B EXL3 plus MTP at 96 tok/s prose and 141 tok/s code; 4x H200 DeepSeek run going from crashing under load to 229 tok/s decode
- Computes the physical ceiling up front so the agent can say early when a target is above the hardware limit
- Python, ~1.9k stars at time of bookmark

## Links

- [GitHub](https://github.com/sybil-solutions/inference-optimisation-skill)
- [Original Tweet](https://x.com/0xSero/status/2124238286457917649)

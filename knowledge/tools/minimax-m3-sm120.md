---
title: "minimax-m3-sm120"
type: tool
date_added: 2026-06-16
source: "https://github.com/0xSero/minimax-m3-sm120"
tags: [llm, vllm, minimax-m3, self-hosted, blackwell, quantization, gpu, inference]
via: "Twitter bookmark from @0xSero"
---

Patched vLLM Docker image and launch recipe for serving MiniMax-M3 (428B / 23B-active MoE) in MXFP4 quantization on 4× RTX PRO 6000 Blackwell (SM120) GPUs with up to 250K context. The repo exists because upstream vLLM doesn't yet ship the components M3 needs: the MSA model (`MiniMaxM3SparseForConditionalGeneration`), the `minimax_m3` reasoning/tool-call parsers, or the clamped-swiglu MoE fix — without that last fix, MXFP4 silently degrades across all 57 expert layers.

Demonstrated in a real agentic workflow: 0xSero used it with Hermes and Discord to have MiniMax-M3 consume his data and auto-generate a podcast episode, demonstrating practical self-hosted frontier-model utility.

## Key Features

- Fixes three upstream vLLM gaps: MSA model, minimax_m3 parsers, clamped-swiglu MoE
- Supports both MXFP4 (this repo, vLLM) and NVFP4 (companion repo, SGLang with vision/video)
- 250K context at `gpu_memory_utilization=0.95`; ~190K at 0.92
- Measured throughput: ~113 tok/s single decode, ~184 tok/s aggregate (4× concurrent), ~2,800 tok/s prefill
- BF16 KV cache by default; FP8 KV not achievable correctly on SM120
- Simple `.env`-driven configuration; `docker compose up -d --build` startup

## Links

- [GitHub](https://github.com/0xSero/minimax-m3-sm120)
- [Original Tweet](https://x.com/0xSero/status/2066759702634262795)

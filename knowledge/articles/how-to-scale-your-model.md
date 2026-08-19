---
title: "How to Scale Your Model"
type: article
date_added: 2026-08-17
source: "https://jax-ml.github.io/scaling-book/"
author: "Jacob Austin et al. (Google DeepMind)"
tags: [llm-scaling, tpu, gpu, jax, parallelism, inference, transformers, roofline, deepmind, llama]
via: "Twitter bookmark from @philhchen"
---

Google DeepMind's public systems book on making Transformers run at hardware limits. Training LLMs "often feels like alchemy"; this text is the antidote: how TPUs and GPUs actually compute and talk to each other, how an LLM maps onto that hardware, and how to parallelize training and inference so adding chips still buys linear throughput ("strong scaling"). The practical questions it answers are "how expensive should this LLM be to train," "how much memory do I need to serve this model myself," and "what's an AllGather."

Published online 2025-02-04. Authors: Jacob Austin, Sholto Douglas, Roy Frostig, Anselm Levskaya, Charlie Chen, Sharad Vikram, Federico Lebron, Peter Choy, Vinay Ramasesh, Albert Webson, and Reiner Pope. Work done at Google DeepMind (some authors later at MatX). Assumes Transformer literacy and ideally some JAX; not a from-scratch ML intro.

The framing is that a 20% benchmark win is worthless if it costs 20% of roofline efficiency, and promising architectures die because nobody made them scale. Adding chips always adds communication; when comms exceed compute you leave the strong-scaling regime. Even one chip can be memory-bound moving parameters instead of doing its rated FLOPs. Hardware teams face the inverse co-design bet: ship enough compute, bandwidth, and memory for algorithms that will exist 2–3 years later. TPUs won that bet on matmul intensity (N FLOPs per byte); GPUs are chasing the same niche with Tensor Cores.

## Outline

**Part 1 — Preliminaries**

- **Ch. 1 Roofline analysis.** Algorithms are bounded by compute, communication, and memory; those three let you ballpark runtime.
- **Ch. 2 How to think about TPUs.** Chip internals, and how that constrains what you can train and serve.
- **Ch. 3 Sharded matrices.** Model sharding and multi-TPU parallelism through the one op that matters: distributed matmuls. Gather/scatter/redistribute costs, and multiplying arrays that live in different layouts.

**Part 2 — Transformers**

- **Ch. 4 Transformer math.** Parameter counts, forward/backward FLOPs, KV-cache size, and when attention starts to dominate the FFN. Every matrix size and where the norms sit.
- **Ch. 5 Parallelizing training.** The four primary splits — data, tensor (Megatron), pipeline, expert — plus rematerialization, ZeRO/optimizer sharding, host offload, and gradient accumulation. Given chips, model size, and batch, pick a scheme that stays compute-bound.
- **Ch. 6 Training LLaMA 3 on TPUs.** Worked cost and wall-clock estimate.
- **Ch. 7 Transformer inference.** Latency joins the objective; KV cache dominates memory; disaggregated serving.
- **Ch. 8 Serving LLaMA 3 on TPU v5e.** Latency/throughput tradeoffs and a dollar estimate.

**Part 3 — Practical tutorials**

- **Ch. 9 Profiling TPU code.** JAX + XLA stack and the JAX/TensorBoard profiler for when the theory does not match the trace.
- **Ch. 10 Programming TPUs in JAX.** The parallel APIs, with worked problems.

**Part 4 — Close**

- **Ch. 11 Conclusions and further reading.**
- **Ch. 12 How to think about GPUs.** Bonus chapter: GPU internals, networking, and how GPU rooflines differ from TPU ones.

Chapters 1–3 are skippable if you already have the notation; 6, 8, and 9–10 are the "real model" chapters.

## Why it keeps getting recommended

Archie Sengupta's adjacent advice is to learn inference engineering "as fast and deep as you can"; this book is the public syllabus for that. It is the rare text that lets you choose a parallelism scheme for a new architecture, estimate train/serve time, and design (or reject) algorithms against a specific chip's affordances — without treating any of those as folklore.

## Citation

```
Austin et al., "How to Scale Your Model", Google DeepMind, online, 2025.
```

Ideas attributed in-text to James Bradbury and Blake Hechtman.

## Links

- [How to Scale Your Model](https://jax-ml.github.io/scaling-book/)
- [Original tweet](https://x.com/philhchen/status/2089536036154339504)
- [Quoted prompt from @archiexzzz](https://x.com/archiexzzz/status/2089445863542391267)

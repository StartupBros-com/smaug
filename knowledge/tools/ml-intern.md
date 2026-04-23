---
title: "ml-intern"
type: tool
date_added: 2026-04-21
source: "https://github.com/huggingface/ml-intern"
tags: [ml, agents, huggingface, post-training, research-automation, open-source]
via: "Twitter bookmark from @akseljoonas"
---

An open-source ML engineer agent built by Hugging Face that autonomously runs the real post-training research loop: reading papers, walking citation graphs, pulling and reformatting datasets, launching training jobs on HF Jobs or local GPUs, monitoring runs, diagnosing failures, and iterating — all without human hand-holding. Backed by the full HF ecosystem (arxiv, Hub, Spaces, datasets, Jobs). Available as a CLI and a web/mobile app.

Demonstrated results include pushing a Qwen3-1.7B model from 10% to 32% on GPQA in under 10 hours, and beating Codex on HealthBench by 60% after generating 1,100 synthetic data points from scratch. The agent knows how data should look and what good models feel like — it inspects datasets, rejects low-quality ones, reformats before training to avoid wasted GPU hours, and reads its own eval outputs to guide the next iteration.

## Key Features

- Reads papers in full and walks citation graphs to find referenced datasets and methods
- Browses the Hub, reads recent docs, inspects and reformats datasets before training
- Launches training jobs on HF Jobs when no local GPU is available; monitors and diagnoses failures
- Runs ablations autonomously until training succeeds
- Available as CLI (`ml-intern`) and web + mobile app
- Supports Anthropic and other model backends; configurable via `--model` flag

## Links

- [GitHub](https://github.com/huggingface/ml-intern)
- [Original Tweet](https://x.com/akseljoonas/status/2046543093856412100)

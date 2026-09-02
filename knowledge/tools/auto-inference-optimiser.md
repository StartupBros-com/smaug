---
title: "Auto-Inference-Optimiser"
type: tool
date_added: 2026-03-25
source: "https://github.com/manthanguptaa/Auto-Inference-Optimiser"
tags: [llm-inference, optimization, agents, apple-silicon, mlx, benchmarking]
via: "Twitter bookmark from @manthanguptaa"
---
An agentic hill-climbing harness for optimizing LLM inference speed on Apple Silicon. Inspired by Karpathy's Autoresearch, it locks evaluation quality gates in a read-only `prepare.py` while letting an AI coding agent freely modify `inference.py` to improve tokens/sec — reverting any change that regresses quality or throughput.

Key findings from running the harness: greedy (argmax) sampling yielded the largest gains (+10.7% on Qwen 0.5B), KV cache quantization consistently hurt on Apple Silicon, and most config knobs were noise. The evaluation harness itself — with task-level sanity checks and perplexity gates — proved more valuable than any individual optimization.

## Key Features
- Fixed evaluation harness prevents benchmark gaming
- Quality gates enforce perplexity and task-correctness thresholds
- Reversible commit loop: agent edits, benchmarks, and reverts on failure
- Results logged to `results.tsv` for full observability
- Supports multiple prompt categories (reasoning, code, summarization, creative, explanation)

## Links
- [GitHub](https://github.com/manthanguptaa/Auto-Inference-Optimiser)
- [Original Tweet](https://x.com/manthanguptaa/status/2036785420349174073)

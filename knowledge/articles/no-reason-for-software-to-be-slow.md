---
title: "There's no reason for software to be slow anymore"
type: article
date_added: 2026-08-30
source: "https://danluu.com/no-slow/"
author: "Dan Luu"
tags: [performance, llm, software-engineering]
via: "Twitter bookmark from @bibryam"
---

Dan Luu argues that LLM agents have cut the cost of specialized performance work by orders of magnitude, so optimizations once reserved for the largest or most lucrative projects are now affordable for anyone. He builds on his earlier regex-engine experiment (FRE, produced by an agent looping for a month against the rebar benchmark suite) and on comments from Marc Brooker and Michael Malis about workload-specific software and JIT compilers.

## Key Takeaways

- Like Nolan Lawson's point that you can now choose how many bugs you want, you can increasingly choose how much performance you want
- Software can be fitted to a particular workload rather than a class of workloads, in the spirit of FFTW and demoscene tricks
- JIT compilers are an example where writing the code was the hard part, and LLMs lower that barrier
- Agents overfit to the benchmark they see; a holdout benchmark is needed to force generalization

## Links

- [Article](https://danluu.com/no-slow/)
- [Original Tweet](https://x.com/bibryam/status/2093998158502097054)

---
title: "LLM-as-a-Verifier"
type: tool
date_added: 2026-08-17
source: "https://github.com/llm-as-a-verifier/llm-as-a-verifier"
tags: [verification, llm, test-time-scaling, best-of-n, agents, deepseek, evaluation]
via: "Twitter bookmark from @wolfie_"
---

General-purpose verification framework that scores any agent's candidates or step-by-step progress without extra training. The method is fine-grained score tokens, expectation over the full logprob distribution of those tokens, then repeated evaluation plus criteria decomposition. The resulting continuous rewards are used for best-of-N selection, progress tracking, and RL.

Jacky Kwok's Aug 2026 claim: sampling 5 DeepSeek V4 Flash solutions and ranking them with the *same* model via LLM-as-a-Verifier lifts Terminal-Bench 2.1 from ~79% Pass@1 to 88%, beating Claude Fable 5 at about 11× lower cost. The README's self-verification table (same generator and judge):

| Config | Pass@1 | LLM-as-a-Verifier | Oracle |
| --- | --- | --- | --- |
| Best-of-3 | 79.4% | 86.5% ± 1.1% | 92.1% |
| Best-of-5 | 78.7% | 88.0% ± 0.6% | 96.6% |

They also report SOTA-style lifts on Terminal-Bench, SWE-Bench Verified, MedAgentBench, and RoboRewardBench when a separate verifier (e.g. Gemini 2.5 Flash) ranks stored trajectories.

## API

`pip install llm-verifier`. Core calls:

- `llm_verifier.select(problem, candidates, criteria=…)` — best-of-N
- `llm_verifier.compare(...)` — pairwise fine-grained rewards in [0, 1]
- `llm_verifier.track(problem, steps, checkpoint_steps=…)` — per-step progress

Needs logprobs (`DEEPSEEK_API_KEY`, `VERTEX_API_KEY`, or an OpenAI-compatible server such as vLLM). 0.2.0 adds prefix-cache (~3.4× fewer uncached tokens on trajectory-heavy benches), a Terminal-Bench 2.1 self-verification suite, a `deepseek-v4-flash` backend, and `llm_verifier.token_usage()`.

Python, 2213 stars at capture. Paper: arXiv 2607.05391.

## Links

- [GitHub](https://github.com/llm-as-a-verifier/llm-as-a-verifier)
- [Docs](https://llm-as-a-verifier.com/docs/)
- [Paper](https://arxiv.org/abs/2607.05391)
- [TurboAgent Claude Code plugin](https://github.com/llm-as-a-verifier/TurboAgent)
- [Kwok announcement](https://x.com/jackyk02/status/2089421448784023553)
- [OMP wrapper](https://github.com/wolfiesch/omp-best-of)

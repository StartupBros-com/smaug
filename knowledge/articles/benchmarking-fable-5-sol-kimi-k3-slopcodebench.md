---
title: "Benchmarking Fable 5, GPT-5.6 Sol, and Kimi K3 on SlopCodeBench"
type: article
date_added: 2026-08-04
source: "https://x.com/i/article/2083255912949788672"
author: "dexhorthy"
tags: [evals, slopcodebench, coding-agents, fable-5, gpt-5.6, kimi-k3, benchmarks]
via: "Twitter bookmark from @dexhorthy"
---

Dex Horowitz (HumanLayer) re-ran [SlopCodeBench](https://arxiv.org/abs/2603.24755) — Gabe Orlanski's UW Madison long-horizon coding eval — on the then-new frontier: Claude Fable 5, GPT-5.6 Sol, and Kimi K3 (once on Baseten, once on Modal). The prior Opus 5 pass had already shown brand-new models failing to break 25% strict pass (2024 SWE-Bench / Sonnet 3.5 territory). This run used a broader six-challenge, 30-checkpoint subset with a fresh context window per checkpoint and the same prompts across harnesses (Claude Code 2.1.219 for Fable, Codex CLI 0.145.0 for Sol, OpenCode 1.18.0 for both Kimi runs).

SlopCodeBench's design is the point. Each challenge withholds later requirements; the model evolves a codebase as new specs arrive. The metric is a *strict* checkpoint pass: everything new is green *and* every inherited regression test still passes. Fail checkpoint 4 and you cannot pass 5–N unless you accidentally fix the earlier defect. Defects are held-out black-box tests against the produced CLI or API, not LLM judges.

On this subset Fable and Sol tied at 33.3% (10/30 strict passes); Kimi K3 scored 26.7% on Modal and 23.3% on Baseten (single runs, not a provider bake-off). Fable's tiebreak is 16 isolated passes vs Sol's 14. Every run steadily accumulated defects. Almost all generated lines tripped at least one slop-meter rule: Fable 86%, Sol 95%, Kimi 82% / 79% (prior: Opus 4.8 98%, Opus 5 93%, Sonnet 5 89%). Dex treats those percentages as partly over-aggressive metrics, not a purity ranking. Fable grew cloned lines 9x from circuit_eval ck1 to ck8; Sol left 1,318 SLOC of persistent Python tests while the others tested via shell scripts and temp files. Complexity still grew over time for every model.

The challenges: xjq (XPath/CSS/JSON CLI), file_backup (scheduled archives + incremental state), dag_execution (task-pipeline DSL + caches), circuit_eval (scalar → vector → three-valued logic → opt), code_search (regex → structural → AST fixes across seven languages), etl_pipeline (JSON ETL with branches and namespaced compose). circuit_eval was the overlap with the Opus 5 run; newer models earned more strict passes there, but the newer suite also has 566 tests vs Opus 5's 557.

Dex's takeaway is operational, not leaderboard: do not turn the lights off in a software factory, because quality degradation still bites as requirements arrive over time. Next experiment is deterministic linters and/or alternating-model adversarial review after each checkpoint, to see whether that lifts strict pass rates.

## Key Takeaways

- SlopCodeBench withholds later specs; strict pass = new tests + all inherited regressions
- Fable 5 and GPT-5.6 Sol tied at 10/30 (33.3%); Kimi K3 landed 23–27% on one run per provider
- Frontier coding agents are still in 2024 SWE-Bench territory on evolving codebases
- 79–95% of written lines trip the slop meter; complexity and clones grow across checkpoints
- Lights-off autonomy is still a bad bet; next lever is post-checkpoint linters + adversarial review

## Links

- [X Article](https://x.com/i/article/2083255912949788672)
- [Original Tweet](https://x.com/dexhorthy/status/2084692256460816541)
- [Prior Opus 5 writeup](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/benchmarking-opus-5-on-slop-code-bench.md)
- [SlopCodeBench paper](https://arxiv.org/html/2603.24755v1)
- [SlopCodeBench runner](https://github.com/SprocketLab/slop-code-bench)
- [Problem catalog](https://github.com/gabeorlanski/scb-problems)

---
title: "How to evaluate models without actually running them"
type: article
date_added: 2026-08-11
source: "https://x.com/i/article/2087209792842637312"
author: "Amar Singh"
tags: [evals, off-policy, llm-as-judge, agents, inference-net, traces, model-selection]
via: "Twitter bookmark from @AmarSVS"
---

Amar Singh's write-up of an off-policy eval that scores a new model from traces you already have, instead of standing up a simulator or letting a stranger model touch production. The question is the one every team hits when a new frontier model ships: would this beat the incumbent on *our* task, and can we know without a second environment?

Ground truth was the expensive thing they were trying to approximate. They ran Luna (incumbent) plus Terra, GPT-OSS-120B, Kimi K3, and DeepSeek v4 Flash through Harbor on four tasks, judged by Sol: BFCL (short function calling), DABstep (file-backed finance), Terminal-Bench (long-horizon container engineering, ~40 turns), and GAIA (open-web research). Model ranking already flipped by family — Luna on BFCL, Terra narrowly on DABstep/GAIA, Kimi-K3 clearly on Terminal-Bench (8.68 vs Terra 7.52) — so a useful proxy had to reproduce that reordering, not just a single leaderboard.

## What failed

**World simulation.** Infer a "tool universe" from recorded schemas and results, seed implied files/DB state, then let the candidate act while a strong model (GPT 5.6 Sol) plays the environment. Most expensive run, worst accuracy. Once the candidate left the recorded path, the simulator invented files and inconsistent results; small lies compounded into states that never existed. Negative bias on every model/task.

**Raw trace regeneration.** Freeze a real prefix, delete the incumbent's action at a checkpoint, ask the candidate for the next action, judge it. Cheap, honest observations, no hallucinated world. Worked on BFCL. Collapsed on long-horizon work in a model-specific way: Kimi-K3 scored 4.28 vs a real 8.68 on Terminal-Bench (similar gaps on GAIA and DABstep), Terra stayed within 0.27, GPT-OSS was systematically overrated. Not a calibration offset — the prefix is not a neutral test. Handing a candidate 25 turns of Luna's voice, plan, and framing asks "continue Luna's policy," and models with a different native style look worse to the judge. The Kimi team has said as much about foreign traces.

Judging local competence ("is this a clean command?") vs **action value** ("does this raise the chance of eventually satisfying the task rubric?") cut error everywhere and did not fix the Kimi collapse. The contamination was the incumbent's *prose*, not the world state.

## What worked

**Neutral reconstruction.** Keep the controller protocol, task instruction, exact prior tool calls + arguments, bounded observations, and later user messages. Strip every earlier assistant natural-language turn and all explicit reasoning. The candidate still inherits Luna's *state*; it no longer inherits Luna's argument for what to do next. Deterministic, no summarizer. On a matched 200-observation pilot, MAE fell 1.96 → 1.54, rank correlation 0.38 → 0.73, correct top-model in 3/4 families. Kimi's average error 2.42 → 0.56; GPT-OSS's flattery went away. Exception: BFCL / first-checkpoint protocol-heavy traces, where the original prefix is informative — keep those raw.

**Checkpoint sampling.** Within-trace action scores swing ~1.4 points on the stateful families, so one checkpoint is noise. Hierarchical mean (score each trace, then average traces) beat flat-averaging, which let a 40-step Terminal-Bench run count twenty times a two-step BFCL run. Uniform hierarchical mean beat eleven other rules (median, min, lower quartile, success-probability variants); lower-tail rules rank okay but are pessimistic (min bias −1.53). Five evenly spaced positions including first and last cut checkpoints 58% (74% on Terminal-Bench) with macro error 1.388 → 1.424 and identical rank correlation 0.850. Judging was 84% of the bill.

## Recipe

1. Up to five deterministic positions per trace, always first and last, rest evenly spaced
2. Neutral reconstruction except on the first checkpoint / short protocol-heavy traces
3. Judge action value, not local cleanliness
4. Aggregate hierarchically (trace, then dataset)

Shipped as always-on model comparison in [Inference.net](https://inference.net/) observability, with an integration guide at [docs.inference.net/guides/find-a-better-model-with-auto-evals](https://docs.inference.net/guides/find-a-better-model-with-auto-evals).

## Key Takeaways

- You can rank new models for a production agent task from incumbent traces alone if you refuse to simulate the world
- The silent killer is off-policy *prose*: the incumbent's plan and voice in the prefix, not the recorded observations
- Score whether an action raises P(task success), not whether it looks locally competent
- Five fixed checkpoints + hierarchical mean is enough; judging every turn is mostly a judge bill
- World sim is the expensive way to invent a worse environment

## Links

- [Article](https://x.com/i/article/2087209792842637312)
- [Original Tweet](https://x.com/AmarSVS/status/2087215028860747960)
- [Inference.net auto-evals guide](https://docs.inference.net/guides/find-a-better-model-with-auto-evals)

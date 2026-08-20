---
title: "Scoping and curating eval datasets"
type: article
date_added: 2026-08-07
source: "https://x.com/i/article/2085277118741590016"
author: "Annabell"
tags: [evals, datasets, langfuse, agents, llm-as-judge, error-analysis]
via: "Twitter bookmark from @annabellschfr"
---

Langfuse Academy design guide for the work that happens *before* you bulk-write dataset rows. The trigger is the moment vibe-fixing an agent stops working: you need a repeatable set of examples that represent the application's scope so you can score quality, compare changes, and catch regressions. A dataset is not one giant bucket. Most systems end up with several, each scoped to a subsystem or a single agent step.

The recommended first artifact is a **minimally complete** dataset: about 15–30 runnable rows that cover the important input slices and already have an evaluator or review rubric. Run that version early, fix the schema and the evaluator, then expand from the gaps those runs (or production) reveal.

## The seven design steps

1. **Start with the goal.** Name the smallest useful question the dataset should answer. End-to-end datasets take the payload the application receives; step-level datasets take the structured state that step sees. If two jobs need different inputs, evaluators, or release decisions, split them — a stable regression set mixed with adversarial cases makes aggregate scores unreadable.

2. **Inspect sources before writing rows.** Three kinds: production traces (realistic paths and observed failures; scores, tickets, and complaints are discovery *signals*, not a fourth source), existing assets (old datasets, FAQs, policies, macros, CSVs, benchmarks), and synthetic cases (expert-written or model-generated gap-fills). A pass over these often shows that traces lack the retrieval context your evaluator needs, or that support already has a usable FAQ of end-to-end examples.

3. **Choose the input distribution deliberately.** First version: scenario type (jobs/intents/routes), difficulty or risk (routine / ambiguous / hard / adversarial / business-critical), and dataset role (typical, known regression, observed failure, synthetic gap-fill). The mix does **not** have to match production frequency — a regression set may over-represent failures — but the mix must be visible in metadata. Extra dimensions (channel, language, segment, region) only become balancing constraints when they change behavior.

4. **Decide how evaluation will work before writing expected outputs.** Reference-based when there is a known target (label, tool call, required fact, structured output, next action) — best for CI gates, brittle if you over-specify wording. Reference-free when every item can be judged against the same rubric (valid JSON, language match, grounding, safety, tone) — the rubric then carries the weight. Pick the cheapest evaluator that captures the requirement: code for deterministic checks, LLM-as-judge for language quality, manual annotation while you are still learning what good looks like. If you cannot name the rubric yet, start with annotation queues.

5. **Design the item schema as a contract.** The three JSON fields become concrete: `input` is what you pass into the system boundary; `expectedOutput` is only the reference the evaluator needs (omit it for deliberate reference-free eval); `metadata` holds stable slice and provenance (source, scenario, difficulty, role, review status). Enforce the schema before bulk collection. Keep behavior-shaping context (history, retrieved docs, tool state) and drop per-row natural-language summaries of structured fields.

6. **Draft the first version from the sources you already inspected.** Cover common scenarios, a few high-risk or ambiguous cases, known failures, and synthetic fills only where traces and assets leave a named hole. Do not wait until it feels complete.

7. **Run one experiment, then expand on purpose.** The first run is a contract check: does the input shape hit the real path, do evaluator outcomes make sense, does expected output serve the goal? After that, add rows for missing slices, edit rows when the rubric or shape is ambiguous, and archive rows that no longer match current prompts, tools, or policy.

## How datasets evolve

Three expansion patterns once you are in production: **production-mirroring** (interesting good *and* bad cases to grow coverage), **bad-trace expansion** (every serious failure becomes a reviewed item, scored by code, LLM-as-judge, or an annotation queue), and **purpose-specific datasets** (stable regression vs adversarial vs single-step) when one set starts mixing jobs.

## Key Takeaways

- 15–30 runnable, evaluable rows beat a large unscoped dump; expand after the first experiment
- One dataset, one job — split when inputs, evaluators, or ship/no-ship decisions diverge
- Inspect traces, existing assets, and synthetic gaps before writing items
- Pick reference-based vs reference-free (and the cheapest evaluator) *before* expected outputs
- Treat `input` / `expectedOutput` / `metadata` as an enforced contract, not free-text notes
- Grow from production failures and named holes; archive stale rows instead of letting them poison the score

## Links

- [X article](https://x.com/i/article/2085277118741590016)
- [Langfuse Academy: designing great datasets](https://langfuse.com/academy/datasets/designing-great-datasets)
- [Langfuse Academy: datasets](https://langfuse.com/academy/datasets)
- [Original Tweet](https://x.com/annabellschfr/status/2085637116650733812)

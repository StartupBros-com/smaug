---
title: "How to build an eval set you can maintain"
type: article
date_added: 2026-08-18
source: "https://x.com/i/article/2089813350406569984"
author: "Lotte Verheyden"
tags: [evals, langfuse, agents, metrics, error-analysis, llm-as-judge, observability]
via: "Twitter bookmark from @lotte_verheyden"
---

Langfuse Academy page on the step most teams skip: choosing what to evaluate before writing evaluators. Lotte Verheyden's rule is that a metric set is a living artifact, not a catalog import — every extra metric is another evaluator and dataset to run, and a score you would not act on is noise. The page is the "I have traces, how do I set up evals?" answer, and it points at the companion academy pieces on [error analysis](https://langfuse.com/academy/monitoring/error-analysis) and [writing good evaluators](https://langfuse.com/academy/evaluate/writing-evaluators) for the adjacent work.

Metrics fall into three roles that should be mixed, not collapsed: **goal metrics** (is quality improving on the thing we are actually building?), sourced from error analysis and product goals; **guardrails** (did we regress on something that must never break?), sourced from requirements, compliance, and past incidents; and **operational metrics** (cost, requests/hour), which tracing already gives you for free. Goal metrics are the ones you push up; guardrails catch the one-time-is-too-many failures; operational metrics explain the system. Off-the-shelf catalogs (hallucination, toxicity, helpfulness) are fine for exploration and usually wrong as a default, because they measure abstract qualities rather than how *this* application fails.

Two filters decide what survives. First, one-time prompt fixes vs generalization problems: invalid JSON, a wrong date format, markdown on a plain-text channel, or a missing "I am an AI" disclosure should be a prompt change you then forget — not a forever-metric. Groundedness against retrieved context, whether the right context was fetched, whether the user request was actually answered, and whether the right tool got the right arguments are the kind of failure that recurs and deserves a score. Second, tie every metric to a decision (block the deploy, roll back the prompt, open an investigation). Conversation length is the anti-example: it rises when users are engaged *and* when they are stuck, so you cannot act on it alone. OpenAI's receipt-processing walkthrough is the other: merchant-name extraction was wrong 85% of the time but uncorrelated with the audit decision the system existed to make, so they stopped tracking it.

Budget is the last prune. Code evaluators are nearly free; LLM-as-a-judge costs money and is harder to keep calibrated. An unimportant expensive metric should be cut. Starting from zero: bootstrap 30–50 traces with a free-text note plus an overall pass/fail, cluster the notes into named failure categories, then create one boolean score per category (the error-analysis loop). Keep the set alive by re-running error analysis after prompt rewrites, model swaps, and new features; retiring non-guardrail scores that have sat at 100% for months; and re-validating against fresh human labels, because Goodhart's law applies the moment you start tuning prompts against the metrics.

## Key Takeaways

- Pick the metric set before you write evaluators; source candidates from real trace failures, not a generic hallucination/toxicity catalog
- Mix three roles: goals you push up, guardrails that must never break, operational cost/throughput you get from tracing
- Keep the set small — every metric is an evaluator plus a dataset to maintain, and "everything is important" means nothing is
- Drop one-time prompt-fixable failures (JSON, date format, channel markdown); keep generalization problems (groundedness, retrieval, tool choice)
- Only keep a metric if a move would change a decision; conversation length and uncorrelated 85%-wrong merchant names are noise
- Prefer cheap code graders; spend LLM-as-judge budget only on metrics that matter
- Bootstrap with 30–50 traces (note + pass/fail → clustered boolean scores); re-run error analysis after big changes; retire 100% scores; re-label so you do not Goodhart yourself

## Links

- [Article](https://x.com/i/article/2089813350406569984)
- [Original Tweet](https://x.com/lotte_verheyden/status/2089838277729890437)
- [Langfuse Academy](https://langfuse.com/academy)
- [Error analysis](https://langfuse.com/academy/monitoring/error-analysis)
- [Writing good evaluators](https://langfuse.com/academy/evaluate/writing-evaluators)

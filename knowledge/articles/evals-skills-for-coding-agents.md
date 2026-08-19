---
title: "Evals Skills for Coding Agents"
type: article
date_added: 2026-08-17
source: "https://hamel.dev/blog/posts/evals-skills/"
author: "Hamel Husain, Shreya Shankar"
tags: [evals, agent-skills, error-analysis, llm-as-judge, rag, product-evals]
via: "Twitter bookmark from @HamelHusain"
---

Hamel Husain and Shreya Shankar's writeup for [ai-evals-course/evals-skills](https://github.com/ai-evals-course/evals-skills), a plugin that teaches a coding agent how to run *product* evals — whether *your* pipeline works on *your* task with *your* data — not foundation-model benchmarks like MMLU or HELM. The motivation is that eval tools often get in the way: they nudge teams toward generic off-the-shelf metrics and fully automated judges before anyone has looked at traces. The skills encode footguns the authors have seen across 50+ companies and the [AI Evals course](https://maven.com/parlance-labs/evals).

**start** is the router. Point the agent at it and it picks the next skill from your situation. Most of the time that is one of two:

- **eval-audit** if a pipeline already exists. It inspects the setup and ranks problems by severity. The audit is not a complete solution; it is a catch-the-common-failures pass.
- **error-discovery** if you have traces but have not analyzed them. This is the headline addition in the August 2026 update. Give the agent a JSONL/CSV/JSON file of outputs or traces; it infers content type, designs a visual encoding, builds a single-file HTML review app on Python's stdlib server (no deps), clusters the data, and serves a diverse initial sample. You leave free-text notes; the agent groups them into failure modes, tracks coverage, and proposes new samples to fill gaps. Shreya walks it live [on YouTube](https://youtu.be/tqUDjc1HzO4).

The rest of the pack: **generate-synthetic-data** (dimension-based tuple generation), **write-judge-prompt**, **validate-evaluator** (TPR/TNR and bias correction against human labels), **evaluate-rag**, and **build-review-interface**. Install with `npx skills add https://github.com/ai-evals-course/evals-skills`. The authors treat these as a starting point — skills grounded in your own data and domain will outperform the generic pack.

## Key Takeaways

- Product evals, not model leaderboards: measure *this* pipeline on *this* data
- Do not jump to off-the-shelf metrics or fully automated judges before looking at traces
- `start` routes; `error-discovery` is the first real step if you only have traces
- Error discovery = custom review app + clustered sampling + notes clustered into failure modes
- Write evals only after failure modes exist; the other skills (judges, RAG, synthetic data) come after
- Tune the skills to your domain; the published set encodes common mistakes, not your taxonomy

## Links

- [Article](https://hamel.dev/blog/posts/evals-skills/)
- [GitHub](https://github.com/ai-evals-course/evals-skills)
- [Original Tweet](https://x.com/HamelHusain/status/2089438973714440196)
- [Error-discovery walkthrough](https://youtu.be/tqUDjc1HzO4)
- [AI Evals FAQ](https://hamel.dev/blog/posts/evals-faq/)
- [AI Evals course](https://maven.com/parlance-labs/evals)

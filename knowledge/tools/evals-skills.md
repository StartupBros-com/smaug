---
title: "evals-skills"
type: tool
date_added: 2026-08-17
source: "https://github.com/ai-evals-course/evals-skills"
tags: [evals, agent-skills, error-analysis, llm-as-judge, rag, claude-code]
via: "Twitter bookmark from @HamelHusain"
---

Skills that guide AI coding agents through product-specific evals (not foundation-model benchmarks). Published by Hamel Husain and Shreya Shankar out of the AI Evals course; they encode footguns seen across 50+ company engagements. Install the whole plugin or a single skill via `npx skills`.

`start` is the entry point: it inspects your situation and routes to the right workflow. The two most common destinations are `eval-audit` (you already have a pipeline; it surfaces problems with prioritized severity) and `error-discovery` (you have traces but no analysis). Error-discovery is the load-bearing skill: point it at a JSONL/CSV/JSON file of LLM outputs or traces and it designs a zero-dependency HTML review app, clusters the data, serves a diverse sample, and turns your free-text notes into named failure modes while fetching more examples to cover gaps.

The rest of the set covers the work that should only happen after failure modes exist: synthetic test inputs, LLM-as-judge prompt design, judge calibration against human labels (TPR/TNR, bias correction), RAG retrieval/generation eval, and custom annotation UIs.

## Key Features

- `start` — situation router
- `eval-audit` — inspect an existing eval pipeline, ranked findings
- `error-discovery` — review app + intelligent sampling + failure-mode clustering
- `generate-synthetic-data` — dimension-based tuple generation
- `write-judge-prompt` / `validate-evaluator` — judge design and calibration
- `evaluate-rag` — retrieval and generation quality
- `build-review-interface` — custom annotation UIs
- Install one skill or the whole plugin; `npx skills check` / `update` for upgrades

## Quick Start

```bash
npx skills add https://github.com/ai-evals-course/evals-skills
# or a single skill:
npx skills add https://github.com/ai-evals-course/evals-skills --skill error-discovery
```

Then: `Can you help me do error analysis on traces.jsonl?`

## Links

- [GitHub](https://github.com/ai-evals-course/evals-skills)
- [Writeup](https://hamel.dev/blog/posts/evals-skills/)
- [Original Tweet](https://x.com/HamelHusain/status/2089438973714440196)
- [Error-discovery walkthrough](https://youtu.be/tqUDjc1HzO4)
- [Hamel's evals notes](https://hamel.dev/notes/llm/evals/)

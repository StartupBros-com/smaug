---
title: "LAB: Law Firm Knowledge"
type: article
date_added: 2026-08-07
source: "https://x.com/i/article/2084850442614554624"
author: "Julio Pereyra"
tags: [agent-evaluation, legal-ai, enterprise-search, long-context, memory, benchmarks]
via: "Twitter bookmark from @EngramLab"
---

Harvey and Engram open-source Calderwood & Harkness (C&H), a synthetic but grounded law-firm environment for evaluating agents on persistent institutional knowledge. The corpus represents 46 clients, 15 practice areas, 266 matters, 9,288 files, and 108 million tokens. Its 250 tasks cover retrieval and reasoning problems such as finding precedent, inferring industry trends, and recovering client preferences across an entire evolving file system rather than from a fresh per-task context window.

Each fictional matter begins as a short specification with task-salient features, then becomes 10–200 realistic documents. Features are pinned to the files that express them, allowing the benchmark to calculate ground truth while leaving the underlying structure hidden from the agent. Agents must therefore recover the answer from unstructured documents whose relevant evidence is distributed and often cannot be found with a simple keyword search. An LLM judge grades each task against a rubric of atomic success criteria.

The reported baseline runs show a distinction between reasoning and coverage: strong models often reason correctly about the information they retrieve, but they do not know when their search has found every relevant matter or document. They satisfy roughly half of the rubric criteria and may take five or more minutes per task; performance falls to zero all-pass as enumeration demands grow. The authors argue that enterprise agents need reusable corpus representations — indexes, summaries, and memory — so understanding costs can be amortized across many tasks.

## Key Takeaways

- C&H evaluates long-lived agent work against one 108-million-token firm corpus instead of resetting context for every benchmark question.
- The environment contains 250 tasks across 266 matters, designed to require both retrieval and reasoning over realistic, distributed document evidence.
- Short structured matter specifications make ground truth traceable while the generated file system stays unstructured for agents at runtime.
- The stated baseline failure is incomplete search coverage, not primarily faulty reasoning about facts that were found.
- Persistent indexes, summaries, and memory are proposed as the way to amortize repository-scale understanding across future tasks.

## Links

- [Article](https://x.com/i/article/2084850442614554624)
- [Dataset](https://github.com/harveyai/harvey-labs/tree/main/tasks/firm-knowledge)
- [Standard LAB harness](https://github.com/harveyai/harvey-labs/tree/main/harness)
- [Original Tweet](https://x.com/EngramLab/status/2085780822720909424)

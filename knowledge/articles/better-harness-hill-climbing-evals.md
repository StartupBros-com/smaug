---
title: "Better Harness: A Recipe for Harness Hill-Climbing with Evals"
type: article
date_added: 2026-04-08
source: "https://x.com/i/article/2041729463918989312"
author: "Viv"
tags: [agent-harnesses, evaluations, agent-engineering]
via: "Twitter bookmark from @Vtrivedy10"
---

This article proposes Better-Harness, a prototype process for iteratively improving agent harnesses with evaluation results as the learning signal. It treats curated evals and production traces as the behavioral data for harness engineering, while holdout sets and human review protect against optimizing prompts and tools only for a visible benchmark.

## Key Takeaways

- Source evals from hand-authored cases, production traces, and curated external datasets, then tag them by behavior so subsets and holdouts can test particular capabilities economically.
- Separate optimization and holdout examples by behavioral category, record a baseline, and validate every targeted change against both improvement and regressions to reduce reward hacking.
- Keep a human acceptance step: reviewers can reject token-heavy, brittle, or overfit instructions that metrics accept, while successful cases become regression tests rather than a permanently growing suite.

## Links

- [Article](https://x.com/i/article/2041729463918989312)
- [Original Tweet](https://x.com/Vtrivedy10/status/2041927488918413589)

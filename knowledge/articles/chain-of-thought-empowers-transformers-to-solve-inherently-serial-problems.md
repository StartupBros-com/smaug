---
title: "Chain of Thought Empowers Transformers to Solve Inherently Serial Problems"
type: article
date_added: 2024-09-16
source: "https://arxiv.org/abs/2402.12875"
author: "Zhiyuan Li, Hong Liu, Denny Zhou, Tengyu Ma"
tags: [transformers, chain-of-thought, llm-reasoning, theoretical-computer-science]
via: "Twitter bookmark from @NickADobos"
---

A theoretical and empirical study explaining why chain-of-thought improves transformers on tasks requiring serial computation. It shows that a constant-depth transformer without CoT is limited to shallow circuit classes, while generating intermediate reasoning tokens lets the same architecture perform computations corresponding to Boolean circuits whose size grows with the number of CoT steps.

## Key Takeaways

- With constant-bit precision, constant-depth transformers without CoT can solve only problems in AC⁰, a stricter bound than earlier TC⁰ results.
- Given T reasoning steps, a constant-depth transformer using constant-bit precision and O(log n) embeddings can solve any problem computable by Boolean circuits of size T.
- CoT converts a primarily parallel architecture into one capable of serial computation by feeding each generated intermediate result into the next step.
- Experiments on permutation-group composition, iterated squaring, and circuit-value tasks show large accuracy gains from CoT, especially for shallow models.
- The expressiveness result also makes the inference trade-off explicit: more difficult serial tasks require more generated tokens and therefore more inference compute.

## Links

- [Paper](https://arxiv.org/abs/2402.12875)
- [Original Tweet](https://x.com/denny_zhou/status/1835761801453306089)

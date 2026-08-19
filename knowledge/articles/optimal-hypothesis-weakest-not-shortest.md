---
title: "The Optimal Choice of Hypothesis Is the Weakest, Not the Shortest"
type: article
date_added: 2026-08-03
source: "https://arxiv.org/abs/2301.12987"
author: "Michael Timothy Bennett"
tags: [generalization, mdl, agi, self-improvement, research, hypotheses, apperception]
via: "Twitter bookmark from @headinthebox"
---

AGI-23 paper arguing that minimum description length is the wrong proxy for which hypothesis will generalize. If A ⊂ B, generalization is inferring from A a hypothesis sufficient to construct B. Many hypotheses fit A; only some extend to B. The usual move is to pick the shortest, treating compression as a stand-in for intelligence. Bennett shows compression is neither necessary nor sufficient to maximize the probability that a hypothesis generalizes, then proposes a different proxy — weakness — that is unrelated to length or simplicity.

Weakness is the size of a hypothesis's extension: how many situations it remains compatible with. Under a uniform task distribution, no other proxy weakly dominates weakness maximization (none matches it on every task and beats it on at least one). On binary-arithmetic experiments, maximizing weakness generalized at 1.1× to 5× the rate of minimum description length. Bennett uses that gap to explain why DeepMind's Apperception Engine generalizes: it is effectively preferring weaker hypotheses, not shorter ones.

Erik Meijer bookmarked this as the paper to inject into any self-improvement loop — show it to the model and tell it to incorporate the criterion, so revision prefers weaker/broader hypotheses over compressed ones.

Published in *Proceedings of the 16th International Conference on Artificial General Intelligence* (LNCS 13921, pp. 42–51). arXiv:2301.12987v4 (11 Apr 2024).

## Key Takeaways

- Shortest ≠ most generalizable; MDL/compression is neither necessary nor sufficient
- Weakness (how broadly a hypothesis remains compatible) is the better selection proxy
- Under uniform tasks, weakness maximization is not dominated by any alternative proxy
- Empirically 1.1–5× better generalization than MDL on binary arithmetic
- Offered as the reason DeepMind's Apperception Engine generalizes
- Practical use in agent loops: when the model revises itself, prefer weaker hypotheses over shorter ones

## Links

- [arXiv abs](https://arxiv.org/abs/2301.12987)
- [PDF v4](https://arxiv.org/pdf/2301.12987v4)
- [Springer DOI](https://doi.org/10.1007/978-3-031-33469-6_5)
- [Original Tweet](https://x.com/headinthebox/status/2084414685701632406)

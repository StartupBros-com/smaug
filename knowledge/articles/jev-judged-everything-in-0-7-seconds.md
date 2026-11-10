---
title: "Mini Vibe Check: TypeSafe's Jev judged everything I've written in 0.7 seconds"
type: article
date_added: 2026-09-15
source: "https://every.to/vibe-check/mini-vibe-check-typesafe-s-jev-judged-everything-i-ve-written-in-0-7-seconds"
author: "Mike Taylor (Every)"
tags: [models, evals, llm-as-judge]
via: "Twitter bookmark from @danshipper"
---

Every's hands-on test of Jev, TypeSafe's new model that outputs calibrated probabilities instead of text, positioned as a fast cheap judge for decisions that would otherwise need a frontier LLM.

## Key Takeaways

- Trained with reinforcement learning for calibrated decisions; non-autoregressive design answers many questions in parallel; $42 per billion tokens, output free.
- 777 judgments over 37 documents in under 0.7 seconds for about a quarter of a cent.
- Versus Fable 5.1 on 12 passages: median 0.35s vs 8.83s, about 580x cheaper, caught 6 of 7 planted defects vs 7 of 7.
- Framed as a "code linter for knowledge work"; validate accuracy for your use case first.

## Links

- [Article](https://every.to/vibe-check/mini-vibe-check-typesafe-s-jev-judged-everything-i-ve-written-in-0-7-seconds)
- [Original Tweet](https://x.com/danshipper/status/2099947471518474522)

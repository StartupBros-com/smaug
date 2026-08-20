---
title: "Auto-grading decade-old Hacker News discussions with hindsight"
type: article
date_added: 2025-12-10
source: "https://karpathy.bearblog.dev/auto-grade-hn/"
author: "Andrej Karpathy"
tags: [large-language-models, Hacker-News, retrospective-analysis, prediction]
via: "Twitter bookmark from @karpathy"
---

Andrej Karpathy describes an experiment in automated hindsight analysis: the HN Time Capsule project processes every Hacker News front page from December 2015—930 articles and their discussions—with GPT-5.1 Thinking. The system compares contemporary comments and predictions with what actually happened over the following decade, then highlights the most prescient and least accurate contributions.

The project was built as a short, deliberately exploratory exercise: approximately three hours of implementation and roughly an hour and $60 of model execution. Its broader implication is that increasingly capable and inexpensive models can review large public archives in retrospect, turning scattered historical conversations into structured evidence about judgment and forecasting.

## Key Takeaways

- Retrospective LLM analysis can turn archived community discussion into a dataset for studying prediction quality.
- The project evaluates full HN front pages, original articles, and comment trees rather than treating a single comment in isolation.
- Parsed grades and a Hall of Fame make individual analyses comparable across hundreds of discussions.
- The experiment raises a durable implication for public writing: sufficiently cheap future models may scrutinize every searchable contribution in detail.

## Links

- [Article](https://karpathy.bearblog.dev/auto-grade-hn/)
- [HN Time Capsule repository](https://github.com/karpathy/hn-time-capsule)
- [Results browser](https://karpathy.ai/hncapsule/)
- [Original Tweet](https://x.com/karpathy/status/1998803709468487877)

---
title: "Open-sourcing the For You timeline"
type: article
date_added: 2026-08-13
source: "https://x.com/i/article/2087916177259388928"
author: "X Open Source"
tags: [x, recommendation-algorithm, transparency, for-you, xai, ranking, content-labels]
via: "Twitter bookmark from @IterIntellectus"
---

X's second major For You transparency drop: they open-sourced the code that decides a post's visibility — now including model configuration, filters, and core ranking details on top of the earlier x-algorithm release — and paired it with a label-transparency tool so you can see whether your account or posts carry the visibility-limiting labels that code actually consults.

The two pieces are meant to lock together. The repo shows how For You is generated and which labels change rank or drop a post; the new "Under the Hood" page (`x.com/i/under_the_hood`) shows whether those labels are on you. Eligible accounts that posted 10+ times in the prior month can inspect a month of account- and post-level labels and download the data. The first ship is a pilot to a randomized test group of accounts at least one year old; X says the pipeline is built for ongoing updates as the ranker changes, and that third-party recommender-system researchers previewed the dump.

The stated goal is that a user can answer three questions without trusting a blog post: is the platform limiting my reach, is the system fair, and why am I seeing this. Code lives at `github.com/xai-org/x-algorithm`.

## Key Takeaways

- This release adds model config, filter logic, and core ranking details — not just the earlier retrieval/mixer skeleton
- Visibility labels in the ranker are now inspectable on a per-account and per-post basis via Under the Hood
- Pilot gate: account ≥1 year old, 10+ posts in the prior month, randomized rollout
- X invited outside recommender-system experts to pressure-test the dump before publishing
- Companion repo remains [xai-org/x-algorithm](https://github.com/xai-org/x-algorithm)

## Links

- [Article](https://x.com/i/article/2087916177259388928)
- [Under the Hood](https://x.com/i/under_the_hood)
- [GitHub](https://github.com/xai-org/x-algorithm)
- [Original Tweet](https://x.com/XOpenSource/status/2087951962004230428)

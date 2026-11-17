---
title: "Abseil Performance Hints"
type: article
date_added: 2026-08-26
source: "https://abseil.io/fast/hints.html"
author: "Jeff Dean, Sanjay Ghemawat"
tags: [performance, optimization, cpp, google, engineering-practices]
via: "Twitter bookmark from @PremiumGoblin"
---

A document by Jeff Dean and Sanjay Ghemawat (originally written 2023/07/27, last updated 2025/12/16) collecting the general principles and specific techniques they use when tuning the performance of code. It uses illustrative change lists (CLs) as examples; most concrete suggestions reference C++ types, but the principles apply to other languages. Bookmarked as material to feed to coding agents so they develop good taste when searching for performance experiments.

## Key Takeaways

- Performance work has mattered at Google since its earliest days because it lets the same hardware serve more users.
- The guide pairs general principles with concrete, real-world CL examples of each technique.
- Useful as agent context when hill climbing on performance metrics (speed, memory, avoided work).
- Note: only the introduction was captured in the extracted content; consult the source for the full list of hints.

## Links

- [Article](https://abseil.io/fast/hints.html)
- [Original Tweet](https://x.com/PremiumGoblin/status/2092463138306204006)

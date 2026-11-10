---
title: "Agentic coding is straining CI: how we scaled test impact analysis at Anthropic"
type: article
date_added: 2026-09-15
source: "https://claude.com/resources/articles/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic"
author: "Anthropic"
tags: [ci, testing, scaling, agents]
via: "Twitter bookmark from @sluongng"
---

Anthropic engineering account of how agent-written code drove a 25x rise in CI job volume in six months and overwhelmed its test impact analysis service, which selects which tests to run per change.

## Key Takeaways

- v0 used a single-process listener plus selector; listener lag left the selector on stale data.
- Doubling cores, per-package sharding, and daily restarts bought only about 70 days, 29 days, and under a day.
- The redesign uses stateless listener workers appending to an in-memory journal and a small consumer rolling up per-test history; built in three weeks, backlog went flat.
- Lesson: assume ~25x load in two quarters, design v0 for 10-20x, keep state out of the process, avoid critical single instances.

## Links

- [Article](https://claude.com/resources/articles/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic)
- [Original Tweet](https://x.com/sluongng/status/2099772874730958853)

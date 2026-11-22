---
title: "Making OpenClaw CI faster and 95% cheaper"
type: article
date_added: 2026-11-22
source: "https://vincent.build/openclaw-ci-cost-reduction/"
author: "Vincent Koc"
tags: [ci, github-actions, testing, openclaw, agents, cost-reduction]
via: "Twitter bookmark from @vincent_koc"
---

Vincent Koc's essay and technical appendix on how OpenClaw cut CI cost after agent-written code flooded the pipeline with tests, jobs and retries. Blacksmith runner-hours fell from 158,546 (17-23 Sep peak week) to 21,395 (6-13 Nov), an 86.5% drop, and the estimated value of that compute fell 95.5% (about $1.27M to $57K per 30 days at published prices). Jobs fell 79.7%. Koc is explicit that the workload changed between the two weeks, so neither number is attributable to a single fix, and the PR-to-merge improvement is not yet established.

## Key Takeaways

- Delete waste before optimizing it: agent-grown suites accumulate implementation-mirroring tests, so each test should name a contract it protects before it gets a faster machine.
- A test-line ratchet makes growth visible: over-budget changes must offset added test lines or record a justified allowance (later: 400 net new test lines allowed without an allocation record).
- Core test share peaked at 68.9% on 28 Sep and fell to 63.2% (tests plus support) by 13 Nov; net test lines fell by about 418K while implementation grew.
- Every optimization needs a cost-and-wait tradeoff check: one paired job on a smaller runner was 41.7% cheaper but about 16.5% slower.
- Other levers: run checks at the right stage, test only what changed (with full-suite fallback when selection is uncertain), catch cheap failures locally, use faster tools, reuse setup and caches, and balance and size the remaining jobs.
- The post ends with a prompt you can hand an agent to audit a repo's CI, baseline it, and implement changes in reviewable steps.

## Links

- [Article](https://vincent.build/openclaw-ci-cost-reduction/)
- [Original Tweet](https://x.com/vincent_koc/status/2122443715440689638)

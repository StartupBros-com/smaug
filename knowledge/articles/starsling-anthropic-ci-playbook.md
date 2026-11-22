---
title: "Anthropic's CI playbook"
type: article
date_added: 2026-11-22
source: "https://starsling.dev/ci-playbooks/anthropic"
author: "StarSling"
tags: [ci, github-actions, performance, anthropic, bun]
via: "Twitter bookmark from @yonasbe"
---

StarSling's CI playbook describes how Anthropic has optimized its CI and translates it into GitHub Actions optimizations other teams can apply. Per the bookmarked tweet, it draws on 17 merged PRs across 5 repos plus 7 posts from the Anthropic and Bun teams, distilled into 23 techniques. The motivation is that Claude writes about 80% of Anthropic's code and its CI jobs grew 25x in six months. A companion blog post (starsling.dev/blog/anthropic-ci) packages each technique as a copy-paste prompt for a coding agent.

## Key Takeaways

- Run each test shard's reliable files in one parallel test-runner invocation with workers sized to the runner's cores (Bun: shards 8.5 to 4.9 min)
- Retry a job only when it lost its runner, never on test timeouts (Bun: 97% of ~670 timeout retries were wasted)
- Move checks that do not need the build into their own job so they stop waiting on it
- Merge build jobs onto one larger runner if the slowest build job leaves its runner idle (Bun: 26 to 13 build machines per build)
- When a required check fails on main, have an agent read logs, commit and recent runs and post an analysis for on-call (Anthropic: median 14 min to first analysis)
- From the earlier thread: run only affected tests on PRs, full suite on main and in the merge queue, use path filters, trigger CI once per change, and set timeout-minutes

## Links

- [Article](https://starsling.dev/ci-playbooks/anthropic)
- [Original Tweet](https://x.com/yonasbe/status/2123564818846429584)

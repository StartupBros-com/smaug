---
title: "Wait for pull request events with GitHub CLI"
type: article
date_added: 2026-11-22
source: "https://github.blog/changelog/2026-11-18-wait-for-pull-request-events-with-github-cli/"
author: "Allison (GitHub Changelog)"
tags: [github-cli, agents, event-streams, automation]
via: "Twitter bookmark from @GHchangelog"
---

GitHub CLI v2.105.0 integrates with GitHub Event Streams so a single command can block until a pull request changes, replacing poll-in-a-loop scripts for both humans and coding agents.

## Key Takeaways

- `gh event listen` takes a pull request URL plus event types, sets up the subscription, opens the stream, and prints each event as one line of JSON.
- By default it exits after the first event; `--count` waits for N events, `--follow` keeps listening, `--timeout` bounds the wait, and `--jq` / `--template` shape the output.
- Waitable events include submitted reviews, PR state and head changes, merge conflicts, and completed check suites.
- `gh event subscription create|list|view|delete` manages subscriptions directly.
- `gh pr create`, `gh pr view`, `gh run view`, `gh run watch`, and `gh api` now point agents to `gh event listen` instead of polling.
- The commands are in preview, and Event Streams access on GitHub.com requires a waitlist signup.

## Links

- [Article](https://github.blog/changelog/2026-11-18-wait-for-pull-request-events-with-github-cli/)
- [Original Tweet](https://x.com/GHchangelog/status/2123212186117910550)

---
title: "Don't Be Lazy to Automate Your Work with Routines"
type: article
date_added: 2026-04-18
source: "https://x.com/i/article/2045262387041730560"
author: "Leo"
tags: [claude, automation, ai-agents, github, scheduling]
via: "Twitter bookmark from @defileo"
---

The article presents Claude Routines as a way to deploy a defined prompt, repository, and environment on cloud infrastructure rather than invoke Claude manually. It describes three activation paths—recurring schedules, authenticated HTTP API calls, and GitHub events—and illustrates them with backlog grooming, pull-request review, alert triage, documentation-drift checks, and deploy verification.

## Key Takeaways

- Scheduled routines are positioned for predictable recurring work such as daily standups, weekly documentation reviews, and maintenance digests.
- API-triggered routines let monitoring, deployment, and internal systems supply contextual text to start an autonomous run in response to an event.
- GitHub-triggered routines can react to repository activity, with the article recommending narrowly scoped prompts and event filters for mechanical review and maintenance tasks.
- The article notes that routines consume subscription quota, have run caps, and are constrained to `claude/*` branches by default unless unrestricted pushes are explicitly enabled.

## Links

- [Article](https://x.com/i/article/2045262387041730560)
- [Original Tweet](https://x.com/defileo/status/2045491492412911932)
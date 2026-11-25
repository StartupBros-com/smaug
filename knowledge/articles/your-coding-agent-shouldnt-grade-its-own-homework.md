---
title: "Your coding agent shouldn't grade its own homework"
type: article
date_added: 2026-11-22
source: "https://stackoverflow.blog/2026/11/13/your-coding-agent-shouldn-t-grade-its-own-homework/"
author: "Jeff An"
tags: [ai-agents, testing, verification]
via: "Twitter bookmark from @wuweiweiwu"
---

Jeff An (CTO and co-founder of Momentic) argues that coding agents are unreliable judges of their own work, so the agent that writes code should be kept separate from the one that verifies it. Momentic hand-audited 1,000 agent-written unit tests and found only about 10% worth keeping.

## Key Takeaways

- Of 1,000 audited agent-written tests: 31.6% checked trivial things, 22.8% were redundant, 22.4% were mocked so heavily they'd pass if the feature broke; only 96 were worth keeping.
- Shared blind spots: tests encode the same assumptions as the implementation, so agents verify what they built rather than what they should have built.
- Cited an experiment across 111 tasks where agents that wrote tests succeeded 65.3% of the time versus 66.2% for those that didn't.
- Proposed fix: a separate QA agent with fresh context, given only requirements and a running app, exercising real workflows in browsers and mobile; multiple model providers offset self-preference bias.
- Measure quality by real defects caught per time and cost, not test counts; favors targeted end-to-end validation over more unit tests.

## Links

- [Article](https://stackoverflow.blog/2026/11/13/your-coding-agent-shouldn-t-grade-its-own-homework/)
- [Original Tweet](https://x.com/wuweiweiwu/status/2123845941367095634)

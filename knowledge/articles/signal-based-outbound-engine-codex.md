---
title: "How to Build a Signal-Based Outbound Engine on Codex"
type: article
date_added: 2026-07-02
source: "https://x.com/i/article/2072649745882075136"
author: "Nicolas Finet"
tags: [outbound, sales-automation, codex, agent-workflows]
via: "Twitter bookmark from @nifinet"
---

Nicolas Finet describes a file-based outbound workflow that uses Codex to turn concrete market signals into a human-reviewed sales queue. The system treats timing as the central outbound advantage: hiring, funding, leadership changes, public problem mentions, or intent signals provide an evidence-backed reason to contact an account now.

The workflow is a loop—sense, score, write, check, log, and learn—centered on a shared account record. Each stage has a narrow prompt and JSON schema so downstream jobs consume predictable inputs rather than loosely formatted prose. The author recommends starting manually with a small account set, rejecting weak evidence early, and only drafting messages whose observed signal would make the outreach materially different.

The article separates drafting from review to give the quality gate an independent, skeptical role. Approved messages remain in a human queue; outcomes and specific failure reasons feed back into account memory and weekly changes to scoring rules and message patterns. It recommends keeping unattended scheduled runs file-based, with external data supplied by the team's existing stack and human decisions kept outside the autonomous loop.

## Key Takeaways

- A concrete, recent signal should supply the "why now" for every outreach recommendation.
- JSON schemas and a shared record make multi-step agent jobs inspectable and composable.
- Separate message writing from checking so the same agent step does not merely justify its own draft.
- Start with a small, manually reviewed queue and use outcomes to retire low-value signals and weak copy patterns.

## Links

- [Article](https://x.com/i/article/2072649745882075136)
- [Original Tweet](https://x.com/nifinet/status/2072704249663004773)

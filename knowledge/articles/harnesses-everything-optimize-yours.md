---
title: "Harnesses are everything. Here's how to optimize yours."
type: article
date_added: 2026-04-17
source: "https://x.com/i/article/2041339868677021696"
author: "Alex Ker"
tags: [harness-engineering, coding-agents, prompt-design, subagents]
via: "Twitter bookmark from @thealexker"
---

Alex Ker argues that a coding agent's harness is the operational layer that turns model intelligence into reliable work: it manages context across stateless interactions, exposes tools and I/O, and supplies guardrails. Rather than switching constantly between agent products, he recommends iterating deliberately on one harness and treating failures as data about its configuration and workflow.

The guide focuses on three improvements. Keep globally injected instruction files concise and human-authored, expose deeper knowledge only when it is relevant, and use an explicit research-plan-implement sequence. It also frames subagents as a context-management tool: delegate work when the main agent only needs the conclusion, but keep connected reasoning in the main session.

## Key Takeaways

- Preserve instruction budget by making global CLAUDE.md or AGENTS.md files minimal, then use descriptively named documents and command help for progressive disclosure.
- Use R.P.I. — research, plan, implement — to separate codebase discovery and human plan review from execution rather than collapsing all three into one prompt.
- Use subagents for independent retrieval or investigation whose intermediate steps do not need to remain in the primary context window.
- Fan-out supports breadth across competing theories, while pipelines apply sequential lenses that add depth before a final synthesis.
- Commit to improving the harness that fits the team's normal work and record failures so accumulated workflow knowledge compounds over time.

## Links

- [Article](https://x.com/i/article/2041339868677021696)
- [Original Tweet](https://x.com/thealexker/status/2045203785304232162)

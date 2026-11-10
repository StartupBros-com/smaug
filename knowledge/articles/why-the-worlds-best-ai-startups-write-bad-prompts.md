---
title: "Why the World's Best AI Startups Write Bad Prompts (and How to Fix This)"
type: article
date_added: 2026-11-10
source: "https://x.com/wulfie_bain_/status/2098060386813566990"
author: "Wulfie Bain"
tags: [prompt-engineering, agents, evals, openai]
via: "Twitter bookmark from @wulfie_bain_"
---

Wulfie Bain, who leads Applied AI Engineering for OpenAI's startups team across EMEA and APAC, argues that even top startups ship spaghetti prompts because prompts only grow: new rules are appended, contradictions pile up, and implicit knowledge makes instructions ambiguous. He reports rewrites that sped agents up 50%, raised 7-day retention 40%, and cut costs 30%.

## Key Takeaways

- Prompt evolution is accretive; nobody reviews the whole prompt end to end, and conditional prompt injection hides interaction effects
- Prompting decisions are product decisions: output formatting, speed vs thoroughness, and approval behavior are all UX
- Treat prompts as code: MECE sections (no overlap, full coverage), DRY, IF/ELSE-level specificity on core branches, periodic refactors
- Separate Behavior (backend: tools, planning) from Output (frontend: user-facing format)
- Suggested template: Background, Behaviour, Output, organized hierarchically so edits and model-upgrade deletions are one-section changes
- Evals force you to specify what you actually want; smarter models and meta-prompting do not remove the need for clear preferences

## Links

- [Article](https://x.com/wulfie_bain_/status/2098060386813566990)
- [Original Tweet](https://x.com/wulfie_bain_/status/2098060760786014239)

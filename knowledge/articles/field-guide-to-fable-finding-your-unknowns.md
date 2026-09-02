---
title: "A Field Guide to Fable: Finding Your Unknowns"
type: article
date_added: 2026-07-06
source: "https://x.com/i/article/2073090223194755072"
author: "Thariq"
tags: [ai-agents, agentic-coding, planning, prototyping]
via: "Twitter bookmark from @trq212"
---

Thariq frames agentic coding as the continuous work of reducing unknowns between a prompt’s map and the real codebase’s territory. More capable models increase the possible scope of work, but their output is still constrained by the user’s ability to identify assumptions, preferences, historical context, and decision points that were never made explicit.

The article separates these gaps into known knowns, known unknowns, unknown knowns, and unknown unknowns. It recommends using an agent before, during, and after implementation to expose them: run a blind-spot pass, brainstorm prototypes, invite one-question-at-a-time interviews, provide source-code references, write an implementation plan around decisions likely to change, log deviations, and create explainers or quizzes after shipping.

## Key Takeaways

- Ask for a blind-spot pass when entering an unfamiliar subsystem or domain, including the user’s existing knowledge as context.
- Prototype and brainstorm before committing to a detailed implementation when preferences are easier to recognize than articulate.
- Use references—especially source code—to communicate behavior and design choices that prompts cannot describe precisely.
- Preserve implementation deviations and assess finished work through explainers and quizzes, not only a diff review.

## Links

- [Article](https://x.com/i/article/2073090223194755072)
- [Original Tweet](https://x.com/trq212/status/2074164294204395595)

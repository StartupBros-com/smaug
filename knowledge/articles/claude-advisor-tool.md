---
title: "Claude Advisor Tool"
type: article
date_added: 2026-06-30
source: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/advisor-tool"
author: "Anthropic"
tags: [claude, agents, multi-model, tool-use, orchestration]
via: "Twitter bookmark from @ClaudeDevs"
---

Anthropic’s Advisor Tool documentation describes a multi-model agent pattern in which a primary model can consult a more capable model for guidance when needed. The bookmarked thread frames two complementary designs: keep Sonnet 5 in the execution role while a stronger model plans, or let Sonnet 5 run independently and invoke an advisor only when it is stuck. This makes model capability a targeted escalation rather than a requirement for every step of a long-running workflow.

## Key Takeaways

- Use a stronger model to plan while Sonnet 5 carries out the work when planning quality is the main constraint.
- Use an advisor-on-demand design when Sonnet 5 can complete most steps independently but needs help with difficult decisions or recovery.
- The parent thread highlights long-running agent qualities—state retention, error recovery, and self-checking—that make selective escalation practical.

## Links

- [Advisor Tool documentation](https://platform.claude.com/docs/en/agents-and-tools/tool-use/advisor-tool)
- [Original Tweet](https://x.com/ClaudeDevs/status/2072018514295320843)

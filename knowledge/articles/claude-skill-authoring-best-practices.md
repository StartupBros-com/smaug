---
title: "Claude Skill Authoring Best Practices"
type: article
date_added: 2026-03-28
source: "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices"
author: "Anthropic"
tags: []
via: "Twitter bookmark from @pbakaus"
---

Anthropic's official documentation for writing effective Claude skills (tools/functions exposed to Claude agents). The page covers how to design skill inputs and outputs, how to scope what a skill is allowed to do, and how to balance giving Claude freedom to act vs. constraining it to safe, predictable behavior.

Notably, Anthropic updated their guidance on how much freedom to give a skill — previously their advice trended toward "don't constrain skill freedom," but practitioners found this wasn't universally sound. The update reflects real-world feedback that some constraints are necessary and that blanket freedom can lead to unpredictable agent behavior.

## Key Takeaways

- Skill design is a balance: too constrained and you kill the agent's usefulness, too unconstrained and you get unsafe or unreliable behavior
- Anthropic revised their stance on skill freedom after community feedback — the updated docs add nuance about when constraints are appropriate
- Skill authoring quality is a major lever on agent reliability, separate from model quality or prompt engineering

## Links

- [Article](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)
- [Original Tweet](https://x.com/pbakaus/status/2037763964776673494)

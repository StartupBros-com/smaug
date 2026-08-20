---
title: "Multi-agent orchestration with Claude Managed Agents"
type: article
date_added: 2026-06-30
source: "https://platform.claude.com/docs/en/managed-agents/multiagent-orchestration"
author: "Anthropic"
tags: [claude, managed-agents, multi-agent-systems, orchestration, model-routing]
via: "Twitter bookmark from @ClaudeDevs"
---

This Claude platform documentation describes multi-agent orchestration in Claude Managed Agents. The bookmarked recommendation is to assign subagents to work at different capability levels—using Sonnet 5 for appropriate execution work and stronger agents where the task warrants them—rather than treating every step of an agent workflow as a single-model problem.

The associated thread adds two practical routing patterns: have a more capable model plan while Sonnet executes, or let Sonnet act as an advisor that calls a stronger model only when it encounters a hard problem. Together, these approaches make model choice part of task decomposition, balancing quality, latency, and cost against the complexity of each subtask.

## Key Takeaways

- A multi-agent coordinator can distribute subproblems among subagents with deliberately chosen model capacities.
- Planning and execution need not use the same model tier; routing can reserve expensive reasoning for work that needs it.
- An advisor or escalation pattern can let a faster agent request stronger help only when it is blocked.
- Effective orchestration depends on defining distinct responsibilities and handoffs, not merely increasing the number of agents.

## Links

- [Claude Managed Agents multi-agent orchestration](https://platform.claude.com/docs/en/managed-agents/multiagent-orchestration)
- [Original Tweet](https://x.com/ClaudeDevs/status/2072018516291825884)
- [Parent Tweet](https://x.com/ClaudeDevs/status/2072018514295320843)

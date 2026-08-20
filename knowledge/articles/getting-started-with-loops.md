---
title: "Getting started with loops"
type: article
date_added: 2026-07-06
source: "https://x.com/i/article/2074204645845839872"
author: "delba_oliveira"
tags: [ai-agents, claude-code, automation, verification]
via: "Twitter bookmark from @ClaudeDevs"
---

This Claude Code team guide defines a loop as an agent repeating cycles of work until a stop condition is met. It classifies four patterns by trigger, stopping mechanism, implementation primitive, appropriate task type, and usage control: manual turn-based work, goal-based `/goal` iterations, time-based `/loop` or `/schedule` routines, and proactive systems that combine those primitives with workflows and auto mode.

The guide argues that loops work best when their surrounding system supplies explicit verification, documentation, and resource boundaries. Success criteria should be measurable, verification should be encoded in skills, large autonomous runs should be piloted before scaling, and model capability should match the task rather than defaulting to the most expensive option.

## Key Takeaways

- Use ordinary turn-based interaction for short, exploratory tasks, and encode repeated verification steps in skills.
- Use `/goal` only when a task has deterministic completion criteria and an explicit maximum number of attempts.
- Use time-based loops for recurring input streams or external systems, with intervals matched to the rate of meaningful change.
- Treat proactive automation as a composed system that needs clean code, independent review, clear boundaries, and usage monitoring.

## Links

- [Article](https://x.com/i/article/2074204645845839872)
- [Original Tweet](https://x.com/ClaudeDevs/status/2074208949205881033)

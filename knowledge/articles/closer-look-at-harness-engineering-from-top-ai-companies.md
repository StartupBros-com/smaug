---
title: "A Closer Look at Harness Engineering from Top AI Companies"
type: article
date_added: 2026-04-22
source: "https://x.com/i/article/2046841201853390848"
author: "AlphaSignal"
tags: [harness-engineering, ai-agents, software-engineering, agent-evaluation]
via: "Twitter bookmark from @AlphaSignalAI"
---

This article compares three approaches to harness engineering: designing the environment around an AI coding agent so that instructions, constraints, tools, documentation, and verification make good work easier to produce and bad work harder to ship. It treats the harness—not only the model—as a major determinant of agent performance.

It presents OpenAI’s repository-centered approach, where architecture, dependency order, local documentation, structural checks, and CI become executable guidance for Codex. It contrasts that with Anthropic’s planner-generator-evaluator arrangement and ThoughtWorks’ framework for classifying controls as guides or sensors and as computational or inferential.

The article also argues that harnesses should be deliberately economical. Its LangChain example claims a fixed model improved substantially when only the harness changed, while its Vercel example says fewer tools performed better. Conversely, it notes that stronger models can absorb responsibilities previously assigned to separate evaluator layers, making some harness components temporary bets on model limitations.

## Key Takeaways

- Encode architectural rules, dependency direction, and verification in the repository rather than relying only on prose instructions.
- Use pre-action guidance and post-action feedback together; deterministic checks and semantic review agents address different failures.
- Separate creation from evaluation when the task warrants the extra cost, because an agent’s self-assessment can be unreliable.
- Reassess every harness layer as models improve, balancing quality gains against latency, cost, and redundant complexity.

## Links

- [Article](https://x.com/i/article/2046841201853390848)
- [Original Tweet](https://x.com/AlphaSignalAI/status/2046952554421002393)
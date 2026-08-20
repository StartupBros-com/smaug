---
title: "The Hitchhiker's Guide to Agentic AI: From Foundations to Systems"
type: article
date_added: 2026-06-28
source: "https://arxiv.org/abs/2606.24937"
author: "Haggai Roitman"
tags: [agentic-ai, llms, reinforcement-learning, rag, mcp, multi-agent-systems]
via: "Twitter bookmark from @not_ellington"
---

A practitioner-oriented reference for the entire agentic-AI stack, arguing that reliable autonomous systems require understanding the layers beneath the agent loop as well as the loop itself. It begins with model architecture, GPU systems, fine-tuning, compression, and inference, then connects alignment and reasoning methods such as RLHF, DPO, GRPO, reward modeling, and test-time scaling to production agent design.

The agent-focused half covers trajectory-based training, RAG and agentic RAG, memory types, harnesses and context management, generate-verify-retry loops, and adaptive budget control. It also surveys MCP, agent skills and tools, A2A communication, multi-agent topologies, evaluation, agentic interfaces, and deployment, pairing the conceptual overview with implementation guidance and references.

## Key Takeaways

- Agent engineering depends on model, systems, alignment, and inference foundations rather than prompting alone.
- Agentic RAG, episodic and semantic memory, and context management provide complementary ways to extend an agent beyond a single prompt.
- Generate-verify-retry loops and adaptive budgets frame agent execution as an optimization problem at inference time.
- MCP, A2A, and multi-agent coordination patterns define distinct layers for connecting tools and collaborating agents.
- Evaluation and deployment must be designed alongside the agent architecture, not added after a prototype appears capable.

## Links

- [Paper](https://arxiv.org/abs/2606.24937)
- [Original Tweet](https://x.com/not_ellington/status/2071434117456027959)

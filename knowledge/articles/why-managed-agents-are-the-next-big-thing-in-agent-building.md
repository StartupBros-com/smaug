---
title: "Why managed agents are the next big thing in agent building"
type: article
date_added: 2026-08-07
source: "https://x.com/i/article/2085779026745163776"
author: "Harrison Chase"
tags: [agents, langchain, langsmith, agent-infrastructure, evaluation]
via: "Twitter bookmark from @Vtrivedy10"
---

Harrison Chase argues that the next practical layer of agent development is a managed service that bundles a configurable harness with the infrastructure needed to run it reliably. After early LLM applications, more capable frameworks, and the tool-calling agent loop, the hard production problems are no longer just prompts and tools: builders need durable execution, sandboxing, streaming UX, context management, evaluation, memory, and authorization.

The article frames agent construction as three separate concerns: business logic supplied by the builder; the harness that governs the model loop; and production infrastructure. Managed-agent products reduce the burden of assembling the latter two while preserving portable, file-based definitions built around emerging standards such as AGENTS.md, MCP, and skills. LangChain's Managed Deep Agents is presented as a developer-focused version of this model, with custom middleware and code-defined tools on top of the Deep Agents harness.

## Key Takeaways

- Production agents require operational capabilities such as recovery, sandboxes, streaming, identity, memory, and evaluation in addition to a model loop.
- AGENTS.md, MCP, and skills make agent behavior more portable and configurable across managed environments.
- Managed services bundle the harness and infrastructure so builders can focus on their business-specific instructions, context, and tools.
- File-based agent definitions offer a path between no-code configuration and developer-controlled source code.
- The accompanying commentary emphasizes that self-improving agents depend on owned traces, open evaluations, and environments that can turn production signals into improvement loops.

## Links

- [Article](https://x.com/i/article/2085779026745163776)
- [Original Tweet](https://x.com/Vtrivedy10/status/2085795212450836586)
- [Quoted Announcement](https://x.com/hwchase17/status/2085780032031760694)

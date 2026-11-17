---
title: "Self-Evolving Code Review Agent"
type: tool
date_added: 2026-11-10
source: "https://github.com/Sumanth077/Hands-On-AI-Engineering/tree/main/ai_agents/self_evolving_code_review_agent"
tags: [ai-agents, code-review, memory, langgraph, ollama]
via: "Twitter bookmark from @Sumanth_077"
---

A code review agent that improves over time through persistent experiential memory instead of fine-tuning. Before each review it retrieves relevant team rules and similar past review trajectories from a vector store, then combines them with the current diff to generate comments. Engineers accept, reject, or edit each comment, and that feedback is reflected into reusable natural-language rules. It lives as one project inside the Hands-On-AI-Engineering collection (about 4k stars) of practical AI agent, RAG, OCR, and MCP tutorials.

## Key Features

- Retrieve: searches memory for relevant insights and similar past reviews before commenting
- Review: structured feedback generated from the current diff plus retrieved memory
- Human feedback: workflow pauses for an accept, reject, or edit decision on every comment
- Reflect: decisions become rules with rationale, polarity, scope, and confidence
- Persist: stores both learned insights and the full review trajectory for future retrieval
- Runs fully locally with LangGraph, Ollama, BGE embeddings, and a vector database

## Links

- [GitHub](https://github.com/Sumanth077/Hands-On-AI-Engineering/tree/main/ai_agents/self_evolving_code_review_agent)
- [Original Tweet](https://x.com/Sumanth_077/status/2098416224803987968)

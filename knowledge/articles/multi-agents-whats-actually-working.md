---
title: "Multi-Agents: What's Actually Working"
type: article
date_added: 2026-04-22
source: "https://x.com/i/article/2046690715657478145"
author: "Walden"
tags: [multi-agent-systems, ai-agents, code-review]
via: "Twitter bookmark from @nicopreme"
---

This Cognition essay argues that practical multi-agent systems keep decisions and writes single-threaded while using additional agents to supply focused intelligence. It reports useful patterns such as clean-context code review, frontier-model consultation, and manager-led decomposition, while warning that unconstrained parallel writers fragment implementation choices and context.

## Key Takeaways

- A fresh-context review agent can find bugs missed by the coding agent because it reasons independently from the diff rather than inheriting a long, attention-diluted working context.
- The "smart friend" pattern can improve difficult work when both primary and consulting models are capable, but weaker primary models still struggle to recognize when and how to escalate.
- Cross-frontier delegation works better as capability routing—choosing a model for debugging, visual reasoning, or testing—than as a simple stronger-model fallback.
- Larger tasks need a manager that decomposes work, coordinates communication, and synthesizes results; unstructured autonomous swarms remain a poor fit for most software.

## Links

- [Article](https://x.com/i/article/2046690715657478145)
- [Original Tweet](https://x.com/nicopreme/status/2047077049681018992)

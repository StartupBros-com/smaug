---
title: "UniiChat: one chat that never ends (Taelin's design gist)"
type: tool
date_added: 2026-10-03
source: "https://gist.github.com/VictorTaelin/91837951a5ce5b38f341ec1ba1df6449"
tags: [ai-agents, memory, context-management]
via: "Twitter bookmark from @VictorTaelin"
---

A design document (a "recipe" for agents to implement) by Victor Taelin for an agent chat where the chat log itself is the memory. Every message is logged verbatim forever, while a cheap model compresses the log into a binary tree of one-line summaries. Each user message starts a fresh model call that sees a constant-size "view" (64-128 KB of summaries, recent ones fine-grained, old ones coarse) and can "zoom" into any summary line to see the two lines it was built from, down to the original message. Taelin calls the working version OptChat and says it eliminated context rot, removed the need for manual /compact, shrank his AGENTS.md, and lowered costs thanks to prompt-cache-friendly views.

## Key Features

- Append-only log of all messages (user, agent, tool calls, tool results, subagent reports, imported notes)
- Binary summary tree where each node is at most 512 bytes and is built once
- View selection based on Taelin's rollback-netcode "push" binary-counter scheme: dense near now, sparse in the past
- Zoom tool to expand a vague summary into its children
- Constant context size, nearly all tokens served from prompt cache

## Links

- [Gist](https://gist.github.com/VictorTaelin/91837951a5ce5b38f341ec1ba1df6449)
- [Original Tweet](https://x.com/VictorTaelin/status/2106575078838178270)

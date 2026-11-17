---
title: "Vuk97/forward-implementation-first: Agent Skill Against Self-Invented Bookkeeping"
type: tool
date_added: 2026-08-30
source: "https://github.com/Vuk97/forward-implementation-first"
tags: [agent-skills, claude-code, codex, prompt-engineering, ai-agents]
via: "Twitter bookmark from @v4rvl"
---

A roughly 150-line Markdown agent skill (184 stars, Shell) that stops coding agents from stalling on their own paperwork: hashes, lock files, receipts, certification markers and progress metadata. Before every action the agent classifies it as semantic implementation, focused validation, or administrative bookkeeping, and skips the third unless the user asks for it or the artifact is part of the product.

## Key Features

- Three-way action classification: implementation, validation, bookkeeping (skip the last)
- Forward cursor rule: a pipeline stage is replayed only for real reasons (input meaning changed, pinned revision changed, malformed output, an observed run disproving earlier results, declared dependency cone). Missing or stale metadata is not a reason
- When a stage is blocked only by a marker, run it manually, validate, publish, continue, then delete the administrative-only gate
- Explicitly keeps tests, benchmarks, reproductions, end-to-end runs, product-level checksums/signatures and input/revision identity
- Model-agnostic; works with Claude Code, Codex and other agents

## Links

- [GitHub](https://github.com/Vuk97/forward-implementation-first)
- [Original Tweet](https://x.com/v4rvl/status/2094061178376855820)

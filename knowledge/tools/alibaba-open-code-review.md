---
title: "Open Code Review (alibaba/open-code-review)"
type: tool
date_added: 2026-11-10
source: "https://github.com/alibaba/open-code-review"
tags: [code-review, agents, harness, golang]
via: "Twitter bookmark from @agenticgirl"
---

Open Code Review is a Go CLI that Alibaba open-sourced after using it internally as its official AI code review assistant for about two years. It reads Git diffs, hands changed files to a configurable LLM agent with tool use, and produces structured review comments with line-level positioning. Deterministic code handles file coverage, bundling, rule matching and comment placement, while the agent handles reasoning and repository context.

## Key Features

- Hybrid architecture: deterministic pipelines plus an LLM agent that can read full files, search the codebase and inspect other changed files
- Built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection)
- OpenAI- and Anthropic-compatible model endpoints
- `ocr scan` reviews whole files or directories with no diff, for auditing unfamiliar code
- Benchmark claim: on 200 PRs across 50 open-source repos, higher precision and F1 than Claude Code with the same model at about 1/9 of the tokens, with lower recall as a deliberate trade-off

## Links

- [GitHub](https://github.com/alibaba/open-code-review)
- [Original Tweet](https://x.com/agenticgirl/status/2099087022900367845)

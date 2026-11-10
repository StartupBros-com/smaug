---
title: "anthropics/code-migration-kit-with-claude-code"
type: tool
date_added: 2026-11-10
source: "https://github.com/anthropics/code-migration-kit-with-claude-code"
tags: [claude-code, migrations, agents, anthropic]
via: "Twitter bookmark from @dani_avila7"
---

Anthropic's starter kit of prompts, templates, and scripts for running large-scale, structure-preserving language migrations with Claude Code. It accompanies the blog post on how Anthropic runs large code migrations, and is reference code that is not actively maintained. The prompts are reconstructions generalized from real migrations, including Bun's 1M+ line Zig to Rust port.

## Key Features

- Six-step process: dependency map and rulebook, stress-test the rules, translate everything, compile, run, match behavior
- Doctrine of fixing the process that produced the code rather than individual files; recurring failures amend the rulebook
- Feasibility prompt up front, where "don't migrate" is a valid outcome
- Parity harness / judge setup so behavior can be verified against the original before translation fans out
- Implementer plus two adversarial reviewers plus fixer per unit, run through a queue runner script
- settings.json template with deny rules to keep agents in their lane

## Links

- [GitHub](https://github.com/anthropics/code-migration-kit-with-claude-code)
- [Original Tweet](https://x.com/dani_avila7/status/2102212844238275030)

---
title: "AXI"
type: tool
date_added: 2026-04-08
source: "https://github.com/kunchenguid/axi"
tags: [agent-tools, cli, mcp, token-efficiency, benchmarks, typescript]
via: "Twitter bookmark from @realsigridjin"
---

AXI (Agent eXperience Interface) is a design specification for agent-native command-line tools. It argues that both traditional human-oriented CLIs and tool-protocol integrations impose avoidable token, latency, and interaction overhead on agents. Rather than treating the choice as CLI versus MCP, AXI defines ten principles for an interface optimized around an agent's context budget and execution loop.

## Design Principles

- Emit token-efficient output, including TOON formatting where appropriate, instead of verbose default JSON
- Return minimal default schemas with only the fields needed to select the next action
- Truncate large content with explicit size hints and an opt-in `--full` escape hatch
- Pre-compute aggregates and return definitive empty states to eliminate discovery round trips
- Use structured errors, stable exit codes, idempotent mutations, and no interactive prompts
- Provide agent-oriented navigation, filtering, and snapshots as composable single commands
- Support ambient session context and skills without requiring it for ordinary invocations

## Published Benchmarks

The repository reports 490 browser-tool runs and 425 GitHub-tool runs using Claude Sonnet 4.6. In its browser benchmark, `chrome-devtools-axi` reached 100% success with a $0.074 average cost, 21.5-second duration, and 4.5 turns; the base Chrome DevTools MCP condition reported 100% success at $0.101, 26.0 seconds, and 6.2 turns. In the GitHub benchmark, `gh-axi` reported 100% success at $0.050 and three turns, compared with 86% success at $0.054 for the conventional `gh` CLI and 87% success at $0.148 and six turns for GitHub MCP.

## Reference Implementations

- [`gh-axi`](https://github.com/kunchenguid/gh-axi) for GitHub operations
- [`chrome-devtools-axi`](https://github.com/kunchenguid/chrome-devtools-axi) for browser automation

The results are project-published benchmark claims, so they should be re-run against a target model and workload before treating them as generally predictive.

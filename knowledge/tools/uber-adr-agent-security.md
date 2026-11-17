---
title: "ADR (Agentic AI Detection and Response)"
type: tool
date_added: 2026-10-05
source: "https://github.com/uber/ADR"
tags: [agent-security, ai-agents, mcp, prompt-injection, threat-detection, benchmark]
via: "Twitter bookmark from @Ryrenz"
---

ADR is Uber's open-source enterprise security system for AI agents, deployed in production at Uber and described in a paper accepted to MLSys 2026. It covers employee-facing agents (Cursor, Claude Code, Codex, Copilot CLI) and customer-facing support agents. Bookmarked because it addresses the visibility gap where security teams cannot see which unsanctioned AI tools are in use or what agents actually execute.

## Key Features

- Discovery: inventories AI apps, CLI agents, IDE extensions, model runtimes and MCP servers on endpoints, flagging unknown ones
- Sensor/Observability: collects agent intent, tool use and execution traces from 7+ coding tools across macOS, Linux and Windows
- ADR-Bench: 300+ tasks over 134 MCP servers covering 17 agent attack techniques
- Detector: two-layer design with a high-recall first pass and deeper reasoning on suspicious sessions
- Not open-sourced: the Prevention component and the offline Explorer red-teaming engine

## Links

- [GitHub](https://github.com/uber/ADR)
- [Original Tweet](https://x.com/Ryrenz/status/2107004361318559907)

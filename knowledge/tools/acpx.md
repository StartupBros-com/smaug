---
title: "acpx"
type: tool
date_added: 2026-05-02
source: "https://github.com/openclaw/acpx"
tags: [agent-client-protocol, coding-agents, orchestration, cli, persistent-sessions]
via: "Twitter bookmark from @kunchenguid"
---

`acpx` is a headless command-line client for the Agent Client Protocol (ACP). It provides one command surface for starting persistent sessions, sending one-shot prompts, setting permissions, and consuming structured output from compatible coding agents such as Codex, Claude Code, Gemini CLI, and OpenClaw.

For applications that let users choose their own coding agent, acpx moves the agent-specific adapter layer out of the product. Its sessions are scoped to a repository, can be named and resumed across invocations, and can emit JSON/NDJSON events for orchestration instead of requiring a terminal UI.

## Key Features

- Launch profiles for Codex, Claude Code, Gemini CLI, OpenClaw, and custom ACP servers
- Persistent, named sessions with queued follow-up prompts and repository-scoped state
- Stateless `exec` mode for disposable automation runs
- Text, quiet, and structured JSON output modes for terminal and programmatic workflows
- Permission modes and working-directory boundaries configurable per invocation
- TypeScript flows and runtime exports for embedding multi-step agent workflows

## Links

- [GitHub](https://github.com/openclaw/acpx)
- [Original Tweet](https://x.com/kunchenguid/status/2050648794640113947)

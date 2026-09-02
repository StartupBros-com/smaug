---
title: "herdr"
type: tool
date_added: 2026-08-19
source: "https://github.com/herdrdev/herdr"
tags: [agent-orchestration, coding-agents, terminal, tmux, rust]
via: "Twitter bookmark from @LinearUncle"
---

Herdr is a Rust terminal runtime for persistent coding-agent sessions. It runs a background server that owns terminal panes, so agents and their sessions can continue across disconnects or restarts and be reattached locally or over SSH.

The runtime works alongside existing agent CLIs rather than wrapping them. It presents pane state such as working, blocked, or idle, and exposes a CLI and socket API through which agents can create panes, communicate, and wait for dependent work. This makes it useful for repurposing a lightweight remote machine as an always-on agent host.

## Key Features

- Persistent background server that restores terminal sessions after sleep, network loss, or restart.
- Tmux-style pane management with both keyboard and mouse interaction.
- Status indicators for working, blocked, and idle agent sessions.
- CLI and socket API for agent-to-agent coordination and pane management.
- Compatibility with Claude Code, Codex, Cursor, OpenCode, Grok, and other terminal-based agents.
- Single Rust binary with remote reattachment over SSH and an extensible plugin system.

## Links

- [GitHub](https://github.com/herdrdev/herdr)
- [Original Tweet](https://x.com/LinearUncle/status/2090277530230223301)

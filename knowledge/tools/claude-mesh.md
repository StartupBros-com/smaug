---
title: "claude-mesh"
type: tool
date_added: 2026-11-10
source: "https://github.com/Monitor-My-Solar/claude-mesh"
tags: [claude-code, codex, multi-agent, messaging]
via: "Twitter bookmark from @zak_hurst"
---

claude-mesh lets coding-agent sessions on different machines, accounts and agents (Claude Code and Codex) message each other over your own network, with no per-message model cost. A registry holds a roster and per-recipient mail bank, and a relay on each machine delivers messages straight into live sessions (Claude via inbox socket, Codex via `codex queue --thread`). It is an alternative to Claude Code's built-in cross-session messaging, which relays through Anthropic and needs the same account.

## Key Features

- `claude-mesh peers` lists live sessions across machines; `claude-mesh ask --to host/name` blocks until the other agent replies
- SessionStart/SessionEnd hooks register sessions and inject the current roster
- `.mesh.json` at a repo root declares a role, what it owns, and who to ask for what
- Messages are held until acknowledged, so failed deliveries retry
- Installs via curl script; requires Node 18+, macOS or Linux

## Links

- [GitHub](https://github.com/Monitor-My-Solar/claude-mesh)
- [Original Tweet](https://x.com/zak_hurst/status/2096354152527900713)

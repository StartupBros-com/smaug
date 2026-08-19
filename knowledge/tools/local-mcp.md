---
title: "local-mcp"
type: tool
date_added: 2026-08-01
source: "https://github.com/nakasyou/local-mcp"
tags: [mcp, rust, sandbox, local-files, chatgpt, codex]
via: "Twitter bookmark from @nakasyou0"
---

Rust MCP server that exposes local-machine capabilities to an agent: file reads, image reads, directory listings, sandboxed file writes and commands, plus explicitly approved unsandboxed command execution. It does not provide web search or a dedicated network-request tool. Commands reuse OpenAI Codex's `codex-rs/sandboxing` (Landlock + Linux sandbox helper on Linux, Seatbelt/`sandbox-exec` on macOS); ordinary commands have network denied.

nakasyou's bookmark pitch is a quota lifehack: ChatGPT Chat does not consume Codex usage, so pointing ChatGPT at `local-mcp` lets you drive unlimited local code edits through the Chat UI instead of burning Codex.

One persistent `local-mcp mcp` process can serve multiple independently configured sessions. `local-mcp start` (optionally with a stable session ID) prints the ID the agent must pass on every tool call. Sandboxed calls are always allowed and have no network; `without_sandbox` asks the approvals UI first because it runs with the service user's full host permissions. `/permissions yolo` disables those prompts for the session lifetime.

## Key Features

- File/image/dir reads, sandboxed writes and commands, approved unsandboxed execution
- Codex sandbox: Landlock + `codex-linux-sandbox`/`bwrap` on Linux; Seatbelt on macOS; Windows has named-pipe IPC but no filesystem/network sandbox yet
- Per-session Unix domain socket (permission-restricted) or Windows named pipe; no polling timers while idle
- `get_image` returns PNG/JPEG/GIF/WebP/BMP/TIFF/AVIF as native MCP image content
- Commands over 30s return a `job_id`; `poll_job` / `stop_job` / `start_command` for background work
- Start-screen timeline of reads, unified diffs, and command output (Codex-style)
- Nix, cargo, and `nix run github:OWNER/local-mcp` install paths

## Quick Start

```sh
cargo build --release
local-mcp mcp
cd ./some-project
local-mcp start
# give the printed session_id to the agent; /permissions yolo in the approvals UI
```

## Links

- [GitHub](https://github.com/nakasyou/local-mcp)
- [Original Tweet](https://x.com/nakasyou0/status/2083740389471904012)

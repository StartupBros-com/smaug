---
title: "coding-agent-search (cass)"
type: tool
date_added: 2025-12-03
source: "https://github.com/Dicklesworthstone/coding_agent_session_search"
tags: [ai-agents, developer-tools, rust, search, tui]
via: "Twitter bookmark from @doodlestein"
---

cass is a Rust TUI and CLI for indexing local coding-agent session histories into one searchable timeline. It brings conversations from tools such as Claude Code, Codex, Gemini CLI, Cursor, Aider, and ChatGPT together so developers and agents can retrieve prior decisions instead of reconstructing work from scratch.

Its agent-oriented interface exposes JSON and robot-mode commands for health checks, cross-history search, session discovery, and context expansion. The project treats lexical search as the dependable fast path, with semantic refinement available when local model assets are installed.

## Key Features

- Indexes session history from a broad set of local coding assistants in a unified database and timeline.
- Provides interactive TUI use alongside non-interactive `--robot` and `--json` commands for agents.
- Supports fast lexical search, optional semantic refinement, provider filtering, and minimal result fields.
- Includes health, triage, capability-discovery, and source-management commands for automated workflows.

## Links

- [GitHub](https://github.com/Dicklesworthstone/coding_agent_session_search)
- [Original Tweet](https://x.com/doodlestein/status/1996288658937147549)

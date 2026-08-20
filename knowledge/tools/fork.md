---
title: "fork"
type: tool
date_added: 2026-06-16
source: "https://github.com/kingbootoshi/fork"
tags: [ai-agents, claude-code, codex, git-worktrees, macos, tmux]
via: "Twitter bookmark from @KingBootoshi"
---

`fork` is a macOS/APFS command-line tool for splitting a live Claude Code or Codex session into an isolated copy-on-write repository clone, dedicated Git branch, and tmux window. It treats the in-progress conversation as an asset to fork alongside the codebase, avoiding the setup and context rebuilding normally required for parallel agent work.

The project uses APFS `clonefile(2)` semantics so a large working directory—including uncommitted state and local dependencies—can be cloned quickly with minimal disk use until files diverge. Its `--cached` Claude mode keeps the chat in the original directory and instructs it to operate in the clone to retain a byte-identical prompt prefix; the README notes that Codex does not currently preserve its prompt cache across forked threads.

## Key Features

- Creates copy-on-write APFS clones with their own `fork/<name>` Git branches
- Forks the active Claude Code or Codex conversation when invoked from agent shell mode
- Opens each fork in a separate tmux session and local terminal window
- Supports fresh agent sessions or plain-shell clones from a repository root
- Provides listing, path lookup, merge, and trash commands for managed forks
- Can transfer the complete working state and resumed conversation to another SSH host with `--to`

## Requirements

- macOS with an APFS filesystem
- tmux
- Claude Code or Codex CLI for agent-session forking

## Links

- [GitHub Repository](https://github.com/kingbootoshi/fork)
- [Original Tweet](https://x.com/KingBootoshi/status/2066860462055317517)

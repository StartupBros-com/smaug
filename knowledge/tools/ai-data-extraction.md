---
title: "ai-data-extraction"
type: tool
date_added: 2026-08-14
source: "https://github.com/0xSero/ai-data-extraction"
tags: [python, data-extraction, claude-code, cursor, codex, windsurf, trae, continue, gemini-cli, opencode, agent-sessions, training-data]
via: "Twitter bookmark from @0xSero"
---

0xSero/ai-data-extraction is a Python stdlib toolkit that dumps complete conversation, agent, and code-context history out of the major AI coding assistants so the sessions stay local. 1,158 stars. The pitch is sovereignty and training-data ownership: user messages, model replies, file paths, snippets, diffs, tool calls, and timestamps, written as timestamped JSONL under `extracted_data/`.

## Key Features

- Per-tool extractors: Claude Code (`~/.claude` and variants, JSONL sessions), Codex (`~/.codex` rollout JSONL), Cursor (Chat + Composer + Agent across v1.x–v2.0 SQLite layouts), Windsurf, Trae, Continue (`~/.continue/sessions/`), Gemini CLI (`~/.gemini/tmp/.../chats/`), OpenCode (CLI storage + desktop Tauri `.dat`)
- `./extract_all.sh` runs every extractor in one pass
- No third-party Python deps — Python 3.6+ standard library only
- Output is one JSON object per conversation line, including code ranges, tool results, reasoning/thoughts (Gemini), token/cost metadata (OpenCode), and parent/child session links

## Links

- [GitHub](https://github.com/0xSero/ai-data-extraction)
- [Original Tweet](https://x.com/0xSero/status/2088335948056539252)

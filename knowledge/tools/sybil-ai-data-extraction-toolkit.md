---
title: "ai-data-extraction (sybil-solutions) - Extract Chat History from AI Coding Assistants"
type: tool
date_added: 2026-08-20
source: "https://github.com/sybil-solutions/ai-data-extraction"
tags: [ai-tools, data-extraction, claude-code, local-models, training-data]
via: "Twitter bookmark from @0xSero"
---

A Python toolkit (about 1,350 stars) that discovers and extracts the complete conversation history from AI coding assistants so it can be used as machine learning training data. @0xSero used it to pull together 33,000 AI sessions plus notes, journals, tweets, codebases and browser history (about 500gb) for local models.

## Key Features

- Extracts user messages, AI responses, code context (file paths, line numbers, snippets), diffs, multi-file contexts, tool use and results, and timestamps
- One extractor script per tool: Claude Code, Codex, Cursor (Chat, Composer, Agent), Trae, Windsurf, Continue, Gemini CLI, OpenCode (CLI and Desktop), the cursor-agent CLI, plus Pi, OMP and Factory/Droid sessions
- Handles multiple storage formats: JSONL sessions, SQLite databases (including WAL rows), JSON session files, and content-addressed blob stores
- Pi/OMP exports follow the active branch by default, with `--all-branches` to export each leaf conversation separately

## Links

- [GitHub](https://github.com/sybil-solutions/ai-data-extraction)
- [Original Tweet](https://x.com/0xSero/status/2090430260441387109)

---
title: "LLM Wiki — LLM-compiled knowledge bases for any AI agent"
type: article
date_added: 2026-06-15
source: "https://llm-wiki.net/"
author: "nvk"
tags: [llm, knowledge-base, wiki, claude-code, codex, agents, session-memory, research]
via: "Twitter bookmark from @bradmillscan"
---

LLM Wiki is a plugin and instruction-file system that turns any LLM agent (Claude Code, OpenAI Codex, OpenCode, or any AGENTS.md-capable runtime) into an append-only, Markdown-native research and knowledge-base engine. It was built by nvk and inspired by Andrej Karpathy's LLM wiki idea. Brad Mills bookmarked it as part of his personal health/fitness agent stack, using it to host his Personal Health Wiki and Fitness Coach Brain Wiki.

The core value proposition is session memory plus structured knowledge accumulation: agents can run parallel research, compile synthesized articles with cross-references, capture redacted session digests, rehydrate compact context for future turns, track inventory, and generate artifacts — all stored in a local `~/wiki/` hub that is optionally synced via iCloud or Dropbox and compatible with Obsidian's graph view.

## Key Features

- Five install modes: Claude Code plugin, OpenAI Codex plugin, OpenCode instruction file, Pi instruction file, and portable AGENTS.md
- Parallel multi-agent research with `--retardmax` mode (cast wide net, skip planning, compile fast)
- Thesis-driven research (`--mode thesis "<claim>"`) for claim-verification workflows
- Redacted session memory under `HUB/.sessions` — no full transcripts stored by default
- `promote` required before a session digest or feedback candidate becomes a topic raw note
- Obsidian-compatible dual-link format (`[[wikilink]]` + standard markdown) for graph view
- All behavioral logic in a single wiki-manager skill; Codex, OpenCode, and Pi trees symlink to the Claude source of truth (no fork)

## Links

- [LLM Wiki](https://llm-wiki.net/)
- [GitHub](https://github.com/nvk/llm-wiki)
- [Original Tweet](https://x.com/bradmillscan/status/2066600454193037452)

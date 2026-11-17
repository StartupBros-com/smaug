---
title: "Portal by Spotify cut my Claude Code token usage by 90%"
type: article
date_added: 2026-11-10
source: "https://engineering.atspotify.com/2026/9/portal-by-spotify-cut-my-claude-code-token-usage-by-90"
author: "Dimitri Mazmanov"
tags: [claude-code, token-costs, model-routing, hooks, mcp]
via: "Twitter bookmark from @dani_avila7"
---

Dimitri Mazmanov (Principal Product Manager, Spotify) argues that most of what a coding agent does is I/O rather than reasoning: reading several files to answer a question about one method, generating test files that copy neighboring patterns, updating docs. He routes that grunt work to a cheap worker model (Gemini 2.5 Flash) via declarative agents ("AiKA Modes") in Portal by Spotify, keeping Claude for tasks that need reasoning. Cited context: Gartner predicts AI coding costs will exceed the average developer salary by 2028.

## Key Takeaways

- Two declarative modes do the work: bulk-reader (answers questions over large files with terse structured bullets) and code-writer (generates boilerplate, tests, configs matching existing patterns; "output only the code").
- Early routing rules in CLAUDE.md were advisory and Claude could ignore them, and each project needed its own copy.
- The current version is a Claude Code plugin called shunt that enforces routing with PreToolUse hooks, e.g. check-file-size blocks Read calls above a line threshold (default 350) and redirects to the cheap reader.
- Only the relevant extracted context is returned to Claude, so frontier tokens are spent only on work needing frontier intelligence.

## Links

- [Article](https://engineering.atspotify.com/2026/9/portal-by-spotify-cut-my-claude-code-token-usage-by-90)
- [Original Tweet](https://x.com/dani_avila7/status/2097154860235792780)

---
title: "FrankenGit - Pure-Rust Git-Compatible Forge for Humans and Coding Agents"
type: tool
date_added: 2026-08-20
source: "https://github.com/Dicklesworthstone/frankengit"
tags: [rust, git, forge, agents, developer-tools]
via: "Twitter bookmark from @doodlestein"
---

FrankenGit is Jeffrey Emanuel's (Dicklesworthstone) clean-room, pure-Rust, Git-compatible forge designed for humans, autonomous coding agents, extreme scale, and independently verifiable recovery. It started as a GPT Pro prompt that combined Cursor's "Git at Any Scale" blog post with his existing Franken-suite projects (Asupersync, FrankenSQLite, FrankenFS, FrankenSearch, franken_markdown, FrankenGraphDB), and the tweet celebrates how far the plan has grown. Per the README it is in active implementation and pre-release: a narrow one-node boundary exists, but it is not yet a general-purpose Git server or a GitHub replacement.

## Key Features

- One immutable repository decision stream plus a tiny conditional authority head, instead of a mutable bare repo with a separately authoritative product database
- Production code is pure Rust, memory-safe in first-party code, and never links or invokes C Git or libgit2
- Parallel per-core preparation with microbatched publication
- Git-object-aware adaptive transport, sparse semantic workspaces, typed graph fabrics, and evidence-carrying agent changes
- Repair, checkpoints, indexes, policy promotion, and release publication all follow a body-first/root-last, anti-rollback discipline
- Planned GitHub-like web UI (Leptos or Dioxus with SSR) plus a terminal TUI on frankentui
- Licensed under MIT plus an OpenAI/Anthropic rider, so source-available rather than OSI open source

## Links

- [GitHub](https://github.com/Dicklesworthstone/frankengit)
- [Comprehensive plan](https://github.com/Dicklesworthstone/frankengit/blob/main/COMPREHENSIVE_PLAN_FOR_THE_DESIGN_OF_FRANKENGIT.md)
- [Original Tweet](https://x.com/doodlestein/status/2090399884973064647)

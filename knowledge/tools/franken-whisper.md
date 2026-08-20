---
title: "FrankenWhisper"
type: tool
date_added: 2026-06-07
source: "https://github.com/Dicklesworthstone/franken_whisper"
tags: [rust, speech-recognition, transcription, whisper, diarization, agent-tools, youtube]
via: "Twitter bookmark from @doodlestein"
---

Dicklesworthstone/franken_whisper is an agent-first Rust orchestration stack for automatic speech recognition. It combines a native Whisper implementation with routing across Whisper-compatible backends, real-time NDJSON streaming, word timestamps, diarization support, SQLite-backed run history, and terminal audio transport. At the bookmarked commit it had 62 GitHub stars.

The author was adding YouTube search and download support so agents could turn a list or playlist into polished transcripts. The difficult dependency is YouTube's heavily obfuscated anti-bot JavaScript; using the related FrankenEngine is proposed as a way to execute it within the project's Rust-first design, but this was described as its first real-world trial rather than an established capability.

## Key Features

- In-process Rust Whisper engine with no Python or subprocess required for its native path
- Adaptive routing across Whisper, GPU, and diarization backends
- Streaming NDJSON output, word-level timestamps, and SQLite-backed run history
- Terminal-oriented audio transport and agent-facing machine-readable commands
- Planned YouTube playlist ingestion and transcript assembly via FrankenEngine

## Links

- [GitHub](https://github.com/Dicklesworthstone/franken_whisper)
- [Original tweet](https://x.com/doodlestein/status/2063691042902192588)

---
title: "FrankenEngine"
type: tool
date_added: 2026-06-07
source: "https://github.com/Dicklesworthstone/franken_engine"
tags: [rust, javascript-runtime, agent-harness, sandboxing, deterministic-replay, capability-security]
via: "Twitter bookmark from @doodlestein"
---

Dicklesworthstone/franken_engine is a research-grade Rust runtime for executing adversarial JavaScript and TypeScript extension workloads in agent systems. Its design centers on a native Rust core, deterministic replay of consequential decisions, signed evidence for containment actions, and a documentation gate meant to keep claims aligned with supporting evidence. At the bookmarked commit it had 30 GitHub stars.

The author proposed its first practical trial: running the obfuscated JavaScript required by YouTube's anti-bot systems as part of a Rust-native search, download, and transcription workflow. That integration is intended to let FrankenWhisper assemble polished transcripts for a video list or playlist without embedding a browser engine or relying on unsafe FFI.

## Key Features

- Native Rust execution with `unsafe` forbidden in the core project
- Deterministic replay and policy snapshots for investigating high-impact decisions
- Ed25519-signed, chained evidence records for containment actions
- Capability and information-flow controls for extension host calls
- Claim-to-proof matrix that restricts documentation language to its declared evidence state

## Links

- [GitHub](https://github.com/Dicklesworthstone/franken_engine)
- [Original tweet](https://x.com/doodlestein/status/2063691042902192588)

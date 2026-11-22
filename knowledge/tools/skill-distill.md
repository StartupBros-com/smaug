---
title: "skill-distill"
type: tool
date_added: 2026-11-22
source: "https://github.com/sybil-solutions/skill-distill"
tags: [claude-code, codex, skills, distillation, open-weight-models]
via: "Twitter bookmark from @KingBootoshi"
---

skill-distill is a skill for Claude Code or Codex (the "teacher") that distills a good frontier-model session into a skill an open-weight "student" model can follow to reproduce the same task. You invoke it at the end of a successful session and name a student harness plus model (for example omp with DeepSeek-V4.1-Flash). Bookmarked via @KingBootoshi, who sees fine-tuning/distilling company workflows for smaller models as a lucrative service opportunity.

The teacher loops: read the session and write a skill, run the student in tmux on a fresh copy of the starting state with the original prompt and the skill, compare student output to the reference, find the first point of divergence and fix the skill there, and repeat with three trials per version until the student matches. The human makes the final accept call after seeing reference and student results side by side.

## Key Features

- Produces a reusable operator skill plus a produced skill for one task, one model, one harness
- Student gets the verbatim prompt, clean starting state and the skill only; harness global context is disabled where possible
- Three trials per skill version; checks are validated against the reference first
- Skill may not embed the finished output or a script that writes it
- Adapters for omp (tested), Codex CLI, Claude Code, pi, opencode; helper scripts for session extraction and web capture via headless Chromium
- MIT licensed, Python

## Links

- [GitHub](https://github.com/sybil-solutions/skill-distill)
- [Original Tweet](https://x.com/KingBootoshi/status/2124047725843153141)

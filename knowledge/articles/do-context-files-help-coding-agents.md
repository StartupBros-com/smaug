---
title: "Do Context Files Help Coding Agents? A Two-Agent Ablation Study on Real Repositories"
type: article
date_added: 2026-08-01
source: "https://arxiv.org/abs/2607.27250"
author: "Prakhar Khatri"
tags: [agents-md, claude-md, coding-agents, claude-code, codex, ablation, evals, context-files, software-engineering]
via: "Twitter bookmark from @dair_ai"
---

arXiv:2607.27250 (cs.SE, submitted 28 Jul 2026). Persistent context files (`AGENTS.md`, `CLAUDE.md`) are treated as standard practice for steering coding agents, but prior evidence on whether they help is contradictory. Khatri runs a controlled ablation that holds the task set fixed and varies **only** the context-injection strategy, across two frontier agents (Claude Code and Codex), 17 real tasks from 3 repositories (15 shared + 2 Codex-only), and **288 gold-test-evaluated runs**.

**Headline result:** context strategy does not measurably move correctness on either agent. Equivalence testing bounds any effect to at most 10–15 percentage points. A failure-mode triage explains why: agents fail on *implementation skill* — feature design, pattern selection, exact wiring — not on missing repository knowledge that a markdown file could have supplied. A manipulation probe backs that diagnosis: the real `AGENTS.md` never converted a near-miss into a pass on either agent.

A second result is methodological. Borderline task difficulty is **agent-specific** (Spearman ρ = 0.75). Single-agent studies therefore sample different informative bands of the same task pool and can honestly reach opposite conclusions about whether context files "work." That is the paper's candidate explanation for the contradictory literature. Code, data, and analysis are released with the paper.

DAIR.AI circulated the result as a reason to keep `AGENTS.md` / `CLAUDE.md` expectations honest: they are not a correctness lever on these agents and tasks.

## Key Takeaways

- Ablation: same 17 real-repo tasks, two agents, 288 gold-test runs; only context-injection strategy varies
- No measurable correctness lift from context files on Claude Code or Codex; effect bounded ≤10–15pp by equivalence testing
- Failures are skill/wiring/design, not missing facts an `AGENTS.md` could inject
- The actual `AGENTS.md` never flipped a near-miss to a pass (manipulation probe)
- Agent-specific borderline difficulty (ρ = 0.75) can explain why earlier single-agent papers disagree

## Links

- [arXiv abs](https://arxiv.org/abs/2607.27250)
- [PDF](https://arxiv.org/pdf/2607.27250)
- [Original Tweet](https://x.com/dair_ai/status/2083557620296859937)

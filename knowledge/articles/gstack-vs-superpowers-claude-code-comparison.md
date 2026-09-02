# GStack vs Superpowers: Claude Code Skill Framework Comparison

**Source:** https://x.com/i/article/2036876538730430464
**Author:** Nakul Kelkar (@MaruPelkar)
**Type:** X Article / Comparison
**Date:** March 2026

## Summary

A head-to-head benchmark of the two most popular Claude Code skill frameworks on YC's Bookface: Superpowers and GStack. Both ran against the same task (an "AI Diary" Next.js app) using identical models (Claude Opus 4.6, 1M context), separate git worktrees, and zero human intervention.

## Key Findings

- **GStack won overall**: 7.6 vs 6.1 across 8 evaluation dimensions
- **Superpowers was 40% faster** and used **50% fewer tokens**
- Three independent evaluators (self-eval, adversarial cross-eval, OpenAI Codex neutral) all agreed — no favoritism detected

## Skill Pipelines

**Superpowers (5 skills):** brainstorming → writing-plans → test-driven-development → executing-plans → verification
- TDD-first; all tests written before any implementation
- Single-page app, tab-based navigation, pure client-side personality engine
- Scalpel: precise, efficient, does exactly what you asked

**GStack (11 skills):** office-hours → plan-eng-review → design-consultation → frontend-design → qa → design-review → review → animate → polish → delight
- Design system, visual polish, micro-interactions, QA, and code review baked in
- Multi-page app with Next.js routing, Big Five (OCEAN) personality model, SVG radar charts, animated trait bars, custom design system
- Operating room: thinks about what you *should* have asked for

## Takeaway

> "Superpowers is a scalpel. GStack is an operating room."
> Output quality = f(model, skills, prompt) — with model and prompt held constant, skills become the dominant variable.

- **Use Superpowers** for hackathons, quick implementation, TDD-enforced correctness
- **Use GStack** for product launches, polished UX, broad scope work

## Total Cost

~283K tokens across 7 agents for the full experiment.

## Tags

claude-code, skill-frameworks, gstack, superpowers, benchmarking, ai-agents, nextjs

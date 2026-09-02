---
title: "Thin Harness, Fat Skills"
type: article
date_added: 2026-04-11
source: "https://x.com/i/article/2042922188924424198"
author: "Garry Tan (YC)"
tags: [agent-architecture, skills, harness, llm-engineering, ai-productivity, yc]
via: "Twitter bookmark from @garrytan"
---

Garry Tan's framework for understanding why some people achieve 100x productivity with AI agents while others using the same models see 2x. The difference is architecture, not model capability, and it fits in five definitions.

The central thesis: the bottleneck is never the model's intelligence — models already know how to reason and write code. They fail because they don't understand your data: your schema, conventions, and the particular shape of your problem. The architecture that fixes this is "thin harness, fat skills."

On April 2026, Anthropic accidentally shipped the Claude Code source (512,000 lines) to npm, confirming this architecture: live repo context, prompt caching, purpose-built tools, context bloat minimization, structured session memory, parallel sub-agents. None of it makes the model smarter — all of it gives the model the right context at the right time.

## Five Definitions

1. **Skill files** — Reusable markdown documents that teach the model how to do something. They work like method calls: same procedure, different parameters, radically different capability. The same `/investigate` skill pointed at a whistleblower case vs. FEC filings produces completely different analyses. This is software design using markdown as the programming language.

2. **The harness** — The thin loop wrapping the LLM: runs the model in a loop, reads/writes files, manages context, enforces safety. Anti-pattern: fat harness with 40+ tool definitions eating the context window, 2-5s MCP round-trips. Right pattern: purpose-built tooling that's fast and narrow (100ms Playwright CLI vs. 15s Chrome MCP = 75x faster).

3. **Resolvers** — Routing tables for context. When task type X appears, load document Y first. Claude Code's description field is a built-in resolver. Example: CLAUDE.md was 20,000 lines and degraded attention — cut to 200 lines of pointers, resolver loads the right doc on demand.

4. **Latent vs. deterministic** — Every step is one or the other. Latent space is where intelligence lives (judgment, synthesis, pattern recognition). Deterministic is where trust lives (SQL, compiled code, arithmetic). Confusing which work goes where is the most common agent design mistake.

5. **Diarization** — The model reads everything about a subject and writes a structured profile: single page of judgment distilled from dozens of documents. No SQL query or RAG pipeline produces this. It requires holding contradictions in mind, noticing what changed and when, and synthesizing structured intelligence.

## The Architecture

Three layers: fat skills (markdown procedures encoding judgment) on top → thin CLI harness (200 lines, JSON in, text out) in the middle → deterministic tooling (QueryDB, ReadDoc, Search) at the bottom. Push intelligence up into skills, push execution down into deterministic tooling, keep the harness thin.

The YC Startup School example shows all five working together: 6,000 founders, enrichment via `/enrich-founder` skill, diarization catching "says: Datadog for AI agents / actually building: 80% billing code", matching via three invocations of the same skill with different strategies, and a learning loop where an `/improve` skill reads NPS mediocre responses and writes new rules back into the skill file. 12% "OK" ratings → 4% after one iteration.

The key rule: "You are not allowed to do one-off work. If I ask you to do something twice, you failed." Every skill is a permanent upgrade: never degrades, never forgets, runs at 3 AM, and automatically improves when the next model drops.

## Key Takeaways

- The 100x vs 2x productivity gap comes from harness architecture, not model choice
- Skill files are markdown method calls — parameterizable, composable, model-native
- Fat harness anti-pattern: many tools, slow MCP, wide context windows = 3x latency and token cost
- The latent/deterministic distinction is the most commonly violated principle in agent design
- Diarization (full-read synthesis into structured profiles) is the capability that no retrieval approach replicates
- Skills compound: each one is a permanent upgrade that gets better automatically with model improvements

## Links

- [Article](https://x.com/i/article/2042922188924424198)
- [Original Tweet](https://x.com/garrytan/status/2042925773300908103)

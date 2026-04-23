---
title: "How to really stop your agents from making the same mistakes"
type: article
date_added: 2026-04-22
source: "https://x.com/i/article/2046866228703363072"
author: "garrytan"
tags: [agents, skillify, thin-harness, gbrain, openclaw, testing, evals, deterministic]
via: "Twitter bookmark from @garrytan"
---

Garry Tan's detailed technical essay on the "skillify" practice — a structured 10-step workflow for converting agent failures into permanent structural fixes. The core thesis: LangChain and similar frameworks give you testing primitives but no opinionated workflow. Most agent reliability is vibes-based (prompt tweaks, bigger system messages) which decays. Skillify replaces that with a disciplined loop: every failure becomes a named skill with deterministic code and automated tests, making the failure structurally impossible to recur.

The thin-harness / fat-skills architecture distinguishes latent work (model judgment) from deterministic work (same input, same output every time). Calendar lookups, timestamp math, and URL validation are deterministic — they should be scripts, not model calls. When an agent does deterministic work in latent space, it gets it wrong intermittently. Skillify forces the right kind of machine to handle each kind of work.

Garry's two concrete failure examples: (1) an agent queried live calendar APIs for a 10-year-old trip instead of grepping local knowledge base — fixed by `calendar-recall` skill with a hard rule that live APIs are only for future/last-48hr events; (2) an agent did UTC→PT timezone math in its head and was off by an hour — fixed by `context-now` skill requiring the agent to run a pre-computed JSON before making any time-sensitive claim.

## Key Takeaways

- Every agent failure should be "skillified": converted to a SKILL.md contract + deterministic script + full test suite
- Distinguish latent (judgment) from deterministic (precision) work — code beats model calls for anything repeatable
- The 10-step skillify checklist: SKILL.md, deterministic code, unit tests, integration tests, LLM evals, resolver trigger, resolver eval, DRY audit, E2E smoke test, brain filing rules
- "Skillify" becomes a verb in the workflow — say it after any successful prototype to make it permanent infrastructure
- Resolver evals (testing whether intents actually route to the right skill) are the most commonly missed layer
- `check-resolvable` meta-test found 6 out of 40+ skills were unreachable (dark) — 15% of capabilities wasted
- LLM-as-judge evals should test both the answer AND the process (did the agent run the script or wing it?)
- Hermes Agent handles skill creation beautifully but has no testing layer — GBrain handles verification; you need both
- GBrain SkillPacks are portable skill bundles (SKILL.md + scripts + tests + resolver entries) installable into any harness

## Links

- [Article](https://x.com/i/article/2046866228703363072)
- [Original Tweet](https://x.com/garrytan/status/2046981289031667961)
- [GBrain](https://github.com/garrytan/gbrain)
- [GStack](https://github.com/garrytan/gstack)

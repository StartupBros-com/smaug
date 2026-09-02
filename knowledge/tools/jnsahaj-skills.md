---
title: "jnsahaj/skills"
type: tool
date_added: 2026-08-01
source: "https://github.com/jnsahaj/skills"
tags: [agent-skills, zero-tech-debt, code-review, planning, claude-code, refactor]
via: "Twitter bookmark from @iamsahaj_xyz"
---

Sahaj's (`@iamsahaj_xyz`) personal agent-skill pack — "skills I use daily." Install the whole set with `npx skills@latest add jnsahaj/skills`. ~55 GitHub stars at capture. He singles out `/zero-tech-debt` as the one he reaches for most, for both **feature planning** and **code review**, and says it pairs especially well with GPT-5.6 Sol Ultra.

`/zero-tech-debt` reworks a change from the **intended end state**, not from the historical path that produced the current patch. The agent is told to state the destination in one or two sentences, search for real callers before keeping compatibility, delete unused modes/props/wrappers/fallbacks, reshape around one clear product surface, move shared rules (flags, permissions, route gating, URL state) to a single place, and verify the new flow including deleted assumptions. Rules: optimize for the code that should exist, not the smallest diff; delete dead compatibility instead of polishing it; do not invent a framework for one feature; name things by product intent, not implementation history.

The rest of the pack is a small, coherent workflow:

| Skill | Job |
| --- | --- |
| `zero-tech-debt` | Rework toward the day-one architecture; delete cruft |
| `pit-of-success` | Move invariants into the public seam so the obvious call is the safe one |
| `code-refactor-review` | Diff review for reuse, composition, consistency, and slop |
| `ux-flow-plan` | UX-first flow trees, then attach file/function anchors |
| `prepare-branch-context` | Read-only branch/PR briefing before follow-up work |
| `ga` | Kick a feature/fix in a parallel clone (Pi or Claude Code harness) |
| `ga-pr` / `create-draft-pr` | Close the loop: commit, push, draft PR |

## Install

```bash
npx skills@latest add jnsahaj/skills
```

## Links

- [GitHub](https://github.com/jnsahaj/skills)
- [Original Tweet](https://x.com/iamsahaj_xyz/status/2083558922452152740)

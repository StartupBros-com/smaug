---
title: "I Stopped Collecting Agent Skills. Started Wiring Them Into Loops."
type: article
date_added: 2026-04-02
source: "https://x.com/i/article/2039678398344093696"
author: "Vox (@Voxyz_ai)"
tags: [ai-agents, openclaw, agent-skills, automation-loops, memory, cron, feedback-loops]
via: "Twitter bookmark from @Voxyz_ai"
---

A practitioner's account of why downloaded agent skill collections don't work (they're instruction sheets, not loops) and how to wire five skill types into self-improving automation chains. The author has run agents for 6 months using OpenClaw and describes a system where scheduled triggers + persistent context + edit-diff feedback closes the loop so each skill gets better over time rather than stagnating after first use.

## Key Takeaways

- Collected skills are "instruction sheets in a drawer" — the agent doesn't know when to run them, where to store results, or how to adapt. Loops fix this.
- The three rings of a loop: **Scheduling** (timed triggers, no asking), **Memory** (results written to files, read into context next run), **Feedback** (diff your edits against drafts, distill into updated rules)
- Writing skills: ban-list of phrases the author deletes, nightly diff of draft vs. published, auto-distill editing patterns into skill file rules — evolved from v1.0 to v1.3 without manual maintenance
- Research skills: agent pulls 30 posts sorted by engagement, stores full text (NOT summaries — summaries drop key details), author does judgment calls on what to use
- Review skills: multiple simultaneous LLM personas (skeptic, newcomer, customer, peer) score paragraphs; consistent low-scorers become a default editing checklist
- Memory layers: daily work log, long-term verified rules, session handoff state snapshot — technically file-read context injection, not native LLM memory
- Ops skills: heartbeat scan (silent unless 🔴/🟡 level event), nightly review, morning/evening briefings — individually cron jobs, together a self-improving chain
- Start with one cron job: scheduled triggers + persistent context is the minimal viable loop

## Links

- [Article](https://x.com/i/article/2039678398344093696)
- [Original Tweet](https://x.com/Voxyz_ai/status/2039704571165987213)

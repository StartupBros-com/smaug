---
title: "Loops You Can Trust"
type: article
date_added: 2026-07-29
source: "https://x.com/i/article/2066965659259686912"
author: "Lauren Tan (@poteto)"
tags: [ai-agents, cursor, pstack, verification, automations, agent-loops, high-output-management]
via: "Twitter bookmark from @poteto"
---

Lauren Tan's (Cursor) field report on why agent volume without verification just manufactures review debt, and how she turned Andy Grove's breakfast-factory model from *High Output Management* into a pipeline she can leave running. The egg is the limiting step: toast and coffee can get faster, but plates still wait on the three-minute egg. In software the egg is reproduction and verification. She used this to explain shipping on the order of 1,000 PRs in a month — not by prompting harder, but by giving agents the same signals she uses, isolating their work, and only then wiring the stages into Cursor Automations that start without her.

The origin story is concrete. Day two at Cursor she was asked to fix Agents Window (Glass) performance days before launch, on an Electron app already crashing into the 4GB heap limit. Agents hallucinated causes. She built `/control-glass`: a skill that launches a DevTools-Protocol-enabled build so an agent can click, inspect the a11y tree, screenshot, throttle, CPU-profile, and take heap snapshots. Same measurement before and after a change. Then worktrees, because two agents sharing ports and user data collided. Throughput went up; quality did not, until every recurring failure became a skill. That pile is [pstack](https://cursor.com/marketplace/cursor/pstack) — reproduce first, competing hypotheses, failing test first, blast-radius check, alternatives, before/after product capture.

Cursor Automations (March) closed the loop. Maintenance became a staged line in Slack: triage (attachments, version, dupes, feature guess, ticket + handoff) → repro (hit the broken state twice in a real cloud Cursor build, capture video) → fix (smallest proven change, draft PR). Humans can reject the repro before the fixer starts. Any stage can stop the line — not-a-bug, cannot-repro, too-risky — because bad work gets more expensive downstream. She open-sourced the reference automations under [`cursor/plugins` `pstack/automations/benny`](https://github.com/cursor/plugins/tree/main/pstack/automations/benny).

The StyleX migration is the cautionary tale. One ~400k-line PR (much of it generated evidence) got computed-style parity and shrank CSS from >30k to ~6k lines, then dogfooding still found z-index, global-class, and `!important` fights. The next loop migrates one leaf component per day: pre-flight for dynamic classes and stacking, search every consumer before deleting a class, screenshot light/dark/high-contrast plus interaction states, second agent inspects the media. Cheap fail on a small PR beats a giant-migration regression.

## Key Takeaways

- Verification is the long pole. Speeding generation without a way to trust the result just compounds slop for humans who already have less bandwidth.
- Give agents the instruments you use (CDP, profiles, heap snapshots, tests), not a chat summary of what you saw.
- Isolate each agent (worktree, ports, browser state) before you parallelize, or they interfere and you cannot attribute results.
- Managerial leverage is the job now: do the work once as a skill or tool so every future agent inherits the scar.
- Autonomous loops only after the stage can prove its work and stop the line. Artifacts (failing/passing tests, before/after video, traces) beat a fluent "I fixed it."
- pstack `/show-me-your-work` keeps an append-only decision log and has a different-model agent review the workflow against the transcript.
- Build the Lever: hand-do the first unit, then have the agent write a codemod plus a checker a reviewer can rerun — don't swarm a migration and inspect hundreds of diffs.
- Catch defects at the lowest-value stage. One-component-per-day with visual parity is the StyleX lesson.
- Five operating rules: do it by hand first; share your tools; every stage must prove or stop; turn transcript failures into skills/evals; grant autonomy only after trust.

## Links

- [Article](https://x.com/i/article/2066965659259686912)
- [Original Tweet](https://x.com/poteto/status/2082607895934611844)
- [Earlier post this quote-tweet points at](https://x.com/poteto/status/2069824386283319343)
- [pstack on GitHub](https://github.com/cursor/plugins/tree/main/pstack)
- [Benny automation examples](https://github.com/cursor/plugins/tree/main/pstack/automations/benny)
- [pstack marketplace](https://cursor.com/marketplace/cursor/pstack)
- [High Output Management](https://www.amazon.com/dp/0679762884)
- [Existing pstack tool note](../tools/pstack.md)

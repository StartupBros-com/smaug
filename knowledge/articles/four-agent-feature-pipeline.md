---
title: "How to build a 4-agent team, that ships a feature while you sleep (Exact Setup Inside)"
type: article
date_added: 2026-05-30
source: "https://x.com/i/article/2059953944156082180"
author: "darkzodchi"
tags: [claude-code, multi-agent-systems, agent-orchestration, software-delivery, handoffs]
via: "Twitter bookmark from @zodchiii"
---

This guide proposes a four-stage Claude Code feature-delivery pipeline: Planner, Coder, Tester, and Reviewer. Each specialist has a narrowly scoped agent definition and passes its output through files in `.pipeline/`, allowing the next stage to begin with a durable, targeted handoff rather than an overloaded shared chat context.

The recommended flow starts with an Opus planner that writes an implementation specification, hands it to a Sonnet coder that implements only that specification and records changed files, then uses a Sonnet tester to add and run behavioral tests. A read-only Opus reviewer compares the specification, implementation, test results, and `git diff`, issuing a SHIP, NEEDS WORK, or BLOCK verdict for human sign-off.

## Key Takeaways

- File-based handoffs make each stage independently inspectable: `.pipeline/spec.md`, `changes.md`, `test-results.md`, and `review.md` are the durable workflow contract.
- The slash-command orchestrator must run stages in order and verify each handoff file exists; it stops for open questions or test failures rather than allowing later agents to guess or silently repair issues.
- Narrow roles reduce context contamination: the planner does not implement, the tester does not fix code, and the reviewer is read-only so it cannot conceal a defect with an unreviewed patch.
- Tests should cover the planned happy path, named edge cases, and at least one failure case, while the reviewer evaluates whether green tests actually validate the required behavior.
- The article positions hosted, always-on agent infrastructure as an optional extension, but its core coordination pattern can be implemented locally with agent definitions, shared files, and one orchestration command.

## Links

- [Article](https://x.com/i/article/2059953944156082180)
- [Original Tweet](https://x.com/zodchiii/status/2060728613872234644)

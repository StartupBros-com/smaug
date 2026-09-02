---
title: "How to Design an Agent Harness: six decisions that turn a model into a worker you can leave alone"
type: article
date_added: 2026-08-18
source: "https://x.com/i/article/2088087479538614272"
author: "Yarchi"
tags: [agent-harness, ai-agents, evals, sandboxing, context-engineering, openai, anthropic]
via: "Twitter bookmark from @undefinedKi"
---

Yarchi's field guide for the software wrapped around a model — loop, tools, memory, crash state, permissions, and who declares done. A better model does not fix tests that never ran, rules forgotten after twenty minutes, or a queue of approval clicks. That wrapper is the harness, and you already have one; the only question is whether anyone designed it. The name itself only settled in early 2026, which is why the layer sat unmanaged.

Three production shapes show the same point: none of the important parts shipped in the box. DoorDash runs every agent in a throwaway VM with YAML playbooks and a single gateway (130,000 automated tasks in a month, including 25,000+ code reviews a week). OpenAI treats the repo as the harness: ~100-line instructions as a table of contents into real docs, architecture rules as linters, three engineers merging ~1,500 PRs in five months. Anthropic splits planner / implementer / browser-grader agents that talk only through files — 6 hours and $200 versus 20 minutes and $9 unharnessed, more than 20× the price for a result you can actually leave alone.

## The six decisions

1. **The loop, and where it stops.** Vendors own the inner tool loop. You own the stop rule ("tests pass and the app boots," never "the agent said done"), the bad-ending policy (restart with a note vs freeze), a hard turn or wall-clock cap, and turn logs if it runs unattended. A hand review of 50 published agent loops found only 74% stated what finished meant and only 32% kept memory across runs.

2. **The tools it can see.** The function menu is the model's entire world. Do not preload every MCP server; put tool docs on disk and let the agent open what it needs (Anthropic's worked example: 150k tokens down to 2k). Rewrite errors as structured next-step hints (Siemens: +37–40 points completion at ~half the tokens per success). Cut unused or similarly named tools; naming and grouping change behavior.

3. **What stays in memory.** Auto-compaction throws away whatever it wants. Stay under ~300–400k on a million-token model, trim on purpose between stages (research → doc → plan → implement, fresh window each time), and pin rules that must survive summarization. One unreviewed study saw policy violations go from 0% with the rule in view to 30% after compaction (59% on the worst model); pinning brought them back to zero.

4. **What survives a crash.** Four files, kept current: `SPEC.md` (you write, agent never edits), `PLAN.md` with plain acceptance criteria, `PROGRESS.md` for the next session, append-only `DECISIONS.md`. Commit after every working change so rollback is `git revert`. Optional fifth: a JSON pass/fail feature list. If it is not in a file, it does not exist.

5. **What it's allowed to touch.** OS-level directory and egress-proxy boundaries, not in-app prompts (people approve 93% of those). A shared-systems gateway that issues only declared tools and logs every call. Short-lived, job-scoped tokens — never long-lived keys in the sandbox. Anthropic reported sandboxing cut permission prompts 84% internally, which is why it sticks.

6. **Who says it's done.** Never the writer. Review in a fresh session, actually run the app (browser or CLI), build 20–50 evals from real past failures, run each task three times and score the worst run (75% per attempt is 42% for three greens). Watch for fluent paragraphs that explain away an error — one production study found ~70% of those caught by a human, not a test.

## Weekend version

One <100-line instructions file that is a table of contents, not an encyclopedia. Anything broken twice becomes a linter, not a paragraph. The four files plus a commit after every working change. Pin unsommarizable rules. Twenty tasks, three runs, judged on the worst. Everything past that is optimization. A harness earns its keep on work you could not hand off at all, never on work where you were trying to save twenty minutes.

## Key Takeaways

- You do not opt out of a harness — the default is whatever accumulated at 2am
- Write the stop rule before the first run; "the agent said done" is the current default and it is wrong
- Progressive tool loading and structured errors beat model upgrades more often than teams expect
- Pin safety and contract rules so compaction cannot summarize them away
- Persistence is four markdown files plus git, not a custom checkpoint system
- OS sandboxing is both the security control and the way to kill rubber-stamp approval prompts
- Grade in a separate session, run the thing, and score the worst of three attempts
- Anthropic's own harnessed run cost >20× the unharnessed one — spend that only on work you could not otherwise leave

## Links

- [Article](https://x.com/i/article/2088087479538614272)
- [Original Tweet](https://x.com/undefinedKi/status/2089777209015943333)

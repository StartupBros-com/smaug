---
title: "なぜ私のCodexだけ、SOL極高をぶん回しても使用量がなかなか減らないのか"
type: article
date_added: 2026-08-19
source: "https://x.com/i/article/2089896697967321088"
author: "Shin (DecisionOS)"
tags: [codex, gpt-5.6-sol, prompt-cache, token-usage, external-memory, agent-harness, decision-os]
via: "Twitter bookmark from @ronginooth"
---

Shin (DecisionOS) notices that heavy Codex use on GPT-5.6 Sol at max reasoning barely moves weekly quota, then measures why. After one large job, weekly usage went 62% → 63% while the session consumed ~48.35 million input tokens. Of those, ~47.72 million (98.7%) were reused/cached inputs. Displayed token volume is not the same as billed or quota-consuming tokens: rereading a cached context is cheap; rereading it cold is not.

This is not idle chatting. In the same month he was running multiple projects in parallel, attempting repairs on ~40 public repos (at least 12 merged), filing a root-cause analysis on an OpenAI issue that does not take external PRs, reproducing and patching a VS Code bug through regression tests, and sending multiple OpenClaw repair PRs. GitHub search, large code reads, hundreds of tool calls, and context compaction were all in play.

The second half of the piece is the real thesis. He does not treat GitHub as a code host only. Discoveries, failures, and repeatedly observed structures get written out as judgment rules that later sessions can retrieve. Measured inventory of this "external intelligence" in his V13 environment:

- Always-on operating rules: ~8,900 characters
- Reusable external intelligence: ~517,000 characters
- Full external Decision Surface including past-case memory: ~1.11 million characters

He does not stuff the 517k into every prompt. The always-on desk is small; the library is large and fetched on demand. Rules only promote after the same structure shows up in more than one job. That is the opposite of a bloated AGENTS.md / system prompt.

He explicitly does **not** claim the external-intelligence store caused the 98.7% reuse rate. Long-lived context, rereading the same code/evidence, Codex's own cache, and how he slices tasks could all explain it. What he does claim: a heavy real-work window moved 48M tokens, 98.7% were reuse, weekly usage moved 1%, and a ~517k-char reusable judgment layer exists beside the model.

The strategic point is inheritance. New chats normally throw away yesterday's 10-hour search. If yesterday's failures and structures become today's starting point, the same Sol after a year of accumulated outer intelligence is not the same starting line as a fresh user's Sol. He is not fine-tuning weights. He thinks this makes *his* AI feel about 0.5 generations ahead of the raw model, and he wants other real environments to try the same outer-intelligence loop.

## Key takeaways

- Token counters and weekly Codex quota measure different things; cache/reuse can hide enormous input volume
- 48.35M input tokens / 98.7% reused / +1% weekly usage is the measured data point
- Keep the always-on prompt small (~9k chars); put the rest in a retrievable outer store and promote only after repeated observation
- Compounding advantage may come from inheriting paid-for thinking across sessions, not only from renting a newer model
- Causal link between the 517k-char store and the cache hit rate is unproven; treat it as a hypothesis plus a measured coincidence
---

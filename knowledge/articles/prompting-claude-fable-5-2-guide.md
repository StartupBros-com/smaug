---
title: "Prompting Claude Fable 5.2"
type: article
date_added: 2026-11-14
source: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-2"
author: "Anthropic"
tags: [claude, prompting, agents, coding-agents, fable-5-2]
via: "Twitter bookmark from @minhnguyen (quoting @simonw)"
---

Anthropic's official prompting guide for Claude Fable 5.2 (and Mythos 5.2). It covers behaviours that differ from earlier models and the system-prompt text or harness changes that address each. Bookmarked because the "say who owns the code" tip changes how agents treat existing code: simonw highlighted it, and minhnguyen replied with his own middle-ground rules.

## Key Takeaways

- Effort: start at `high` (the default); `medium` suits interactive coding, `xhigh`/`max` only where a gain is measured. Re-run effort sweeps rather than carrying settings over from earlier models. "Answer without deliberating" instructions no longer stop thinking at medium and above.
- Finish the whole task: at low/medium effort the model sometimes stops early by listing what is left or offering to continue. A "Finishing work" system-prompt block (work through ordinary obstacles, respect deliberate blockers) roughly halved unfinished sessions at about +30% output tokens.
- Say who owns the code: with no ownership statement the model adds to existing structure (even duplicating). Telling it "You are the owner and long-term maintainer of this codebase, and its design is up to you" raised duplicate-code consolidation from under 10% to about 75% of runs, with 70-80% more output tokens, unrequested tests/docs, and sometimes behaviour changes. Omit it when the user wants minimal changes; a "no drive-by refactors" rule does not fully cancel it. PR summaries may omit small changes, so review the diff.
- Long turns can look silent: progress updates arrive as `thinking` blocks (set `display: "updates"`); reminders after several silent tool calls roughly halved the longest silent stretch.
- Subagents: delegation depends on the harness; check subagent default model and cost, and trim standing "always delegate" lines.
- Caution piles up from memory, notes and instruction files. Remove stale "never retry" rules, name steps needing no approval, and scope "never" rules with explicit exceptions.
- Review prompts built for earlier models: token budgets shown to the model, harnesses that edit earlier turns (preserved thinking prefix check), "treat that answer as done" lines, rigid style rules.
- Reports: write for a low-context reader, key points first, plain words, self-contained messages.
- Safeguard refusals return `stop_reason: "refusal"` with categories (cyber, bio, frontier_llm, reasoning_extraction, general_harms); do not ask the model to write out its reasoning in the response.

## Links

- [Article](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-2)
- [Original Tweet](https://x.com/minhnguyen/status/2120263836582424725)
- [Quoted Tweet from @simonw](https://x.com/simonw/status/2120029347948220500)

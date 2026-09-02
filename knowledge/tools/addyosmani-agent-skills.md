---
title: "addyosmani/agent-skills"
type: tool
date_added: 2026-08-18
source: "https://github.com/addyosmani/agent-skills"
tags: [agent-skills, claude-code, cursor, codex, engineering, addy-osmani, tdd]
via: "Twitter bookmark from @PovilasKorop"
---

Addy Osmani's production-grade engineering skills for AI coding agents. The pack encodes senior-engineer workflows and quality gates so agents follow the same DEFINE → PLAN → BUILD → VERIFY → REVIEW → SHIP path instead of improvising a different process each session. ~88k GitHub stars at capture; Povilas Korop flags it as the less-hyped peer of Matt Pocock's skill sets.

Eight slash commands map onto the lifecycle and pull in the right skills:

| Command | Principle |
| --- | --- |
| `/spec` | Spec before code |
| `/plan` | Small, atomic tasks |
| `/build` | One slice at a time |
| `/test` | Tests are proof |
| `/review` | Improve code health |
| `/webperf` | Measure before you optimize |
| `/code-simplify` | Clarity over cleverness |
| `/ship` | Faster is safer |

`/build auto` generates the plan and implements every task in one approved pass: you approve once, then it runs autonomously, still test-driven and committed per task, pausing on failures or risky steps. Context-triggered skills also fire on their own (API work → `api-and-interface-design`, UI → `frontend-ui-engineering`).

Twenty-four skills total. Highlighted singles: `code-review-and-quality` (five-axis review), `interview-me` (one-question-at-a-time requirements interrogation), `test-driven-development` (enforced red-green-refactor).

## Install

Any of 70+ agents via the Vercel skills CLI:

```bash
npx skills add addyosmani/agent-skills
```

Claude Code marketplace: `/plugin marketplace add addyosmani/agent-skills` then `/plugin install agent-skills@addy-agent-skills`. Cursor: copy workflow skills under `.cursor/skills/` and keep short policies in `.cursor/rules/*.mdc` — do not paste full skills into rules.

Per-skill `npx` installs omit the repo-level `references/` checklists (tracked in issue #361); prefer a whole-repo install if those paths matter.

JavaScript. Works with Claude Code, Cursor, Codex, Copilot, Cline, Antigravity.

## Links

- [GitHub](https://github.com/addyosmani/agent-skills)
- [skills CLI](https://github.com/vercel-labs/skills)
- [Original Tweet](https://x.com/PovilasKorop/status/2089595151266038154)

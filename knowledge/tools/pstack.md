---
title: "pstack"
type: tool
date_added: 2026-08-16
source: "https://github.com/cursor/plugins"
tags: [cursor, plugins, pstack, verification, skills, qa, agents]
via: "Twitter bookmark from @KingBootoshi"
---

pstack is Lauren Tan's Cursor plugin ("if you want to go fast, go deep first") shipped inside the official [cursor/plugins](https://github.com/cursor/plugins) repo. The two skills she flags as copy-or-use for everyone are the verification pair: they teach an agent to run, control, and debug *your* app the way a user would, then keep that knowledge from rotting.

`/create-verification-skill` bootstraps a project-specific verification skill if you do not already have one. Alongside the run/control/debug instructions it builds a **feature map**: every feature in the app plus how to reach and use it from a user's point of view. That map is what lets a swarm of QA agents navigate the product instead of guessing at selectors and happy paths.

The map goes stale fast. `/maintain-verification-skill` is the daily follow-up — intended as a Cursor cloud-agent automation — that diffs the app for changes and rewrites the map. Tan's claim is that a strong verification skill becomes team infra: the foundation for productivity, quality, and later automations (verification swarms that actually QA the app rather than linting the diff).

Install via the Cursor marketplace listing for auto-updates, or take the skill files directly from the repo.

## Key Features

- `/create-verification-skill` — generates a per-app skill for running, controlling, and debugging the product
- Feature map — user-POV routes to every feature, so agents can exercise the app like a person
- `/maintain-verification-skill` — daily cloud-agent job that refreshes the map when the app changes
- Distributed as the `pstack` plugin in `cursor/plugins`, with marketplace auto-updates

## Links

- [GitHub (cursor/plugins)](https://github.com/cursor/plugins)
- [create-verification-skill](https://github.com/cursor/plugins/blob/main/pstack/skills/create-verification-skill/SKILL.md)
- [maintain-verification-skill](https://github.com/cursor/plugins/blob/main/pstack/skills/maintain-verification-skill/SKILL.md)
- [Cursor marketplace](https://cursor.com/marketplace/cursor/pstack)
- [Original Tweet](https://x.com/KingBootoshi/status/2089125686967771187)
- [Lauren Tan's announcement](https://x.com/poteto/status/2082874054483255805)

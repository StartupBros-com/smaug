---
title: "anti-slop"
type: tool
date_added: 2026-08-12
source: "https://github.com/dmmulroy/anti-slop"
tags: [oxlint, typescript, lint, claude-skills, ai-slop]
via: "Twitter bookmark from @dillon_mulroy"
---

Oxlint plugin plus Claude skill that flags LLM-generated TypeScript slop. Dillon Mulroy shipped it as `npx skills add dmmulroy/anti-slop --skill install-anti-slop`. GitHub metadata (description, README, stars) was empty at ingest, so this note is from the announcement tweets only.

While dogfooding, one agent reviewing another agent's linted diff accused it of "type laundering" — the kind of unsound-cast wrapping the plugin is meant to surface.

## Key Features

- Oxlint plugin aimed at AI-written TypeScript slop
- Installable as a Claude skill via `npx skills add dmmulroy/anti-slop --skill install-anti-slop`
- Caught "type laundering" in a multi-agent review loop

## Links

- [GitHub](https://github.com/dmmulroy/anti-slop)
- [Original Tweet](https://x.com/dillon_mulroy/status/2087537790061850984)

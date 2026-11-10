---
title: "The /wait-what Skill"
type: article
date_added: 2026-11-10
source: "https://www.aihero.dev/skills-wait-what"
author: "Matt Pocock"
tags: [claude-code, agent-skills, prompting]
via: "Twitter bookmark from @nateberkopec"
---

A three-line agent skill from Matt Pocock's skills repo. When you type /wait-what because you stopped following the agent, it re-pitches its last message in plain English, adds the context you were missing, and uses the vocabulary from the project's GLOSSARY.md.

## Key Takeaways

- The skill is deliberately tiny: long concision skills still leave the model verbose because the model copies the skill's length rather than its request.
- The leading word "wait" describes the user's state (you stopped understanding here), so the agent backs up and explains. Output-focused fixes like /tldr or /no-fluff make the model over-correct into clipped fragments.
- It says "re-pitch that" rather than "that last message", letting the agent decide how far back to go since the confusing context is often bigger than one paragraph.
- It is user-invoked only, because only the user knows when they stopped following. Pair with grill-with-docs to build shared language upfront.
- Install with `npx skills@latest add mattpocock/skills --skill=wait-what`.

## Links

- [Article](https://www.aihero.dev/skills-wait-what)
- [Original Tweet](https://x.com/nateberkopec/status/2097517557012127877)

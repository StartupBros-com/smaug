---
title: "emilkowalski/skills"
type: tool
date_added: 2026-07-27
source: "https://github.com/emilkowalski/skills"
tags: [claude-skills, design, animation, prototype, ui, emil-kowalski]
via: "Twitter bookmark from @emilkowalski"
---

Emil Kowalski's skill pack for designers and engineers — motion and interface taste distilled from years at Vercel and Linear, encoded so agents stop picking the wrong easing, a solid border instead of a semi-transparent shadow, or a hand-rolled toast. ~30.7k GitHub stars at capture. The July 27 bookmark is the `/prototype` skill: the agent builds multiple distinct versions of an animation or UI element behind a switcher, and the selected version is saved in query params so a teammate can open the same candidate.

The pack's thesis is that agents lack taste; these skills list the small mistakes that compound into slop and tell the agent how to fix them. Domain expertise is the input; the skills amplify it rather than replace it.

## Key Features

- **prototype** — generate several versions of a described UI piece and flip through them with a switcher; selection persists via query params
- **emil-design-eng** — the main skill: mostly animation, plus design advice
- **animate** / **animate-expo** — build an animation from scratch with the right curve, duration, and properties (Expo/RN variant keeps motion off the JS thread)
- **review-animations** / **improve-animations** — strict review against Kowalski's rules, then prioritized self-contained plans any agent can execute
- **find-animation-opportunities** — places that would benefit from motion, and what *not* to animate
- **animation-vocabulary** — the words that get better motion out of a model
- **apple-design** — Apple interface and fluid-motion principles from WWDC talks, translated for the web
- **pick-ui-library** — choose a trusted library instead of letting the agent invent a toast or install an abandoned package
- **ask-sonner** — setup, styling, recipes, and common fixes for the Sonner toast library

## Install

```bash
npx skills@latest add emilkowalski/skills
```

Newsletter for updates: [animations.dev/skills](https://animations.dev/skills).

## Links

- [GitHub](https://github.com/emilkowalski/skills)
- [Original Tweet](https://x.com/emilkowalski/status/2081704974040387898)
- [Agents with Taste](https://emilkowal.ski/ui/agents-with-taste)

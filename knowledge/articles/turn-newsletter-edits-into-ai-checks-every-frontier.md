---
title: "Turn your daily newsletter edits into AI checks, and watch every frontier model jump 25+ points"
type: article
date_added: 2026-11-17
source: "https://frontier.every.to/experiments/turn-your-daily-newsletter-edits-into-ai-checks-and-watch-every-frontier-model-jump-25-points"
author: "Dan Shipper (Every Frontier, experiment #45)"
tags: [skills, autoresearch, evals, every, compounding-skills]
via: "Twitter bookmark from @danshipper"
---

An Every Frontier experiment on making skills that compound. The team publishes the Context Window newsletter nearly daily and kept repeating the same editing redlines in chat. Instead they saved real drafts next to Dan Shipper's edits and reactions in Every Checks, turned each reaction into a binary yes/no check, and then optimized a reusable skill against those checks.

## Key Takeaways

- Each saved example pairs the original prompt with a "gold case" (the exact version they wanted to publish) plus the feedback behind it.
- Eight real cases yielded 74 yes/no checks, e.g. does the opening explain what is being corrected and why a reader would care, does it avoid unexplained agent jargon, are sentences crisp rather than run-ons.
- A `short-idea-summary` skill was iterated v1 to v9 in zero-context sandboxes across four frontier models, blind-graded against the checks.
- Baselines on the first seven cases scored 34% to 56% (Opus 5.5 56%, GPT-6 Astra 46%, Gemini 4 Hydrogen 40%, Sonnet 5.5 34%).
- After v9, all models landed at 75.7% to 81.1% on the full 74 checks (Gemini 4 Hydrogen 60/74, Opus 5.5 and GPT-6 Astra 58/74, Sonnet 5.5 56/74).
- Lesson: collect gold cases, convert the gap between a mediocre draft and a gold one into checks, then optimize the skill against the checks so daily editing feedback becomes a reusable, compounding asset.

## Links

- [Article](https://frontier.every.to/experiments/turn-your-daily-newsletter-edits-into-ai-checks-and-watch-every-frontier-model-jump-25-points)
- [Original Tweet](https://x.com/danshipper/status/2122091033001337134)

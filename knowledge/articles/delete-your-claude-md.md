---
title: "Delete your CLAUDE.md"
type: article
date_added: 2026-08-11
source: "https://x.com/i/article/2087085459860320256"
author: "Charlie Hills"
tags: [claude-code, claude-md, skills, hooks, prompting, maintenance, boris-cherny]
via: "Twitter bookmark from @charliejhills"
---

Charlie Hills sat down to delete six months of CLAUDE.md, hooks, and skills after Boris Cherny told Y Combinator that Anthropic cut 80% of Claude Code's own system prompt for Opus 5 / Fable 5 — and then told users to wipe their CLAUDE.md, skills, and hooks every six months and see what the new model does unaided. Hills treats that as a maintenance cadence rather than a one-shot delete: the file had become a hindrance, not a help.

The taxonomy is about *when* each piece runs. CLAUDE.md is a standing brief — the front-desk receptionist, not the filing cabinet — loaded every session before you type. Skills are named workflows you invoke. Hooks fire whether Claude wants them to or not (a word like "LinkedIn" or "carousel" pulls the matching skill). Corrections go into memory files, not back into CLAUDE.md. His personal file routes to project files; the 860-line infographic spec never enters a newsletter session.

He ships copy-paste audits: fetch Anthropic's live prompting docs and verdict every line DELETE / KEEP / REWRITE with a quoted source; cluster skills by job (he had 195 skills, only 65 ever invoked); list hooks, flag per-message and too-common triggers, and never delete until you approve a plan. Anthropic's published ceiling is under 200 lines per CLAUDE.md; his was 305. Longer files cost tokens on every session, resolve contradictions arbitrarily, and push the actual ask into the poorly attended middle of the context (Lost in the Middle). New models need five things old ones did not: short answers, a document-length cap, progress updates, held task scope, and a limit on spawned helpers. Truth rules ("only claim what you verified") stay.

Companion video: [My Claude Code Setup Was a Mess | The 3 Rules That Fixed It](https://www.youtube.com/watch?v=38u7KwEouoA).

## Key Takeaways

- Delete or audit CLAUDE.md / skills / hooks on a ~6-month cycle; Anthropic deleted 80% of their own product prompt when the model jumped
- CLAUDE.md points at knowledge; hooks walk you to the right project file; skills do the work
- Target under 200 lines. Contradictory rules are resolved arbitrarily. The middle of a long file is skimmed
- Audit prompts should fetch today's Anthropic guidance, quote a source for every DELETE, and hand back a plan — not mutate the folder unattended
- Unused skills are free until they duplicate a job; unused hooks that fire on every message are not

## Links

- [Article](https://x.com/i/article/2087085459860320256)
- [Original Tweet](https://x.com/charliejhills/status/2087098585796276560)
- [Companion video](https://www.youtube.com/watch?v=38u7KwEouoA)

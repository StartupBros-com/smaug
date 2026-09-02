---
title: "How to build a $2M video production pipeline"
type: article
date_added: 2026-08-16
source: "https://x.com/i/article/2088992361707896832"
author: "Machina (@EXM7777)"
tags: [ai-video, seedance, higgsfield, production-pipeline, skills, filmmaking]
via: "Twitter bookmark from @EXM7777"
---

Machina's Higgsfield-sponsored playbook for producing AI films and 30-second ads on Seedance 2.5 at 1080p. The model one-shots a 30-second clip with lip-synced dialogue and sound effects in the same pass, but it has no memory between generations — neighbouring shots will hand a character a different face unless the pipeline remembers for it. The method is the memory: lock assets before any film frame renders, copy one exhaustive "passport" verbatim into every prompt, change one line per attempt, and version everything so a good shot can be reproduced.

The whole surface is meant to be agent-driven via Higgsfield's CLI (`npm install -g @higgsfield/cli`, `higgsfield auth login`, `npx skills add higgsfield-ai/skills`). One video model on purpose: one prompt grammar, one consistency behavior. Image models only build the reference sheets that feed it. If 2.5 is replaced next quarter, the stages and gates stay.

## Four rules

- Generate nothing for the film until every asset is locked
- One asset, one approved passport, copied word-for-word into every prompt that uses it
- Edits are surgical: change one line, keep everything else verbatim
- Everything is versioned and logged — an unlogged good shot is a shot you cannot reproduce

Wet clothes and blood are separate passports (`@cal`, `@cal_wet`, `@cal_blood`). A variant described inline is a variant the model forgets. Descriptors are never trimmed for brevity.

## 11 stages and two gates

Pre-production runs in reverse: fix digital references first, because tighter early stages make every later generation cheaper.

1. **Breakdown** — script becomes scenes and 22-field shot cards (identity, direction, camera/edit). One action per clip. In-frame text (signs, phone screens, titles) leaves generation and goes to its own task list.
2. **References** — images as specification, not moodboards. Working counts: 10–20 images for a lead, 8–15 per key location, 3–5 per prop, plus boards for light, color, optics, camera movement, texture, cutting tempo, and sound. Caption what is taken from each image; "like this, not allowed" becomes the ban list.
3. **Visual bible lock** — every board ends in a written decision: approved, revise, or rejected.
4. **Asset sheets / passports** — exhaustive text descriptor plus grey-background reference sheet (front, three-quarter, profile, back, close portrait). Location passports carry palette and light character so shots arrive pre-graded.
5. **Library / stress test** — combat-condition stills: angles, shot sizes, real scene light, two-shots beside every co-star. Characters must hit 10/10 repeatability before the registry row flips to locked.
6. **Generation** — every shot prompt is the same 15 blocks in fixed order. No negative prompts; prohibitions are rewritten as what *is* in the frame. A 30-second one-shot is four timed beats (0–6 sets, 6–14 builds, 14–24 turns, 24–30 resolves). One line changed per attempt; simplify the shot at attempt 15.
7. **Edit** — runs in parallel with generation because a reshoot costs minutes. The editor sees only accepted takes in `selects`. Trim the first and last half-second; cut more aggressively than feels natural.
8. **Cleanup** — artifacts fixed shot by shot.
9. **Color** — outsourced colorist unifies neighbouring shots, then grades.
10. **Sound** — generated audio is scaffolding; a post team cleans the lip-synced voice, rebuilds effects, mixes to platform loudness.
11. **Master** — DCP for festivals, ProRes for the vault, platform encodes, subtitles, plus an archive of final prompts, generation log, registry, and locked passports.

Two written gates hold it together: boards carry decisions, and generation does not start until every character, variant, location, and prop in the scene has a registry row marked locked.

## The seven skills

Posted to Telegram (`t.me/tgmachina`), meant to run the automatable stages:

- `/setup` — writes shared image/video model config so every other skill reads the same stack
- `/studio-init` — scaffolds the file tree (assets, prompts, generations, selects, edit, color, sound, master, docs) and the three folder laws
- `/film-breakdown` — script or one-paragraph idea → scene table and 22-field shot cards
- `/reference-board` — captions, ban list, written lock per board
- `/asset-passport` — interviews until the descriptor has no gaps, splits state variants, files a draft registry row
- `/stress-test` — combat matrix; flips locked only on a full pass
- `/shot-prompt` — refuses to write a generation-ready prompt while any in-frame asset is still draft; keeps the one-line-change generation log

Edit, cleanup, color, sound, and master stay human on purpose.

## Key Takeaways

- The video model has no memory, so the pipeline *is* the memory: passports, a locked registry, and verbatim prompt paste
- Do not render film frames until every in-scene asset is stress-tested to 10/10 and marked locked
- One 15-block prompt grammar, one line changed per attempt, simplify the shot at 15 — wording is not the lever after that
- Reshoots are cheap, so editing is concurrent production, not post
- Models will swap out; the sequence and the gates are the part you keep

## Links

- [Article](https://x.com/i/article/2088992361707896832)
- [Original Tweet](https://x.com/EXM7777/status/2089053598068212030)
- [Telegram skills drop](https://t.me/tgmachina)

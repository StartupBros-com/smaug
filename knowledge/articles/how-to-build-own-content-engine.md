---
title: "How To Build Own Content Engine? (FULL COURSE)"
type: article
date_added: 2026-08-17
source: "https://x.com/DeRonin_/status/2042604279077237170"
author: "Ronin (@DeRonin_)"
tags: [content-engine, skill-graph, claude, repurposing, social-media, markdown]
via: "Twitter bookmark from @DeRonin_"
---

Ronin's weekend build for running ten social accounts with no content team: a 17-file wikilinked "skill graph" that an AI agent reads before writing, so one topic becomes eight or ten platform-native posts instead of the same paragraph reformatted ten times. He positions it as the playbook you would hand a new hire — brand, audience, voice, hooks, platform rules, and a production chain — except the hire is Claude. A single prompt with no graph is "hiring a genius with amnesia."

The graph lives in Obsidian (for the visual map) or a plain folder. Claude Projects is the recommended runner (upload the `.md` files as persistent project knowledge); ChatGPT custom GPTs and paste-in context also work; Cursor or Claude Code can read and update the files on disk so hooks and tone evolve from what actually performed.

## Folder (17 files, 4 folders)

```
/content-skill-graph
├── index.md
├── platforms/   x, linkedin, instagram, tiktok, youtube, threads, facebook, newsletter
├── voice/       brand-voice, platform-tone
├── engine/      hooks, repurpose, scheduling, content-types
└── audience/    builders, casual
```

`index.md` is a briefing, not a table of contents: identity (brand, niche, mission), a node map where every wikilink carries a one-line operating note (limits, vibe, cadence), and an 8-step execution protocol. The hard rule: output is not ten copies of the same text. Same topic, different angle, hook, voice, structure, and format per platform.

## What each layer does

- **Platforms** — one playbook per network (DNA, content rules, formats that work, posting strategy, who is there, how it sits in the chain). X is written first because 280 characters force the core claim; LinkedIn expands into a personal narrative; Instagram becomes a 7–10 slide carousel; TikTok is a 45–60s raw script with a 2-second hook; YouTube is the 8–12 minute SEO tutorial; newsletter is the 1,000–2,000 word personal letter; Threads and Facebook are the conversational and community cuts.
- **Voice** — `brand-voice.md` is the DNA (personality, tone markers, allowed/banned vocabulary, formatting). `platform-tone.md` is the same person in different rooms: lowercase punchy on X, narrative-professional on LinkedIn, spoken-energetic on TikTok, intimate on email. Change tone first, then format, then hook.
- **Engine** — five hook formulas (playbook, proof, contrarian, replacement, discovery, plus behind-the-scenes) with a weekly prune of losers. `repurpose.md` is the pipeline: X → LinkedIn → Instagram → TikTok → YouTube → newsletter → Threads → Facebook. Litmus test: if someone followed you on every platform, would they be annoyed seeing the same thing? If yes, you reformatted. Batch all versions in one sitting, then stagger via `scheduling.md`.
- **Audience** — `builders.md` (indie hackers / engineers who want numbers and playbooks) vs `casual.md` (curious non-builders who need an on-ramp). Same topic, different address.

## How he actually runs it

Give the project a topic and tell it to follow `index.md`. Claude walks the wikilinks and emits one native post per platform. Review, schedule, leave. He says this replaced an $8–12k/mo agency retainer. Start with `index.md` + `brand-voice.md` plus the three platforms you actually post on; add the rest later. Iterate weekly by writing winning hooks back into `hooks.md`.

Worked example on the topic "How I use AI to manage 10 social accounts": X is a lowercase contrarian thread ("you don't need a content team. you need 30 markdown files"); LinkedIn is a $8k → $0 narrative; Instagram is a carousel whose first slide is "I Run 10 Accounts And Don't Write Anything"; TikTok is a screen recording of the folder; YouTube is a system walkthrough; the newsletter pulls the curtain; Threads is a hot take; Facebook asks the group if anyone else has tried it.

## Key Takeaways

- The graph is the brief: wikilinked nodes give the agent brand, voice, platform law, and a production order before it writes a word
- Rethink, don't reformat — each platform gets a new angle, hook, and shape, not a resized paragraph
- Write X first; brevity finds the claim the other seven expand
- `index.md` and `brand-voice.md` are the two files that make or break the rest
- Cursor/Claude Code can write performance back into the graph so the system compounds

## Links

- [Article (long tweet)](https://x.com/DeRonin_/status/2042604279077237170)
- [Audience Radar follow-up tweet](https://x.com/DeRonin_/status/2089356956720837119)
---

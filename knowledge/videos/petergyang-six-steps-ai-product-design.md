---
title: "Peter Yang — Six steps to design and build a product with AI (Tastemaker)"
type: video
date_added: 2026-07-29
source: "https://www.youtube.com/watch?v=G9o8eoHzpxc"
channel: "Peter Yang"
tags: [youtube, claude-design, claude-code, design-md, product-design, tastemaker, spec]
via: "Twitter bookmark from @petergyang"
---

25-minute walkthrough of Yang's AI-native product process, demonstrated by building Tastemaker — a shareable profile for movies, TV, and games — in Claude Design and Claude Code instead of Figma-first. The thesis is that default AI UI now looks like either purple slop or a recognizable "Claude look," and the fix is not a better one-shot prompt but written visual constraints plus a lot of planning before any app code.

## The six steps

1. **Define the user problem.** He starts from his own IMDb-list frustration and asks Claude (via a spec skill) for a two-paragraph problem statement, audience, and evidence that the gap exists. For a real business he would spend much longer here on demand; this build is personal.

2. **Create a `design.md`.** Paste reference screenshots (he uses Monogram's quiet, cover-art-forward aesthetic) and ask Claude Code for principles, color, type, and spacing. Alternatives he names: Mobbin (and its MCP) for app screens, Dribbble, and designmd.sh for ready-made `design.md` files of Nike, SpaceX, Apple, Vercel, Notion, etc. He flags inspiration vs. copying — different category makes borrowing safer.

3. **Prototype key screens in Claude Design.** Attach the `design.md`, request two screens (public taste profile + logged-out landing) and two layout variations (row vs. grid, light and dark), then answer Claude Design's clarifying questions. He also mentions Paper, pen.dev, and Figma AI as alternatives; he stays in Claude Design because it is already in the subscription and asks good requirement questions. Edit directly on the canvas and via chat. Opus is "totally capable" here if you want to save tokens vs. Fable. Export a zip/HTML of the mockups.

4. **Write one interactive HTML spec.** Opposite of PM-writes-PRD → designer-Figma → engineer-spec. After the key visuals exist, his `/spec` skill (Behind the Craft, paid; or recreate: three tabs) produces a single HTML file with product requirements (scannable, per surface), a readable design system plus a **component library** (without it, later screens drift), and a tech tab with stack, data schema, and trade-offs. He insists you actually read and correct this before generating more UI — otherwise you burn tokens on bad requirements. Claude guessed a 3-week build; he expects ~30 minutes of generation plus hours of iteration.

5. **Design the remaining core screens** back in Claude Design from the spec: creator/edit mode, empty states, item sheets, onboarding (claim a handle, pick six loves, share). Review default/empty/edge cases before anything is wired to a database.

6. **Build last.** Attach `spec.html` and `design.html`, force a question pass for ambiguities, then implement. He still spends a long thread on hover hearts, missing review sections, Netflix-style arrows, and telling the agent to **keep the plan and design files in sync** when it changes code. Live result: landing page, auth, taste profile, add/sort, Supabase + authentication. A few hours, not one-shot.

## Why it was bookmarked

The quote-tweet is the `design.md` sourcing tip (Mobbin MCP, designmd.sh). The video is the full method: treat planning as ≥50% of the work — "waterfall, sped up" — because changing two HTML artifacts is cheaper than changing a production schema.

## Key Takeaways

- A `design.md` (plus reference screenshots) is the cheapest way to escape default Claude/purple aesthetics
- Generate 2–3 key screens *before* the written spec; visuals make the PRD real
- One HTML spec with PRD + design/component library + tech/schema beats three disconnected docs
- Design empty states and onboarding while still in the mockup tool
- Spend at least half the project on planning; building is the cheap part and still needs many feedback loops
- When the agent edits product in code, make it update the spec and design files so the three artifacts stay aligned

## Links

- [YouTube](https://www.youtube.com/watch?v=G9o8eoHzpxc)
- [Original Tweet](https://x.com/petergyang/status/2082519030859264086)
- [Quoted tutorial announcement](https://x.com/petergyang/status/2082473770741272747)

---
title: "vision"
type: tool
date_added: 2026-08-16
source: "https://github.com/kunchenguid/vision"
tags: [agent-skills, vision, product-strategy, claude-code, firstmate]
via: "Twitter bookmark from @kunchenguid"
---

kunchenguid/vision is an Agent Skill that mines a repo's merged PRs (via `gh` / `gh-axi`) or default-branch commit history, drafts a testable `VISION.md` as an acceptance policy, then stress-tests it with 8–12 fault-line hypotheticals on an interactive review board. Kun Chen's claim: once agents write more code than a human can review, and then more plans than a human can review, the remaining lever is a written vision that accepts or rejects ideas — not more code review.

Every principle has to cite real merged work; generic engineering virtues are banned, and the skill refuses if history is unreadable rather than inventing values. Hypotheticals steelman both sides and get replaced if the answer is predictable. Verdicts plus reasoning fold back into the draft, edit by traced edit, until the human approves.

Ships as an `npx skills` package (`npx skills add kunchenguid/vision -g`, then `/vision` or `/vision owner/repo`). The review board runs on `lavish-axi` via `npx`; no host-specific agent tools. Worked example: [firstmate's VISION.md](https://github.com/kunchenguid/firstmate/blob/main/VISION.md). About 277 stars at capture.

## Key Features

- Evidence sheet from merged PRs or commit history; refuses to invent values
- Drafts identity, principles, non-goals, and aligns/resisted tests
- 8–12 borderline hypotheticals (tempting-but-off-mission, principle collisions, slippery slopes)
- House-style review board: card stack, one hypothetical at a time, latest draft always visible
- Delta mode if a VISION.md already exists
- Downstream uses: feature triage, implementation-drift detection in review, ambiguous product calls

## Quick Start

```sh
npx skills add kunchenguid/vision -g
# inside the target repo
/vision
# or: /vision owner/repo
```

## Links

- [GitHub](https://github.com/kunchenguid/vision)
- [firstmate VISION.md example](https://github.com/kunchenguid/firstmate/blob/main/VISION.md)
- [Original Tweet](https://x.com/kunchenguid/status/2089189790881382676)

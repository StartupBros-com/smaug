---
title: "/show-me: compact visual representations for coding agents"
type: article
date_added: 2026-08-12
source: "https://x.com/i/article/2087315210667429888"
author: "Dex Horthy"
tags: [show-me, humanlayer, coding-agents, visualization, mermaid, skills, program-design, html]
via: "Twitter bookmark from @dexhorthy"
---

Dex Horthy's case for making coding agents converse visually instead of in jargon walls. The diagnosis: agents got smarter on paper while the experience got worse — Claude's old voice got RL'd out, Sol is less cringe but still dumps unreadable prose, and people have resorted to "say it like a human" skills (Dillon Mulroy popularizing a @backnotprop prompt). /show-me is HumanLayer's answer: prompt the agent to explain with compact visuals that are lighter and faster than HTML, good enough for most dev-shaped problems.

Install:

```bash
npx skills add humanlayer/skills --skill show-me
```

HumanLayer's own build adds first-class inline HTML and diagrams (`brew trust/tap/install humanlayer/humanlayer`). After install, invoke `/show-me` or just say "this is too much content. show me." Point it at a route, service, feature, PR, or the current topic; `/show-me as an html explainer` is the heavier mode.

The inspiration is Coda Hale's talk on intuition vs. attention in infrastructure: analyzing text is exhausting, the visual cortex is cheap, so fit the tool to the mind. Horthy wants this especially in **program design** — the phase people now skip — discussing types, signatures, and call stacks *before* the agent writes code. The same shapes also triage large diffs after the fact.

## What's inside

- **Component trees** — frontend shape with the state hooks and module boundaries that matter, everything else left out
- **Call stacks** — Dillon's control-flow shape for orchestration and backend work; Tanishq later built an AST tool that emits them
- **Diagrams** — mermaid when the chat surface supports it; they prefer state and sequence diagrams
- **File layouts** — shallow tree, one line of responsibility per entry, for "where does this live" and scoping a refactor
- **Pseudocode** — especially for algorithms
- **Types and signatures** — the shape of the code before any of it exists, too internal for an architecture doc and easy for an agent to get wrong
- **Diff syntax** — for component, call-tree, file-layout, or control-flow changes when most of the picture is unchanged
- **HTML mockups** — HTML has replaced Figma for a lot of their prototyping
- **HTML diagrams** — HumanLayer can inline HTML in assistant responses; otherwise open it in a browser

Hat tip to Matt Pocock's `/teach` HTML explainers.

## Key Takeaways

- Walls of agent prose are a product bug, not a user skill issue; ask for a picture
- Use visuals in program design (types, signatures, call stacks) before generation, and again to navigate a large diff
- Prefer the lightest representation that carries the shape: tree, stack, mermaid, types, then HTML
- `npx skills add humanlayer/skills --skill show-me` ports it into any harness; HumanLayer's brew install is the inline-HTML version

## Links

- [Article](https://x.com/i/article/2087315210667429888)
- [Original Tweet](https://x.com/dexhorthy/status/2087569590268391897)
- [Coda Hale: intuition vs. attention](https://www.youtube.com/watch?v=e_6gkfTomUQ)
- [HumanLayer program design](https://hlyr.dev/wsff-gh#program-design)

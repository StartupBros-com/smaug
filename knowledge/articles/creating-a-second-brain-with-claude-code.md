---
title: "Creating a Second Brain with Claude Code"
type: article
date_added: 2026-04-15
source: "https://x.com/i/article/2044203095429918721"
author: "Ryan Wiggins"
tags: [claude-code, personal-knowledge-management, qmd, vector-search, agent-workflows]
via: "Twitter bookmark from @rywiggs"
---

Ryan Wiggins describes a local, Claude Code-based "second brain" for a product leader's accumulated work: more than 15,000 documents and 3.5 million words from five years of notes, analysis, and strategy. The system makes that history available during ordinary work rather than treating it as an archive to search manually.

The design combines QMD indexing with a personal profile, intermediate distilled context documents, and access to the tools where work happens. A `UserPromptSubmit` hook then derives likely names and topics from each prompt and retrieves relevant material using both semantic vector search and BM25 keyword search. The author reports that this lets vague prompts be enriched with context about people, projects, metrics, and prior decisions.

The article emphasizes feedback loops over a one-time knowledge-base build. A per-session learning skill records validated tool lessons, scheduled daily briefs combine upcoming work with relevant context, and a monthly retrospective compares plans with outcomes. Its accompanying five-phase prompt is deliberately interactive: collect data, test retrieval before proceeding, add automatic context only after the base works, and require confirmation at each phase.

It also treats data governance as a prerequisite: use approved enterprise tools, remove sensitive documents, screen content for personally identifying information before it reaches the model, and constrain analysis to aggregate data where appropriate.

## Key Takeaways

- Index a local corpus first, then test both keyword and semantic retrieval against real memories before building more automation.
- A concise `me.md` containing goals, working style, and recurring feedback helps the system interpret retrieved work in personal context.
- Distilled strategic, role, historical, team, and growth documents can bridge raw files and a live agent without loading the full corpus into every prompt.
- Prompt hooks can make retrieval habitual, but their search latency and result quality need explicit testing rather than assumed value.
- Per-session, daily or weekly, and monthly review loops turn a static archive into a maintained operating system for work.
- Security controls and organizational approval determine whether a personal work knowledge base is appropriate, not merely whether the tooling is capable.

## Links

- [Article](https://x.com/i/article/2044203095429918721)
- [Original Tweet](https://x.com/rywiggs/status/2044448092477661638)

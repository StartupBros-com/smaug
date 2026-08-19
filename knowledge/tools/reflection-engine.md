---
title: "reflection-engine"
type: tool
date_added: 2026-08-04
source: "https://github.com/kropdx/reflection-engine"
tags: [prompt, self-reflection, chatgpt, claude, memory, kevin-rose]
via: "Twitter bookmark from @petergyang"
---

Kevin Rose's reflection-engine is a downloadable prompt, not a product: attach `Reflection-Engine-v1.3.md` to the assistant account where you actually talk about life (relationships, money, health, family — not the coding bot) and it writes a candid, evidence-grounded portrait from that corpus. You get 22 direct answers. Each cites the evidence behind it, scores its own confidence, and ends with one concrete thing to try this week: blind spots, the contradictions that explain the most, expensive habits, and where the current trajectory is actually heading.

The prompt is only as good as the corpus. Official usage is a fresh conversation on the newest high-reasoning model, with memory and past-chat search switched on; a cheap model hands you a horoscope, and a repo of pull requests produces a portrait of a developer. Peter Yang's viral shortcut — "Make an html report based on" the GitHub URL — is a looser path than attaching the file. The prompt tells the model a third party wrote it so curiosity is not treated as evidence about you; don't put your name in the file. There is no server, account, or telemetry — data never leaves the provider you already trust — but the output is sensitive and should stay private. About 290 stars at capture.

## Key Features

- Single markdown prompt; no install, no telemetry, no extra trust boundary
- 22 answers, each with citations, a confidence score, and one weekly action
- Designed to be uncomfortable in a useful way, not a diagnosis or therapy
- Third-party authorship clause so the model does not treat your questions as self-description
- Works on ChatGPT, Claude, or Gemini if memory / chat-history search is on

## Quick Start

```text
1. Download Reflection-Engine-v1.3.md from the repo
2. Open the personal (not coding) assistant account
3. Newest model, reasoning as high as it goes; memory + chat history on
4. Fresh conversation, attach the file, send:
   Please evaluate the attached markdown file and complete all tasks.
```

## Links

- [GitHub](https://github.com/kropdx/reflection-engine)
- [Original Tweet](https://x.com/petergyang/status/2084665842512588907)
- [Kevin Rose's post](https://x.com/kevinrose/status/2084354331466461435)

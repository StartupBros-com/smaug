---
title: "openeval"
type: tool
date_added: 2026-11-10
source: "https://github.com/Hona/openeval"
tags: [evals, agents, opencode, typescript, llm-judge]
via: "Twitter bookmark from @LukeParkerDev"
---

OpenEval is a typed prompt-and-judge SDK, CLI and evidence viewer for evaluating coding agents run through OpenCode. An eval is a folder with a natural-language `prompt.md` for the candidate agent plus a `judge.md` rubric (named criteria with pass/fail rules, scored by an LLM judge) and/or a `judge.ts` plain function that scores the recorded run deterministically. Runs are isolated in Docker, and results are viewable in a workbench with radar charts, heatmaps and scorecards.

## Key Features

- Code judges and LLM judges share one recorded candidate execution and contribute distinct criteria
- Booleans map to 0/1, numeric scores 0 to 1, null means unresolved
- Runner supplies metrics such as cost, tokens, tool reliability and timing; judges get full message history, tool calls and workspace snapshots
- Optional `eval.ts` for workspace preparation and early stopping
- Category tags for comparing models in the viewer; scorecard export as PNG
- Requires Bun 1.4.2+, Docker and connected OpenCode models; MIT licensed, TypeScript

## Links

- [GitHub](https://github.com/Hona/openeval)
- [Original Tweet](https://x.com/LukeParkerDev/status/2098354727880921121)

---
title: "What Comes After the Pull Request"
type: article
date_added: 2026-03-27
source: "https://x.com/i/article/2037568696642629632"
author: "Noah Hein"
tags: []
via: "Twitter bookmark from @TheNoahHein"
---

Coding agents have decoupled code generation speed from code delivery speed. Teams generate PRs faster than ever, but the software reaching users has not scaled proportionally — because the bottleneck moved from writing code to reviewing, comprehending, verifying, and trusting it. Faros AI data (10,000+ devs across 1,200+ teams) shows high-AI-adoption teams merge 98% more PRs but spend 91% more time reviewing. The pull request was designed around human-speed authorship and is now a traffic jam.

## Key Takeaways

- The human role is shifting from "did you write this correctly?" to "are we solving the right problem?" and "is intent legible for the agent?"
- Three competing bets on what replaces the PR: (1) AI-native review that closes the agent loop (Cognition's Devin Review), (2) move human checkpoints upstream to specs/BDD so code becomes a generated artifact not the primary review object, (3) replace the platform entirely with agent-first tooling (OpenAI's GitHub competitor + Symphony)
- All three bets share a structural shape: they are probably temporary scaffolding. Better models will absorb the scaffolding, as happened when reasoning models made chain-of-thought orchestration unnecessary
- OpenAI's harness engineering experiment: a million-line production app, zero lines written by humans; engineers designed environments and feedback loops rather than writing code
- Two gaps remain: (1) observability into agent context windows is still primitive, (2) specs precise enough to replace review start to look like programming languages — the compiler for human intent doesn't exist yet
- The learning from building the scaffolding is not temporary even if the scaffolding is — building review harnesses teaches what good review means in an agent context

## Links

- [Article](https://x.com/i/article/2037568696642629632)
- [Original Tweet](https://x.com/TheNoahHein/status/2037573208707137639)

---
title: "Using Goals in Codex"
type: article
date_added: 2026-05-18
source: "https://developers.openai.com/cookbook/examples/codex/using_goals_in_codex"
author: "OpenAI"
tags: [codex, goals, agent-workflows, persistent-objectives]
via: "Twitter bookmark from @gdb"
---

OpenAI's cookbook presents Goals as persistent objectives that keep a Codex thread working toward a defined outcome across turns. The accompanying posts position `/goal` as a way to retain the intended result for longer-running work rather than relying on repeated, ad hoc prompts.

## Key Takeaways

- A Goal gives Codex a defined objective to pursue across a persistent thread.
- The recommended specification includes an outcome, relevant constraints, and verification criteria so completion can be assessed.
- The guide covers when Goals are appropriate, how an active Goal changes the workflow, and the architecture behind the feature.
- Goals are intended for work that should continue until an explicit result has been reached rather than stop after a single response.

## Links

- [Using Goals in Codex](https://developers.openai.com/cookbook/examples/codex/using_goals_in_codex)
- [Original Tweet](https://x.com/gdb/status/2056430780809892252)

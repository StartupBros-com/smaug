---
title: "Subagents | ChatGPT Learn"
type: article
date_added: 2026-10-01
source: "https://learn.chatgpt.com/docs/agent-configuration/subagents"
author: "OpenAI"
tags: [codex, subagents, agent-configuration, openai]
via: "Twitter bookmark from @slashui"
---

OpenAI's ChatGPT Learn documentation page on using subagents in ChatGPT and Codex, and on configuring custom Codex agents. It was bookmarked via @slashui, who praised a subagent architecture diagram in a quoted Codex tip thread and wanted to adopt that diagram style as the standard for system architecture diagrams. The fetched content was only page HTML and metadata, so this summary rests on the page title and description rather than the full body.

## Key Takeaways

- Subagents are supported in both ChatGPT and Codex, and Codex lets you define custom agents.
- The quoted tip (@thedelost) shows a role split: a main session model, explorer, worker and researcher subagents, and an on-call architect agent that reviews plans, repeated errors and finished work.
- Agent roles are configured as TOML files under ~/.codex/agents or .codex/agents, with per-agent model and reasoning effort.

## Links

- [Article](https://learn.chatgpt.com/docs/agent-configuration/subagents)
- [Original Tweet](https://x.com/slashui/status/2105850132365443528)

---
title: "hermes-agent"
type: tool
date_added: 2026-04-21
source: "https://github.com/sudoingX/hermes-agent"
tags: [agents, self-improving, open-source, nous-research, grok, terminal, learning-loop]
via: "Twitter bookmark from @sudoingX"
---

Hermes Agent is a self-improving AI agent built by Nous Research. Its core differentiator is a closed learning loop: it creates skills from experience, improves them during use, nudges itself to persist knowledge, searches its own past conversations via FTS5, and builds a deepening user model across sessions (via Honcho dialectic modeling). Run it on a $5 VPS, a GPU cluster, or serverless backends (Daytona, Modal) that cost nearly nothing when idle.

Model-agnostic: supports Nous Portal, OpenRouter (200+ models), z.ai/GLM, Kimi/Moonshot, MiniMax, OpenAI, or custom endpoints. Switch with `hermes model` — no code changes, no lock-in. Accessible from the terminal TUI, Telegram, Discord, Slack, WhatsApp, Signal, or email via a single gateway process. Includes built-in cron scheduler, subagent spawning for parallel workstreams, six terminal backends (local, Docker, SSH, Daytona, Singularity, Modal), and batch trajectory generation for RL research.

The `grok-provider` branch (as of Apr 2026) adds native Grok-4 access by authenticating through x.com OAuth via Patchright (a patched Playwright that defeats CDP detection), giving X Premium+ subscribers a free coding agent path without needing an xAI API key.

## Key Features

- Closed learning loop: skill creation, self-improvement, cross-session memory with FTS5 search
- Honcho dialectic user modeling that deepens over time
- Model-agnostic with `hermes model` switching
- Multi-platform: CLI TUI + messaging gateways (Telegram, Discord, Slack, WhatsApp, Signal, Email)
- Built-in cron scheduler for scheduled automations in natural language
- Subagent spawning and Python RPC for parallel workstreams
- Six terminal backends including serverless Daytona/Modal
- Batch trajectory generation and Atropos RL environments for research
- `grok-provider` branch: X Premium+ Grok-4 access via Patchright browser automation

## Links

- [GitHub](https://github.com/sudoingX/hermes-agent)
- [Original Tweet](https://x.com/sudoingX/status/2046565531059396973)

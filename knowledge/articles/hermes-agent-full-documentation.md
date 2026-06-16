---
title: "Hermes Agent — Full Documentation (llms-full.txt)"
type: article
date_added: 2026-06-10
source: "https://hermes-agent.nousresearch.com/docs/llms-full.txt"
author: "NousResearch"
tags: [hermes-agent, llm, documentation, ai-assistant]
via: "Twitter bookmark from @witcheer"
---

Hermes Agent's entire documentation concatenated into a single file optimized for LLM context ingestion. The file covers installation (macOS/Windows/Linux/WSL2/Android/Nix), quickstart, provider configuration, messaging gateways (Telegram, Discord, WhatsApp, iMessage), tool integrations, and the developer/contributor guide. The canonical short index lives at `llms.txt`; this `llms-full.txt` variant includes every section in docs-site navigation order.

The tip shared by @witcheer: point any capable LLM at this URL, describe what you want your agent to do, and it will generate a full working Hermes configuration — eliminating the need to read docs manually.

## Key Takeaways

- Single URL gives any LLM complete Hermes documentation in one shot — effective zero-shot config generation
- Covers installation across all major OS/environments including WSL2 and Android (Termux)
- Includes gateway setup for all major messaging platforms (Telegram, Discord, Slack, iMessage via Photon or BlueBubbles)
- `hermes setup --portal` is the fastest path: authenticates with Nous Portal, sets provider, enables Tool Gateway in one command
- `hermes doctor` diagnoses environment issues; `hermes config migrate` handles post-update config drift

## Links

- [Article](https://hermes-agent.nousresearch.com/docs/llms-full.txt)
- [Original Tweet](https://x.com/witcheer/status/2064788615595503768)

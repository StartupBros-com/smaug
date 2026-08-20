---
title: "claudex"
type: tool
date_added: 2026-08-08
source: "https://github.com/alexgetmancom/claudex"
tags: [claude-code, cliproxyapi, model-routing, gpt-5.6-sol, proxy, account-risk]
via: "Twitter bookmark from @alexgetmancom"
---

Alex Getman's wrapper for running the official, unmodified Claude Code CLI against a non-Anthropic model. A localhost-only [CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) process sits on `127.0.0.1:8317` and forwards inference to a provider account you already pay for (Codex / GPT-5.6 Sol, Gemini, xAI, Kimi, or any OpenAI-compatible endpoint). The stock `claude` command is left alone; `claudex` is a sibling invocation that sets per-call env vars only.

The repo exists because Getman reproduced OpenAI's Tibo Sottiaux public recipe — install CLIProxyAPI, connect, alias `claude --model gpt-5.6-sol` with `CLAUDE_CODE_SUBAGENT_MODEL=gpt-5.6-sol` — and shortly afterward Anthropic suspended his account for "suspicious signals." The README's first section is a do-not-use warning until Anthropic or OpenAI say whether that configuration is prohibited. 44 stars at capture.

Install is agent-driven: open a fresh Claude Code session and hand it `setup-prompt.md`. The agent checks what is already installed, asks which model and command name you want, infers the model's real context window, installs the proxy, walks the browser login, and verifies the path end to end. Desktop Claude is unsupported — it pins its own model and API endpoint at launch and never reaches the proxy.

Treat subscription-wrapping as a terms and account-risk question, not a feature.

## Key Features

- Official Claude Code CLI, unpatched; skills, tools, and permissions stay as Anthropic shipped them
- Localhost-only CLIProxyAPI hop; nothing exported globally
- One proxy, many named commands (one per model)
- Agent-run `setup-prompt.md` for install, rename, and extra models
- CLI only — Claude Desktop ignores project env and will not hit the proxy
- MIT license

## Links

- [GitHub](https://github.com/alexgetmancom/claudex)
- [CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI)
- [Tibo's setup tweet](https://x.com/thsottiaux/status/2076119366647894371)
- [Original Tweet](https://x.com/alexgetmancom/status/2086092971024253117)

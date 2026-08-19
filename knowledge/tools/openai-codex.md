---
title: "openai/codex"
type: tool
date_added: 2026-07-25
source: "https://github.com/openai/codex"
tags: [codex, coding-agent, openai, rust, cli, open-source, harness]
via: "Twitter bookmark from @reach_vb"
---

OpenAI's Codex CLI is a local coding agent whose harness is Apache-2.0 and fully public. Vaibhav Srivastav's bookmark pitch is the auditability point: you can read exactly what happens to a prompt, and you can point the same harness at open-weight models instead of (or in addition to) OpenAI's hosted ones. ~107k GitHub stars at capture; implementation is Rust.

The repo is the local CLI. Adjacent surfaces live elsewhere: IDE install for VS Code / Cursor / Windsurf, `codex app` for the desktop app, and Codex Web at chatgpt.com/codex for the cloud agent. Default path is ChatGPT sign-in (Plus / Pro / Business / Edu / Enterprise). API-key auth is supported but needs extra setup.

## Install

```shell
# macOS / Linux
curl -fsSL https://chatgpt.com/codex/install.sh | sh

# Windows
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"

# npm
npm install -g @openai/codex

# Homebrew
brew install --cask codex
```

Installers pull from `releases.openai.com/codex` and fall back to GitHub Releases. Set `CODEX_INSTALLER_USE_RELEASES_OPENAI_COM=false` to force GitHub. Platform binaries are also on the latest GitHub Release (`codex-aarch64-apple-darwin`, `codex-x86_64-unknown-linux-musl`, etc.).

## Why it matters

Most coding-agent products ship a closed control loop. Codex is the rare frontier harness you can actually inspect, fork, and run against non-OpenAI weights — useful both as a daily driver and as a reference implementation for anyone building their own agent loop.

## Links

- [GitHub](https://github.com/openai/codex)
- [Docs](https://developers.openai.com/codex)
- [IDE install](https://developers.openai.com/codex/ide)
- [Codex Web](https://chatgpt.com/codex)
- [Original Tweet](https://x.com/reach_vb/status/2081058669144510787)

---
title: "openai/codex-security"
type: tool
date_added: 2026-07-28
source: "https://github.com/openai/codex-security"
tags: [security, vulnerability-scanning, cli, typescript, openai, codex, devsecops, ci]
via: "Twitter bookmark from @thsottiaux"
---

OpenAI's Codex Security is a CLI and TypeScript SDK (`@openai/codex-security`) that finds, validates, and fixes application-security issues rather than just listing regex hits. Tibo announced the open-source release as a way to scan repositories, review changes, track findings over time, and run the same checks in CI. Ordinary scans are read-only; `--patch` can apply verified fixes and `--create-pr` opens a GitHub pull request after verification. Some cybersecurity requests and protected findings require approval through Trusted Access for Cyber.

It needs Node.js 22.13+ (or 24/26), Python 3.10+, and Codex Security access. Interactive use is `npx @openai/codex-security login`; CI should set `OPENAI_API_KEY` or `CODEX_API_KEY` (those keys are used for the current scan only and are never stored in Codex's credential home). Scans can also target OpenRouter, Fireworks, or Amazon Bedrock via `--provider` / `--model`. Findings persist in a workbench state directory (`CODEX_SECURITY_STATE_DIR` if the default is unwritable); `findings list`, `scans compare`, and `patch OCCURRENCE_ID` cover history, root-cause matching across scans, and one-off remediations. Linear import/publish is supported via `CODEX_SECURITY_LINEAR_API_KEY`. ~10k stars.

## Key Features

- Scan a repo, optionally auto-patch at a severity floor, emit JSON, and open a PR
- Deep-scan mode with workers, subagents, `--stop-after-no-new`, `--max-discovery-runs`, and a 96-hour default time cap
- Interactive finding browser that turns selected issues into saved Codex desktop tasks
- `findings list` / `scans compare` to track new, persisting, reopened, and resolved issues
- Patch from a saved scan, a Linear issue/project filter, or `--resume-pr` if publication fails
- Multi-provider inference (OpenAI, OpenRouter, Fireworks, Amazon Bedrock)
- ChatGPT sign-in or API-key auth; `--auth chatgpt` / `--auth api-key` to pick explicitly

## Quick Start

```bash
npm install @openai/codex-security
npx @openai/codex-security login
npx @openai/codex-security scan .
npx @openai/codex-security scan . --patch --patch-severity high --create-pr
```

## Links

- [GitHub](https://github.com/openai/codex-security)
- [npm](https://www.npmjs.com/package/@openai/codex-security)
- [Docs](https://learn.chatgpt.com/docs/security/cli)
- [Trusted Access for Cyber](https://chatgpt.com/cyber)
- [Original Tweet](https://x.com/thsottiaux/status/2082241164850364555)

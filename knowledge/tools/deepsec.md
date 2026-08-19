---
title: "deepsec"
type: tool
date_added: 2026-08-13
source: "https://github.com/vercel-labs/deepsec"
tags: [security, vulnerability-scanner, agents, vercel, cli]
via: "Twitter bookmark from @DavidOndrej1"
---

deepsec is Vercel Labs' agent-powered vulnerability scanner for large existing codebases, run in your own infrastructure rather than as a SaaS upload. A fast regex `scan` finds candidate sites; `process` then sends those sites to frontier models at high thinking levels to surface long-lurking issues that pattern matchers miss. Scans of big repos can cost thousands to tens of thousands of dollars; the README's pitch is that customers paid it because the findings would otherwise have stayed unfixed.

`npx deepsec init` walks model choice and payment (Vercel AI Gateway, or your own OpenAI/Anthropic/custom key via `--model-auth direct`), then studies the tree and runs the review unattended. The only in-repo artifact is a `.deepsec/` folder. Interrupted runs resume: re-run the same command and already-analyzed files are skipped. Optional Vercel Sandbox fan-out (`pnpm deepsec sandbox process --sandboxes N`) parallelizes monorepos; model keys stay host-side. Apache-2.0, ~7.7k stars.

Treat it like a coding agent with full shell access. Sandbox mode limits worker egress to coding-agent hosts and injects API keys outside the VM so they cannot be exfiltrated from vendored prompt-injection.

## Key Features

- Two-phase pipeline: free regex `scan`, then paid AI `process` / optional `revalidate` to cut false positives
- Resumable `init` with `--max-cost-usd` and `--max-duration` caps
- `process --diff` for PR-mode review of changed files only
- Export to markdown directories or JSON; `triage`, `enrich`, `metrics`, `report`
- BYO key or Vercel AI Gateway; only the env-var *name* is stored, never the secret
- Optional distributed execution on Vercel Sandbox microVMs
- Installed CLI ships matching `SKILL.md` so coding agents can drive it

## Quick Start

```bash
npx deepsec init
# optional spend/time caps:
npx deepsec init --max-cost-usd 100 --max-duration 2h
cd .deepsec
pnpm deepsec export --format md-dir --out ./findings
```

## Links

- [GitHub](https://github.com/vercel-labs/deepsec)
- [Homepage](https://deepsec.sh/)
- [Original Tweet](https://x.com/DavidOndrej1/status/2087862257279459422)

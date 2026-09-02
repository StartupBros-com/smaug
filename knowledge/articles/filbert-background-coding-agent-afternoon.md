---
title: "Filbert: How we built our background coding agent in an afternoon"
type: article
date_added: 2026-04-13
source: "https://x.com/i/article/2043175667244634112"
author: "Phil Chen"
tags: [agents, coding-agent, self-improvement, slack, infrastructure, Filbert]
via: "Twitter bookmark from @philhchen"
---

Detailed case study of building Filbert, an autonomous background coding agent that now writes over 95% of PRs at Phil Chen's company and runs 14 scheduled daily maintenance jobs. Built in one afternoon by leveraging existing infrastructure: self-hosted GitHub Actions, GCP secrets, Terraform monorepo, and a Pi supervisor pattern. The architecture separates concerns cleanly: a stateless supervisor handles Slack I/O and dispatch decisions, while Codex or Claude handle actual coding in isolated git worktrees. Thread state is stored on disk, making the system crash-resilient. The standout capability is self-improvement: Filbert reads his own prompts, experiences the consequences of bad behavior in production, then opens PRs to fix his own instructions.

## Key Takeaways

- Supervisor is stateless — spun up per Slack event, reads durable notes from prior run, exits cleanly
- Thread directory is the memory, not the process: `/var/lib/filbert/threads/<hash>/thread.md`, `inbox.md`, `agent-notes.md`
- Coding agents (Codex/Claude) are dispatched async with simple file-based protocol: prompt file in, result.json + agent-notes.md out
- Dual-provider alternation (Codex Mon/Wed/Fri/Sun, Claude Tue/Thu/Sat) accidentally became a free model eval
- Self-improvement loop: Filbert encounters problem → human mentions it → Filbert reads own prompt → opens fix PR
- YAML-configured scheduled jobs cover: log triage, security audits, dead code sweeps, CI optimization, test proposals
- Infra-first investment pays off: Filbert can read Terraform, debug permissions, even `terraform plan` its own changes

## Links

- [Article](https://x.com/i/article/2043175667244634112)
- [Original Tweet](https://x.com/philhchen/status/2043759400121458922)

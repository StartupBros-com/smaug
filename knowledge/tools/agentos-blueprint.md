---
title: "AgentOS blueprint (Ian Nuttall gist)"
type: tool
date_added: 2026-08-14
source: "https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4"
tags: [agentos, claude-agent-sdk, multi-agent, harness, least-privilege, kanban, ephemeral-containers]
via: "Twitter bookmark from @iannuttall"
---

Ian Nuttall's gist is a product spec and an implementation prompt reconstructed from Danny Postma's 2026 talk *How I Built My Own AgentOS on Claude's Agent SDK (So You Can Too)*. Feed it to a coding agent to build a single-operator control plane on Claude managed agents: write a spec, walk away, and get pinged only when an agent is stuck or needs a decision. Role contracts and prompts in the file are reconstructed from the talk, not Postma's verbatim files.

## What it specifies

A personal AgentOS sitting on top of the Claude Agent SDK (cloud) or a cheap local runner (Hetzner VM running Claude Code `--dangerously-skip-permissions` and Grok in yolo mode). Sessions are ephemeral containers: pull allowed repos, inject listed secrets, attach listed MCPs, apply a network allowlist, work, commit if allowed, destroy. Durable state lives in git plus a Cloudflare R2 filesystem MCP with server-side folder ACLs — not on the container disk.

Core product surface:

- Multi-agent catalog with per-agent prompts, skills, MCPs, repos, env, collaboration lists, and runner preference
- Kanban tasks (`todo` / `doing` / `review` / `done`) with assign-agent, schedule, recurring, attachments, approval gates, and follow-up chains
- A default "compound engineer" / feature-build template (~3 hours claimed, 5–6 hours observed) with human approval gates
- Goals ("gauntlet loop"): human-approved definition of done, orchestrator that spawns the next specialist, progress log, spend/time/stuck caps (stuck default: 19 identical iterations). UX must require a spend cap — one uncapped overnight run hit $1,000
- Inbox MCP: agents message the human; replies resume the session; multiple-choice questions; PWA + Web Push
- Activity feed and live session viewer (streamed tool calls)
- Webhook triggers and cron automations
- YAML-as-code per project plus a CLI for push/pull sync
- Encrypted secrets (Google Secret Manager / Cloud KMS; app DB holds only references)

Suggested buildable stack (labeled as assumptions, not his production stack): TypeScript, Hono/Fastify, Postgres, pg-boss or Inngest, React + Vite PWA.

## Least privilege is first-class

Default deny. An agent gets no MCPs, repos, env, filesystem write, network, or spawn rights unless listed. Isolation is layered: one container per session, network allowlist independent of MCP grants, filesystem verbs (read/write/delete) enforced server-side on the R2 MCP, approval gates that refuse `PATCH status=done` from an agent token, and a collaboration list as the only spawn path. Design as if the model will try every tool it has.

Named default agents include `default`, `plan`, `spec`, `senior-dev`, `review-coordinator`, `feasibility`, `scope-guardian`, `coherence`, `implementation-plan-executioner`, `librarian`, plus examples like `customer-support` (Front MCP only — never Gmail or GitHub) and `diagnostic` (repo + support chat, report only).

## Non-goals

Not a multi-tenant SaaS. Not long-lived agent containers. Not Postma's verbatim prompts or production code (he offered to open-source; this gist does not have them). Spend anecdotes (`$500/day` cloud, `$10` Hetzner VM) are not SLOs.

## Links

- [Gist](https://gist.github.com/iannuttall/8152098b5ce8e6c1a7499ee561ed93f4)
- [Ian Nuttall's tweet](https://x.com/iannuttall/status/2088240212799349206)
- [Danny Postma's source talk tweet](https://x.com/dannypostma/status/2088181331465253045)

---
title: "clawsweeper"
type: tool
date_added: 2026-06-08
source: "https://github.com/openclaw/clawsweeper"
tags: [ai-agents, github, maintenance, code-review, automation]
via: "Twitter bookmark from @badlogicgames"
---

ClawSweeper is a conservative maintenance bot for OpenClaw repositories. It reviews issues and pull requests on schedules and GitHub events, stores durable markdown records for each decision, and keeps a single marker-backed public review comment current rather than creating repeated comments.

Its repair and automerge paths are intentionally bounded: findings are proposal-only during review, mutations are checked against live target state immediately before they occur, and Codex receives no write credentials while reviewing. The project can also produce deterministic browser or terminal proof for opted-in repositories and route maintainer commands such as `@clawsweeper review`, `@clawsweeper fix`, and `@clawsweeper automerge`.

## Key Features

- Scheduled and event-triggered issue and pull-request reviews
- Durable per-item reports with evidence, runtime metadata, and decision history
- Marker-backed GitHub comments edited in place to avoid notification noise
- Guarded repair, automerge, and closure workflows with policy checks
- Optional deterministic live proof and local branch-range review support

## Links

- [GitHub](https://github.com/openclaw/clawsweeper)
- [Original Tweet](https://x.com/badlogicgames/status/2063932627141185903)

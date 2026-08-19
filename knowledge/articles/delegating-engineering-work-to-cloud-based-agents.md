---
title: "Delegating Engineering Work To Cloud-Based Agents"
type: article
date_added: 2026-08-11
source: "https://x.com/i/article/2087282491241672704"
author: "Santosh Praneeth and Jeff (DoorDash AI Research)"
tags: [doordash, flux, cloud-agents, sandboxes, mcp, playbooks, agent-platform, code-review]
via: "Twitter bookmark from @AIatDoorDash"
---

DoorDash's writeup of Flux, the in-house cloud agent platform they built after laptop-based coding agents hit resource, safety, and audit walls. In one month of 2026 it automated 130,000 engineering tasks; it already runs 25,000+ code reviews a week plus 300 unique playbooks and 10,000+ weekly invocations that can sit unattended, in parallel, around the clock. The harder problem, they argue, was not getting an agent to write code — that is mostly solved — but giving it the right environment, tools, permissions, integrations, and constraints without sending the company's internals to a hosted coding-agent vendor.

They control four primitives and keep them modular so teams can swap in the best third-party tool or build in-house when security, integration, performance, or UX ownership matters:

**Sandboxes.** Isolated Firecracker microVMs provisioned with the repos, tools, secrets, and runtime the task needs. Hardware-level isolation, multi-repo / multi-PR sessions, and a p95 SLO under five seconds from start to cloned repos, build tools, and a supported agent harness.

**MCP / Agent Gateway.** An in-house gateway that grants only the tools a playbook declared (CI, observability, issue trackers, deploy, code search, docs, service metadata). Every action is logged; auth, policy, and usage sit in one place instead of on an engineer's laptop keys.

**Playbooks.** A YAML unit of work they analogize to a Docker container for skills: task, inputs, context, skills, tools, permissions, validation, outputs, and safety boundaries. Agentic steps mix with deterministic ones so teams can move logic toward code as it stabilizes.

**Invocation surfaces.** The same playbook fires from Slack, GitHub, cron, the CLI, or a conversational skill — collaborative delegation, PR/CI automation, recurring maintenance, or direct developer control.

Adoption lessons: start narrow (code review first — frequent, measurable, easy for engineers to judge) before CI triage, on-call, maintenance, and ticket-driven development; put runs in public Slack threads, not private channels, so the team can watch and trust together; and run workshops/hackathons, because reusable workflows do not appear just because the platform exists. Next up: deeper primitives, the DX for new workflows, and Flux Responder, their internal Slack agent.

## Key Takeaways

- Laptop agents fail on capacity, blast radius (SSH/VPN/creds), and fragmented audit; Flux's thesis is delegate to secure unattended agents so engineers keep the hard thinking
- Hosted coding agents force a bad tradeoff (send code out, or open a path back in); DoorDash owns orchestration, sandboxes, workflows, permissions, and company context instead
- Four composable primitives — Firecracker sandboxes, scoped MCP gateway, YAML playbooks, multi-surface invocation — beat shipping one prescribed workflow
- p95 sandbox ready in under five seconds; 130k tasks/month, 25k+ reviews/week, 300 playbooks
- Trust is earned with a visible, high-frequency first workflow (code review) and public threads, not a platform launch and private channels

## Links

- [Article](https://x.com/i/article/2087282491241672704)
- [Source tweet](https://x.com/AIatDoorDash/status/2087285008906240193)
- [DoorDash: How we learned to trust our AI code reviewer](https://careersatdoordash.com/blog/how-we-learned-to-trust-our-ai-code-reviewer-at-doordash/)
- [DoorDash: An AI code reviewer engineers actually listen to](https://careersatdoordash.com/blog/doordash-built-an-ai-code-reviewer-engineers-actually-listen-to/)

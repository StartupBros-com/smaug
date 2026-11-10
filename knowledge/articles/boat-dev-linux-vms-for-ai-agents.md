---
title: "boat: Full Linux VMs for AI Agents at $0.036/h"
type: article
date_added: 2026-08-20
source: "https://boat.dev/"
author: "ASCII (boat.dev)"
tags: [ai-agents, sandbox, infrastructure]
via: "Twitter bookmark from @orenyomtov"
---

boat is a hosted sandbox product that gives AI agents persistent full Ubuntu Linux VMs with SSH/SCP access, Docker inside the VM, a public IPv6 address with outbound IPv4, a 60fps virtual desktop, and fast disk-level forking from a snapshot. It is aimed at "agent factories" running many parallel agents, and works with Claude Code, Codex, or OpenCode. It was bookmarked via a quote of the founder's post about a critical vulnerability found by AI-augmented researchers in the product and fixed within an hour, and about running an open bug bounty.

## Key Takeaways

- Pre-installed in every sandbox: Docker, VS Code, Chrome, Ghostty, GitHub CLI, Rust, Node.js, Bun.
- Billed per second with a $20/month minimum; 7-day free trial (25 compute hours) with a card.
- Sizes: small (2 vCPU/4 GB) $0.018/h, default (4 vCPU/8 GB) $0.036/h, large (8 vCPU/16 GB) $0.072/h, xlarge (16 vCPU/32 GB) $0.200/h on the $100 plan or higher.
- No compute charge while stopped; the disk is kept for at least 14 days.
- Installed via a CLI built for agents, programmatic use, and humans.

## Links

- [Article](https://boat.dev/)
- [Original Tweet](https://x.com/orenyomtov/status/2090539881411797399)

---
title: "Post-Agentic Code Forges"
type: article
date_added: 2026-09-15
source: "https://sluongng.substack.com/p/post-agentic-code-forges"
author: "Son Luong Ngoc"
tags: [ci, build-systems, agents, github]
via: "Twitter bookmark from @sluongng"
---

Commentary on whether GitHub and GitLab are dead or merely "alive-dead" as thousands of coding agents land changes per hour. Argues forges' merge checks, PR review, and CI are not built for agent-scale monorepos.

## Key Takeaways

- Merge-checks go stale under high velocity, pushing big monorepos to custom merge bots and queues.
- Pre-merge human review will fade in favor of agent pairs and heavy automated testing, with review moved to pre-release for compliance.
- Hermetic, cache-friendly build tools (Bazel, Buck2) become central; Codex's Bazel adoption cut one job from 9m20s to 1m37s.
- Forges still rerun hundreds of CI jobs per change with no granular invalidation.
- Agents need frequent auto-pushed commits, distributed conflict-resolution caches, and multi-tier git caching.

## Links

- [Article](https://sluongng.substack.com/p/post-agentic-code-forges)
- [Original Tweet](https://x.com/sluongng/status/2099772874730958853)

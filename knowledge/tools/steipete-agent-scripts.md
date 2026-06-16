---
title: "agent-scripts"
type: tool
date_added: 2026-06-11
source: "https://github.com/steipete/agent-scripts"
tags: [ai-agents, claude-code, codex, skills, orchestration]
via: "Twitter bookmark from @steipete"
---

Peter Steinberger's shared agent instructions, skills, and portable helper scripts used across his personal repos. The repo acts as a canonical source for hard rules (AGENTS.MD), reusable workflow skills (skills/), dependency-light helper scripts (scripts/), and local guardrails (hooks/). Skills are routed via YAML front matter and symlinked into ~/.codex/skills and ~/.claude/skills for global discovery.

Key skills include a maintainer-orchestrator (wakes every 5 minutes, fans work out to parallel threads) and a github-project-triage skill, enabling autonomous PR review and repo maintenance loops with Codex or Claude. The browser-tools.ts helper provides a standalone Chrome DevTools CLI for agent-driven browser automation.

## Key Features

- `AGENTS.MD` shared hard rules referenced by pointer from downstream repos
- `skills/` directory with YAML-routed workflow skills (maintainer-orchestrator, autoreview, github-project-triage, etc.)
- `scripts/committer`, `scripts/validate-skills`, `scripts/docs-list.ts`, `scripts/browser-tools.ts` helpers
- Symlink convention for exposing repo-owned skills and public OpenClaw skills
- Hooks directory for local pre-commit skill validation

## Links

- [GitHub](https://github.com/steipete/agent-scripts)
- [Original Tweet](https://x.com/steipete/status/2064998499780084154)

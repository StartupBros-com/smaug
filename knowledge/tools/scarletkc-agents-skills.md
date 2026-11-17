---
title: "scarletkc/agents - Shared AGENTS.md Standards and Skills (incl. ux-writing)"
type: tool
date_added: 2026-08-24
source: "https://github.com/scarletkc/agents/blob/main/skills/ux-writing/SKILL.md"
tags: [agent-skills, codex, claude-code, ux-writing, documentation]
via: "Twitter bookmark from @ScarletKc"
---

A repository of shared standards and cross-agent skills for AI coding agents (Claude Code, Codex CLI, anything that reads `AGENTS.md` or the SKILL.md format). The author bookmarked-promoted the `ux-writing` skill specifically for Codex users: it encodes review-derived fixes for Codex habits such as rewriting half a README for a small change, leaving discussion and abandoned options in final docs, duplicating the same fact in several places, hardcoding versions/status that go stale, forgetting `--help`/README/MCP descriptions after a feature change, and noisy diagnostics output. Its guiding line is "User-visible text is product behavior."

## Key Features

- `AGENTS.md`: project-agnostic base guidelines to copy into a repo; `user/AGENTS.md` for user-level collaboration preferences
- `ux-writing`: review user-facing copy and docs for clarity, consistency, non-stale facts, and no leftover intermediate state (`product-writing` is a more compact alternative)
- Other skills: antigravity-cli, ask-to-plan, codex-cli, devin-cli, grok-cli, marketing-copy, scoped-change, worktree-pr, x-content, talk-like-scarletkc
- Install via `gh skill install scarletkc/agents --agent codex --scope user` or `npx skills add scarletkc/agents -g`
- `scripts/package_skill.py` zips a skill for web apps that accept skill uploads

## Links

- [GitHub](https://github.com/scarletkc/agents/blob/main/skills/ux-writing/SKILL.md)
- [Original Tweet](https://x.com/ScarletKc/status/2091765025388253679)

---
title: "agentcanon"
type: tool
date_added: 2026-08-11
source: "https://github.com/buildermethods/agentcanon"
tags: [agent-skills, claude-code, agents-md, skills, symlinks]
via: "Twitter bookmark from @CasJam"
---

Brian Casel's MIT-licensed convention for one canonical home for agent skills and instructions. Codex, Cursor, and newer tools already read `.agents/skills/` and `AGENTS.md`; Claude Code still looks in `.claude/skills` and `CLAUDE.md`. agentcanon keeps the real copies in the vendor-neutral locations and points the holdouts at them with symlinks, so skill folders and instruction files stop drifting apart.

Install is a paste-to-agent prompt (fetch the repo, or a self-contained full prompt). It inspects first, creates missing dirs and links, and will not move, merge, or delete anything without an approved plan. Optional extras: an `agentcanon-repo` skill that converts other repos the same way, git-based sync of `~/.agents/`, and a dependency-free HTML skills manifest that catalogs every skill (name, description, location, created date) and spots duplicates.

## Key Features

- Canon: `~/.agents/skills/` globally and `.agents/skills/` + `AGENTS.md` per repo
- Symlinks: `~/.claude/skills` → `~/.agents/skills`, `.claude/skills` → `.agents/skills`, `CLAUDE.md` → `AGENTS.md`
- Prompt-driven setup that reports duplicates and same-name skill diffs before touching files
- Optional HTML manifest at `~/.agents/skills-manifest.html` (sortable, filterable, symlink list)
- Optional `agentcanon-repo` skill to convert any repo after showing the plan

## Links

- [GitHub](https://github.com/buildermethods/agentcanon)
- [Builder Methods](https://buildermethods.com)
- [Original Tweet](https://x.com/CasJam/status/2087222518515900890)

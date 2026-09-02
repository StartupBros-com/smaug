---
title: "architecture-map"
type: tool
date_added: 2026-08-18
source: "https://github.com/almendili/skills"
tags: [claude-code, agent-skills, architecture, visualization, ci]
via: "Twitter bookmark from @ALmendili"
---

Portable agent skill that builds an interactive isometric map of a repository from real measurements rather than a hand-drawn diagram. Buildings scale with code size, flows follow actual call paths, and a drift counter fails CI when the map falls behind the code. Packaged as a `SKILL.md` instruction pack in `almendili/skills` so any harness that reads the format (Claude Code, Codex, Cursor, Gemini CLI) can load it. Author notes it has only been tested on a few mostly-small repos so far.

## Key Features

- Interactive isometric map generated from repo measurements, not a static architecture slide
- Call-path flows traced from real code rather than guessed boxes-and-arrows
- CI drift counter that fails the build when the map is stale
- Harness-portable `SKILL.md` plus `references/`, `scripts/`, and `assets/` — symlink into `~/.claude/skills`, `~/.codex/skills`, `~/.agents/skills`, or a project `.claude/skills` directory
- Scripts live beside the skill (not in the target repo) and resolve their own directory before running

## Links

- [GitHub](https://github.com/almendili/skills)
- [Original Tweet](https://x.com/ALmendili/status/2089783661877162405)

---
title: "skill-cabinet"
type: tool
date_added: 2026-08-31
source: "https://github.com/subsy/skill-cabinet"
tags: [agent-skills, claude-code, cli, developer-tools]
via: "Twitter bookmark from @theplgeek"
---

Skill Cabinet is a local web catalog for agent skills installed on your machine. Run with `npx skill-cabinet`, it starts a localhost server that scans user-level skill folders (.agents, .claude, .codex, .cursor including plugins, Hermes profiles and other ~/.*/skills directories) so you can review, quarantine or delete skills that pile up from testing.

## Key Features

- Filter by drawer, form (physical, reference, broken), risk level and invocation mode; search names, descriptions, paths and frontmatter
- Read each skill's rendered or source body, YAML frontmatter and extra files
- Detect identical copies across drawers, virtual references, broken links and static risk in skill bodies
- Quarantine skills to ~/.skill-cabinet/quarantine (restorable) or delete one or many; symlinks are unlinked while targets stay
- Keyboard controls (j/k, /, x, q, r, d); binds to 127.0.0.1 only; requires Node 20+; MIT licensed

## Links

- [GitHub](https://github.com/subsy/skill-cabinet)
- [Original Tweet](https://x.com/theplgeek/status/2094426831524888709)

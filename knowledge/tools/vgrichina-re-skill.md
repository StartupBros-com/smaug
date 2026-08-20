---
title: "re-skill"
type: tool
date_added: 2026-03-06
source: "https://github.com/vgrichina/re-skill"
tags: [claude-code, reverse-engineering, retro-games, disassembly]
via: "Twitter bookmark from @vgrichina"
---

`re-skill` is a Claude Code skill for bootstrapping and running retro-game reverse-engineering projects from a ROM or other binary. It scaffolds a workspace for disassembly, annotation, asset extraction, data-structure mapping, validation, and a plain JavaScript canvas port, with the goal of producing a faithful, inspectable reimplementation instead of relying on emulation.

## Key Features

- Starts a project with a reverse-engineering checklist, address labels, dead-end log, and targeted investigation tools.
- Supports NES, Game Boy, and DOS MZ binaries, with a per-platform instruction-set definition as the main extension point.
- Generates tooling for byte-pattern searches, cross-reference lookup, table decoding, graphics extraction, screen rendering, and optional scriptable emulation.
- Uses a staged process: identify, decompress, disassemble, extract assets, map data, validate, and create a web port.
- Includes `re_loop.sh` to run autonomous Claude sessions against the next unchecked task, maintaining accumulating findings and committing each completed session.

## Links

- [GitHub](https://github.com/vgrichina/re-skill)
- [Original Tweet](https://x.com/vgrichina/status/2029796262606950424)

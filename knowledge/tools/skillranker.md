---
title: "SkillRanker"
type: tool
date_added: 2026-11-10
source: "https://github.com/Dicklesworthstone/skillranker"
tags: [agent-skills, claude-code, rust, cli, jev]
via: "Twitter bookmark from @doodlestein"
---

Standalone Rust CLI (`sr`) by Jeffrey Emanuel that ranks which agent skill best fits the next step, using the live session context. It combines the recent conversation, current request, workspace signals and the harness's visible skill inventory, then has the Jev classifier (from TypeSafe.ai) compare candidates broadly and evaluate a shortlist, with a real "none of these" option. The result is advisory. Fresh ranking requires your own provider credential.

## Key Features

- Two-stage ranking: broad comparison, then richer evaluation of a shortlist, with abstention
- Local narrowing via Quill from FrankenSearch for libraries over 254 skills
- Claude Code hooks, structured JSON output, inline TUI
- Local feedback, explain/replay of results, and calibration
- Offline demo fixtures (`sr demo --case useful`) before connecting a session

## Links

- [GitHub](https://github.com/Dicklesworthstone/skillranker)
- [Original Tweet](https://x.com/doodlestein/status/2100726731267010819)

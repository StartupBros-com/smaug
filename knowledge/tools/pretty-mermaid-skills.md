---
title: "Pretty-Mermaid Skills"
type: tool
date_added: 2026-08-13
source: "https://github.com/imxv/Pretty-mermaid-skills"
tags: [mermaid, skills, svg, ascii, claude-code, diagrams, cursor]
via: "Twitter bookmark from @trendtech33566"
---

A Mermaid rendering skill for AI coding agents: turn `.mmd` source into themed SVG or ASCII without a browser DOM. imxv/Pretty-mermaid-skills is JavaScript, MIT-licensed, Node 14+, and about 1.1k GitHub stars at capture. Built for Claude Code, Cursor, Codex, Gemini CLI, OpenCode, and similar harnesses so docs and design memos can get diagrams without a human pasting into mermaid.live.

Based on [lukilabs/beautiful-mermaid](https://github.com/lukilabs/beautiful-mermaid).

## Key Features

- SVG and ASCII export from the same Mermaid source
- 15 built-in themes: zinc / tokyo-night / catppuccin / github / solarized (light and dark variants), plus nord, dracula, one-dark
- Flowchart, sequence, state, class, and ER diagrams (templates under `assets/example_diagrams/`)
- Batch parallel rendering via `scripts/batch.mjs`
- One-click skill install for agent harnesses

## Quick Start

```bash
npx skills add https://github.com/imxv/pretty-mermaid-skills --skill pretty-mermaid
node scripts/themes.mjs
node scripts/render.mjs --input diagram.mmd --output output.svg --theme tokyo-night
```

## Links

- [GitHub](https://github.com/imxv/Pretty-mermaid-skills)
- [Original Tweet](https://x.com/trendtech33566/status/2088031571639205994)

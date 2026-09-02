---
title: "waku-agent"
type: tool
date_added: 2026-08-07
source: "https://github.com/ShenSeanChen/waku-agent"
tags: [ai-agent, agent-harness, local-first, evals, memory, python, sqlite]
via: "Twitter bookmark from @ShenSeanChen"
---

Local-first personal-assistant harness by Shen Sean Chen, built so the four pillars behind a serious agent — **Harness, Loop, Memory, Eval/LLM-Ops** — stay in code you can read in an afternoon. 1,481 stars. No framework hiding the control flow: the turn loop is ~95 lines of Python, memory is one SQLite file (`.waku/state.db`), and a local dashboard on `127.0.0.1:7777` lights up each message as it moves through the gate, tools, trace, eval, and memory write.

Memory is the product, not an afterthought. Semantic facts, episodic events, and procedural skills (plus a `SOUL.md` system prompt) sit behind a retrieval gate that decides *whether* to remember and a consolidation pass that decides *what* to keep. Evals ship in-repo: deterministic checks and LLM-as-judge, side by side, with a release gate. Optional Telegram gateway, voice wake word ("Waku Waku"), and Apple Calendar tools. One ~60-line adapter talks to Anthropic (default), OpenAI, Gemini, DeepSeek, MiniMax, Kimi, GLM, OpenRouter, OpenCode Zen, or OpenCode Go.

The author bookmarked his own repo after a compilation account stitched his videos into a "free 3-hour ex-Google course" without credit. The original walkthrough and architecture whiteboard live in the repo.

## Key Features

- Local-first: one SQLite memory file you can open; nothing required in the cloud
- Retrieval gate + semantic / episodic / procedural memory, with consolidation
- ~95-line Python loop; dashboard tabs for Overview, Gateway, Loop, Graph, Memory, Tools
- Built-in deterministic + LLM-as-judge evals and a release gate
- Telegram, voice wake word, calendar tools; static dashboard with no build step
- `pip install waku-agent` or clone and `uv run waku`

## Quick Start

```bash
pip install waku-agent
waku                 # terminal
waku dashboard       # browser cockpit → localhost:7777
```

Or from source:

```bash
git clone https://github.com/ShenSeanChen/waku-agent && cd waku-agent
uv venv && uv pip install -e .
cp .env.example .env
uv run waku
uv run waku dashboard
```

## Links

- [GitHub](https://github.com/ShenSeanChen/waku-agent)
- [20-min code walkthrough](https://www.youtube.com/watch?v=rvRyBhILrls&list=PLE9hy4A7ZTmpGq7GHf5tgGFWh2277AeDR&index=42)
- [seanchen.io](https://seanchen.io)
- [Original Tweet](https://x.com/ShenSeanChen/status/2085660113273020432)

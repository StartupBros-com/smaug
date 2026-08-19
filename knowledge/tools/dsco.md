---
title: "dsco"
type: tool
date_added: 2026-07-27
source: "https://github.com/arthurcolle/dsco"
tags: [agents, cli, c, local-first, swarms, mcp, tui, ast, self-modifying]
via: "Twitter bookmark from @arthurcolle"
---

DSCO (Distributed Systems Corporation Operator) is a local-first, self-introspecting agentic CLI compiled from 135,000+ lines of pure C. It is not an LLM wrapper: it is a 320+-tool runtime with hierarchical swarms, AST-level code intelligence, streaming pipelines, pure-C cryptography, market-intelligence tooling, and the ability to recursively modify and extend itself. Arthur Colle (distributed.systems) open-sourced it as the foundation for a commercial agentic-infrastructure company.

## Architecture

Three named subsystems:

- **Wings** — autonomy and emergence via pheromone-style stigmergy, three-tier memory (working/episodic/semantic), hierarchical swarms, and semantic capability routing.
- **Talons** — competitive execution. Goals move through "hunt states," grip strength drives retries, strategy tournaments pick winning approaches over time.
- **Immune System** — governance, OODA loops, kill switches, GSU (governance spending unit) budgets, principal tiers, and hardcoded safety invariants.

Swarm-native: up to 6 nested sub-agent levels, 64 concurrent agents, 60 pre-built orchestration topologies, plus Claude Code and OpenAI Codex as rival executors.

## Key Capabilities

- **Code intelligence:** full AST introspection, call graphs, dependency analysis, self-surgery via a `self-surgeon` skill across a 129-source-file codebase
- **Pipelines:** 30+ coroutine-based streaming stages (`pipeline` tool)
- **Market intelligence:** 80+ financial/market tools (Bloomberg-lite), native Kalshi contract ingestion
- **Local-first macOS:** Spotlight, AppleScript/JXA, Swift bridge to Vision/CoreML/NaturalLanguage, LaunchAgents, notifications
- **Crypto-native:** SHA-256, HMAC, HKDF, JWT, UUID in pure C (no OpenSSL)
- **Media & docs:** FFmpeg, ImageMagick, Pandoc
- **Self-evolution:** 25 installed skills (meta-skill `skill-weaver` creates and audits others), 5 doctrine documents, 5 rituals, structured memory
- **Observability:** SQLite timeline, trace spans, TUI with markdown rendering

## Doctrine

Governed by explicit docs in `.dsco/workspace/` (or `~/.dsco/workspace/`):

- **EPISTEMOLOGY.md** — 6-tier knowledge hierarchy (Computed > Observed > Analyzed > Researched > Inferred > Recalled); calibration is mandatory
- **TOOL_PHILOSOPHY.md**, **SWARM_DOCTRINE.md**, **REASONING.md**, **FAILURE_MODES.md** — 30 catalogued failure modes with mitigations
- Rituals: SESSION_OPEN, DEEP_WORK, SELF_EVAL, SESSION_CLOSE

Stated values: accuracy over theater, action over narration, evidence over intuition, minimal diffs over maximal rewrites, earned complexity, calibration over confidence.

## Quick Start

```bash
./scripts/bootstrap.sh
make -j8
export ANTHROPIC_API_KEY=...
./dsco "your command here"
```

v1.0.0 at bookmark time (18/40 features active). Canonical identity/soul documents live at `~/.dsco/workspace/` (SOUL.md, IDENTITY.md, USER.md, doctrine/, rituals/, skills/, memory/).

## Links

- [GitHub](https://github.com/arthurcolle/dsco)
- [Original Tweet](https://x.com/arthurcolle/status/2081927596040749387)

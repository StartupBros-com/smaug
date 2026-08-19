---
title: "A Graph of Loops: Build a Full Claude Code Agent System From GitHub - One Repo Per Step"
type: article
date_added: 2026-08-13
source: "https://x.com/i/article/2080625876987756544"
author: "Granite"
tags: [claude-code, agent-harness, loops, graphs, multi-agent, github, orchestration]
via: "Twitter bookmark from @Granite0x"
---

Granite's field map for assembling a Claude Code system by grafting one real GitHub repo onto each step, instead of drawing an orchestration diagram and hoping the nodes work. The unit is a loop; the fleet is a graph of those loops. "Everyone online builds the graph or the loop. Nobody wires both." Star counts and licenses were pulled from the GitHub API the morning it published; every repo gets a trap called out.

One calibration number: Claude Code spends about 16,000 tokens of context, before you type a character, on built-in tool descriptions you cannot see or edit. Step L3 is the repo that takes them back.

## The graph — coordinate the fleet

- **G1 Orchestrate — [sipyourdrink-ltd/bernstein](https://github.com/sipyourdrink-ltd/bernstein)** (726, Apache-2.0). Plain-Python DAG scheduler with zero model in the coordination loop. `task_dag.py` loads a markdown/YAML DAG, detects cycles, walks one wave at a time (`[P]` batches concurrently). Each ready node gets a real `claude` CLI in its own worktree behind a lint/type/test gate and merges only if green. Trap: 1,765 Python files, its own `.sdd/` workspace, a bearer-token task server; the DAG is hand-authored or compiled from a spec, not inferred.
- **G2 Fan out in isolation — [nekocode/agent-worktree](https://github.com/nekocode/agent-worktree)** (267, MIT). The lightweight `git worktree add` primitive. Merge dry-runs first and rolls back on conflict so the repo is never half-merged. Trap: not a scheduler — that is G1.
- **G3 Give each node a role — [wshobson/agents](https://github.com/wshobson/agents)** (38,185, MIT). A real Claude Code plugin marketplace, 203 specialist subagents across 94 plugins, Opus for architecture/security/review, Haiku for ops. Trap: staffing all 203 into context burns the window L3 is protecting.
- **G4 A graph that already ships — [fivetaku/insane-research](https://github.com/fivetaku/insane-research)** (108, MIT). Seven-phase research plugin; phase 3 fans out 3–5 sub-agents throttled to 2–3 concurrent (hard guard against the >16-agent "Server is temporarily overloaded" trip). Phase 6 is the steal: `scripts/validate_ledger.py` is the only writer of `verified_claims.json`. Trap: skip validate and synthesis has nothing allowlisted to cite.

## The loop — make one node trustworthy

- **L1 Memory — [gastownhall/beads](https://github.com/gastownhall/beads)** (25,603, MIT). Versioned-SQL dependency graph instead of a markdown TODO. `bd ready` returns only unblocked work; `bd remember` / `bd prime` survive sessions (~50 tokens). Closed work decays to a 70%-smaller stub the agent writes itself. Trap: `.beads/` on iCloud/Dropbox corrupts the DB (`disk I/O error (522)`).
- **L2 Loop core — [ShenSeanChen/waku-agent](https://github.com/ShenSeanChen/waku-agent)** (440, MIT). The whole agent loop is `waku/loop/agent.py`, ~95 lines. No done flag — it ends when the model stops asking for tools, capped at `max_iterations` (default 10). Trap: tool errors are swallowed into a string the model reads as normal output. That is why L5 exists.
- **L3 Context — [oraios/serena](https://github.com/oraios/serena)** (26,813, MIT). `--context claude-code` forbids Read/Edit for discovery and forces symbol-level MCP retrieval so you get one function and its references instead of a 2,000-line file. Trap: serena verifies nothing; the strongest refactors need the paid JetBrains backend.
- **L4 Skills — [obra/superpowers](https://github.com/obra/superpowers)** (260,116, MIT). Methodology, not a pack. TDD "Iron Law": no production code without a failing test first; if code exists first, delete it. Anthropic skills format, ~100 words dormant until the description matches. Trap: persuasion, not a syscall. A model can `assert True` and claim it saw red.
- **L5 The gate — [hamelsmu/claude-review-loop](https://github.com/hamelsmu/claude-review-loop)** (706, no license). A Stop hook that returns `{"decision":"block"}` and forces Codex — up to four parallel reviewers (diff, OWASP, architecture, Next.js, browser) — before the agent can quit. Fails open on purpose ("never trap the user in a broken loop"). Trap: no LICENSE, and it only checks that `reviews/review-<id>.md` exists; the agent may disagree and skip findings. Alternative: `npx cc-sdd@latest` (3,581, MIT).
- **L6 Proof — [raindrop-ai/workshop](https://github.com/raindrop-ai/workshop)** (937, MIT). Capture a run, replay the exact trace against edited code on a local daemon (port 5899), diff the tool calls. Assertions are read-only SQL over a local trace DB. Trap: replay against a production request handler can hit the real database, billing, and email.

## Assemble it

bernstein compiles a DAG and spawns a node per task. agent-worktree gives each node an isolated tree. wshobson/agents gives it a role. Inside every node: beads remembers, waku iterates, serena feeds only the code it touches, superpowers gives the moves, claude-review-loop blocks exit until a second model signs off, workshop proves it. insane-research is the whole shape in one plugin: fan out, verify with code, synthesize.

The test that grades all ten: can the system take *done* back? bernstein refuses to merge a red node. beads flips a task to not-ready. The review hook un-finishes a finished session. workshop fails a green trace. A system that can only promote is a burndown chart with extra steps.

## Key Takeaways

- Build the fleet graph out of loops that can un-finish work; a graph of unverified nodes is a faster bug factory
- Keep the model out of the scheduler (bernstein) and out of the verify step (insane-research's `validate_ledger.py`)
- Isolation (worktrees) and roles (specialist plugins) are separate from orchestration — do not make one repo do all three
- Reclaim the ~16k hidden tool-description tokens before you staff a marketplace of agents
- Skills and self-review are persuasion; a second-vendor gate plus a code-level ledger are enforcement
- Replay/eval loops are only safe against a extracted entrypoint, not a live production handler

## Links

- [Article](https://x.com/i/article/2080625876987756544)
- [Source tweet](https://x.com/Granite0x/status/2080665298609328201)
- [Bookmark tweet (Foreman + this article)](https://x.com/Granite0x/status/2087960767287230592)

---
title: "shadcn/improve"
type: tool
date_added: 2026-11-14
source: "https://github.com/shadcn/improve"
tags: [agent-skills, code-audit, planning, claude-code]
via: "Twitter bookmark from @chenchengpro"
---

An agent skill that audits any codebase with your most capable model and writes self-contained implementation plans for cheaper models to execute. The skill never implements anything itself; the plan is the product. Bookmarked as item 5 in a list of prompts for improving a codebase with Fable 5.2.

## Key Features

- Install with `npx skills add shadcn/improve`; works in any agent supporting the Agent Skills format
- Modes: `/improve` (full audit), `quick`, `deep`, focused (`security`, `perf`, `tests`), `branch`, `next` (feature suggestions), `plan`, `review-plan`, `execute`, `reconcile`
- Audits fan out across parallel subagents over nine categories (correctness, security, performance, tests, tech debt, dependencies, DX, docs, direction)
- A vetting pass re-reads every cited file:line to drop false positives and records rejections so they do not recur
- Plans land in `plans/` as markdown with verification gates from the repo's own test/lint commands and STOP conditions
- `/improve execute` dispatches a cheaper model in an isolated worktree and reviews the diff; optional `--issues` publishes plans as GitHub issues

## Links

- [GitHub](https://github.com/shadcn/improve)
- [Original Tweet](https://x.com/chenchengpro/status/2120040764243894547)

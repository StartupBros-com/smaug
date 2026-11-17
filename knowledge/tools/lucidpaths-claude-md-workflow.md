---
title: "claude.md-workflow"
type: tool
date_added: 2026-11-15
source: "https://github.com/LucidPaths/claude.md-workflow"
tags: [claude-code, skills, governance, multi-agent, review]
via: "Twitter bookmark from @lucidpaths33"
---

A governance starter kit for Claude Code that turns it into a self-auditing development agent. It ships hooks, rules, skills and templates under `claude-starter-kit/`, distilled from the author's HIVE project. The author says to install it or simply point an agent at the repo and take the ideas you want. The repo is small (8 stars at capture) and Python-based.

## Key Features

- Eleven invocable skills, each in `.claude/skills/<name>/SKILL.md` folder format (a flat file is never registered)
- `/pick-skills` reads every available skill and prints the chain it will run for a task
- `/adversarial-review` runs two opposite-bias passes then adjudicates; a finding survives only with its triggering input
- `/shippable`, `/proof`, `/unverified` and `/rigor` check the gap between work done and work delivered, and distrust passing checks
- `/goal-loop` and `/fleet-economics` cover subagent work: terminating proofs declared up front, model tier chosen by risk, critics never below flagship tier
- Companion to the author's thread on spec-driven development with an orchestrator, per-milestone managers and worker agents

## Links

- [GitHub](https://github.com/LucidPaths/claude.md-workflow)
- [Original Tweet](https://x.com/lucidpaths33/status/2121782324295581995)

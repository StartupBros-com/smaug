---
title: "starslingdev/skills (StarSling agent skills for GitHub Actions)"
type: tool
date_added: 2026-11-15
source: "https://github.com/starslingdev/skills"
tags: [ci-cd, agent-skills, github-actions, claude-code, devops]
via: "Twitter bookmark from @yonasbe"
---

Agent skills from StarSling for making GitHub Actions faster, safer and easier to debug. Installed with `npx skills add starslingdev/skills`. Bookmarked as the skill behind @yonasbe's extended version of @pontusab's "get CI under 2 minutes" agent prompt: the agent runs the ci-speedup skill, which audits a repo's workflows and run history against 90+ optimization patterns.

## Key Features

- ci-speedup: samples per-job P50/P95 timing from GitHub run history, reconstructs the job graph and critical path, and ranks findings by developer wall-clock wait (separately from runner-minutes). Each finding comes with a ready-to-paste agent prompt. Needs Python 3.9+, PyYAML and authenticated `gh`.
- ci-score: offline grading of CI configuration against 10+ best-practice checks.
- ci-secure: finds exploitable GitHub Actions attack paths (10+ vectors); `gh` enables nine extra checks.
- sling: operational view of a StarSling account (usage, billing, runs, failures, runner capacity); requires a StarSling account and CLI.
- Fixes stay in the working tree; the skills do not commit, push or open PRs unless asked.

## Links

- [GitHub](https://github.com/starslingdev/skills)
- [Original Tweet](https://x.com/yonasbe/status/2122066900679364803)

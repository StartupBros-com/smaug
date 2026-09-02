---
title: "AutoAgent"
type: tool
date_added: 2026-04-02
source: "https://github.com/kevinrgu/autoagent"
tags: [agents, self-improving, meta-agent, benchmarks, open-source]
via: "Twitter bookmark from @kevingu"
---

AutoAgent is the first open-source library for autonomously self-optimizing AI agents. A meta-agent iterates on a task agent's harness — prompts, tools, orchestration logic — without any human hand-engineering, achieving state-of-the-art results on SpreadsheetBench (96.5%) and TerminalBench (55.1%).

The core insight is "model empathy": agents are better at understanding other agents than humans are. Same-model pairings (Claude meta + Claude task) outperform cross-model pairings because the meta-agent shares weights with the task agent and innately understands its failure modes. The meta/task split is essential — a single agent trying to improve itself doesn't work because domain proficiency and improvement proficiency are distinct capabilities.

Setup is minimal by design: task agent starts with just a bash tool, `program.md` gives the meta-agent its research direction, `agent.py` is the task agent, and a Harbor adapter connects to the benchmark. The meta-agent then runs thousands of parallel sandboxes for 24+ hours.

## Key Features

- Meta-agent reads task agent failure traces to make targeted harness improvements
- Emergent behaviors discovered autonomously: spot-checking, forced verification loops, self-written unit tests, progressive disclosure to files, task-specific subagents
- Anti-overfitting mechanism: forces meta-agent to ask "if this exact task disappeared, would this still be worthwhile?"
- Traces are critical — score-only feedback dramatically reduces improvement rate
- Codex doesn't work as a meta-agent (ignores instructions to keep improving); Claude works well

## Links

- [GitHub](https://github.com/kevinrgu/autoagent)
- [Original Tweet](https://x.com/kevingu/status/2039843234760073341)

---
title: "skill-eval-harness"
type: tool
date_added: 2026-06-10
source: "https://github.com/adewale/skill-eval-harness"
tags: [evals, agent-skills, testing, benchmarking, python]
via: "Twitter bookmark from @ade_oshineye"
---

Python CLI for evaluating whether an Agent Skill changes observable output in a rigorous, benchmark-grade way. The core question it answers: when the same case runs with and without the skill, what changed, what passed, and did the eval itself leak the answer?

Designed around anti-overfitting discipline: separate `tune`, `holdout`, and `holdback` splits, variant pairing (`with_skill` / `without_skill` / `ablation:<id>`), and local deterministic grading (string, regex, file, JSON field, script oracles) that run without model calls. Judge/rubric assertions can be exported or run through a user-supplied `--judge-cmd`. The harness is model-agnostic — it does not pick a model for you.

## Key Features

- Manifest-driven test cases in `evals/shared-benchmark.json` with prompts, fixtures, variants, assertions, and ablations
- `skill-benchmark prepare` emits answer-key-safe task rows (no expected_behavior or judge rubrics exposed to the runner)
- `skill-benchmark benchmark` grades saved outputs and produces a JSON report with pass rates, flaky-run stats, no-lift flags, and saturated assertion warnings
- `skill-benchmark render-viewer` generates a static HTML review page with assertion evidence and output previews
- `skill-pi-trigger-eval` checks whether the model loads a skill from stream events without forced `--skill` flag
- Interop with Anthropic-style exports, Pi trigger evals, and Jetty runbook-mode import/export
- Eval hygiene: leakage lint, manifest audit, trigger checks, repeated-run stats, fixture recommendations

## Links

- [GitHub](https://github.com/adewale/skill-eval-harness)
- [Original Tweet](https://x.com/ade_oshineye/status/2064746832266219835)

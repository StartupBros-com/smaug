---
title: "Plan-optimizer skill"
type: article
date_added: 2026-06-09
source: "https://seangeng.com/freebies/plan-optimizer"
author: "Sean Geng"
tags: [claude-code, planning, iterative-improvement, agents, prompt-engineering]
via: "Twitter bookmark from @seangeng"
---

Sean Geng's Plan-optimizer is a copy-paste Claude Code skill that treats planning as a search problem. It evaluates a proposed plan against a rubric, critiques the weaknesses it finds, rewrites the plan, retains the strongest version, and stops when successive iterations stop improving the score.

The skill is intended for more than software planning: Geng names launches, code migrations, research projects, and strategy memos as candidate use cases. Its central constraint is a plateau-based stopping rule, which aims to turn an open-ended refinement loop into a bounded process rather than continuing once changes become noise.

## Key Takeaways

- Score a plan against an explicit rubric before deciding what to revise.
- Alternate scoring, critique, and rewriting instead of treating the first generated plan as final.
- Keep the strongest version encountered during the loop.
- Stop iterating when the score plateaus, rather than optimizing indefinitely.
- Apply the method to any planning task where a useful evaluation rubric can be defined.

## Links

- [Plan-optimizer skill](https://seangeng.com/freebies/plan-optimizer)
- [Original tweet](https://x.com/seangeng/status/2064513457584541849)
- [Inspiration cited by the author](https://x.com/goodalexander/status/2064487228462465177)

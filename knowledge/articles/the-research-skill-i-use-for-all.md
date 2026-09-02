---
title: "The /research skill I use for all coding"
type: article
date_added: 2026-04-03
source: "https://everydayisayear.ai/p/the-research-skill-i-use-for-all?triedRedirect=true"
author: "Josh Pigford"
tags: [claude-code, research, agent-workflows, developer-tools, ux]
via: "Twitter bookmark from @Shpigford"
---

Josh Pigford describes a Claude Code `/research` skill that turns a coding request into an evidence-gathering phase before planning. Its central premise is that Plan mode alone cannot compensate for stale model knowledge or an incompletely understood codebase, so the skill first clarifies the task, frames research questions, and checks direction with the user before recommending an implementation.

The skill assigns only the specialist agents needed for a task and runs them concurrently. The codebase agent examines local architecture and conventions; documentation, web, and dependency agents verify current APIs, version compatibility, authoritative examples, and breaking changes. Three newer agents—UI, UX, and delight—extend that research to visual consistency, accessible interaction flows, and small refinements such as useful defaults, transitions, and empty states.

Research proceeds through user checkpoints, evidence collection, synthesis, and a stress test for regressions, edge cases, performance, maintenance, and UX costs. The final report separates answer, evidence, sources, related material, and downsides before invoking Plan mode. For documentation, the skill prefers Context7, then official web sources; it expects agents to disclose conflicts and provide source locations and excerpts rather than presenting unsupported conclusions.

## Key Takeaways

- Clarifying consequential ambiguity before codebase exploration prevents research from validating the wrong proposed solution
- Specialized agents improve coverage when their number scales with the task rather than becoming a fixed, excessive swarm
- Current documentation, dependency checks, and source-backed web research help offset model training staleness
- UI, UX, and delight reviews make experience quality a first-class input to feature and fix planning
- A documented downside analysis creates a decision point before research is turned into an implementation plan

## Links

- [Article](https://everydayisayear.ai/p/the-research-skill-i-use-for-all?triedRedirect=true)
- [Original Tweet](https://x.com/Shpigford/status/2040068687286161869)

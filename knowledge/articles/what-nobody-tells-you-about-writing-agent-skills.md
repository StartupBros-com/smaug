---
title: "What nobody tells you about writing agent skills"
type: article
date_added: 2026-08-03
source: "https://x.com/i/article/2084328360755253248"
author: "Ian Vanagas"
tags: [agent-skills, progressive-disclosure, posthog, skill-authoring, context-mill]
via: "Twitter bookmark from @posthog"
---

Ian Vanagas's field notes from PostHog going skill-pilled: 226 skills in the internal [skill store](https://posthog.com/docs/ai-engineering/skills-store), 187 `SKILL.md` files across 28 products. The diagnosis is amnesia. Every conversation, the agent rediscovers the codebase, picks the wrong tool, and repeats old mistakes. Skills are the engineer instinct to automate and keep handy scripts — applied to agents so you write the explanation once.

## 1. Master progressive disclosure

Skills are routers, not dumps. Only the name and description sit in context; the body, references, and scripts load when the agent decides they are relevant. Write those two fields for *when to reach*, not *what it is*.

Their [SQL skill](https://github.com/PostHog/posthog/tree/master/products/posthog_ai/skills/querying-posthog-data) (`querying-posthog-data`) is the template: first sentence = when to read, middle = when to use, last = what it does. The body is a thin workflow that links out to 26 schema files, 22 example query patterns, and a function index.

Too many skills, or too-large descriptions, backfire. PostHog AI got worse as skill descriptions filled the window; Databricks found agents [pick the wrong skill more often](https://arxiv.org/html/2605.24050v1) as the catalog grows.

## 2. Skills aren't just code

An over-specified mini-skill (`git log --oneline -20` → if "fix" → if `auth.py` → lines 40–120 → flag if >50 lines) dies the moment the repo doesn't match. "Find recent changes that look risky and explain why. Start with the commit history." survives because it leaves the path to the agent.

Be precise about: the goal (what "done" looks like, with a self-check — their creating-an-endpoint skill asks the agent to `endpoint-run` a sample payload), constraints, and context the model cannot derive (where data lives, which tool, the schema). Stay ambiguous about: the steps, the failures, and runtime specifics (line numbers, file lists, versions). Over-specification turns a skill into a workflow and strips the intelligence you are paying for.

## 3. Skills rot — prevent it on purpose

Three principles: split durable structure from volatile content; point at a single source of truth (for PostHog, docs URLs beat inlined copies); regenerate, don't patch. Their Wizard & Docs team ships 120+ integration skills through [context-mill](https://github.com/PostHog/context-mill): source docs + curated prompts + example apps → portable zip manifest → versioned release consumed by the PostHog MCP and the install wizard. Point a skill at the docs and it tracks their changes; regenerate from a prompt and it inherits model upgrades.

## 4. Ask questions before making demands

The agent already knows which tools it has, what context it can reach, and what broke last run. Ask: what can you do to help; what do you need to do better; based on the last run, how can this skill improve. Charles's line: the most useful hour with Cowork was asking it what to use Cowork for. Author skills with a stronger model (Fable) even if a weaker one will run them.

## 5. Not everything deserves a skill

Each skill has context and maintenance cost. Write them for work that is repeated (Dunham's "three times and three more"), that agents do badly by default (generic SQL is free; ClickHouse-flavored PostHog HogQL is not), that needs context models don't have (nested AI-observability / log payloads), or that can run on autopilot as a [loop](https://posthog.com/newsletter/loops) (PR babysitting, flaky-test hunting, autoresearch, scouts). The article closes with a 30-day evidence prompt that mines sessions, memories, and existing skills for candidates that recurred, have a stopping condition, and are not already covered.

Originally published in PostHog's [build mode](https://newsletter.posthog.com/) newsletter.

## Key Takeaways

- Name + description are the only always-on tokens — write them as a router, then progressive-disclose the rest
- Catalog bloat is a real failure mode; Databricks measured wrong-skill picks rising with skill count
- Specify goal, constraints, and irreducible context; leave steps, errors, and runtime details to the model
- Fight rot by pointing at docs and regenerating (context-mill) instead of piling patches
- Ask the agent what it can do / needs / how the last run failed before you prescribe
- Skill only repeated, default-bad, context-heavy, or loopable work

## Links

- [Article](https://x.com/i/article/2084328360755253248)
- [Original Tweet](https://x.com/posthog/status/2084345938089316582)
- [PostHog skill store](https://posthog.com/docs/ai-engineering/skills-store)
- [querying-posthog-data skill](https://github.com/PostHog/posthog/tree/master/products/posthog_ai/skills/querying-posthog-data)
- [context-mill](https://github.com/PostHog/context-mill)
- [Databricks: agents pick the wrong skill](https://arxiv.org/html/2605.24050v1)
- [build mode newsletter](https://newsletter.posthog.com/)

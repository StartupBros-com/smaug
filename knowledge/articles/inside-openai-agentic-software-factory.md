---
title: "Inside OpenAI's agentic software factory"
type: article
date_added: 2026-09-15
source: "https://newsletter.pragmaticengineer.com/p/openai-software-factory"
author: "Gergely Orosz"
tags: [agents, codex, openai, engineering-process]
via: "Twitter bookmark from @GergelyOrosz"
---

Pragmatic Engineer deep dive into how Codex has taken over OpenAI's engineering and how the company runs an agentic software factory, with details from inside OpenAI.

## Key Takeaways

- Non-engineering teams (finance, recruiting, legal) went from near zero to about 90% Codex usage in four months; IDE usage has fallen since January.
- PRs per engineer are climbing sharply, loading some systems roughly 10x; current code review practice "makes less and less sense".
- Pipeline: human defines outcome, Codex gathers context, implements, tests, and shepherds CI; specialist agents review and changes are risk-sorted for auto-approval.
- Deploy agents watch rollouts; Sevbot handles incidents but needs an engineer to apply mitigations.
- Perf Factory feeds production monitoring back to agents that find latency regressions, root causes, and fixes.

## Links

- [Article](https://newsletter.pragmaticengineer.com/p/openai-software-factory)
- [Original Tweet](https://x.com/GergelyOrosz/status/2099945497377091902)

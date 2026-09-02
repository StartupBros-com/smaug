---
title: "Resolvers: The Routing Table for Intelligence"
type: article
date_added: 2026-04-15
source: "https://x.com/i/article/2017109679416233987"
author: "Garry Tan"
tags: [ai-agents, agent-architecture, context-management, skills, evaluations, knowledge-management]
via: "Twitter bookmark from @Voxyz_ai"
---

Garry Tan argues that agent systems need explicit resolvers: small routing tables that tell an agent which context, skill, or storage location to consult for a given task. Rather than continuously loading a sprawling instruction file, a resolver defers detailed knowledge until a matching task makes it relevant.

The article describes replacing a 20,000-line `CLAUDE.md` with a roughly 200-line decision tree that points to specialized material on demand. It frames this as a context-management improvement: the model has access to the same accumulated knowledge without being asked to attend to all of it on every task. The same pattern governs filing: a shared resolver and filing-rules document should direct every skill that writes into a knowledge repository, rather than allowing each skill to encode an independent default path.

Tan identifies routability as an operational concern, not just a documentation exercise. Skills can exist but remain inaccessible if the resolver lacks triggers that match how users ask for help. He proposes trigger evaluations with representative inputs and expected destinations, plus a recurring `check-resolvable` audit that traces the path from the top-level resolver to every skill or code path. The article calls out both false negatives, where the intended skill never fires, and false positives, where overlapping descriptions send work to the wrong one.

The longer-term proposal is to counter context rot by observing routing traffic: missed matches, bad matches, and direct invocations that bypass the resolver could inform periodic updates to trigger descriptions and priorities. The author connects this to an organizational analogy—skills as specialized workers, resolvers as an org chart, filing rules as process, and routing tests as performance checks.

## Key Takeaways

- Keep top-level instructions short enough to route to relevant context instead of making every task absorb the entire knowledge base.
- Centralize content-filing rules so every writing skill follows the same classification logic rather than accumulating divergent hardcoded defaults.
- Test task routing explicitly with natural-language prompts and expected skills, not only the quality of outputs after a skill happens to run.
- Audit reachability across the full resolver-to-skill-to-code chain to find valuable capabilities that users cannot actually invoke.
- Revisit trigger wording and priorities as new skills and real user phrasing emerge; a static resolver eventually becomes an inaccurate historical map.
- Treat routing, filing, and nested skill selection as related layers of governance for a growing agent system.

## Links

- [Article](https://x.com/i/article/2017109679416233987)
- [Original Tweet](https://x.com/garrytan/status/2044479509874020852)

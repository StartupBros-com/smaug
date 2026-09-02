---
title: "Introducing Flex: Let the Model Write the Code"
type: article
date_added: 2026-08-05
source: "https://www.cmpnd.ai/blog/let-the-model-write-the-code.html"
author: "Michael Isaac"
tags: [dspy, llm-programming, program-optimization, gepa]
via: "Twitter bookmark from @dbreunig"
---

Flex is a DSPy module that lets an optimizer inspect and rewrite its source code as well as tune its prompts. The post describes applying GEPA to a location-conflation task: the resulting program improved accuracy from 90% to 95% while using substantially fewer model calls. In the article's reported comparison, the rewritten program was 28% cheaper and 40% faster than its baseline.

## Key Takeaways

- Conventional DSPy optimization targets prompts; Flex exposes the surrounding program to optimization too.
- The optimizer can alter the code path that decides how a task is handled, rather than merely refining instructions.
- The example makes program-level optimization relevant when LLM-call count, latency, and cost matter alongside task accuracy.

## Links

- [Article](https://www.cmpnd.ai/blog/let-the-model-write-the-code.html)
- [Original Tweet](https://x.com/dbreunig/status/2085080631353147576)

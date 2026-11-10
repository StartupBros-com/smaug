---
title: "LLM cliche highlighter"
type: article
date_added: 2026-08-28
source: "https://tools.simonwillison.net/llm-cliche-highlighter"
author: "Simon Willison"
tags: [ai, writing, tools, llm]
via: "Twitter bookmark from @simonw"
---

A single-page browser tool by Simon Willison that highlights sentences in pasted text (or text loaded from a URL via r.jina.ai) matching known LLM writing cliches, including tells catalogued in Wikipedia's "Signs of AI writing" guide. The bookmarked tweet says it has grown to 38 patterns.

## Key Takeaways

- Paste text or load a URL; analysis runs as you type, and hovering a highlight shows which cliche it matched.
- Patterns are individually toggleable, with per-pattern match counts.
- Chain patterns such as "no X, no Y" get a badge counting the items in the chain.
- Detectors include regex matchers, repeated-sentence-skeleton (echo) finders, question chains and anaphora.
- The page has built-in self-tests that can be run headlessly with Node.

## Links

- [Article](https://tools.simonwillison.net/llm-cliche-highlighter)
- [Original Tweet](https://x.com/simonw/status/2093277255438860358)

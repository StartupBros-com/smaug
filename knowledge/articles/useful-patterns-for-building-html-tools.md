---
title: "Useful patterns for building HTML tools"
type: article
date_added: 2025-12-10
source: "https://simonwillison.net/2025/Dec/10/html-tools/"
author: "Simon Willison"
tags: [HTML, JavaScript, LLMs, browser-tools, vibe-coding]
via: "Twitter bookmark from @simonw"
---

Simon Willison collects practical patterns from building more than 150 small browser applications as single HTML files, mostly with help from LLMs. He calls these “HTML tools”: compact, useful applications that combine HTML, JavaScript, and CSS without requiring a framework or deployment pipeline.

The approach favors small, inspectable programs that can be copied from an LLM response, hosted nearly anywhere, and cheaply revised or rebuilt. When a dependency is necessary, the article recommends loading it from a CDN rather than introducing a build step; browser-native capabilities then cover much of the remaining functionality.

## Key Takeaways

- Put markup, styles, and behavior in one file to reduce deployment and distribution friction.
- Avoid React and other build-step tooling for lightweight utility applications.
- Use CDNs selectively for well-known dependencies while keeping the tool otherwise self-contained.
- Persist small, shareable state in URLs and larger or sensitive local state in browser storage.
- Exploit browser primitives such as clipboard access, file opening, downloads, CORS-enabled APIs, Pyodide, and WebAssembly.
- Preserve prompts and transcripts alongside source code so useful tools can be understood, repaired, and remixed.

## Links

- [Article](https://simonwillison.net/2025/Dec/10/html-tools/)
- [Willison's HTML tools collection](https://tools.simonwillison.net/)
- [Original Tweet](https://x.com/simonw/status/1998862222395846726)

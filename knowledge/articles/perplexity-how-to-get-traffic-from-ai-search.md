---
title: "Perplexity reveals in simple terms how to get traffic from AI search"
type: article
date_added: 2026-01-21
source: "https://x.com/i/article/2013713038021652480"
author: "Alex Groberman"
tags: [aeo, geo, seo, perplexity, ai-search, snippets, retrieval]
via: "Twitter bookmark from @alexgroberman"
---

Alex Groberman walks Jesse Dwyer's Search Engine Journal interview on how Perplexity actually retrieves answers, then maps it onto the SEO vs GEO vs AEO split. The headline claim: traditional SEO is not dead — crawlability, authority, and a reasonable ranking still decide whether an AI system has anything to work with. What *is* changing is the unit of competition, from pages to snippets.

## Page-first vs snippet-first

Dwyer's technical distinction is whole-document vs sub-document processing, not whether Google "understands passages."

- **Page-first (GEO).** Classic search scores URLs, returns the top ~10–50 documents, then an LLM summarizes them. Groberman repeats Dwyer's joke that GPT web search is "four Bing searches in a trenchcoat." Passage ranking exists, but the winner is still a page. Optimization is still SEO-heavy.
- **Snippet-first (AEO).** Pages are broken into tiny units (~5–7 tokens, roughly 2–4 words), vectorized, and the system retrieves tens of thousands of snippets to saturate the context window. A full window leaves less room to hallucinate, so the model behaves more like a retrieval engine than a creative generator. The competing unit is the snippet, not the page.

That retrieval split is why authority-heavy non-expert sites get cited, why URLs that do not rank #1 still show up in answers, why YouTube/media are overrepresented, and why scale and repeated phrasing beat one "perfect" page. Groberman points at the same pattern in an AI Overviews health study: authority beat expertise, citations did not track ranking, coverage beat pedigree.

## Why answers differ across tools

Two people can ask the same question and get different answers because tools load personal memory into the context window and assemble the result dynamically. There is no single universal result set the way classic Google rankings felt deterministic.

Differentiation among AI search products, per Dwyer, lives "in the technology between the index and the snippets" — query reformulation, compute modulation, proprietary re-rankers — all aimed at stuffing better snippets into the window.

## Practical implication

Do not optimize one page. Become the best snippet supplier at scale: FAQs, comparisons, definitions, buyer guides, and the same explanation restated across many pages. If the site is not crawlable, authoritative, and at least somewhat ranked, no amount of "AI optimization" helps. Groberman pitches his own Gold Plan / Premium Content Bundle as the packaging of that advice.

## Key Takeaways

- Most traditional SEO still applies; AI search is an evolution of retrieval, not a replacement for crawl/authority/rank
- GEO = LLM summary on top of page-level retrieval; AEO = snippet-first retrieval that saturates the context window
- The competing unit in AEO systems is a reusable snippet, so modular repeated explanations beat a single flagship article
- Cross-tool answer variance is personal memory + dynamic assembly, not a broken index
- If you do not exist in the classic index, you do not exist to the AI layer sitting on it

## Links

- [X article](https://x.com/i/article/2013713038021652480)
- [Search Engine Journal interview with Jesse Dwyer](https://www.searchenginejournal.com/perplexity-ai-interview-explains-how-ai-search-works/565395/)
- [Original tweet](https://x.com/alexgroberman/status/2013988297673204197)

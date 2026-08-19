---
title: "The #1 reason some sites dominate AI search answers and yours doesn't"
type: article
date_added: 2026-01-21
source: "https://x.com/i/article/2013837395930865664"
author: "Alex Groberman"
tags: [ai-search, common-crawl, web-graph, harmonic-centrality, seo, citations, aeo]
via: "Twitter bookmark from @alexgroberman"
---

Alex Groberman summarizes a Common Crawl blog on how SEOs are reading the monthly Web Graph, plus Metehan Yesilyurt's work on why the same domains keep getting recommended by ChatGPT, Google AI Overviews, Gemini, and Perplexity. The claim is that AI visibility starts before ranking or content: if you are not central in the open-web link graph, you are under-crawled, under-represented in training corpora, and therefore not a "familiar" source when snippet-first systems pick what to cite.

## What the Web Graph measures

Common Crawl is a nonprofit that archives large slices of the public web; Groberman cites Mozilla 2024 that 64% of major LLMs use filtered Common Crawl data, and that GPT-3 took 80%+ of its training tokens from it. Each month CC publishes a Web Graph with two metrics that also drive crawl priority:

- **Harmonic Centrality (HC)** — how few link hops separate a domain from the rest of the web. High HC = a hub. High-HC domains get crawled more often.
- **PageRank** — classic authority from link quality and quantity.

More crawl appearances → more representation in training data and downstream pipelines. That is why Google, YouTube, Wikipedia, Facebook, and major media keep showing up: they are central, constantly recrawled, and already "known" to the model before live retrieval starts. Same pattern as authority beating expertise in AI Overviews and YouTube being over-cited.

## Citations still track SEO, but want explainable authority

Brie Moreau's analysis of 2M+ AI citations (Groberman's writeup): a Google #1 page has ~46–48% citation probability, falling to ~19–20% at position 10. Across 177 million sources, citations skew toward comparative listicles (~32.5%), blogs/opinion (~9.9%), and commercial pages (~4.7%). AI wants authority it can *explain*, not just a strong domain.

In snippet-first systems the model is choosing snippets from domains it already trusts. Trust is shaped by link topology, crawl frequency, training-data exposure, and live retrieval. HC does not replace SEO; it explains why authority compounds inside AI systems instead of plateauing.

## The model shift

Old: index → rank → click. New: crawl → train → retrieve → cite. If you are not in the crawl you are not in the model; if you are not in the model you do not exist in AI search. Groberman again packages this as authority/centrality work plus scaled modular content (his Gold Plan / Premium Content Bundle).

## Key Takeaways

- Harmonic centrality and crawl frequency decide who is even in the training corpus many LLMs are built from
- Familiar, highly central domains get recommended in part because they are over-represented, not only because they are the best answer
- Classic SEO still predicts citation probability, but the preferred formats are explainable (listicles, definitions, comparisons)
- Snippet-first engines cite snippets from already-trusted domains; centrality makes that trust self-reinforcing
- Visibility work starts at being crawled and central, not at prompt-level "GEO tricks"

## Links

- [X article](https://x.com/i/article/2013837395930865664)
- [Common Crawl: How SEOs are using Web Graph data for AI ranking signals](https://commoncrawl.org/blog/how-seos-are-using-common-crawls-web-graph-data-for-ai-ranking-signals)
- [Metehan Yesilyurt, CC-Rank](https://metehan.ai/blog/cc-rank/)
- [Original tweet](https://x.com/alexgroberman/status/2014016570163597443)

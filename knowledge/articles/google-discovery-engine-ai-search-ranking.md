---
title: "LEAKED: Google just accidentally revealed how AI search systems actually work"
type: article
date_added: 2026-07-26
source: "https://x.com/i/article/2011908573220220928"
author: "Alex Groberman"
tags: [geo, seo, ai-search, google, ai-mode, discovery-engine, schema, vertex]
via: "Twitter bookmark from @alexgroberman"
---

Alex Groberman argues that Google Cloud Discovery Engine (Vertex AI Search) accidentally documented the ranking and retrieval stack behind AI Mode, AI Overviews, and future AI-search features. The technical source is Metehan Yesilyurt's reverse-engineering of that product; Groberman translates it into an optimization checklist and then maps his SEO Stuff packages onto the same architecture. The July 2026 bookmark claims a business that followed the article added more than $50k in ChatGPT, Google, and Perplexity-driven traffic.

Treat the Discovery Engine mapping as a strong analogy, not a sworn affidavit that consumer Google uses every flag identically. The operational advice still stands even if some names (Gecko, Jetstream) are Cloud-product labels rather than Search-brand names.

## Seven ranking signals

1. **Base ranking** — the core algorithm's initial relevance score
2. **Gecko score** — embedding similarity between content and query
3. **Jetstream** — cross-attention relevance that handles negation, contrast, context, and nuance better than embeddings
4. **BM25** — classical keyword matching still in the mix
5. **PCTR** — predicted click-through in three tiers: popularity, PCTR, then personalized PCTR after 100k+ queries
6. **Freshness** — time-sensitive recency
7. **Boost / bury** — manual business-logic adjustments

## Retrieval and chunking

Discovery Engine also exposes how documents are cut up:

- Max chunk size: 500 tokens (~375 words)
- Optional: ancestor headings travel with each chunk
- Tables and images get parsed
- Layout parser plus Gemini-enhanced understanding (LLM-augmented indexing)

If a claim does not live inside a clean 500-token block with a real heading, it is hard to retrieve. Walls of text lose.

## Schema is three independent flags

Structured data is processed with three separate switches, which is why "schema doesn't matter" takes keep missing:

- **Searchable** — affects recall
- **Indexable** — affects filtering and ordering
- **Retrievable** — affects what the model can output

A field can influence ranking without being visible, or be visible without influencing ranking.

## Four-stage pipeline

1. **Prepare** — query understanding, time-aware synonym mapping, autocomplete, NLU
2. **Retrieve** — chunking, layout parsing, schema extraction, embeddings
3. **Signal** — the seven signals above
4. **Serve** — Gemini 2.5 Flash generates the answer, applies instructions, safety, related questions, and grounding

Classic Search, AI Overviews, and AI Mode are framed as different configurations of this same pipeline.

## What to write for

Optimize three layers at once:

- **Gecko / semantic match** — content has to match the intent of the prompts you actually want
- **Jetstream / cross-attention** — clear definitions, direct answers, contrast, "X vs Y", "best for ___", "without ___"
- **Chunk-level clarity** — question-based headings, two-to-three-sentence answers, TLDRs, clean HTML, factual claims, lists and comparisons

That is the extractable unit AI systems quote.

The back half of the article is a product pitch: SEO Stuff Gold Plan (10 comparison articles + FAQ/product schema + 3 DR50+ links), Premium Content Bundle (60 articles), and Premium Backlink Bundle, each mapped onto the signals above.

## Key Takeaways

- Discovery Engine is the most transparent public look at Google's AI ranking/retrieval pipeline; treat names as Cloud-product labels
- 500-token chunks with ancestor headings are the retrieval unit — structure for extractability, not for a human scrolling a novel
- Schema is three flags (searchable / indexable / retrievable), not one on/off "rich result" switch
- Jetstream rewards contrast and direct answers; embeddings alone do not
- Traditional Search → AI Overviews → AI Mode can be read as one pipeline with different serve configs

## Links

- [X article](https://x.com/i/article/2011908573220220928)
- [Metehan Yesilyurt: reverse-engineering Google AI Mode](https://metehan.ai/blog/reverse-engineering-google-ai-mode/)
- [SEO Stuff](http://seo-stuff.com/)
- [Original tweet](https://x.com/alexgroberman/status/2081373818946507147)

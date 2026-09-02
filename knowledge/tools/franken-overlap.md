---
title: "FrankenOverlap"
type: tool
date_added: 2026-08-15
source: "https://github.com/Dicklesworthstone/franken_overlap"
tags: [rust, text-processing, provenance, approximate-matching, search, overlap-detection]
via: "Twitter bookmark from @doodlestein"
---

FrankenOverlap is a safe-Rust searcher for textual provenance: given a specimen passage, find where it came from even after formatting changes, substitutions, insertions, deletions, OCR corruption, fragmentation, or reordering. It combines rare-feature positional retrieval, anchor chaining, and bounded exact verification rather than scanning every corpus window with edit distance. The default core has no C, C++, Python, BLAS, or GPU runtime dependency.

The differentiated product is localized, edit-tolerant, auditable provenance — not a Lucene, Elasticsearch, or vector-database replacement. Intended workloads include SEC filings, contracts, and policy-language lineage; plagiarism and unattributed reuse; edition comparison; OCR recovery; code and license provenance; dataset deduplication; and internal document-reuse tracking. Short keyword queries still belong to BM25; unchanged quotations belong to exact substring search; pure paraphrase belongs to embeddings.

As of 2026-08-15 the repo has the acquisition, sectioning, control, bootstrap, and evidence-bundle machinery for a fair real-corpus bake-off (Gutenberg, SEC 10-Ks, Jaccard, SimHash, BM25, exhaustive Levenshtein), but `main` does not yet contain a completed run with pinned numerical results. The author (Jeffrey Emanuel / @doodlestein) built the first 125 commits entirely through GPT Pro in the ChatGPT web app writing into the GitHub repo via the GitHub connector.

## Key Features

- Sparse q-gram fingerprints, shifted diagonal votes, and anchor chains for long edited specimens against a static corpus
- Unindexed route: direct equality below a crossover, unit-circle phase-sketch FFT above it
- Fielded BM25, phrase/proximity search, and explainable lexical/overlap fusion for ordinary queries
- Incremental indexes and evidence-gated deployment
- Benchmark harness with paired-bootstrap claim gates and immutable Markdown/HTML evidence bundles

## Links

- [GitHub](https://github.com/Dicklesworthstone/franken_overlap)
- [Original Tweet](https://x.com/doodlestein/status/2088636008803819646)

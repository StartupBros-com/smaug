---
title: "aroma-typescript"
type: tool
date_added: 2026-11-22
source: "https://github.com/L9Labs/aroma-typescript"
tags: [code-search, static-analysis, code-review, typescript]
via: "Twitter bookmark from @mikejulian"
---

A TypeScript implementation of Aroma, the structural code search and recommendation system from the OOPSLA 2019 paper "Aroma: Code Recommendation via Structural Code Search" (Luan, Yang, Barnaby, Sen, Chandra). Given a piece of code, it finds methods in a corpus that contain similar code, clusters them, and returns the code each cluster shares around the query. For code review, the corpus can be the repo checkout and the query the code a PR changed, so a recommendation reads as "the functions that already do this also do that". It reads no files, calls no model or network, and writes nothing; the caller passes source text. Bookmarked because it shows a Facebook-internal duplicate-finder rebuilt from a paper with an AI coding agent (see the quoted tweet by @peterpme).

## Key Features

- Pipeline follows the paper: simplified parse trees, feature extraction, Phase I retrieval (top 1000), Phase II pruning and rerank, Phase III clustering and intersection
- API: `buildIndex`, `queriesFromLines`, `search`, `recommend`, `queryFromSnippet`
- Supports Python and TypeScript front ends, with a pluggable `Language` interface
- Ships TypeScript source with no build step; requires Node.js 22.18+ and pnpm

## Links

- [GitHub](https://github.com/L9Labs/aroma-typescript)
- [Original Tweet](https://x.com/mikejulian/status/2123677566687137841)

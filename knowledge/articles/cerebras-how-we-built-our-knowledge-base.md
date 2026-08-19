---
title: "How we built our knowledge base"
type: article
date_added: 2026-08-04
source: "https://x.com/i/article/2077808214062825472"
author: "Isaac, Daniel, Gao Zenghao (Cerebras)"
tags: [knowledge-base, rag, slack, embeddings, cerebras, mcp, retrieval, cocoindex, enterprise, reranking]
via: "Twitter bookmark from @DanielNealAdler"
---

Cerebras's internal knowledge base takes more than 15,000 questions a day three months after launch, used by humans, automations, and agents. Isaac, Daniel, and Gao Zenghao describe why they refused the recurring "put everything in one platform" fix and instead ingest Slack, code, docs, and custom databases where they already live into one Postgres embeddings table, then query it through hybrid retrieval, a planner/executor/synthesizer loop, MCP primitives, and project-scoped search.

The interactive technical write-up is on the Cerebras blog. Dan Adler bookmarked it with the claim that every enterprise he talks to is building or already has one of these.

## Design bet

Information is generated where the tool is ergonomic — PR comments in GitHub, incidents in Slack, status in Jira — so a single source of truth never sticks. Cerebras Knowledge is three layers: collect/store, query, and an authz/audit/analytics envelope. Every source, including netlists and team-owned tables, lands as the same embedding-row shape and is immediately queryable.

## Slack: hybrid retrieval, not raw vectors

Raw embeddings over Slack failed. Density varies from "hey yeah sure mike" to kernel explanations; short messages beat long ones on cosine similarity; meaning lives in the thread. Ingestion uses a Socket Mode bot (WebSocket, no polling), dedupes on Slack event IDs, then re-fetches the whole thread and writes it as one row so replies never leave a stale parent.

Retrieval fuses four views of the same corpus:

- Full-text (Postgres GIN) for error strings, flags, hostnames
- Embeddings for paraphrase
- IDF so rare tokens outrank "sounds good, thanks"
- Age decay so six-month-old infra answers lose to current ones

An LLM distills each thread into a one-line search question, a short summary, the resolution, and system/code references. Those fields are embedded, not the raw transcript. Bursting then embeds consecutive same-author runs with the thread topic prepended, but only if the burst clears IDF ≥ 4.0, 200+ characters, or has reactions — so a tangent answer that never made the thread summary is still findable.

## Code and custom sources

After Cursor's semantic-search write-up and internal debate that "grep is all you need," they indexed repos (some >40 GB) with CocoIndex: language-specific regex splitters from class → method → block, incremental re-embed on commit, allow/deny path lists in config PRs. Teams that will not move data into Slack or Docs ship a small Python plugin that emits the same row schema.

## Query path

A planner LLM picks tools from a compact catalog — `subsystem_index`, unified `search`, `search_slack`, `search_code` (ripgrep), `recent_prs`, `who_knows` — the executor fans them out in parallel, and Reciprocal Rank Fusion (`weight / (60 + rank)`) merges incompatible lists so consensus beats a single #1. A small reranker scores 0–10 and keeps the top ten; winners then get neighboring wiki sections so chunking does not drop preconditions.

MCP exposes those retrieval primitives as LLM-free, narrow tools. Claude Code (or any MCP client) is the orchestrator. The web UI hides the same planner → executor → synthesizer behind a single ask box.

## Organization

Unscoped "search everything" died once compiler engineers started seeing data-center runbooks. Projects are named bundles of sources; the same incidents channel can sit in many projects. Onboarding sets a default project on the user profile so a new hire in ML training infra does not have to learn which channels matter.

## Why it matters

This is a concrete enterprise RAG architecture, not a vendor whitepaper: one embeddings table, Slack thread-as-row + bursting, CocoIndex for huge repos, RRF + rerank + neighbor expansion, and a split between cheap MCP primitives and an LLM planner. It is the pattern Adler says every large company is now copying.

## Links

- [X article](https://x.com/i/article/2077808214062825472)
- [Cerebras blog (interactive)](https://www.cerebras.ai/blog/how-we-built-our-knowledge-base)
- [Cerebras tweet](https://x.com/cerebras/status/2077822555159945507)
- [Dan Adler quote tweet](https://x.com/DanielNealAdler/status/2084844964891312153)

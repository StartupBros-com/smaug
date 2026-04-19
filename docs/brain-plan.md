# Smaug Brain — 10x Retrieval Plan

**Status:** Phase 0 shipped. Phase 2 (stdio MCP) shipped. Phase 1 blocked on oMLX cold-start.
**Owner:** @will (StartupBros fork).
**Why now:** 236 categorized markdown files + a 9k-line `bookmarks.md` are load-bearing knowledge but currently only reachable via `grep`. Smaug already *harvests* beautifully; the missing layer is *recall*.

## Goal

Smaug's corpus becomes load-bearing memory: you reach for it mid-task, it feeds Hermes and Claude Code via MCP, it compounds instead of just accumulating. Single owner of the corpus stays Smaug.

## Non-goals

- Do **not** replicate GBrain's self-wiring entity graph or LLM ingestion cron-storms.
- Do **not** merge with `ops/compiled-truth/` or `ops/operator-truth/` in `home-infrastructure`. Those stay the canonical homelab truth layer. Smaug is a sibling knowledge surface.
- Do **not** broaden Smaug's ingestion to emails, meetings, etc. X focus is the feature.

## Architecture

One SQLite file at `~/SITES/smaug/brain.db`.

- FTS5 virtual table over chunked markdown (title, body, author, category).
- Phase 1+: `sqlite-vec` extension in the same DB for embeddings.
- Content-hashed rows so re-categorization doesn't dupe.
- Markdown in `knowledge/` and `bookmarks.md` remain the truth. The DB is derived state; `smaug brain index --force` rebuilds it from source at any time.

### Chunking

- `knowledge/{articles,tools,videos}/*.md` → one doc per file. Frontmatter gives title, source URL, `date_added`, category is parent dir.
- `bookmarks.md` → split on `## @author - Title` headings. Each becomes one doc. Date comes from the nearest preceding `# Weekday, Month Day, Year` header.

### Embeddings (Phase 1+)

Local only, via `mac-studio` oMLX on `192.168.1.140` — SSH tunnel already established, loopback-bound. No external API calls. Candidate models: `nomic-embed-text-v1.5`, `bge-small`.

## Commands

All JSON-first so agents can consume cleanly.

- `smaug search "<query>" [--category=articles] [--since=30d] [--limit=10] [--json]`
- `smaug brain index [--force]`
- `smaug brain stats`
- `smaug brain doctor` — dead-link sweep, orphaned rows, missing embeddings.
- `smaug serve` (Phase 2) — stdio MCP server: `search`, `read`, `recent`, `by_author`, `random`.

## Phasing

| Phase | Scope | Gate |
|---|---|---|
| 0 | FTS5 index, `smaug search`, `smaug brain {index,stats,doctor}`, query log | Ships when 5–10 real queries feel better than grep |
| 1 | Embeddings via Mac Studio oMLX, hybrid ranking (RRF) | Ships when semantic queries return things FTS5 misses |
| 2 | stdio MCP server, Claude Code wiring on `wm` | Ships when Claude Code reaches for Smaug mid-task without prompting |
| 3 | Hermes tool via Tailnet-only HTTP bridge on `ai-gateway` | Ships when Hermes cites Smaug bookmarks in answers |
| 4 | Link enrichment, dead-link sweep, re-bookmark boost | Ships when failed-query log drives ingestion decisions |

Each phase gates on **observed behavior change**, not feature completion.

## Guardrails

- **No auto-mutation of markdown.** DB is derived; source is truth.
- **No LLM enrichment cron jobs.** Deterministic ingest only — this is the whole ethos separating Smaug from GBrain.
- **Server-owned creds.** Embedding calls over SSH tunnel; MCP bound loopback/Tailnet only.
- **No scope creep.** Smaug stays X-focused. General second brain = different repo if ever.

## Open decisions (Phase 0 picks)

- Chunking: file-level for `knowledge/`, bookmark-entry-level for `bookmarks.md` — picked.
- Embedding model + dim: **deferred to Phase 1**.
- MCP transport: stdio-first for Phase 2, HTTP added in Phase 3.
- Query log: **in Phase 0** (cheap, drives later decisions).

## Phase 1 blocker (2026-04-19 recon)

oMLX on `mac-studio` advertises `local-embed` and `local-rerank` in `/v1/models`, but first-request inference on both `/v1/embeddings` and `/v1/chat/completions` times out (>15s). Likely lazy-load on cold start. Phase 1 is blocked until either:

1. A warm-keep or preload path is added to `com.startupbros.omlxd` for `local-embed`, or
2. We accept cold-start latency and introduce a batched indexer that runs once per corpus refresh.

Until then, stay on Phase 0 FTS5 and ship Phase 2 MCP.

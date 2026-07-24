# Upstream relationship

- **Upstream:** https://github.com/alexknowshtml/smaug
- **Divergence (as of 2026-07-24):** +19 ahead / -0 behind upstream default branch
- **Fork type:** Contribution/maintenance fork
- **Sync cadence:** Manual.

## StartupBros-specific delta

Live MCP server (X/Twitter bookmark ingestion). Scope deliberately narrowed to a pure ingestion engine; curation consolidated into PRBot.

## Why this file exists

An org-wide audit on 2026-07-24 found that comparing only the *default* branch made
several forks look like zero-delta mirrors when they actually carried unmerged
StartupBros fixes on side branches. Any future fork-pruning pass must enumerate and
author-check **all** branches, not just default-branch ahead/behind.

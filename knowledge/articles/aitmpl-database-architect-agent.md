---
title: "Database Architect - Claude Code agent (Claude Code Templates)"
type: article
date_added: 2026-11-15
source: "https://www.aitmpl.com/component/agents/database/database-architect"
author: "Claude Code Templates"
tags: [claude-code, agents, database, schema-design]
via: "Twitter bookmark from @TiagerBao"
---

Catalog page for the Database Architect subagent on the Claude Code Templates marketplace. Its description says it must be used for any database schema work, including small changes and rushed requests, such as designing tables for a new feature or writing and reviewing migrations. The fetched page was mostly HTML boilerplate and cut off early, so the details below come from the tweet and the page description.

## Key Takeaways

- Install with `npx claude-code-templates@latest --agent database/database-architect`
- Covers data modeling (tables, keys, indexes, constraints) and technology choice (PostgreSQL, MySQL, MongoDB, vector databases)
- Covers multi-tenancy (RLS, schema isolation, separate databases), performance planning (read/write patterns, sharding) and migration scripts with rollback plans
- Intended workflow: analyze business access patterns first, then design the schema, rather than patching the database after the code is written
- The tweet's caveat: generated DDL and migration scripts still need human review, especially for production data changes

## Links

- [Article](https://www.aitmpl.com/component/agents/database/database-architect)
- [Original Tweet](https://x.com/TiagerBao/status/2121481428500418958)

---
title: "Simplifying domains for people and agents"
type: article
date_added: 2026-09-30
source: "https://blog.cloudflare.com/simplifying-domains/"
author: "Cloudflare"
tags: [cloudflare, domains, agents, mcp, cli, workers, durable-objects]
via: "Twitter bookmark from @Cloudflare"
---

Cloudflare rebuilt Registrar's domain search to show the exact searched term across all 420+ supported extensions, with results updating as you type, plus sorting, filtering and at-cost transparent pricing. The same capabilities are exposed to agents through an expanded Registrar API (with a sandbox, an extensions endpoint and transfers), Cloudflare MCP and the new cf CLI.

## Key Takeaways

- Search checks availability by progressively combining prepared datasets (zone files, cached answers), DNS answers and live registry lookups, trading off speed, freshness and certainty per result.
- A dataset or DNS hit proves a domain is taken, but a miss cannot prove availability, so live registry checks are used for the freshest answer.
- Built on Workers, Durable Objects and WebSockets, the same platform available to customers.
- The Registrar API sandbox lets agents test registration workflows without buying a domain; agents can search, register and transfer domains in conversation.

## Links

- [Article](https://blog.cloudflare.com/simplifying-domains/)
- [Original Tweet](https://x.com/Cloudflare/status/2105311865211376122)

---
title: "treg"
type: tool
date_added: 2026-08-18
source: "https://github.com/superdesigndev/treg"
tags: [agents, registry, mcp, credentials, python]
via: "Twitter bookmark from @jasonzhou1993"
---

Open-source "OpenRouter for agent tools": one base URL and one token so an agent can search and call ~2,600 catalogued endpoints across ~40 providers (SEO, backlinks, social, enrichment, ads, scraping) priced per call, without signing up at each vendor. The proxy relays and injects auth server-side — it never models the upstream — so callers never hold keys. Built by Superdesign, hosted at treg.to, and self-hostable.

Two surfaces share that token. The public catalog is served on treg's own keys and metered against a team prepaid balance ($1 free on signup). Team-registered tools — paid API accounts, OAuth connections, vendor CLIs, `SKILL.md` bundles — always win over treg's key and are never metered. Agents search by task ("backlinks for a domain") rather than vendor, then see price, params, and an example response before calling.

## Key Features

- Task-first catalog search and pay-per-call billing with 0% markup; endpoints without a published price are refused, not given away
- Credential ladder: team-registered tool → team-stored secret → treg's own key billed to prepaid balance
- CLI (`treg login` / `catalog search` / `call` / `balance`) plus Claude Code plugin (`/plugin marketplace add superdesigndev/treg`) and MCP install
- Team keys, skills, and CLIs callable by every teammate's agent without the credential leaving the server
- Vendor PRs welcome to list additional tools

## Links

- [GitHub](https://github.com/superdesigndev/treg)
- [Hosted registry](https://treg.to/)
- [Original Tweet](https://x.com/jasonzhou1993/status/2089916771671388232)

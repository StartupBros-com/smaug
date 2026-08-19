---
title: "Bringing MCP 2026-07-28 to Claude"
type: article
date_added: 2026-07-28
source: "https://claude.com/blog/bringing-mcp-2026-07-28-to-claude"
author: "Anthropic"
tags: [mcp, anthropic, claude, protocol, oauth, serverless, agents, extensions]
via: "Twitter bookmark from @ClaudeDevs"
---

Anthropic's July 28, 2026 product post on **MCP 2026-07-28**, the fifth Model Context Protocol spec and the largest change since launch. The protocol drops its bidirectional stateful session model for a **stateless request/response core**, so servers can run on serverless and edge HTTP without session affinity. Official capabilities now ship as versioned extensions rather than core-protocol changes, and authorization is aligned with production OAuth 2.0 / OIDC so enterprise IdPs (Entra, Okta) work without workarounds. Support is rolling out across Claude products. MCP SDKs had surpassed **400M monthly downloads** (4x in 2026); Claude's connectors directory lists **950+** servers.

## Spec changes

- **Stateless core.** Request/response instead of a long-lived bidirectional session. Makes MCP a first-class HTTP workload (Netlify: "no session management to work around") and is the piece that lets remote servers scale like ordinary web services.
- **Standardized extensions.** [MCP Apps](https://modelcontextprotocol.io/extensions/apps/overview) (interactive UIs in the conversation) and [Tasks](https://modelcontextprotocol.io/extensions/tasks/overview) (long-running work) graduate under a versioned extensions framework so new capabilities do not fork the core.
- **Auth hardening.** Production OAuth 2.0 + OIDC, aimed at Entra/Okta-class enterprise identity instead of custom MCP auth.

Full spec write-up: [MCP 2026-07-28 release announcement](https://blog.modelcontextprotocol.io/posts/2026-07-28/). Spec: [modelcontextprotocol.io/specification/2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/).

## What Claude is shipping around it

- **MCP Apps** — servers render interactive UI inline in the chat.
- **Enterprise-managed auth** — admins provision a connector once via the IdP; users inherit access on first login.
- **Connector observability** — published directory connectors get a dashboard for adoption, errors, latency, and per-product usage.
- **MCP tunnels (research preview)** — Claude reaches MCP servers on a private network with no public endpoint, inbound firewall hole, or origin IP allowlist.

## Ecosystem quotes (from the post)

- **Figma (Josh Clemm):** stateless architecture scales their MCP server as more builders drop generated output onto the canvas; Apps, Tasks, and enterprise-managed auth keep design and code in one flow.
- **Intuit (Chris Kasten):** spec support so agentic experiences can connect at enterprise scale for ~100M consumers and businesses.
- **Netlify (Sean Roberts):** stateless core makes MCP a first-class HTTP workload; Apps-in-extensions is the scalability/capability step.
- **PostHog (Paul D'Ambra):** easier to scale their own service and to add analytics on customers' MCP servers (which tools are used, which are missing).
- **Xero (Andrew Goodman):** less protocol complexity to manage, faster feature shipping.
- **Zoom (Ross Mayfield):** easier to deploy/scale MCP servers that bring Zoom meeting intelligence into Claude on standard HTTP infrastructure.

## Links

- [Article](https://claude.com/blog/bringing-mcp-2026-07-28-to-claude)
- [MCP 2026-07-28 spec](https://modelcontextprotocol.io/specification/2026-07-28/)
- [Official spec announcement](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
- [Original tweet](https://x.com/ClaudeDevs/status/2082164248697069935)

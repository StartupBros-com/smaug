---
title: "Give any website a WebMCP interface"
type: article
date_added: 2026-08-06
source: "https://blog.cloudflare.com/webmcp/?utm_campaign=cf_blog&utm_content=20260806&utm_medium=organic_social&utm_source=twitter"
author: "Will Rowe"
tags: [cloudflare, webmcp, browser-agents, mcp, edge-computing, c2pa]
via: "Twitter bookmark from @Cloudflare"
---

Cloudflare’s developer preview of WebMCP lets a zone operator append a same-origin bridge module to HTML responses at Cloudflare’s edge. The origin application does not need a new API or deployment: in compatible browsers, the bridge detects `document.modelContext` and uses the emerging WebMCP interface to register the tools that the operator has enabled.

Static tool packs can define operations directly, while dynamic packs retrieve a site’s existing MCP operations. Tool execution takes place in the visitor’s browser and proxied requests use that visitor’s live site session, rather than handing an agent a separate server-side credential. This keeps the site owner in charge of whether to opt in and which capabilities an agent may invoke, while agents operate on the publisher’s actual website instead of bypassing it with a side channel.

The initial release supports a C2PA Content Credentials pack and tools advertised by a site’s MCP server. Browsers without WebMCP support simply do not load the bridge, leaving the page’s normal behavior intact. Cloudflare positions the feature as a way to make ordinary and single-page sites agent-accessible while preserving human control, traffic, and origin ownership.

## Key Takeaways

- WebMCP is an experimental browser interface expected in Chrome 146; Cloudflare exposes it as a developer preview.
- Cloudflare changes the delivered HTML at the edge, so an existing site can participate without origin modifications.
- Operators choose the tool packs and individual operations available to browser agents.
- Static packs define tools directly; dynamic packs surface operations from the site’s own MCP server.
- Calls execute in the visitor’s browser using the visitor’s authenticated site session.
- The C2PA pack can inspect local metadata, but does not validate signatures and reports `signatureVerified: false`.

## Links

- [Article](https://blog.cloudflare.com/webmcp/?utm_campaign=cf_blog&utm_content=20260806&utm_medium=organic_social&utm_source=twitter)
- [Original Tweet](https://x.com/Cloudflare/status/2085357766885982635)

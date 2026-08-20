---
title: "BrowserTools MCP"
type: tool
date_added: 2025-03-19
source: "https://github.com/AgentDeskAI/browser-tools-mcp"
tags: [mcp, browser, debugging, cursor, chrome, typescript]
via: "Twitter bookmark from @tedx_ai"
---

BrowserTools MCP gives AI coding agents visibility into the Chrome session a developer is already using. It pairs an MCP server with a DevTools extension to expose console output, network traffic, screenshots, page information, browser storage, and Lighthouse-style audits to Cursor and other MCP-compatible clients.

Its real-session model differs from automation-first browser servers: it observes the logged-in page already open in Chrome rather than requiring a separate browser profile and recreated authentication state. The linked discussion provides a Windows-focused setup guide for resolving a compatibility issue introduced by a newer Cursor release.

## Key Features

- Streams console logs, uncaught errors, network requests, and failed HTTP responses from inspected tabs
- Captures screenshots and reports selected elements, page context, and connection status
- Runs Lighthouse accessibility, performance, SEO, and best-practices audits
- Keeps telemetry separated by tab for every Chrome tab with DevTools open
- Uses structured MCP output schemas and marks read-only tools for safer client approval flows
- Connects through a Chrome DevTools extension rather than a remote-debugging session on the default profile

## Setup Notes

The project requires Node 22.19 or newer and configuration of the MCP server command. Installation also requires loading the repository's `chrome-extension` directory as an unpacked Chrome extension. On Windows, MCP clients that cannot resolve `npx` can invoke it via `cmd /c`.

## Links

- [GitHub](https://github.com/AgentDeskAI/browser-tools-mcp)
- [Windows setup discussion](https://github.com/AgentDeskAI/browser-tools-mcp/discussions/102)
- [Original Tweet](https://x.com/tedx_ai/status/1902262388776431797)
- [Quoted setup guide tweet](https://x.com/ceo_on_bus/status/1901979488113828127)

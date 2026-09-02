---
title: "fli"
type: tool
date_added: 2026-03-28
source: "https://github.com/punitarani/fli"
tags: [flights, google-flights, mcp, python, api, travel]
via: "Twitter bookmark from @tom_doerr"
---

Python library and MCP server providing programmatic access to Google Flights data via reverse-engineered direct API calls — no scraping, no browser automation. Exposes two MCP tools (`search_flights`, `search_dates`) and a CLI.

## Key Features

- Direct API access via reverse engineering (no HTML parsing or Selenium)
- MCP server with STDIO and HTTP (streamable) transport modes
- CLI interface for quick flight searches
- Flexible filters: cabin class, stops, airlines, departure time windows, passenger count
- Date range search to find cheapest travel dates across flexible windows
- Built-in rate limiting, automatic retries, and input validation

## Installation

```bash
pipx install flights

# MCP server (STDIO)
fli-mcp

# MCP server (HTTP at http://127.0.0.1:8000/mcp/)
fli-mcp-http
```

## Claude Desktop Config

```json
{
  "mcpServers": {
    "fli": {
      "command": "/Users/<user>/.local/bin/fli-mcp"
    }
  }
}
```

## MCP Tools

| Tool | Description |
|------|-------------|
| `search_flights` | Search flights on a specific date with detailed filters |
| `search_dates` | Find cheapest travel dates across a flexible date range |

## Links

- [GitHub](https://github.com/punitarani/fli)
- [Original Tweet](https://x.com/tom_doerr/status/2037766104722890982)

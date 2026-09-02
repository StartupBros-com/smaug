---
title: "tradingview-mcp"
type: tool
date_added: 2026-04-02
source: "https://github.com/tradesdontlie/tradingview-mcp"
tags: [trading, mcp, claude-code, pine-script, tradingview, chrome-devtools]
via: "Twitter bookmark from @Axel_bitblaze69"
---

MCP server that bridges Claude Code to a locally running TradingView Desktop application via Chrome DevTools Protocol (CDP). Enables AI-assisted chart analysis, Pine Script development, and workflow automation — all running on localhost with no data leaving the machine.

The mechanism: TradingView Desktop runs on Electron (Chromium), which has a built-in debug interface (CDP) that's off by default. Enabling one launch flag opens the door; the MCP server connects through it. Claude can then read live chart state (OHLC, indicators, drawings, strategy results) and write/compile/debug Pine Script in a tight feedback loop.

## Key Features

- Read current symbol, timeframe, OHLC, volume, and up to 500 historical bars
- Read all indicator values, Pine Script drawings, data window values, order book depth, strategy tester results
- Can read protected indicator values (levels, tables, annotations) already rendered on screen
- Pine Script workflow: describe → write → inject → compile → read errors → fix → recompile, automatically
- Chart navigation: change symbols, timeframes, zoom, add/remove indicators
- Draw trend lines, horizontal lines, rectangles, text annotations
- Create and manage price alerts
- Multi-pane layouts (2x2, 3x1, etc.)
- CLI access (`tv` command) alongside MCP tools
- Requires a valid TradingView subscription; does not bypass any paywall

## Links

- [GitHub](https://github.com/tradesdontlie/tradingview-mcp)
- [Original Tweet](https://x.com/Axel_bitblaze69/status/2039712499503964298)

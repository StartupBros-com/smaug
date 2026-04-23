---
title: "Polymarket Agents"
type: tool
date_added: 2026-04-21
source: "https://github.com/Polymarket/agents"
tags: [polymarket, prediction-markets, ai-agents, trading, python]
via: "Twitter bookmark from @zostaff"
---

Developer framework and set of utilities for building AI agents that trade autonomously on Polymarket, the decentralized prediction market platform. Includes integrations with the Polymarket API, local and remote RAG support for sourcing relevant news and data, LLM prompt engineering utilities, and a CLI for executing trades programmatically. The bookmarking context involves a user claiming to run 8 sentiment-based detectors on sports contracts, arbitraging the gap between market odds and model-predicted odds derived from crowd emotion signals.

## Key Features

- Integration with Polymarket Gamma and DEX APIs for market data and order execution
- ChromaDB vector store for RAG over news and external data sources
- Modular connector architecture (Gamma, Polymarket, Objects) for extending data sources
- CLI interface for querying markets, fetching news, and placing trades
- Docker support for remote deployment
- Pydantic data models for trades, markets, and events

## Links

- [GitHub](https://github.com/Polymarket/agents)
- [Original Tweet](https://x.com/zostaff/status/2046382885805154401)

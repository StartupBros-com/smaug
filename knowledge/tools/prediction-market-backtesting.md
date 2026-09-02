---
title: "prediction-market-backtesting"
type: tool
date_added: 2026-04-21
source: "https://github.com/evan-kolberg/prediction-market-backtesting"
tags: [polymarket, kalshi, backtesting, trading, prediction-markets, algotrading]
via: "Twitter bookmark from @recogard"
---

A backtesting framework for prediction market strategies on Polymarket and Kalshi, built on top of NautilusTrader with custom exchange adapters. Allows traders to test strategies against real historical data (using the 1.1 billion trade Polymarket dataset) without risking money. Built by a CS student, 724 stars. Written in Python/Jupyter Notebook with Rust internals via NautilusTrader.

## Key Features

- Custom Polymarket and Kalshi adapters on top of NautilusTrader (v1.225.0)
- Comprehensive charting: equity curves, P&L ticks, drawdown, Sharpe ratio, monthly returns, cumulative brier advantage
- EXPERIMENT objects for structured backtest runners
- Joint portfolio multi-replay runners for testing across multiple markets simultaneously
- Statistical optimizers including Tree-structured Parzen Estimator via Optuna
- IPython notebook support for interactive analysis
- Telonex vendor support for data sourcing (v3)
- Works with the 107GB Polymarket dataset (1.1 billion records) from SII-WANGZJ/Polymarket_data

## Links

- [GitHub](https://github.com/evan-kolberg/prediction-market-backtesting)
- [Original Tweet](https://x.com/recogard/status/2046707901704585452)

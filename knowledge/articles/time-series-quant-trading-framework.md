---
title: "Time-series framework for systematic trading"
type: article
date_added: 2026-05-24
source: "https://x.com/i/article/2056345613717942272"
author: "Roan"
tags: [quantitative finance, time series, algorithmic trading, risk management]
via: "Twitter bookmark from @RohOnChain"
---

This long-form guide presents time-series analysis as a way to form probabilistic expectations for markets, not a way to predict each realized price. It separates filtering, smoothing, and forecasting, then recommends modeling stationary return series instead of raw price levels to reduce spurious-regression risk.

The implementation framework combines ARIMA for directional return forecasts with GARCH for conditional volatility and position sizing. It emphasizes rolling walk-forward testing, stable estimation regimes, and external data or regime detection as safeguards against structural changes that are invisible in price history. The article's headline promise should not be read as evidence that any model can win every trade.

## Key Takeaways

- Test for unit roots with Augmented Dickey-Fuller before applying predictive models; price levels often require transformation.
- Use returns or log returns rather than raw prices when seeking a more stationary modeling target.
- Use ARIMA-family models for serial dependence and GARCH to estimate changing volatility for risk-scaled positions.
- Evaluate signals with walk-forward windows so every forecast is generated only from data available at that time.
- Monitor underlying drivers and alternative data because regime shifts can invalidate relationships learned from historical price series.

## Links

- [Article](https://x.com/i/article/2056345613717942272)
- [Original Tweet](https://x.com/RohOnChain/status/2058633692667670735)
- [Quoted Tweet](https://x.com/RohOnChain/status/2056753978042712565)

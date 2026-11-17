---
title: "price-check"
type: tool
date_added: 2026-09-27
source: "https://github.com/vivek-v-rao/price-check"
tags: [finance, market-data, python, data-quality]
via: "Twitter bookmark from @VivekVRao1"
---

price-check (xprice_check.py) is a Python script that compares daily adjusted OHLC price data from multiple providers and reports where they disagree. It is meant as a data-quality companion to backtesting programs: detect discrepancies first, then decide which source or consensus series to trust. It does not silently repair or overwrite provider data.

## Key Features

- Built-in providers: Yahoo Finance (via yfinance) and Tiingo EOD (free API token), plus any number of local CSV files via --provider-file
- Multiple symbols per run, symbol files, and a cross-symbol summary of mismatches and maximum relative discrepancy
- Absolute and relative tolerances (defaults 1 cent and 0.01%) so only meaningful differences are reported
- --out-dir saves normalized per-provider CSVs, an outer-joined all-providers file, and discrepancy CSVs
- Optional median or mean consensus series; data-quality checks for duplicate dates, nonpositive prices and impossible OHLC ordering

## Links

- [GitHub](https://github.com/vivek-v-rao/price-check)
- [Original Tweet](https://x.com/VivekVRao1/status/2104387216093106678)

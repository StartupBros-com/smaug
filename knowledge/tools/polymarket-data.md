---
title: "Polymarket_data"
type: tool
date_added: 2026-04-21
source: "https://github.com/SII-WANGZJ/Polymarket_data"
tags: [polymarket, prediction-markets, dataset, trading, data-analysis, research]
via: "Twitter bookmark from @recogard"
---

A comprehensive 107GB dataset of 1.1 billion Polymarket trading records across 268K+ markets, from Polymarket's inception to early 2026. Created by researchers from Shanghai Innovation Institute, Westlake University, Shanghai Jiao Tong University, Harbin Institute of Technology, and Fudan University. Also includes a full toolkit to fetch, process, and analyze data directly from the Polygon blockchain. Available on HuggingFace. 510 stars on GitHub.

## Key Features

- 1.1 billion trading records in 5 analysis-ready Parquet files (107GB total)
- Fetches data directly from Polygon blockchain — no third-party dependencies
- Includes fields not available from third parties: block_number, maker/taker/protocol fees, order_hash
- Real-time continuous mode: syncs new data every 2 seconds with resume support
- 5 dataset files: raw OrderFilled events, processed trades, market metadata, unified YES-perspective quant data, user behavior data
- Dataset available on HuggingFace: SII-WANGZJ/Polymarket_data
- Pairs with evan-kolberg/prediction-market-backtesting for strategy testing

## Links

- [GitHub](https://github.com/SII-WANGZJ/Polymarket_data)
- [Original Tweet](https://x.com/recogard/status/2046707901704585452)

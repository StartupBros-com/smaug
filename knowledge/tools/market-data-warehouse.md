---
title: "market-data-warehouse"
type: tool
date_added: 2026-04-03
source: "https://github.com/joemccann/market-data-warehouse"
tags: [market-data, interactive-brokers, parquet, duckdb, finance]
via: "Twitter bookmark from @joemccann"
---

market-data-warehouse is an open-source workflow for extracting historical cross-asset data available through an Interactive Brokers account, storing it locally as Parquet, and querying the resulting dataset with DuckDB. It presents a lightweight local alternative for research workflows that need reusable historical market data rather than repeated API requests.

## Key Features

- **Interactive Brokers Data Access**: Extracts historical cross-asset data available to account holders
- **Parquet Storage**: Writes data into a portable, analytics-friendly columnar format
- **DuckDB Queries**: Supports local SQL analysis over the collected data
- **Local Warehouse Pattern**: Separates data acquisition from downstream research and analysis

## Links

- [GitHub](https://github.com/joemccann/market-data-warehouse)
- [Original Tweet](https://x.com/joemccann/status/2040096571363099088)

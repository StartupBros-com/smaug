---
title: "nothing-ever-happens"
type: tool
date_added: 2026-04-12
source: "https://github.com/sterlingcrispin/nothing-ever-happens"
tags: [polymarket, prediction-markets, trading-bot, python, async]
via: "Twitter bookmark from @sterlingcrispin"
---

Async Python bot for Polymarket that systematically buys "No" on all standalone non-sports yes/no markets. The strategy exploits the empirical observation that 73.4% of all Polymarket markets resolve as "No" — betting against predictions happening is statistically favorable over time. The bot scans markets, finds NO entries below a configured price cap, tracks open positions, and exposes a live dashboard. Includes a safety model requiring three explicit env vars to enable live trading, defaulting to paper trading otherwise.

## Key Features

- Buys "No" on every non-sports Polymarket market automatically
- Safety model: live trading requires `BOT_MODE=live`, `LIVE_TRADING_ENABLED=true`, and `DRY_RUN=false` to all be set
- Live dashboard for monitoring open positions and activity
- Persists recovery state when order transmission is enabled
- Heroku-compatible deployment with shell helper scripts
- Paper exchange client for dry-run testing
- Scripts for DB inspection, wallet history, and log parsing
- 693 GitHub stars (filed 2026-04-12)

## Links

- [GitHub](https://github.com/sterlingcrispin/nothing-ever-happens)
- [Original Tweet](https://x.com/sterlingcrispin/status/2043398710013595857)

---
title: "Stonkfly - Fly Connectome Simulation That Trades Bitcoin via Coinbase AgentKit"
type: tool
date_added: 2026-11-10
source: "https://github.com/nftechie/stonkfly"
tags: [neuroscience, trading, coinbase, agentkit, python]
via: "Twitter bookmark from @wormuth"
---

Stonkfly turns public Coinbase BTC-USDC prices into an RGB chart and feeds it as visual input to a retained fruit-fly connectome (MaleCNS v1.0: 166,700 neurons, 25.6 million connections). A fixed neural readout proposes buy, sell or hold, and a custom Coinbase AgentKit ActionProvider enforces limits and places spot orders. The README is explicit that profitable learning has not been demonstrated.

## Key Features

- Chart pixels stimulate 3,335 brightness inputs and 811 R8 color inputs; positive P&L stimulates 15 PAM11 dopamine cells, negative P&L stimulates two PPL101 aversive cells (engineered reinforcement, not modeled pain)
- Experimental memory rule changes existing KC-to-MBON connections
- Default is paper trading with real public data and a $100 simulated balance, no key needed
- Live mode: dedicated Coinbase portfolio capped at 100 USDC, View+Trade ECDSA key with no Transfer, $10 max order, 24 attempts/day, no shorts or leverage, $20 drawdown stops new orders
- Python 3.11 plus C++17 compiler; 16 GB RAM recommended

## Links

- [GitHub](https://github.com/nftechie/stonkfly)
- [Original Tweet](https://x.com/wormuth/status/2098012108394836201)

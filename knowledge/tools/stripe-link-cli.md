---
title: "stripe/link-cli"
type: tool
date_added: 2026-04-29
source: "https://github.com/stripe/link-cli"
tags: [stripe, payments, agents, mcp, cli, link-wallet]
via: "Twitter bookmark from @0thernet"
---

Link CLI is Stripe's open-source tool that lets AI agents make purchases on a user's behalf using single-use virtual payment credentials sourced from a Link wallet. Agents never see or store actual card details; instead they create a "spend request" that triggers a push notification for the human to approve before any funds move. Supports both virtual card credentials and the Machine Payments Protocol (MPP / HTTP 402) for merchants that implement it natively.

## Key Features

- Creates one-time-use virtual card credentials tied to a specific merchant and amount
- User approval required per transaction via Link mobile app or email
- Runs as a local MCP server so Claude Code and other agents can call it as a tool
- Test mode with `--test` flag for development without real payment methods
- Supports the Machine Payments Protocol (`link-cli mpp pay`) for MPP-compatible merchants
- `--client-name` flag identifies the connecting agent in the Link approval UI

## Links

- [GitHub](https://github.com/stripe/link-cli)
- [Original Tweet](https://x.com/0thernet/status/2049557031304954351)

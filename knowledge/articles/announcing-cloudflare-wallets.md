---
title: "Announcing Cloudflare Wallets: The programmable wallet for the agentic Internet"
type: article
date_added: 2026-08-04
source: "https://blog.cloudflare.com/wallets/"
author: "Cloudflare"
tags: [cloudflare, wallets, x402, agents, payments, stablecoins, agentic-commerce, identity]
via: "Twitter bookmark from @Cloudflare"
---

Cloudflare's launch post for Wallets: stablecoin accounts meant to give AI agents a native way to pay for APIs and content, paired with an optional human-readable identity. The problem they name is that agents still bounce off human login pages, payment methods, and API-key dashboards, so they kick registration back to a person and never compare many APIs. Handles can be claimed now at cloudflare.pay; paying for APIs and content is "soon."

Two wallet types. **Account Wallets** belong to the human Cloudflare account holder — fund, withdraw, and delegate. **Virtual Wallets** are for agents, operated via API keys, with owner-set guardrails: allowance, allowlist, and max transaction size. The point of the caps is to let an agent try dozens of cheap x402 endpoints (a few cents each) without a $1,000 blast radius. Policies can also look like "every employee gets $100/week of inference"; overages require a human override on the Account Wallet.

Payments ride Cloudflare's Monetization Gateway and the [x402](https://www.x402.org/) protocol, which attaches micropayments to HTTP requests. Onramp/offramp starts in supported geographies, with self-funding via stablecoins for eligible users.

Identity is the other half. A handle such as `research.example.cloudflare.pay` lets a merchant see that an agent is a delegate of a known account, which is what makes free trials and signup credits possible when one human can spin up dozens of agents. Declaring identity is optional; unidentified agents are treated more like VPN traffic — not automatically untrustworthy, but they have more to prove. The handle is framed as a human-readable name for a Web Bot Auth keypair, analogous to DNS for IPs, not a new verification schema. Cloudflare says it will adopt richer identity schemas as the x402 Foundation defines them.

Together with Monetization Gateway (sellers get paid without traditional payment infra), Wallets (buyers pay headlessly via agents) and optional identity, the pitch is a headless marketplace for the internet.

## Key Takeaways

- Agents cannot natively sign up or pay today; Wallets are meant to close that loop with stablecoins + x402
- Account Wallet (human) delegates spend to Virtual Wallets (agents) with allowance, allowlist, and tx caps
- Caps are what make unsupervised API exploration safe — $10 is enough when trials cost cents
- Optional `*.cloudflare.pay` handles give agents a stable, human-readable identity for trials and attribution
- Claim a handle now; actual pay/receive is still forthcoming

## Links

- [Article](https://blog.cloudflare.com/wallets/)
- [cloudflare.pay](https://cloudflare.pay/)
- [Monetization Gateway](https://blog.cloudflare.com/monetization-gateway/)
- [x402](https://www.x402.org/)
- [Original Tweet](https://x.com/Cloudflare/status/2084648084131242402)

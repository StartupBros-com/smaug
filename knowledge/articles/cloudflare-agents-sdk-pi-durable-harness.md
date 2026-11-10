---
title: "Run the Pi Durable harness on Cloudflare with the Agents SDK"
type: article
date_added: 2026-10-04
source: "https://developers.cloudflare.com/changelog/post/2026-10-02-pi-harness/"
author: "Cloudflare"
tags: [cloudflare, agents, durable-objects, pi, agent-harness]
via: "Twitter bookmark from @CFchangelog"
---

Cloudflare's changelog (Oct 2, 2026) announces a beta PiHarness in the Agents SDK. It runs the Pi Durable harness durably inside an Agent or Durable Object, so long-running agents can survive crashes and network failures instead of losing their loop state.

## Key Takeaways

- New `PiHarness` (beta) in the Cloudflare Agents SDK wraps the Pi agent harness.
- Runs inside an Agent or Durable Object, giving persistence and resumability for long-running agent work.
- Targets resilience: agents continue through crashes and network issues.

## Links

- [Article](https://developers.cloudflare.com/changelog/post/2026-10-02-pi-harness/)
- [Original Tweet](https://x.com/CFchangelog/status/2106814296567238727)

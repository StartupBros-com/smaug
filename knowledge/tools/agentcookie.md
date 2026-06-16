---
title: "agentcookie"
type: tool
date_added: 2026-06-10
source: "https://github.com/mvanhorn/agentcookie"
tags: [ai-agents, macos, authentication, cookies, tailscale, golang]
via: "Twitter bookmark from @mvanhorn"
---

Go tool that keeps browser sessions and CLI auth tokens in continuous one-way sync from a primary Mac to a secondary (headless) agent machine, encrypted over Tailscale, with no cloud middleman. Solves the problem of having to re-authenticate on the agent machine every time a session changes on the daily-driver Mac.

Works by watching Chrome's Cookies SQLite file (via fsnotify) plus a per-CLI secrets bus, encrypting the diff with AES-256-GCM using pairing-derived per-peer keys, and replicating over the Tailscale tailnet's WireGuard channel. On the receiving machine, an always-on LaunchAgent fan-outs cookies to: Chrome's Cookies SQLite (re-encrypted for the sink Keychain), a plaintext sidecar at `~/.agentcookie/cookies-plain.db`, and per-CLI adapter directories (e.g., `secrets/<cli>/secrets.env`). Supports blocklist filters on both sides.

## Key Features

- Continuous, unattended one-way replication — no human interaction needed when sessions change
- Handles macOS Keychain protections and Chrome App-Bound Encryption
- Three delivery surfaces: Chrome Cookies SQLite, plaintext sidecar, per-CLI secrets env files
- Per-CLI adapter fan-out for tools like instacart, airbnb, ebay, Polymarket CLIs, etc.
- Peer-to-peer via Tailscale — no cloud storage, no third-party middleman
- AES-256-GCM encryption with replay defense and blocklist filtering

## Links

- [GitHub](https://github.com/mvanhorn/agentcookie)
- [Original Tweet](https://x.com/mvanhorn/status/2064771612579393568)

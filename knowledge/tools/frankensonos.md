---
title: "frankensonos"
type: tool
date_added: 2026-10-07
source: "https://github.com/Dicklesworthstone/frankensonos"
tags: [rust, sonos, home-automation, mcp, tailscale, spotify, upnp]
via: "Twitter bookmark from @doodlestein"
---

FrankenSonos is Jeffrey Emanuel's memory-safe Rust controller and daemon for Sonos speakers on your own LAN. It talks directly to the speakers over SSDP, UPnP/SOAP (port 1400) and GENA events, supports both legacy S1 and current S2 households, and exposes a CLI, an HTTP API and an MCP server so AI agents can run the house, including from off-LAN over a Tailscale tailnet. It was started out of frustration with the unreliable official Sonos software (pre-release, before 0.1.0).

## Key Features

- Discovery and topology for S1 and S2 households at once; rooms resolve by name, alias, `here` or `all`
- One control path for CLI, HTTP and MCP with house policy: per-room volume caps, quiet hours, per-client tool allowlists, action log and undo
- A Spotify-library DJ that plays from your likes and saves, follows mood and time of day, and plays classical works whole
- `fsonos serve` plus `fsonos tailscale setup` for HTTPS access via Tailscale Serve (no Funnel, speakers never leave the LAN)
- Pure Rust 2024 with `#![forbid(unsafe_code)]`, tested against a simulated Sonos house (`fsonos-sim`)

## Links

- [GitHub](https://github.com/Dicklesworthstone/frankensonos)
- [Original Tweet](https://x.com/doodlestein/status/2107642724010569928)

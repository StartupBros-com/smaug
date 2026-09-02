---
title: "tailscale-mullvad-toggle"
type: tool
date_added: 2026-07-11
source: "https://github.com/0xSero/tailscale-mullvad-toggle"
tags: [tailscale, mullvad, vpn, macos, homelab, python]
via: "Twitter bookmark from @0xSero"
---

A dependency-free macOS utility for selecting and toggling Mullvad exit nodes available through a Tailscale tailnet. It provides a local CLI plus an optional SwiftBar menu-bar control, avoiding a separate cloud service or VPS.

## Key Features

- Discovers available Mullvad exit nodes from `tailscale status --json` and selects an online match by country or city.
- Provides `ts-mullvad` commands to list nodes, enable or disable an exit node, inspect status, and diagnose setup problems.
- Includes a SwiftBar plugin for a macOS menu-bar toggle and a Mullvad public-egress verification command.
- Uses the local Tailscale CLI and only contacts Mullvad's public checker when verification is requested.

## Links

- [GitHub](https://github.com/0xSero/tailscale-mullvad-toggle)
- [Original Tweet](https://x.com/0xSero/status/2076021208169033938)

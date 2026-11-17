---
title: "jev-permission-gate"
type: tool
date_added: 2026-10-02
source: "https://github.com/madisonrickert/jev-permission-gate"
tags: [claude-code, permissions, auto-mode, mods, typesafe, jev]
via: "Twitter bookmark from @MadisonJRickert"
---

A Claude Code mod that puts TypeSafe's Jev in front of the built-in auto mode classifier. For each tool call, Jev answers eight yes/no questions in a single request and the mod allows, denies, or defers to the built-in classifier. Claimed to be about 2x faster on the calls it decides (median 164ms vs 329ms). Built right after Anthropic released native mods for customizing Claude Code.

## Key Features

- Allow when the call plausibly serves the request (>=50%) and every risk check is <=10%; deny when risky and unrequested; defer everything else
- Shell-aware blocklist prefilter that can only cause denial, never allowance, and keeps secrets local
- Reported 1 unsafe allow in 3,664 risky calls on a sealed 5,322-call test split
- Falls back to the built-in classifier on missing key, errors, or Jev taking over 1.5s

## Links

- [GitHub](https://github.com/madisonrickert/jev-permission-gate)
- [Original Tweet](https://x.com/MadisonJRickert/status/2106183706989953339)

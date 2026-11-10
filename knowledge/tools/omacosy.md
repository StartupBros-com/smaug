---
title: "omacosy - omarchy-style tiling desktop environment for macOS"
type: tool
date_added: 2026-08-25
source: "https://github.com/paulsp94/omacosy"
tags: [macos, tiling-window-manager, dotfiles, swift, aerospace]
via: "Twitter bookmark from @thekitze"
---

omacosy (omakase + macOS + cosy) is a pre-1.0 desktop environment for macOS 26 (Tahoe) on Apple Silicon, modeled on omarchy. It gives macOS tiling window management with a real Super key and Hyprland's dwindle layout, a themed status bar written for it, focus-follows-mouse, trackpad workspace swipes, and a Mission-Control-style workspace overview with live previews. The whole environment idles at about 157MB of memory. @thekitze had his coding agent set it up and said it takes about two hours to get used to, after which navigation is very fast.

## Key Features

- Tiling window management via AeroSpace (default) or OmniWM (`./install.sh --omniwm`)
- Single-process status bar with popups, sliders and screen dimming
- Focus follows mouse, focused-window border rings, trackpad workspace swipes
- One theme switch covering everything down to the wallpaper
- Idempotent installer: Homebrew, `brew bundle`, compiles the helper binaries (Swift and C), symlinks configs with backups
- Optional yazi file manager (`--yazi`, `--yazi-full`)
- Caveat: built on one MacBook Pro plus one external display; the permission (TCC) setup is real work

## Links

- [GitHub](https://github.com/paulsp94/omacosy)
- [Original Tweet](https://x.com/thekitze/status/2092280343449722973)

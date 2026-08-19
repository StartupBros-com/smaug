---
title: "Omasnap"
type: tool
date_added: 2026-08-17
source: "https://github.com/tobi/omasnap"
tags: [wayland, hyprland, omarchy, screenshot, annotation, cpp]
via: "Twitter bookmark from @dingyi"
---

Omasnap is Tobi Lütke's native Wayland screenshot and annotation overlay for Omarchy and Hyprland. It captures the focused monitor *before* mapping an exclusive layer-shell surface, so the editor never appears in its own screenshot, then keeps annotations as movable, resizable vector layers and exports the monitor's native pixels even on fractionally scaled displays. Shipping as the screenshot tool for Omarchy Quattro (4.0). ~208 stars, C++ / Qt6.

Capture modes: freeform region, window (clean surface via Wayland image-copy — a failed native capture stays in the picker rather than cropping the desktop), and full monitor. Annotation tools include arrows, straight lines, smoothed freehand, translucent highlighter, rectangles, numbered markers, editable Neucha text, and secure redaction (opaque or randomized non-spatial mosaic). Per-layer colors, undo/redo, OCR-region capture via Tesseract, mesh-gradient backdrops, drop shadows, and a pin-to-desktop always-on-top layer launched from the same binary.

Crash-resistant working snapshots live under `/run/user/<UID>/omasnap/` and become `~/Pictures/Screenshots` plus a `wl-copy` PNG on save. Runtime depends on `hyprctl`, `grim`, `wl-clipboard`, and Tesseract. Omarchy install is `./install-omarchy` (builds to `~/.local`, does not rewrite Hyprland config). Bind `PRINT` / `F12` / `ALT+SHIFT+4` as toggles. Generic Wayland is not claimed for 1.0 — Hyprland discovery is required.

## Key Features

- Region, window, and full-monitor capture without the overlay appearing in the shot
- Vector annotation layers with recrop, undo/redo, OCR, and mosaic redaction
- Native-pixel export on integer and fractional scale
- Pin a finished capture as an always-on-top layer on every workspace
- Crash-resistant working snapshots plus `wl-copy` clipboard PNG

## Links

- [GitHub](https://github.com/tobi/omasnap)
- [Original Tweet](https://x.com/tobi/status/2086997507855331434)

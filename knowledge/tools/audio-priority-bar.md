---
title: "Audio Priority Bar"
type: tool
date_added: 2026-08-18
source: "https://github.com/tobi/AudioPriorityBar"
tags: [macos, audio, menubar, swift]
via: "Twitter bookmark from @petergyang"
---

A native macOS menu bar app by Tobi Lütke that automatically manages audio device priorities. You rank speakers, headphones, and microphones; when a higher-priority device connects, it becomes active. Peter Yang recommended it after hitting the macOS habit of stealing the default mic and speaker every time AirPods connect or disconnect.

Swift 5.9 / SwiftUI + CoreAudio, macOS 13+, MIT, ~801 stars. Build with `./build.sh` (output at `dist/AudioPriorityBar.app`) or grab a release binary. Priorities persist in UserDefaults keyed by device UID so they survive reconnects.

## Key Features

- Priority-based auto-switching: highest-ranked connected device becomes active
- Separate speaker and headphone priority lists, plus a Custom mode that disables auto-switch
- Remembers every device ever seen, with "last seen" timestamps in Edit mode
- Per-category ignore, forget-device, drag-to-reorder, and volume slider / scroll-wheel control
- Menu bar shows current mode icon and volume percentage

## Links

- [GitHub](https://github.com/tobi/AudioPriorityBar)
- [Original Tweet](https://x.com/petergyang/status/2089775372212801706)

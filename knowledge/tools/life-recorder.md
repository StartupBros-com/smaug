---
title: "life-recorder"
type: tool
date_added: 2026-11-10
source: "https://github.com/browser-use/life-recorder"
tags: [ios, whisper, voice, agents, context, open-source]
via: "Twitter bookmark from @mamagnus00"
---

Life Recorder is a native iPhone recorder paired with a private Mac receiver. The phone records roughly one-minute AAC chunks in the background, uploads them to the Mac, and local Whisper (whisper.cpp) transcribes them into one continuous Markdown file (`life.md`) with hourly markers. The goal is to give AI agents an always-on transcript of the user's day as context. Audio is deleted after durable receipt and successful transcription, and no cloud backend or paid transcription is needed.

## Key Features

- Background iPhone recording that survives screen lock and app switching (needs one app open after reboot or force-quit)
- Upload queue with retries; pending audio stays on the phone until the Mac acknowledges it
- Mac receiver with random bearer token, self-signed TLS certificate and certificate pinning, LAN-only by default (private VPN for cellular)
- Local Whisper transcription with cleanup of stage-direction markers and repetitive hallucinated noise
- Bundled `SKILL.md` Codex procedure that builds, installs and launches the app on a connected iPhone
- MIT licensed, Swift plus Python receiver; requires Xcode, ffmpeg, whisper-cli and a GGML model

## Links

- [GitHub](https://github.com/browser-use/life-recorder)
- [Original Tweet](https://x.com/mamagnus00/status/2098291984792227915)

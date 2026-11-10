---
title: "ffmpeg-skill"
type: tool
date_added: 2026-11-10
source: "https://github.com/kajisho5/ffmpeg-skill"
tags: [ffmpeg, video-editing, mcp, claude-code, skills]
via: "Twitter bookmark from @kebura_P"
---

A local video editor for coding agents exposing FFmpeg tools with a machine-readable contract and an MCP server, for Claude Code, Cursor and Codex. It handles cuts, captions, reframing (e.g. 9:16), loudness and platform exports with no cloud or API keys. The v0.12.0 update grew the toolset (21 to 28 tools per the tweet) and added pre-flight capability checks, export verification, safeguards against overwriting source files, and multi-audio-track selection.

## Key Features

- Crop, rotate/flip, reverse, stabilize, Ken Burns zoom, image-sequence-to-video, chroma key, overlay compositing
- Verifies each export succeeded and cleans up failed output
- Tests block fallback to raw FFmpeg commands; docs/code drift is caught by tests
- GitHub Releases auto-generated from version tags

## Links

- [GitHub](https://github.com/kajisho5/ffmpeg-skill)
- [Original Tweet](https://x.com/kebura_P/status/2096964158994755604)

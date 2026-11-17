---
title: "video-use - edit videos with coding agents"
type: tool
date_added: 2026-11-10
source: "https://github.com/browser-use/video-use"
tags: [video-editing, claude-code, agent-skill]
via: "Twitter bookmark from @ENowoslawski"
---

Open-source skill from browser-use that lets Claude Code (or Codex and similar agents) edit raw footage into a finished video via chat. The LLM reads video through an ElevenLabs Scribe word-level transcript packed into a compact text file plus on-demand filmstrip/waveform composites, rather than watching frames.

## Key Features

- Cuts filler words and dead space, auto color grades, 30ms audio fades at cuts
- Burns subtitles and generates animation overlays via HyperFrames, Remotion, Manim, or PIL in parallel sub-agents
- Self-evaluates rendered output at every cut boundary and re-renders (max 3 times)
- Persists session memory in project.md between sessions

## Links

- [GitHub](https://github.com/browser-use/video-use)
- [Original Tweet](https://x.com/ENowoslawski/status/2096065744190538204)

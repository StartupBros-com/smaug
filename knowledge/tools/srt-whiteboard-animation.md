---
title: "srt-whiteboard-animation"
type: tool
date_added: 2026-08-18
source: "https://github.com/geeklee/srt-whiteboard-animation"
tags: [whiteboard-animation, srt, video, python, openai-codex, opencv, skill]
via: "Twitter bookmark from @huangyun_122"
---

Python Codex skill that turns an SRT subtitle file into a warm-paper whiteboard video. Scenes are split to ~25–35 seconds, each element is drawn in narrative order (not screen coordinates), and a streaming renderer lays ink linework first, then color, before exporting MP4. Aimed at explainer, course, and short-form voiceover clips that should look hand-drawn rather than templated.

The workflow is confirmation-gated so you do not burn render time on unapproved storyboards: parse SRT → confirm storyboard → generate line art → annotate regions in a local preview HTML → render per scene → merge. Visual spec is a `#F5EBD7` paper background, dark-gray sketch lines, and sparse conceptual color. MIT licensed; ships `agents/openai.yaml` for Codex plus a `prepare_env.py` isolated venv.

## Key Features

- SRT-driven scene split with a one-idea-per-shot storyboard before any pixels are drawn
- `annotation.json` binds each region to `sequence`, `subtitle`, `narrativeRole`, reveal direction, and `protectedRegions` so overlapping objects do not leak early
- Streaming ink→color stroke renderer (`render_stream_whiteboard.py`) with optional skeleton ink paths
- Browser preview desk (`assets/preview.html`) to edit regions, order, timing, and subtitle links
- Per-scene MP4 plus `merge_scenes.py` for multi-shot finals
- Codex-ready skill layout (`SKILL.md`, `agents/openai.yaml`) so the same pipeline can be driven from an agent loop

## Links

- [GitHub](https://github.com/geeklee/srt-whiteboard-animation)
- [Original Tweet](https://x.com/huangyun_122/status/2089765144658329911)

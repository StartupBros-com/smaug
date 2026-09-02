---
title: "ManimGL"
type: tool
date_added: 2026-08-11
source: "https://github.com/3b1b/manim"
tags: [animation, python, math, visualization, 3blue1brown, manimgl, ffmpeg]
via: "Twitter bookmark from @AISuperDomain"
---

3Blue1Brown's original Python engine for precise programmatic animations, built to produce the formula morphs, geometric constructions, function graphs, and camera moves in Grant Sanderson's videos. The repo is ManimGL (PyPI package `manimgl`, not `manim`) and remains the authoring stack behind 3b1b/videos; a 2020 community fork (ManimCommunity/manim) exists as a more stable, better-tested on-ramp. 91k+ stars.

The engine gives code-level control of text, LaTeX, shapes, camera, and animation sequencing, which is why it keeps showing up as the backend for AI-generated explainer and teaching videos rather than just a 3Blue1Brown souvenir. Requires Python 3.10+, FFmpeg, OpenGL, and optionally LaTeX (Pango headers on Linux).

## Key Features

- Scene-based Python API for math and algorithm visualization
- LaTeX-quality typesetting plus programmatic camera and animation timelines
- Same stack used for 3Blue1Brown's published videos (`3b1b/videos`)
- Distinct from the community edition — install this tree with `pip install manimgl`, never the `manim` package name
- Still maintained; useful for batch-generated teaching clips and AI-driven explainer pipelines

## Quick Start

```sh
pip install manimgl
manimgl
```

From a clone, `pip install -e .` then `manimgl example_scenes.py OpeningManimExample`.

## Links

- [GitHub](https://github.com/3b1b/manim)
- [Docs](https://3b1b.github.io/manim/)
- [Community edition](https://github.com/ManimCommunity/manim)
- [3Blue1Brown video source](https://github.com/3b1b/videos)
- [Original Tweet](https://x.com/AISuperDomain/status/2087330798756364509)

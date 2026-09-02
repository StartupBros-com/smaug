---
title: "Understanding Gradients"
type: article
date_added: 2026-04-01
source: "https://jakub.kr/work/gradients"
author: "Jakub Krehel"
tags: [css, gradients, color-models, oklab, web-design]
via: "Twitter bookmark from @jakubkrehel"
---

Jakub Krehel's guide treats gradients as a set of controllable visual primitives rather than a decorative afterthought. It explains linear, radial, and conic gradient geometry; color stops, hard transitions, repetition, and color hints; and the use of multiple layers and blend modes to build richer shapes, including a four-layer diamond effect.

A central point is that a gradient's result depends on its color interpolation space. sRGB produces the familiar web-standard blend but is limited to its gamut. Oklab interpolates perceived lightness more evenly and supports Display-P3 colors, while OKLCH models hue as a circular dimension that can create smoother and more vivid transitions but may introduce hues that were not explicitly selected. CSS permits an explicit interpolation space, and Tailwind 4 defaults to Oklab while offering alternatives.

## Key Takeaways

- Choose linear, radial, or conic gradients based on the geometry of the effect, then control their direction, shape, position, and stops deliberately.
- Use color hints to move a transition midpoint without inserting another color stop, and use hard stops where a crisp boundary is the desired visual result.
- Layer gradients and combine them with blend modes to compose complex visuals from simple CSS declarations.
- Pick sRGB, Oklab, or OKLCH intentionally because the interpolation model changes both smoothness and the intermediate colors a viewer sees.
- Animate a gradient's position, angle, or size when possible instead of rebuilding the whole gradient on every frame.

## Links

- [Article](https://jakub.kr/work/gradients)
- [Original Tweet](https://x.com/jakubkrehel/status/2039374523145806193)

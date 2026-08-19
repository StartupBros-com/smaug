---
title: "PPT Master"
type: tool
date_added: 2026-08-12
source: "https://github.com/hugohe3/ppt-master"
tags: [powerpoint, presentations, agent-skills, pptx, open-source]
via: "Twitter bookmark from @AISuperDomain"
---

PPT Master (hugohe3/ppt-master, ~48k stars, MIT) is an agent skill that turns a topic or source document (PDF, DOCX, webpage, pasted text) into a native, still-editable `.pptx` — real DrawingML shapes, connectors with adjustment handles, data-backed charts and tables, slide-master/layout inheritance, transitions, animations, and speaker-note narration — instead of a stack of flattened slide images. Hugo He, a finance professional who reviews decks for a living, built it so AI-generated slides remain objects you can keep editing in PowerPoint.

It runs locally inside whatever agent-capable tool you already use (Claude Code, GPT, Gemini, Kimi, etc.). Apart from model API calls, data stays on the machine; there is no PPT-Master subscription or platform lock-in. The recommended stack is a large-context model (Kimi K3 or Claude, ~1M tokens) plus an image model (`gpt-image-2` or Gemini Flash Image). The skill owns the workflow; the model sets the quality ceiling. Do not expect a finished deck in one shot — the point of native output is that you finish it.

Pipelines beyond greenfield generation: distill reusable brand/style/layout templates from reference decks, fill an existing `.pptx` while preserving its design, and add native motion and narration to a finished deck. Default export writes SVG-derived DrawingML; `--native-charts-and-tables` swaps eligible groups for PowerPoint Chart/Table objects with Edit Data. Formulas compile LaTeX to editable OMML for PowerPoint 2010+; Keynote/WPS/LibreOffice formula editability is out of contract. SmartArt is a deliberate omission.

## Key Features

- Native PowerPoint object model (shapes, charts, tables, masters, transitions, animations, notes, narration)
- Local agent-skill workflow — Claude, GPT, Gemini, Kimi; no SaaS lock-in
- PDF / DOCX / webpage / pasted-text sources, plus fill-an-existing-`.pptx` and custom template reuse
- Optional speaker-note TTS and video export
- Quick one-pass mode (skips strategist confirmation) vs. default design-spec confirmation loop

## Links

- [GitHub](https://github.com/hugohe3/ppt-master)
- [Live Demo](https://hugohe3.github.io/ppt-master/)
- [Original Tweet](https://x.com/AISuperDomain/status/2087690072741347606)

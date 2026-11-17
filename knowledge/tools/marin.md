---
title: "Marin - open framework for foundation model research and development"
type: tool
date_added: 2026-08-21
source: "https://github.com/marin-community/marin"
tags: [llm, pretraining, open-source, foundation-models, moe]
via: "Twitter bookmark from @percyliang"
---

Marin is an open-source research program, software platform, and community for developing foundation models. It covers the whole LLM pipeline (data curation, transformation, filtering, tokenization, pretraining, posttraining, evaluation) and commits to openly documenting every step, including failed experiments. Percy Liang bookmarked it via a thread about the Marin team's "hero run": a large mixture-of-experts pretraining run (the linked W&B report is titled 535B-A23B, 18T tokens) with public data composition, a live W&B dashboard, and the GitHub tracking issue.

## Key Features

- Current focus: pretraining from scratch and posttraining a 500B+ total-parameter MoE model (about 5e24 FLOPs) aimed at scientific and research tasks
- Delphi scaling suite: open recipe, checkpoints (Hugging Face), and scaling law covering 3e18 to 1e23 FLOPs
- Reproducible training-mixture pipelines from public Nemotron-CC, StarCoderData, and ProofPile 2
- Public data-composition views, such as the Harrier K40 overview of 23.11T tokens across forty semantic domains and five quality buckets
- Also used as a library for audio-text, DNA, and protein models

## Links

- [GitHub](https://github.com/marin-community/marin)
- [Hero run issue](https://github.com/marin-community/marin/issues/8435)
- [Original Tweet](https://x.com/percyliang/status/2090918070617624811)

---
title: "Interpreting Pangram"
type: article
date_added: 2026-09-14
source: "https://lucumr.pocoo.org/2026/9/14/interpreting-pangram/"
author: "Armin Ronacher"
tags: [ai-detection, writing, llm]
via: "Twitter bookmark from @mitsuhiko"
---

Armin Ronacher digs into how the Pangram AI-text detector works, prompted by David Sacks complaining that a longform tweet of his was rated 100% AI. He has an LLM recreate that tweet and tests how easily edits move it in and out of detection.

## Key Takeaways

- Pangram is a trained model that labels text segments as human, AI, or mixed, and builds training data by having LLMs rewrite or partially edit known human text.
- Pangram claims a 0.0041% false-positive rate and 0.34% missed-AI rate.
- Even light LLM-assisted writing tends to get flagged as fully AI, which explains why authors feel the verdicts are wrong.
- Ronacher generated a Sacks-style tweet with Opus 5 from a structured prompt to see what the detector picks up.

## Links

- [Article](https://lucumr.pocoo.org/2026/9/14/interpreting-pangram/)
- [Original Tweet](https://x.com/mitsuhiko/status/2099600259324211259)

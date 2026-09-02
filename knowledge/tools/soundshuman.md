---
title: "soundshuman"
type: tool
date_added: 2026-08-07
source: "https://github.com/aashaexo/soundshuman"
tags: [writing, ai-writing, claude-code, linting]
via: "Twitter bookmark from @aashatwt"
---

soundshuman combines several open-source anti-slop projects into an inspectable writing skill and a zero-dependency repository linter. It is designed to make AI-assisted prose more specific and human without trying to evade AI detectors: the rules, scores, proposed changes, and resulting Git diffs remain reviewable.

The project packages a markdown skill for agent harnesses, a JSON rule pack, and a Node CLI. Its workflow blends voice calibration from a user's own samples with draft, audit, and rewrite passes, while the CLI can score text, explain flagged patterns by line, apply conservative mechanical fixes, scan a documentation tree, and enforce a CI threshold.

## Key Features

- A Claude-compatible `SKILL.md` covering 41 content, language, style, filler, and rhetoric patterns.
- A versioned JSON rule pack with vocabulary tiers, phrase suggestions, weighted regex detectors, and notes.
- A zero-dependency Node 18+ CLI for scoring, explaining, fixing, scanning, and CI gating prose.
- Statistical signals including burstiness, type-token ratio, and trigram repetition, paired with explainable 0–100 scores.
- Git-oriented review workflow, pre-commit support, and explicit no-fabrication and false-positive guardrails.

## Links

- [GitHub](https://github.com/aashaexo/soundshuman)
- [Original Tweet](https://x.com/aashatwt/status/2085813972784296259)

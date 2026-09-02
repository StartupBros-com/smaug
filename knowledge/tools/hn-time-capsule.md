---
title: "hn-time-capsule"
type: tool
date_added: 2025-12-10
source: "https://github.com/karpathy/hn-time-capsule"
tags: [python, large-language-models, Hacker-News, retrospective-analysis]
via: "Twitter bookmark from @karpathy"
---

HN Time Capsule is a Python pipeline for revisiting Hacker News front pages from exactly ten years earlier and using an LLM to assess how articles and discussion comments aged. It fetches the historical front page, original article content, and comment tree; prompts a model to compare claims against subsequent events; extracts grades; and renders browsable HTML reports.

The project makes a repeatable retrospective-analysis workflow concrete. Its example run analyzed the 930 Hacker News front-page discussions from December 2015, surfacing both unusually prescient comments and comments that proved inaccurate with a decade of evidence.

## Key Features

- Fetches a historical Hacker News front page, its linked articles, and complete discussion trees.
- Generates hindsight-analysis prompts that compare past claims with later outcomes.
- Runs a model-analysis stage and parses per-commenter grades from the responses.
- Aggregates grades and renders HTML summaries, date pages, and a Hall of Fame.
- Supports an end-to-end pipeline or individually runnable fetch, prompt, analyze, parse, and render stages.

## Links

- [GitHub](https://github.com/karpathy/hn-time-capsule)
- [Project results](https://karpathy.ai/hncapsule/)
- [Original Tweet](https://x.com/karpathy/status/1998803709468487877)

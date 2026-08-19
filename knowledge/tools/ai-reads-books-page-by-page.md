---
title: "AI-reads-books-page-by-page"
type: tool
date_added: 2026-08-11
source: "https://github.com/echohive42/AI-reads-books-page-by-page"
tags: [pdf, knowledge-extraction, summarization, openai, python, books]
via: "Twitter bookmark from @Ryrenz"
---

echohive42/AI-reads-books-page-by-page is a Python script (~2.7k stars) that reads a PDF one page at a time, extracts knowledge points into a persistent JSON knowledge base, and writes interval plus final Markdown summaries. Dumping a several-hundred-page book into a single context window usually produces a vague overview; this is the blunt workaround — process what fits, accumulate, resume.

Each page goes to an OpenAI-compatible model as a structured `PageContent` object (`has_content` plus a list of knowledge points). TOC/index-style pages are skipped. Every `ANALYSIS_INTERVAL` pages it generates a progressive summary with a (possibly different) `ANALYSIS_MODEL`, then a full summary at the end. `load_or_create_knowledge_base()` lets a crashed or cancelled run continue from the existing JSON. `TEST_PAGES` limits a dry run to the first N pages.

## Key Features

- Page-by-page extraction into `book_analysis/knowledge_bases/` JSON
- Interval summaries and a final Markdown summary under `book_analysis/summaries/`
- Separate models for page extraction vs analysis
- Resume from an existing knowledge base after interrupt
- Smart skip of TOC / index / empty pages
- Color-coded terminal progress

## Links

- [GitHub](https://github.com/echohive42/AI-reads-books-page-by-page)
- [Original Tweet](https://x.com/Ryrenz/status/2087103057469284518)

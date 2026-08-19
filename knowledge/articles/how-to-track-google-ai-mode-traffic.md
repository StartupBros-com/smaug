---
title: "How to Track Google AI Mode Traffic in Search Console"
type: article
date_added: 2026-08-18
source: "https://suganthan.com/blog/how-to-track-ai-mode-traffic/"
author: "Suganthan Mohanadasan"
tags: [seo, gsc, ai-mode, ai-overviews, search-console, geo, classifiers]
via: "Twitter bookmark from @suganthan"
---

Google launched Search Generative AI performance reports in Search Console on 3 June 2026 — official impression views for AI Overviews and AI Mode — but the reports are UI-only and omit the queries. Suganthan re-checked his own property on 11 August 2026: neither the Search Analytics API nor the BigQuery bulk export exposes the generative-AI slice. The queries leak anyway. Fragments of real AI conversations ("yes go on", follow-ups, whole pasted prompts) appear as ordinary rows in the classic performance report. John Mueller confirmed on LinkedIn that this data had always been in that report.

This post is the practical extraction guide plus a free classifier. A longer sixteen-month data dump lives in a companion piece.

## Four methods

| Method | Strong at | Limits |
| --- | --- | --- |
| Glenn Gabe: Search Analytics API → Analytics Edge in Excel, then Claude flags likely AI Mode rows | Full inventory inside an Excel workflow | Per-run sorting, pattern-based |
| Jean-Christophe Chouinard: custom regex in the report Query filter (prompt verbs, greetings, "yes go on", continue/more) | Instant, free, in-UI | English pattern list |
| Amin Foroutan: Advanced GSC Visualizer Chrome extension | Charting/exploration without exports | No AI Mode-specific filter |
| Suganthan's GSC MCP (`genai_conversation_queries`) and BigQuery MCP | Automation, scale, a label on every row; data stays between you and Google | Needs an MCP client |

Regex, word-count (32+ words), and per-run sorting miss rank-tracker probes, agent-harness prompts, pasted strings, and non-English or code-mixed replies (Tamil, Hinglish). Chouinard's own 12 Jan 2026 case study is the standing caveat: AI Mode clicks are tracked, but the queries behind them are almost exclusively anonymized.

## The detector and free tool

Rules own the exact classes (reply artefacts, tracker probes, agent-harness prompts). A fine-tuned **xlm-roberta-base** (100-language pretrain, labelled GSC exhaust plus synthetic rows across 8 languages including Tanglish/Hinglish, validated on ~120k queries, quantized on a scale-to-zero Cloudflare container) owns the fuzzy boundary between conversational, long-tail, and ordinary.

The [conversation-query classifier](https://suganthan.com/free-seo-tools/conversation-query-classifier/) is that detector without MCP setup. Drop GSC or BigQuery CSVs (files stack; 100k unique queries/run). Deterministic hits never leave the browser; the rest is classified in memory and not stored. Seven buckets: full conversational, short reply artefacts, follow-up pivots, tracker probes, agent-harness prompts, pasted strings, ordinary searches. Optionally drop the Generative AI report's `Pages.csv` to flag queries whose page appears in AI features (needs a page/url column on the query export). Export is uncapped.

## Limitations

- Treat every extract as an **undercount**. Rare strings are anonymized; conversations are rare. On his BigQuery export, **57.7% of impressions** sat in the anonymized pool over 59 days (measured 11 Aug 2026).
- Browser tab must stay open for a big run. Over 100k unique queries is a batch job via his agency (Snippet Digital).
- Tool is free, no signup, beta; he asks people not to hammer the server.

## Links

- [Article](https://suganthan.com/blog/how-to-track-ai-mode-traffic/)
- [Classifier tool](https://suganthan.com/free-seo-tools/conversation-query-classifier/)
- [Companion: AI conversations leaking into GSC](https://suganthan.com/blog/ai-mode-queries-search-console/)
- [GSC MCP](https://suganthan.com/blog/google-search-console-mcp-server/)
- [Original Tweet](https://x.com/suganthan/status/2089645813119238365)

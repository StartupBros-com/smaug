---
title: "ChatGPT Already Knows Who's In The Running Before It Searches"
type: article
date_added: 2026-08-12
source: "https://suganthan.com/blog/chatgpt-decides-before-it-searches/"
author: "Suganthan Mohanadasan"
tags: [geo, chatgpt, ai-search, brand, seo, citations, fanouts]
via: "Twitter bookmark from @randfish"
---

Suganthan Mohanadasan (Snippet Digital / Keyword Insights) reads ChatGPT's own `search_queries` JSON from the browser response and argues that most GEO citation-analysis is measuring the wrong game. On a "best AI note taking app" prompt that named no brands, the model's first query already listed Granola, Notion AI, Otter, Fireflies, Fathom, Mem, and Limitless — then fanned out with one `site:` probe per name. The fan-out is not a search for candidates; it is ChatGPT walking a shortlist it already had.

An 17 Aug 2026 update walks back a stronger title claim: brands that never appear in the model's own queries can still reach the final answer, including the recommendation. Search does change the result. The mechanism that survives is that being *in the running* is decided before any page is fetched.

## Four ideas

1. ChatGPT rewrites the user question into its own searches, readable in DevTools under `search_queries` (renamed from `search_model_queries` in early Aug 2026).
2. In 21 of 27 conversations, that first query contained brands the user never typed. It happens whenever the model has to supply the products itself — not only on "best X" prompts. A complaint like "our meeting notes are a mess" became `Granola official pricing` before a fetch. Displacement queries ("alternatives to Zendesk") nominate whoever the model already knows.
3. Brands named in a query ChatGPT wrote were mentioned in the answer 68.9% of the time (119 brands) versus 2.1% for brands that were only fetched (515) — about 33×. Eighty-six recommendations happened with no fetch of that brand's site in the conversation at all.
4. Being named is the entry ticket, not the win. Across 57 conversations / 3,554 retrieved pages, 110 were cited (3.1%). Position inside the domain group dominates (1st 5.2%, 6th+ 0.3%). Two pages from one domain is the sweet spot (6.2%); six or more collapses to 1.7%. Relevance puts you in the top ~10% of the claim pool; it is the single best match only 20% of the time.

Settled categories keep stable shortlists across reruns; contested ones wobble or flip from vendors to review magazines. Personalisation is real (meal-kit and insurance queries injected UAE/Dubai entities he never named). All percentages are one Plus account in Dubai, 24–25 Jul 2026 — directional, not a measurement.

## What to do

- Run the category question five times and read the first query. Names that appear every run are the real competitive set; never appearing is a brand-equity problem, not a schema/`llms.txt`/page-speed problem (the server is never contacted).
- Absent from the query: digital PR, reviews, roundups, analyst coverage — the work that writes the brand into training data.
- Present in the query: one tightly matched page per intent, the claim-bearing sentence early in plain HTML, numbers not in images or JS. Track fetched-vs-cited, not retrieval counts. One brand in his data was fetched 66 times and never cited.
- He built [FanoutFox](https://fanoutfox.com/), a free on-device Chrome extension, to surface fan-out queries and a converts (retrieved vs cited) column.

## Key Takeaways

- ChatGPT injects unmentioned brand names into its first search query; the subsequent `site:` fan-out is a walk of that list
- Named-in-query brands get mentioned ~33× more often than merely-retrieved brands; a mention does not require a crawl
- Citation after retrieval is brutal (~3%) and is mostly position + not competing with your own near-duplicate pages
- If you are absent from five first-query runs, technical GEO will not move you; if you are present, fix conversion not awareness
- Re-check monthly — the JSON key name and fan-out width already moved in early August 2026

## Links

- [Article](https://suganthan.com/blog/chatgpt-decides-before-it-searches/)
- [How ChatGPT Actually Picks Sources (part 1)](https://suganthan.com/blog/how-chatgpt-picks-sources/)
- [How ChatGPT Picks Sources, part 2](https://suganthan.com/blog/how-chatgpt-picks-sources-part-2/)
- [FanoutFox](https://fanoutfox.com/)
- [Original Tweet](https://x.com/randfish/status/2087612290610970640)

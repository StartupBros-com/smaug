---
title: "Easy SEO win: 6 step Claude automation that got us 202 AI mentions in 48 Hours"
type: article
date_added: 2026-08-11
source: "https://x.com/i/article/2087141630855811072"
author: "Borja"
tags: [seo, gsc, claude-code, programmatic-seo, geo, ai-mentions, query-gap]
via: "Twitter bookmark from @borjafat"
---

Borja's Distribb playbook for turning Google Search Console into a content queue. Instead of picking topics from a blank page, Claude reads the queries Google already associates with the domain, checks which of those queries lack a dedicated page, and publishes a focused URL. They call it the low-hanging-fruit GSC method; the article is both the six-step loop and a pitch for the Claude SEO skill at distribb.io.

The proof cases: a page targeting "automated SEO monitoring" ranked after three days (the existing page was about automated SEO software; GSC showed 273 impressions for the monitoring query, Ahrefs ~800 monthly searches at KD 4). A second page for "best AI tools for backlink outreach" reached position 3 after nine days and logged 106 Search Console impressions. Distribb attributes 202 AI mentions in 48 hours on one published page, and 44,000 AI mentions over three months, to this class of loop.

## The six steps

1. **Connect Search Console to Claude Code** with read-only access. Pull queries, impressions, and clicks per page over the last three months so a single odd day does not dominate.
2. **Run one prompt:** "Find keywords where we rank, but we don't have any specific content targeting this keyword." Return each query beside the URL currently collecting the impressions — that pairing is the signal that Google likes the domain but has no precise page to rank.
3. **Find the query gap.** Open the ranking page and compare its topic to the query. Same site, different intent, is the gap that deserves its own URL.
4. **Check demand and cannibalisation** before writing. Volume in Ahrefs or DataForSEO, SERP intent, and a check that no existing page already answers the exact query. Skip if a new page would compete with one you already have.
5. **Publish one page for the exact query.** Query in title, URL, and opening answer. Distribb published "Best Automated SEO Monitoring Tools" on August 8 rather than stretching the software page.
6. **Check the result and repeat.** Search the query after index, filter GSC by the new URL, record position and impressions, and feed that back before the next content batch.

## Key Takeaways

- The queue is queries Google already trusts your domain for, not a brainstormed topic list
- Pair each query with the URL currently getting the impressions; that pairing is the gap
- Validate volume, intent, and cannibalisation before Claude writes anything
- One focused page per query beats stretching an adjacent page
- Close the loop: position and impressions on the new URL go back into the next batch
- This is onboarding content for Distribb's paid Claude SEO skill; the method itself does not require the product

## Links

- [Article](https://x.com/i/article/2087141630855811072)
- [Original Tweet](https://x.com/borjafat/status/2087155605211320808)
- [Distribb](https://distribb.io/)

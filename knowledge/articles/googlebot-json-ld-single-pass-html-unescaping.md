---
title: "Google Changes JSON-LD Extraction: Googlebot Now Does One Pass of HTML Unescaping"
type: article
date_added: 2026-08-21
source: "https://www.seroundtable.com/json-ld-extraction-googlebot-41921.html"
author: "Barry Schwartz"
tags: [seo, structured-data, json-ld, googlebot]
via: "Twitter bookmark from @rustybrick"
---

Google changed how Googlebot extracts JSON-LD structured data. It now enforces standard JSON and applies only a single pass of HTML unescaping, instead of auto-correcting double-escaped HTML text. Google announced the change on LinkedIn, and Gary Illyes added that proper JSON escaping is well defined in RFC 8259, section 7.

## Key Takeaways

- Double-escaped entities such as `&amp;amp;` or `&amp;#10004;` will no longer be unrolled by Googlebot.
- If you use JSON-LD for structured data, switch to standard JSON escapes or Unicode hexadecimal escapes (for example `&`).
- Google uses JSON-LD script tags (`application/ld+json`) to understand entity details such as product prices, review stars, recipe ingredients and FAQs, which feed Rich Results.
- Sites that relied on the old forgiving parser could see structured data render incorrectly or lose rich results.

## Links

- [Article](https://www.seroundtable.com/json-ld-extraction-googlebot-41921.html)
- [Original Tweet](https://x.com/rustybrick/status/2090759568615690323)

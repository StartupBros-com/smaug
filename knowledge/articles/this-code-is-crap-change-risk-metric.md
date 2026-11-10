---
title: "This Code is CRAP"
type: article
date_added: 2026-09-15
source: "https://testing.googleblog.com/2011/02/this-code-is-crap.html"
author: "Alberto Savoia (Google Testing Blog)"
tags: [testing, code-quality, metrics]
via: "Twitter bookmark from @schteppe"
---

Google Testing Blog post (Feb 2011) introducing the CRAP (Change Risk Anti-Patterns) metric, which combines cyclomatic complexity with test coverage to score how risky a method is to change. Formula per the tweet: CRAP(m) = comp(m)^2 * (1 - cov(m))^3 + comp(m).

## Key Takeaways

- Complex and poorly covered methods score high; well-tested or simple ones stay near their complexity value.
- Coverage alone gives false positives (tests for trivial getters); CRAP flags genuinely dangerous code.
- Reference implementation was the Java tool Crap4j with an Eclipse plugin (later unmaintained).
- Only the post's title and comments were retrievable; details above come from those and the tweet.

## Links

- [Article](https://testing.googleblog.com/2011/02/this-code-is-crap.html)
- [Original Tweet](https://x.com/schteppe/status/2099728101366276474)

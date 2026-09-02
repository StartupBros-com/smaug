---
title: "/tracking-schema: never ship anything without great analytics"
type: article
date_added: 2026-08-05
source: "https://x.com/i/article/2080608386186715136"
author: "George from prodmgmt.world"
tags: [product-management, analytics, event-tracking, product-analytics]
via: "Twitter bookmark from @nurijanian"
---

This article argues that product analytics should begin with the questions a team needs to answer after launch, rather than a catalogue of every visible click or screen. A useful event schema traces each event and property to a specific metric, allowing teams to measure conversions and outcomes instead of accumulating unusable activity data.

The proposed workflow starts by listing measurement questions, mapping only the actions relevant to them, defining event names, triggers, properties, and the question each serves, then testing whether the schema can calculate every desired result. Reviewing the schema with analytics before implementation is presented as a cheaper alternative to discovering missing identifiers, funnel markers, or sequence data after live traffic arrives.

## Key Takeaways

- Define success metrics and the questions they answer before deciding which UI events to instrument.
- Specify triggers and required properties alongside each event, then verify that they calculate the intended metrics.
- Remove tracking that serves no question; high event volume cannot compensate for missing contextual properties.
- Have analytics review the schema before development so measurement gaps do not surface after launch.

## Links

- [Article](https://x.com/i/article/2080608386186715136)
- [Original Tweet](https://x.com/nurijanian/status/2085018241496412361)

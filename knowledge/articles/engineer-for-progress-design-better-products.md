---
title: "Engineer for Progress: a simple skill to design better products"
type: article
date_added: 2026-08-07
source: "https://x.com/i/article/2085662634012229633"
author: "George from prodmgmt.world"
tags: [product-management, prototyping, experimentation, systems-thinking, ai-agents, scope]
via: "Twitter bookmark from @nurijanian"
---

George Nurijanian adapts Bob Moesta's *Learning to Build* into a product-design workflow intended to keep teams from solving visible symptoms while missing the system that creates them. The core reframing is to state a measurable function the system must maintain — for example, “new users reach first value in under 10 minutes” — instead of accepting “onboarding is broken” as the build brief.

The method works backward from that outcome to technology-neutral requirements, inputs, and only then build steps. It asks teams to identify which variables are under their control and which are environmental noise, then design a prototype that changes multiple controllable factors while exercising the extremes of the noise factors. The article recommends Taguchi orthogonal arrays as a compact alternative to full-factorial testing: an L9 layout tests four three-level factors in nine runs instead of 81.

It also makes scope an explicit design constraint. “Big hire” work must make the first use worthwhile, “little hire” work must bring someone back the next day, and remaining scope should be deferred with a stated reason. A fixed date, cost, or both then exposes the tradeoff rather than hiding it in a feature list.

## Key Takeaways

- Write an outcome as a system function with a measurable threshold before choosing a feature or technology.
- Work backward from the outcome through requirements and inputs so architecture serves the goal rather than becoming the goal.
- Separate controllable factors — such as defaults, retry counts, and model settings — from noise such as networks, hardware, and messy data.
- Test several factors under noisy conditions; the goal is to find where the function breaks, not merely which isolated A/B variant wins.
- Preserve the “big hire” and “little hire” scope, defer the rest explicitly, and use a date or budget to force the tradeoff.
- The author packages the sequence as an `engineer-for-progress` skill in AI PM OS so teams can apply one shared planning bar while agents draft the mechanical artifacts.

## Links

- [Article](https://x.com/i/article/2085662634012229633)
- [Original Tweet](https://x.com/nurijanian/status/2085773214698156414)

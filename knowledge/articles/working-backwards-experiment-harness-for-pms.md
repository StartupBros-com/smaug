---
title: "/working-backwards: first-class experiment harness for PMs"
type: article
date_added: 2026-08-11
source: "https://x.com/i/article/2075204076074409984"
author: "George (nurijanian)"
tags: [product-management, validation, working-backwards, experiments, pm-os, build-to-learn]
via: "Twitter bookmark from @nurijanian"
---

George's PM OS essay on what cheaper building does to validation. AI made prototypes an afternoon instead of a sprint, which does not make evidence obsolete — it makes evidence cheaper too. The trap is treating those as opposites and skipping the evidence step because the demo looks real. The new PM job is not "protect engineering from waste"; it is "turn cheap builds into clear evidence."

The old failure was a quarter spent on a feature nobody needed. The new one is sneakier: a PM or founder spins a working demo in Cursor, Claude Code, or Lovable, shares it, and the team starts reacting to the artifact instead of the assumption behind it. Shipping faster then means learning the wrong thing faster. Building is still one of the best ways to learn; the rule is to name what the build is supposed to prove before anyone starts.

## Build-to-learn is not build-to-ship

Build-to-ship is the thing you will support, instrument, and defend. Build-to-learn is the smallest artifact that can test one belief — ugly, manual, narrow, dead by Friday. AI makes both cheaper; they are not the same motion. If you cannot name the belief, the build is not validation. It is a vibe with a UI. Ten cheap builds pointed at fuzzy beliefs create more noise than one expensive build pointed at a clear one.

## Start with the belief, then the risk

Pull the feature out of roadmap fog into a sentence that can be wrong: "We believe that [specific buyer] will [do a concrete thing] because [reason], within [time]." "Build an AI weekly executive digest" is a label. "We believe mid-market operations leaders will pay an extra $15 per user per month for an AI-generated weekly executive digest because it saves them from manually preparing status reports" is a test.

Most roadmap beliefs carry one of four risks, and the risk decides the artifact:

- **Desirability** — do people want it
- **Feasibility** — can we technically or operationally make it work
- **Viability** — will someone pay, fund, approve, or support it
- **Usability** — can a person use it in real work

A clickable prototype is right for usability and a distraction for viability. Buyer calls, a price, an ROI model, and a budget-path question are the viability test. A landing-page click is weak evidence for enterprise adoption because it never passes procurement, security, legal, or a budget owner.

## The Build-to-Learn Brief

One page before Cursor: the belief in "we believe that" form; risk type; cheapest signal that can see that risk; whether the signal needs a build, a call, a benchmark, a concierge test, or no build; method and sample; timebox and cost; pass/fail threshold; data captured; next evidence rung if it passes. A good signal is early, cheap, attributable to one assumption, decisive (has a threshold), and suitable for the market.

Walked through on the digest: the risky belief is viability, not feasibility. First signal is five economic-buyer calls, a lightweight ROI calculator, two manually generated example digests, one budget-path question, and a threshold set before the calls (3 of 5 confirm the reporting work costs more than $2,000/month, say $15/user/month is plausible, and name the approver). Timebox: five business days, under $300, no production code. The failure it catches is buyers who love the digest but say it should be in the base product — "do not build this as a paid add-on yet" rather than discovering the pricing mistake after launch.

Pet ideas get the same brief. Most should die at the one-week signal stage. For PM leaders, a roadmap item without a Build-to-Learn Brief is not ready for scope — not because building is expensive, but because it is now cheap enough to create endless convincing artifacts without creating much evidence.

## Where AI changes the PM job

The hard part is judgment inside the brief: classify the risk, generate candidate signals, reject tests that lie in this market, set a threshold before evidence arrives. AI can take one belief plus segment, constraints, assets, and timebox and produce five candidate signals, including when a build is the wrong first move. The PM still owns the call. The structured version is `/work-backwards` inside PM OS at prodmgmt.world.

## Key Takeaways

- Cheaper building raises the validation bar; it does not retire it
- The unit of validation is the belief, not the feature
- Classify desirability / feasibility / viability / usability before picking the artifact
- Write a Build-to-Learn Brief (belief, risk, cheapest signal, threshold) before opening an IDE
- A convincing demo that tests the wrong assumption is the new failure mode
- Run more small tests, including ones that are calls or benchmarks with no product code
- `/working-backwards` is the skill George wants wired into every conversation, PRD, experiment, and idea

## Links

- [Article](https://x.com/i/article/2075204076074409984)
- [Original Tweet](https://x.com/nurijanian/status/2075204077965979888)
- [Commentary](https://x.com/nurijanian/status/2087192818599309758)
- [PM OS /work-backwards](https://prodmgmt.world/x/more-validation-now_100726)

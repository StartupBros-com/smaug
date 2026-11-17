---
title: "Fable 5.2 Advisor - Claude Code settings template"
type: article
date_added: 2026-11-15
source: "https://www.aitmpl.com/component/settings/model/fable-5-2-advisor"
author: "Claude Code Templates (aitmpl.com)"
tags: [claude-code, advisor, model-routing, settings]
via: "Twitter bookmark from @TiagerBao"
---

A Claude Code Templates settings component that configures Claude Fable 5.2 as an advisor the main model consults at decision points (before committing to an approach, on a recurring error, before declaring a task done), while a cheaper main model keeps executing. Install with `npx claude-code-templates@latest --setting model/fable-5-2-advisor`.

## Key Takeaways

- The advisor is billed only when called, so the strongest model need not run every turn.
- Three intended uses: sanity-check the plan before coding, re-diagnose after repeated errors, and review for missed issues before finishing.
- The tweet author cautions each advisor call adds cost; real savings depend on rework rate and total token use.

## Links

- [Template page](https://www.aitmpl.com/component/settings/model/fable-5-2-advisor)
- [Original Tweet](https://x.com/TiagerBao/status/2121440332516913216)

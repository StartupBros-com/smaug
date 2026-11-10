---
title: "Thermo-Nuclear Code Quality Review (Cursor skill)"
type: article
date_added: 2026-08-24
source: "https://www.skills.sh/cursor/plugins/thermo-nuclear-code-quality-review"
author: "Cursor (cursor/plugins)"
tags: [code-review, agent-skills, cursor, maintainability]
via: "Twitter bookmark from @vikingmute"
---

A skill from the cursor/plugins repo, listed on skills.sh, that runs an extremely strict maintainability review focused on abstraction quality, giant files and spaghetti-condition growth. It is triggered by phrases like "thermo-nuclear code quality review" or "especially harsh maintainability review". The skills.sh listing showed roughly 23.9k installs. Bookmarked via @vikingmute, who translated and summarized its rules and noted it found so many problems in an existing project that fixing them all was impractical.

## Key Takeaways

- Structural simplification first: look for refactors that make whole branches, helpers, modes or conditionals disappear.
- 1k-line red line: a PR must not push a file that was under 1000 lines past 1000; prefer splitting.
- Reject spaghetti growth: temporary ifs, special-case branches and one-off boolean flags added to unrelated flows are treated as design problems, not style problems.
- Watch for serial orchestration and non-atomic updates, which @vikingmute says account for many real review bugs.
- Best used on new projects or when you want to force large simplifications; on legacy code it surfaces more than you can fix.

## Links

- [Article](https://www.skills.sh/cursor/plugins/thermo-nuclear-code-quality-review)
- [Original Tweet](https://x.com/vikingmute/status/2092059170812108811)

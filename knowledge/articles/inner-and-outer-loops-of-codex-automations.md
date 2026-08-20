---
title: "The Inner and Outer Loops of Codex Automations"
type: article
date_added: 2026-06-17
source: "https://x.com/i/article/2067086994455601152"
author: "Gabriel Chua"
tags: [codex, automation, human-in-the-loop, context-management]
via: "Twitter bookmark from @gabrielchua"
---

The article proposes two feedback loops for agent automations such as drafting email replies. The goal is to prevent systems from repeatedly working from the same incomplete context and producing drafts that remain generically competent but miss a user's judgment.

The **inner loop** runs at task time. It determines whether work is needed, retrieves the smallest useful set of history, facts, constraints, relationships, decisions, and approved sources, then drafts a reversible result for review. For email, the recommended action is to create a draft rather than send it, while recording the draft, its sources, and the prompt and writing-guidance versions used to produce it.

The **outer loop** runs after review. It examines whether a draft was accepted unchanged, edited and sent, deleted, or left pending, then treats the difference between proposal and final result as evidence rather than an automatic instruction. Edits may indicate a missing source, an unsupported commitment to check, a stable writing preference, or human judgment that should not be encoded.

Approved lessons are stored in a simple, versioned guidance file that the inner loop reads on its next run. Because rare exceptions can mislead the system, the article recommends running this learning loop on a slower cadence—such as at the end of a day, after a threshold of reviews, or weekly—while the inner loop can run frequently. The same structure applies to reports, briefs, decks, and issue triage: retrieve context before acting, then preserve the useful context revealed by human review.

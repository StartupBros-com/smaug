---
title: "We Built Every Employee at Ramp Their Own AI Coworker"
type: article
date_added: 2026-04-12
source: "https://x.com/i/article/2042284478337269760"
author: "Seb Goddijn (Ramp)"
tags: [enterprise-ai, skills, memory, automation, workspace, ramp, glass, internal-tooling]
via: "Twitter bookmark from @eglyman"
---

Ramp built Glass — an internal AI productivity suite — after hitting 99% AI tool adoption company-wide but discovering most employees were stuck. The bottleneck wasn't model quality; it was the configuration tax: terminal windows, npm installs, MCP configs, and isolated setups with no way to share breakthroughs.

The core architectural philosophy: don't lower the ceiling for non-technical users, raise the floor for everyone. Glass is built around three principles: don't limit upside (preserve full capability, make complexity invisible), compound wins into organizational capability (one person's breakthrough becomes the team's baseline), and let the product do the enablement (nudges in the moment beat workshops).

## Key Features

- **Day-One Configuration:** Ships pre-configured on install via Okta SSO; all Ramp tools available with one-click setup — no manual MCP configuration required
- **Dojo (Skill Marketplace):** 350+ git-backed, versioned, code-reviewed skills shared company-wide; when one rep packages a Gong analysis workflow, the whole team gets that superpower overnight
- **Sensei:** AI guide within Dojo that recommends skills based on connected tools, role, and recent activity — new hires get the 5 most relevant skills surfaced on day one without browsing a 350-item catalog
- **Memory Synthesis Pipeline:** Builds full memory from authenticated connections on first open; runs a 24-hour synthesis/cleanup pipeline mining Slack, Notion, and Calendar to keep context current without requiring re-explanation
- **Scheduled Automations:** Glass turns any laptop into a server — schedule daily/weekly/cron automations that post results directly to Slack channels; Slack-native assistants can listen and respond in channels
- **Headless Mode:** Kick off long-running tasks, walk away, approve permission requests from phone, results waiting on return
- **Split-Pane Workspace:** Multiple chat sessions, documents, data files, and code visible simultaneously — workspace layout persists across sessions like a code editor

## Key Takeaways

- The people who got the most value from Glass weren't those who attended training sessions — they were the ones who installed a skill on day one and immediately got a result; the product teaches faster than any workshop
- Skills as git-backed, versioned markdown files is a deliberate choice: it enables team-level distribution, code review, and versioning of organizational knowledge
- Owning the AI infrastructure stack is framed as a competitive moat — internal AI productivity cannot be handed to a vendor without handing them the moat
- The internal Glass build directly informs Ramp's external product: problems solved for employees (memory architecture, skill distribution, usage-based feature surfacing) ship as validated patterns for finance team customers
- The split-pane workspace signals that AI-native work is multi-threaded, not single-conversation — real work requires holding multiple contexts simultaneously

## Links

- [Article](https://x.com/i/article/2042284478337269760)
- [Original Tweet](https://x.com/eglyman/status/2043362828178841860)
- [Article Source Tweet](https://x.com/sebgoddijn/status/2042285915435937816)

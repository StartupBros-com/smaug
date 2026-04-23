---
title: "Claude for Dummies (SMB Owners)"
type: article
date_added: 2026-04-11
source: "https://x.com/i/article/2038022950935519232"
author: "Charles Miller (BigDemoPrez)"
tags: [multi-agent, smb, claude, airtable, tailscale, operations, automation]
via: "Twitter bookmark from @RandBusiness"
---

Charles Miller, a demolition contractor and former McMaster-Carr Systems PM, built "Peggy" — a multi-agent Claude architecture running on a Mac Mini that handles Finance, Operations, Sales, and Personal EA functions for his construction business. The system is intentionally non-technical: it prioritizes existing databases and subscriptions over purpose-built infra.

The key design principle is a shared identity across all agents (same name, same rulebook, same CRM, same to-do list), which makes the system feel coherent rather than a pile of disconnected automations. Peggy has her own company email and interacts with the team like any other colleague.

## Key Features

- **Shared Identity Layer:** All agents operate as "Peggy Olson, Executive Assistant at Cooper Demolition" with shared memory (Airtable), a shared to-do list, and shared company CRM — ensures coherent tone and context across all agent interactions
- **Finance Agent:** Weekly WIP reports, 13-week cash flow model, AR aging and reconciliation, all delivered to the right inboxes before Monday without manual intervention
- **Operations Agent:** Scans email every 30 minutes, triages action items, sends a morning briefing, tracks compliance, change orders, project budgets, and directly interacts with project managers
- **Sales Agent:** CRM maintenance, bid/pipeline tracking, contact auto-capture, deal status monitoring, and top-of-funnel management
- **Hardware:** Mac Mini that never sleeps, accessed remotely via Tailscale; Airtable as the shared brain accessed by API
- **Primary Interface:** Claude Dispatch as a single chat session across all agents, with the ability to also email Peggy directly
- **Scheduling:** Claude Cowork for background scheduled tasks (non-technical alternative to Claude Code)
- **Onboarding Wizard:** Miller offers a .txt file drag-dropped into Claude Cowork that self-configures a similar system through a 25-question setup conversation

## Key Takeaways

- Shared agent identity and a single shared memory/CRM layer is what makes a multi-agent system feel coherent rather than a collection of disconnected bots
- Responsibilities are segregated per agent for two reasons: parallel execution and sandboxed data access (each agent only sees its specialty files)
- Non-technical SMB owners can implement this with existing subscriptions: email + database + Claude + Tailscale
- The biggest blocker for SMB AI adoption is credibility — owners need to see peer examples from similar businesses, not indie-hacker tutorials

## Links

- [Article](https://x.com/i/article/2038022950935519232)
- [Original Tweet](https://x.com/RandBusiness/status/2043099967490003287)
- [Article Source Tweet](https://x.com/BigDemoPrez/status/2038315081747120417)

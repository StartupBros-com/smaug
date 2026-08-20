---
title: "Every Agentic Engineering Hack I Know (June 2026)"
type: article
date_added: 2026-06-02
source: "https://x.com/i/article/2061440101411102721"
author: "Matt Van Horn"
tags: [agentic-engineering, ai-coding, developer-workflows]
via: "Twitter bookmark from @mvanhorn"
---

Matt Van Horn presents an agentic-engineering workflow built around persistent plans, parallel terminal sessions, voice input, research, and reusable skills. The central model is to delegate mechanical execution to coding agents while people supply direction, taste, review, and course correction.

He recommends turning every non-trivial idea, bug, or source artifact into a `plan.md` through Compound Engineering's planning workflow, then letting an implementation agent execute it. This “plan before work” pattern extends beyond software to strategy, research, and product documents; a preliminary plan for producing a deliverable is intended to force deeper research and explicit acceptance criteria.

The article also describes an operating environment for multiple concurrent agents: voice dictation into terminal sessions, four to six focused cmux tabs, research with last30days before choosing tools, raw meeting transcripts as high-context inputs, and a notes system that agents can access through CLIs or APIs. It advocates packaging repeated workflows into skills and contributing to open-source projects as a way to compound both capability and professional relationships.

Several recommendations involve high-autonomy agent configuration, remote access, agent email triggers, and browser-session-backed CLIs. Those patterns can reduce friction but require deliberate access controls, sender allowlists, and review because they expand the potential impact of an incorrect or malicious instruction.

## Key Takeaways

- Treat structured plans as durable checkpoints that capture research, repository conventions, an approach, and acceptance criteria before implementation begins.
- Separate human judgment from agent throughput: direct, review, and refine work rather than competing with agents on mechanical execution.
- Use voice input, parallel terminal sessions, and research tools to shorten the loop from idea to informed plan to implementation.
- Feed agents primary context such as raw transcripts, prior plans, and searchable notes rather than relying only on manually condensed summaries.
- Turn frequently repeated procedures into reusable skills so workflows improve across sessions instead of being rediscovered each time.
- Apply strict allowlists and least privilege when enabling remote control, inbound email automation, persistent credentials, or unattended actions.

## Links

- [Article](https://x.com/i/article/2061440101411102721)
- [Original Tweet](https://x.com/mvanhorn/status/2061877533885473181)

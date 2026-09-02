---
title: "The File System Is the New Database: How I Built a Personal OS for AI Agents"
type: article
date_added: 2026-04-09
source: "https://x.com/i/article/2025249985722224640"
author: "Muratcan Koylan"
tags: [personal-knowledge-management, context-engineering, ai-agents, filesystem, markdown, jsonl, agent-skills]
via: "Twitter bookmark from @muratcan"
---

Muratcan Koylan describes Personal Brain OS, a Git-backed personal operating system that gives AI assistants structured, durable context rather than repeatedly supplying it in prompts. The system keeps voice, goals, contacts, research, operational history, and reusable workflows in Markdown, YAML, and JSONL files that both humans and agents can inspect and version.

## Core Architecture

The design uses progressive disclosure rather than a monolithic system prompt. A small routing `SKILL.md` is always available, module instructions load for the selected domain, and underlying data loads only when the task needs it. The author organizes the vault into eleven isolated modules so a content task, for example, reads voice and brand context without loading networking data.

Instructions are similarly scoped: repository-level `CLAUDE.md` provides onboarding, a brain-level `AGENT.md` maps common requests to procedures, and module files provide domain constraints. This separates potentially conflicting rules and lets agents navigate to the relevant source in at most two hops.

## Data Model and Memory

- **Markdown** holds narrative knowledge such as guides, templates, and research.
- **YAML** holds commented, hierarchical configuration such as goals, values, and operating rhythms.
- **JSONL** holds streamable, append-only logs for posts, contacts, interactions, decisions, experiences, failures, and metrics.
- **Cross-file IDs** connect otherwise isolated modules, allowing an agent to assemble a meeting brief from a contact record, interaction history, and pending tasks.

The author treats episodic memory as especially valuable: decision and failure logs preserve reasoning, alternatives, outcomes, and prevention steps, allowing future agents to reflect the user's judgment rather than merely retrieve facts. Append-only JSONL is framed as a safety boundary against agents overwriting historical records.

## Operational Lessons

The article argues that the hard problem is not choosing a file layout but maintaining the intake pipeline over years. Koylan describes feed capture, voice capture, account integrations, and agent synthesis as attempts to move material into the right file without making the user a manual integration layer. He reports revising early overlarge schemas, overly long voice guides, and loose module boundaries after finding that sparse fields and excessive context degraded agent behavior.

The resulting thesis is context engineering: design the information architecture, retrieval paths, and process skills that let an agent make an informed decision, rather than optimizing isolated prompts. The approach favors portability, human readability, Git history, and low infrastructure cost, while acknowledging that ongoing curation and routing remain the unsolved operational bottleneck.

## Links

- [Article](https://x.com/i/article/2025249985722224640)
- [Agent Skills for Context Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering)

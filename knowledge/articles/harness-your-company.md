---
title: "Harness Your Company"
type: article
date_added: 2026-08-11
source: "https://x.com/i/article/2086950958760923136"
author: "Jacob Posel"
tags: [company-harness, ai-rollout, mcp, permissions, secrets, org-design, hq]
via: "Twitter bookmark from @VibeMarketer_"
---

Jacob Posel's argument that most companies are trying to harness AI before they have built a harness for it. Individual Claude workflows, prompt folders, laptop agents, local API keys, and one-off MCP configs produce useful personal results without changing how the company works. The best prompt stays in someone's chat history, the five-hour-saving workflow never reaches the team, and new projects start without the last project's decisions. As seats spread, the firm accumulates more tools, disconnected context, loose credentials, and decisions trapped in conversations.

A physical harness attaches power to useful work while keeping it constrained and steerable. An AI harness does the same by giving a model the context, tools, permissions, rules, and feedback it needs to produce reliable work. If AI is going to run across a company, that layer has to exist at company level, not on one person's laptop. Written from HQ (hqforwork.com), where Posel says they have seen the effect of a shared company harness.

## Why individual setups are not enough

Rolling out ChatGPT seats, a few Claude licenses, Claude Code for the technical people, and one departmental agent can look like adoption. It does not share operating environment. People reconnect the same systems; agents begin without prior context; knowledge stays fragmented across Slack, email, Drive, Notion, the CRM, and the heads of the people who have been there longest.

## Eight parts of a company harness

1. **Company memory.** Contacts, customer history, calls, emails, documents, brand standards, past decisions, code, data definitions — organized by company, client, team, and project, with sources of truth and a way to load only what the current work needs. Dumping every file into a vector database is not this.
2. **A connection layer.** CRM, tracker, email, Slack, Drive, analytics, finance, support, code, internal DBs, company-specific tools — connected once via APIs / integrations / MCP, then exposed through a shared, permissioned layer so each person is not rebuilding the same sockets inside every model.
3. **Secrets.** Credentials stored separately from the work. Approved people and agents use them at runtime without seeing the raw value. No keys in prompts or shared docs.
4. **Permissions.** Onboard AI the way you onboard a person: role, required context, needed tools. An HR agent does not get the bank account; a marketing teammate does not get the board folder; an agency gets hard walls between clients.
5. **Policies.** Permissions are who can use a system; policies are what they may do with it. Draft the client email but do not send without approval. Read finance without writing it. Never move knowledge or credentials across client boundaries. Verify claims against sources. Persist decisions and rationale. Load automatically for the relevant work.
6. **Shared project state.** Projects, owners, tasks, decisions, acceptance criteria, blockers, artifacts, handoffs, next steps — readable and updatable by AI, with reasoning preserved so a session end or teammate handoff does not drop history.
7. **Reusable capabilities.** Tested prompts as commands, processes as skills, recurring work as workers/agents, shared once they work so the next operator does not copy from chat history.
8. **Sync and visibility.** Improvements to skills, policies, knowledge, and connections reach everyone who needs them, with access control, versioning, and conflict surfacing rather than silent overwrite.

## Keep the harness separate from the interface

Developers may stay in Claude Code, Codex, or Cursor; operators in Claude or ChatGPT; some work in Slack or on a schedule. Interfaces will keep changing. The company layer should hold memory, permissions, connections, policies, projects, and reusable capabilities while the model and UI sit on top, so swapping models does not throw away the operating environment.

## Key Takeaways

- Individual AI setups do not compound; they fragment the same knowledge the company already had
- A company harness is shared context plus control: what the firm knows, how it works, what can be accessed, what is happening now
- Eight parts: memory, connections, secrets, permissions, policies, project state, reusable capabilities, sync
- Permissions are access; policies are allowed actions; both should load with the work, not get pasted into every session
- Keep the harness independent of any one model or app
- HQ is the product wrapping this thesis

## Links

- [Article](https://x.com/i/article/2086950958760923136)
- [Original Tweet](https://x.com/jacob_posel/status/2087177863824802102)
- [Commentary](https://x.com/VibeMarketer_/status/2087180146256081351)
- [HQ](https://hqforwork.com)

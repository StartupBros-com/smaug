---
title: "You don't understand AI agents"
type: article
date_added: 2024-12-16
source: "https://x.com/i/article/1867032485768597505"
author: "Wayne Hamadi"
tags: [ai-agents, evaluations, automation, product-development]
via: "Twitter bookmark from @wayne_hamadi"
---

Wayne Hamadi argues that an AI agent is best understood as a system that acts autonomously or proactively, rather than as a bundle of fashionable implementation patterns such as LLMs, RAG, vector search, multi-agent orchestration, or goal decomposition. The practical value of an agent lies in its ability to take action on behalf of a user within a business process; it can sometimes be implemented with conventional software rather than AI.

The essay traces this view from the transition from traditional workflow automation to GPT-4 and AutoGPT. Traditional applications require explicit UI interactions, while low-code workflow tools automate predefined tasks but still demand technical configuration. More capable models made self-prompting and iterative action credible, which created the modern promise of software that can diagnose and act on a user's problem instead of only responding to commands.

Its central example is Anna, a recruiter receiving unsuitable candidates from an applicant tracking system. An agentic ATS could investigate the issue, report a diagnosis, and potentially fix it, but the design work starts with Anna's goals rather than with the technology. Hamadi proposes three evaluations: detect when the candidate mix is wrong, validate that a diagnosis reflects an actual mismatch, and determine when the system should escalate a proposed fix to Anna. These evaluations clarify both intended outcomes and the appropriate level of human oversight.

The conclusion is that agents should inherit the reward system of the people whose work they automate. Builders should prioritize understanding the user's process, the signals that demonstrate success, and the benchmark trade-offs that matter to the organization. Autonomy becomes more valuable as reliability improves, but proactive systems with human review can already deliver substantial value.

## Key Takeaways

- Define agents by autonomous or proactive action, not by the technologies used to build them.
- Start with the end user's business process and the outcome they consider successful.
- Write evaluations for problem detection, diagnostic accuracy, and human escalation before optimizing implementation details.
- Rank evaluation goals by user value; automating every last action may be less useful than reliably identifying and explaining a problem.
- Retain human oversight where an agent cannot confidently infer intent or select a consequential fix.

## Links

- [Article](https://x.com/i/article/1867032485768597505)
- [Original Tweet](https://x.com/wayne_hamadi/status/1868742755402621103)

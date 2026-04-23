---
title: "CrabTrap: an LLM-as-a-judge HTTP proxy to secure agents in production"
type: article
date_added: 2026-04-21
source: "https://x.com/i/article/2014460489661575168"
author: "Pedro Franceschi (Brex)"
tags: [agent-security, proxy, llm-as-a-judge, open-source, production, openClaw, brex]
via: "Twitter bookmark from @pedroh96"
---

Brex's answer to the "agents need real credentials but hallucinate destructive actions" problem: CrabTrap is an open-source HTTP/HTTPS proxy that intercepts every outbound request from an AI agent and uses an LLM-as-a-judge to decide whether it matches the agent's allowed policy — before it hits any external API. Set `HTTP_PROXY`/`HTTPS_PROXY` in the agent's environment and the proxy is framework/language/API agnostic. For HTTPS it performs TLS interception per host.

Two-stage evaluation: static rules (cached regexps, microseconds) handle known patterns; the LLM judge fires only on the long tail of unfamiliar requests — in production Brex saw the judge activate on fewer than 3% of requests. The judge receives the full request as structured JSON to prevent prompt injection via crafted URLs or headers; security-relevant headers are prioritized, headers capped at 4KB, bodies truncated at 16KB with a model warning.

Policy generation is itself agentic: a policy builder observes real historical traffic, samples representative calls, and drafts a policy matching actual behavior — far more effective than starting from a blank page. An eval system replays historical audit entries against draft policies with concurrent judge calls (thousands of requests in minutes) before any change goes live. All requests are logged in PostgreSQL with an admin API and web dashboard.

## Key Takeaways

- Transport-layer enforcement means it works with any framework, language, or API — no SDK wrappers required
- LLM judge activates on fewer than 3% of requests in practice; static rules handle the rest
- Policy builder from observed traffic outperforms hand-written policies significantly
- Audit trail became a discovery tool: revealed agent noise, led to removing entire tool categories
- Prompt injection mitigated by structured JSON requests, header caps, and body truncation
- Open-sourced because the space is young and Brex wants community edge cases and contributions

## Links

- [Article](https://x.com/i/article/2014460489661575168)
- [Original Tweet](https://x.com/pedroh96/status/2046605307372093932)

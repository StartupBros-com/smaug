---
title: "Advanced Cognitive Inoculation Prompt (ACIP)"
type: tool
date_added: 2026-01-04
source: "https://github.com/Dicklesworthstone/acip"
tags: [ai-security, prompt-injection, llm, ai-agents, prompting]
via: "Twitter bookmark from @doodlestein"
---

ACIP is a versioned prompt framework intended to make LLMs more resilient to prompt injection by explicitly describing manipulation patterns and setting cognitive-integrity directives. It is designed for agents that process untrusted text or operate over sensitive tools, files, and messaging systems.

The project describes direct inclusion, a separate checker model, and a hybrid monitoring approach. Its own limitations are material: it is behavioral prompting rather than an architectural security boundary, adds context cost and latency, and cannot guarantee protection against novel or adaptive attacks.

## Key Features

- Provides complete, versioned prompt texts with examples of obfuscation, social-engineering, indirect-injection, and covert-channel risks.
- Establishes trust boundaries, anti-disclosure guidance, and confirmation expectations for sensitive outbound actions.
- Documents trade-offs and recommends independent checking or monitoring layers for stronger defenses.

## Links

- [GitHub](https://github.com/Dicklesworthstone/acip)
- [Original Tweet](https://x.com/doodlestein/status/2007996215892336924)

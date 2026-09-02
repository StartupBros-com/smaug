---
title: "Some Thoughts on AI Alignment: Using AI to Control AI"
type: tool
date_added: 2026-01-04
source: "https://github.com/Dicklesworthstone/some_thoughts_on_ai_alignment"
tags: [ai-alignment, ai-safety, llm, agents, monitoring]
via: "Twitter bookmark from @doodlestein"
---

This repository contains an essay arguing that a single language model’s internal guardrails are insufficient for reliably controlling agents with meaningful capabilities. It proposes an external-control architecture in which independent, narrower helper models inspect a primary model’s behavior and can constrain or halt it.

The proposed helpers would be easier to govern because they perform limited tasks and can emit constrained outputs, while an external system retains the authority to suspend the primary agent. The bookmark cites this argument to distinguish a prompt-based defense such as ACIP from the stronger protection of an independent audit layer.

## Key Features

- Examines why prompt injection and removable refusal behavior undermine reliance on a single model’s safeguards.
- Advocates separate monitoring models with limited responsibilities and constrained output formats.
- Frames agent safety as external oversight with meaningful intervention authority rather than prompt-only alignment.

## Links

- [GitHub](https://github.com/Dicklesworthstone/some_thoughts_on_ai_alignment)
- [Original Tweet](https://x.com/doodlestein/status/2007996215892336924)

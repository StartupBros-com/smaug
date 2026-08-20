---
title: "cc-mirror"
type: tool
date_added: 2026-01-04
source: "https://github.com/numman-ali/cc-mirror"
tags: [claude-code, ai-agents, orchestration, multi-agent, typescript]
via: "Twitter bookmark from @nummanali"
---

cc-mirror creates isolated Claude Code variants backed by custom providers such as Z.ai, MiniMax, OpenRouter, and LiteLLM. It packages runtime setup, provider-specific defaults, prompt packs, optional skills, and wrappers so experiments with alternate coding-model backends do not alter a primary Claude Code installation.

The bookmarked orchestration skill is presented as the capability that lets its basic primitives run multiple agents at full speed, making the repository relevant to multi-agent coding workflows rather than merely provider configuration.

## Key Features

- Creates separate runtime, configuration, session, MCP-server, and credential locations for each variant.
- Installs and updates provider-native variants while preserving user credentials and custom environment keys.
- Includes prompt packs and an orchestration skill for coordinating multiple coding agents.

## Links

- [GitHub](https://github.com/numman-ali/cc-mirror)
- [Orchestration skill](https://github.com/numman-ali/cc-mirror/blob/main/src/skills/orchestration/SKILL.md)
- [Original Tweet](https://x.com/nummanali/status/2007984449120874681)

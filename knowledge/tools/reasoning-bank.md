---
title: "ReasoningBank"
type: tool
date_added: 2026-08-11
source: "https://github.com/google-research/reasoning-bank"
tags: [agent-memory, google-research, test-time-scaling, self-improving, agents, swe-bench]
via: "Twitter bookmark from @yibie"
---

ReasoningBank is a Google Research open-source memory mechanism for agents that stores the reasoning process itself — not just outcomes — and learns from both successful and failed trajectories. Most agent memory stacks keep only wins or raw facts; ReasoningBank treats "how we got to that step" as the memory payload, so later runs can skip already-discovered pits. On top of that formulation the authors propose memory-aware test-time scaling: memory makes extra test-time compute more efficient, and extra compute writes new experience back into the bank. They frame experience-driven memory as a third scaling axis for agent systems, beside model-parameter scale and test-time compute.

The repo ships complete SWE-Bench (built on mini-swe-agent) and WebArena (BrowserGym + llm-as-a-judge autoeval) implementations. Supported model families are GPT (3.5-turbo / 4 / 4o via `OPENAI_API_KEY`) and Gemini 2.5 / Claude 3.7 Sonnet on Vertex AI. Community/experimental — not an official Google product. Python, 531 stars at capture. Paper citation: Ouyang et al., "ReasoningBank: Scaling Agent Self-Evolving with Reasoning Memory" (2026).

## Key Features

- Memory items are reasoning traces, including failures, not just successful recipes
- Memory-aware test-time scaling: retrieval ↔ extra compute as a bidirectional loop
- SWE-Bench runner on vendored mini-swe-agent (`SWE-Bench/run.sh`, Vertex AI)
- WebArena runner with BrowserGym, patched `third_party/webarena`, and llm-as-a-judge
- GPT plus Gemini/Claude-on-Vertex backends

## Links

- [GitHub](https://github.com/google-research/reasoning-bank)
- [Original Tweet](https://x.com/yibie/status/2087143369181114868)

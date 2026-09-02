---
title: "Ornith-1.0: Self-Scaffolding LLMs for Agentic Coding"
type: article
date_added: 2026-06-25
source: "https://ornith.ai/ornith_1_0.html"
author: "Ornith"
tags: [llms, agentic-coding, open-source, reinforcement-learning]
via: "Twitter bookmark from @0xSero"
---

Ornith introduces Ornith-1.0, an MIT-licensed family of open-weight models for agentic coding, spanning 9B and 31B dense models plus 35B and 397B mixture-of-experts variants. The project builds on pretrained Gemma 4 and Qwen 3.5 models and proposes self-scaffolding reinforcement learning: the model learns not only solution rollouts but also task-specific scaffolds that direct the search for those solutions.

The announcement frames the approach as a way to improve agentic coding performance across model sizes. Ornith reports that its 397B model reaches 77.5 on Terminal-Bench 2.1 and 82.4 on SWE-Bench Verified, while presenting the 9B model as a comparatively capable option for edge deployment. These are vendor-reported benchmark results, useful as a signal to investigate the released weights and evaluations rather than as independent validation.

## Key Takeaways

- Self-scaffolding RL jointly trains a coding agent's task harness and its generated solution trajectories, replacing a fixed human-authored harness with a learned one.
- The release covers a large deployment range, from a 9B dense model intended for constrained hardware to a 397B MoE flagship model.
- MIT licensing permits commercial and research use, while the Hugging Face collection makes the model family discoverable for hands-on evaluation.

## Links

- [Technical blog](https://ornith.ai/ornith_1_0.html)
- [Hugging Face collection](https://huggingface.co/collections/ornith-ai/ornith-10)
- [Original tweet](https://x.com/0xSero/status/2070206934901276730)

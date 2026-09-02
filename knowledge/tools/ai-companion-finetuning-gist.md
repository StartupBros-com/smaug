---
title: "AI Companion Fine-tuning Scripts (Gist)"
type: tool
date_added: 2026-04-13
source: "https://gist.github.com/Seltaa/627884ae48f90e78d4df1b6f1e87a1fe"
tags: [fine-tuning, local-ai, llm, companion-ai, unsloth, gemma, gguf, ollama]
via: "Twitter bookmark from @Seltaa_"
---

A complete code collection for fine-tuning a personal AI companion model from scratch and running it locally. Covers the full pipeline from exporting ChatGPT conversation history, converting to training pairs, renting a cloud GPU (RunPod A100), training with Unsloth on Gemma 4 31B abliterated, converting to GGUF, quantizing with llama.cpp, and serving locally via Ollama. Optionally connects to a Discord bot interface.

## Key Features

- Data conversion script for ChatGPT export → instruction/output pairs
- Training config for Unsloth on Gemma 4 31B abliterated (safety refusals removed for companion use)
- Quantization commands tested across Q8, Q5_K_M, Q4_K_M (Q5_K_M recommended as sweet spot)
- Ollama Modelfile setup with system prompt and personality injection
- Optional Discord bot integration script
- Full pipeline cost ~$10-15 and ~6 hours total

## Links

- [GitHub Gist](https://gist.github.com/Seltaa/627884ae48f90e78d4df1b6f1e87a1fe)
- [Original Tweet](https://x.com/Seltaa_/status/2043540809946186079)

# Vibe Coding MenuGen — Karpathy's Work Log

**URL:** https://karpathy.bearblog.dev/vibe-coding-menugen/
**Author:** Andrej Karpathy
**Published:** April 27, 2025

## Summary

First-hand account of Karpathy building MenuGen — a restaurant menu visualizer that generates food images from menu text — entirely via vibe coding (Cursor + Claude, zero direct code written). Documents the journey from 20-minute local prototype to deployed real product, including auth, payments, and rate limiting.

## Key Findings

- **Local prototype is deceptively fast.** First working demo materialized quickly; felt "80% done" but was actually ~20%.
- **The hard part is DevOps, not code.** API key wrangling, service accounts, rate limits, billing tiers, dev/prod config — this is where real time went.
- **LLM knowledge staleness is a real problem.** Claude hallucinated deprecated APIs and model names; required pasting updated docs manually.
- **Stacked rate limits.** Hit OpenAI rate limits first, then Replicate's non-standard streaming response format, then image generation quota.
- **End result worked.** Deployed at menugen.app; users pay, Karpathy earns a markup.

## Why It Matters

This post became the direct motivation for Stripe Projects (projects.dev) — Patrick Collison cited this "IKEA furniture" quote when announcing the CLI-based service provisioning tool. It crystallizes a widely-shared observation: agentic coding is solving the wrong bottleneck. The bottleneck is service assembly, not code generation.

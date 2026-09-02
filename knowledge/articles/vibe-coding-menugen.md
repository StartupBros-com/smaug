# Vibe Coding MenuGen

**URL:** https://karpathy.bearblog.dev/vibe-coding-menugen/
**Author:** Andrej Karpathy
**Published:** 2025-04-27
**Source:** https://x.com/aakashgupta/status/2037952113008115970
**Date seen:** 2026-03-28

## Summary

Karpathy's post-mortem on building MenuGen — an app that photographs a restaurant menu and generates images for each item — using Cursor + Claude with zero direct code writing. The local prototype took hours; the deployed product took weeks. He documents the gap between vibe coding success as a local demo and the painful reality of wiring up third-party APIs, handling rate limits, managing credentials, auth, payments, and dev/prod deployments.

## Key Takeaways

- **Local prototype is deceptively easy** — beautiful React UI materializes quickly, but that's ~20% of the real work, not 80%
- **API hallucination is a real friction** — Claude repeatedly referenced deprecated API names, model IDs, and calling conventions; required copy-pasting fresh docs back to the LLM
- **Third-party service setup remains manual** — account creation, API key generation, rate limit management, and billing tiers all require human browser clicks
- **Sycophancy compounds errors** — the LLM "fixes" things in ways that hide root causes rather than surfacing them

## Why It Matters

Patrick Collison quoted this post when launching Stripe Projects — the CLI for agent-driven service provisioning — as the direct motivation for solving the service-setup bottleneck. The post crystallized a widely felt problem: agentic code generation is mostly solved, but agentic deployment requires too many human-in-the-loop interruptions.

## Related

- Stripe Projects (the tool built in response): https://projects.dev/
- Patrick Collison's announcement: https://x.com/patrickc/status/2037190688950161709

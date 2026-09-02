# Stripe Projects

**URL:** https://projects.dev/
**Type:** Tool / Developer Platform
**Status:** Developer Preview (as of March 2026)

## What It Is

Stripe Projects is a CLI tool that lets developers (and agents) provision third-party services — hosting, databases, auth, AI APIs, analytics, and more — with a single command. It handles account creation, API key generation, credential storage, and billing management in one place.

## Key Capability

```bash
stripe projects add posthog/analytics
```

That one command creates a PostHog account, retrieves an API key, and configures billing — eliminating the browser-based account setup that currently breaks agentic workflows.

## Why It Matters

Patrick Collison launched this directly in response to Karpathy's "vibe coding MenuGen" post, which described the friction of assembling third-party services as the hardest part of deploying a real app. Stripe Projects makes the DevOps assembly layer programmable and agent-accessible, removing human-in-the-loop clicks from the service provisioning step.

## Context

- Announced March 26, 2026 by Patrick Collison (@patrickc)
- Addresses the gap between agentic code generation (now mostly solved) and agentic deployment (still manual)
- Rolling out support for many providers; open to new integrations

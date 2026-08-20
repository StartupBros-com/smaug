---
title: "Cloudflare OS"
type: tool
date_added: 2026-08-05
source: "https://github.com/cloudflare/cloudflare-os"
tags: [ai-agents, cloudflare-workers, sandboxing, capability-security, typescript]
via: "Twitter bookmark from @KentonVarda"
---

Cloudflare OS is an open-source AI productivity environment built on Cloudflare Workers. It combines an agent chat interface with isolated, personal application instances called Gadgets, so people can generate and modify useful apps without sharing a single mutable SaaS codebase.

Its Gatekeepers provide the access-control layer around agents and Gadgets: they wrap external services, constrain each connection to intended resources, log actions, and require human approval for side effects. The project is intended as a customizable foundation for a company-specific AI operating environment rather than a hosted product to adopt unchanged.

## Key Features

- Creates sandboxed personal apps and documents that agents can build and customize.
- Uses Gatekeepers to mediate authorization, narrow resource access, action logging, and human approval.
- Runs locally through Wrangler and workerd, with an option to deploy into a Cloudflare account.
- Provides company-context-aware agent chat alongside app-building workflows.

## Links

- [GitHub](https://github.com/cloudflare/cloudflare-os)
- [Original Tweet](https://x.com/KentonVarda/status/2084990137180590572)

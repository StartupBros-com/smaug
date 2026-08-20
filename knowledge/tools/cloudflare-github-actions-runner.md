---
title: "cloudflare-github-actions-runner"
type: tool
date_added: 2026-08-19
source: "https://github.com/biw/cloudflare-github-actions-runner"
tags: [cloudflare, github-actions, ci, containers, typescript]
via: "Twitter bookmark from @biwills"
---

A TypeScript CLI that deploys an ephemeral GitHub Actions runner pool on Cloudflare Containers. It guides an account or organization through creating a signed GitHub App and a private R2 bucket, then accepts GitHub jobs addressed to Cloudflare-specific `runs-on` labels.

The project deliberately limits execution to private repositories. It provisions repository-scoped just-in-time runners, supports the standard Cloudflare Container profiles and custom CPU, memory, and disk requests, and makes GitHub Actions caches available through R2 without requiring workflow changes.

## Key Features

- Interactive `npx` setup for the Cloudflare deployment, GitHub App, and private R2 bucket.
- Ephemeral Ubuntu 24.04 runners activated by `cloudflare-` `runs-on` labels.
- Runtime eligibility checks that prevent public and internal repositories from launching containers.
- Standard runner profiles plus custom machine sizes encoded directly in the workflow label.
- Transparent R2-backed support for `actions/cache` and `actions/setup-node` dependency caching.

## Links

- [GitHub](https://github.com/biw/cloudflare-github-actions-runner)
- [Original Tweet](https://x.com/biwills/status/2090248844470792498)

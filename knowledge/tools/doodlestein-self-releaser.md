---
title: "doodlestein_self_releaser"
type: tool
date_added: 2026-08-07
source: "https://github.com/Dicklesworthstone/doodlestein_self_releaser"
tags: [bash, ci-cd, developer-tools, github-actions, release-automation, local-first]
via: "Twitter bookmark from @doodlestein"
---

`dsr` (Doodlestein Self-Releaser) is fallback release infrastructure for projects whose GitHub Actions workflows are queued or throttled. It treats the existing GitHub Actions release YAML as the source of truth, detects when queue time exceeds a threshold, runs the workflow locally through `nektos/act` where appropriate, and then publishes the artifacts to GitHub Releases.

The design is intentionally not a replacement CI system. A developer can keep the same release configuration and use their own Linux, macOS, and Windows machines — connected over SSH or Tailscale — for native multi-platform builds when hosted runners are slow or unavailable. The repo also describes Minisign signing, SBOM generation, structured exit codes, and JSON output for automation.

## Key Features

- Reuses an existing GitHub Actions release workflow instead of maintaining a second build definition
- Detects long GitHub Actions queues and triggers a local fallback at a configurable threshold
- Builds Linux with `act` and supports native macOS and Windows builds over SSH
- Uploads release artifacts to GitHub and supports Minisign signatures plus SBOM generation
- Offers repository-wide queue checks and machine-readable JSON output for scripting
- Requires Bash 4+, GitHub CLI, `jq`, Docker, and `nektos/act` for local Linux builds

## Links

- [GitHub](https://github.com/Dicklesworthstone/doodlestein_self_releaser)
- [Original Tweet](https://x.com/doodlestein/status/2085716479673094289)

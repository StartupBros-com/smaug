---
title: "gh-signoff"
type: tool
date_added: 2026-08-09
source: "https://github.com/basecamp/gh-signoff"
tags: [github-cli, local-ci, developer-tools, pull-requests]
via: "Twitter bookmark from @yarotheslav"
---

`gh-signoff` is a GitHub CLI extension for treating a developer's own machine as the first CI runner. After running a project's test suite locally, a developer uses `gh signoff` to publish a green commit status, avoiding hosted-runner consumption for work that does not require a remote build matrix or parallel execution.

The extension verifies that the signed commit is the expected pushed or upstream revision before accepting it, with guarded handling for centralized repositories and cross-repository pull requests. Repositories can require one overall signoff or multiple named signoffs—such as tests, lint, and security—through branch protection.

## Key Features

- Runs local tests before creating a GitHub commit-status attestation with `gh signoff`.
- Supports signing off on a specific reachable commit for stacked or virtual branch workflows.
- Provides named partial signoffs for individual checks, platforms, or review roles.
- Installs branch-protection requirements so merges require the configured local attestations.
- Refuses ambiguous remote and tracking configurations rather than guessing which commit should be approved.

## Links

- [GitHub](https://github.com/basecamp/gh-signoff)
- [Original Tweet](https://x.com/yarotheslav/status/2086478222632316959)

---
title: "Configuring turbo.json"
type: article
date_added: 2026-03-30
source: "https://turborepo.dev/docs/reference/configuration"
author: "Turborepo"
tags: [turborepo, monorepo, build-cache, configuration]
via: "Twitter bookmark from @anthonysheww"
---

The official Turborepo reference for `turbo.json`, the repository-level configuration file that defines task behavior and caching. Anthony Shew shares it in response to a reminder to clear build caches, pointing to a configuration-based way to prevent the cache-related problem rather than relying on manual cleanup; the bookmark does not identify the exact setting.

## Key Takeaways

- `turbo.json` is the central configuration surface for how Turborepo runs tasks in a repository.
- Build-cache behavior can be addressed through repository configuration instead of an ad hoc cache-clearing routine.
- The post also notes that a longstanding `vercel/turborepo` issue (#863) was fixed, but does not preserve the precise regression or configuration option.

## Links

- [Documentation](https://turborepo.dev/docs/reference/configuration)
- [Original Tweet](https://x.com/anthonysheww/status/2038718370078720489)

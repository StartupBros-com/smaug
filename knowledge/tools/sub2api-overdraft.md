---
title: "sub2api-overdraft"
type: tool
date_added: 2026-08-18
source: "https://github.com/DeanZFC/sub2api-overdraft"
tags: [api-gateway, codex, quota-management, sub2api, go]
via: "Twitter bookmark from @xing_eth"
---

Unofficial Go fork of Wei-Shaw/sub2api (pinned at v0.1.177) that adds Codex 5-hour / 7-day quota-overdraft probing, scheduling, and recovery for multi-account API relay pools. Operators treat the dashboard bar hitting 100% as a display event rather than an automatic kick from the pool, and keep an account schedulable while upstream still returns successful business responses. The same post also describes tightening Codex OAuth identity fields so third-party or stale User-Agent / originator fingerprints stop landing accounts in abnormal quota buckets.

The maintainers flag that overdraft behavior may conflict with upstream provider terms and can incur real usage or account restrictions. This is not an official Sub2API release; the upstream install script and `weishaw/sub2api:latest` image do not contain the overdraft feature.

## Key Features

- Pre-arms ordinary OAuth text traffic with an overdraft payload at 95% usage; after 100%, successful business traffic is treated as evidence the account can stay in the pool
- Marks an explicit quota 429 as terminal for that cycle; at most one independent probe per quota window when business evidence is missing
- Tracks `pending` / `passed` / `failed` / `inconclusive` / `recovered` independently for the 5h and 7d windows in the admin UI and PostgreSQL
- Treats transient 429s, timeouts, network failures, and 5xx as inconclusive (no automatic background retries)
- Atomic PostgreSQL claim for multi-instance deployments, with a config rollback to upstream scheduling

## Links

- [GitHub](https://github.com/DeanZFC/sub2api-overdraft)
- [Upstream Sub2API](https://github.com/Wei-Shaw/sub2api)
- [Original Tweet](https://x.com/xing_eth/status/2089694868025254264)

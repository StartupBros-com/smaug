---
title: "Clopus-Watcher: An autonomous monitoring agent"
type: article
date_added: 2025-12-27
source: "https://denislavgavrilov.com/clopus-watcher-an-autonomous-monitoring"
author: "Denislav Gavrilov"
tags: [claude-code, kubernetes, monitoring, devops, autonomous-agents]
via: "Twitter bookmark from @kuberdenis"
---

Denislav Gavrilov describes Clopus-Watcher, a proof of concept that puts Claude Code in a Kubernetes CronJob to act as a continuous on-call operator. The agent inspects configured namespaces, records findings and proposed fixes in watcher mode, or can apply hotfixes and document the incident in autonomous mode.

## Key Takeaways

- The Kubernetes deployment combines a scoped service account, role and role binding, a recurring watcher CronJob, persistent storage for reports, and a dashboard service.
- The agent can check pods and events, use Kubernetes commands or an in-container shell for remediation, and persist run information in SQLite-backed storage.
- The post argues that systematic, runbook-driven on-call and SOC work may be more immediately automatable than open-ended software development, while showing the operational controls required for such an experiment.

## Links

- [Article](https://denislavgavrilov.com/clopus-watcher-an-autonomous-monitoring)
- [GitHub repository](https://github.com/kubeden/clopus-watcher)
- [Original Tweet](https://x.com/kuberdenis/status/2004934631616086417)

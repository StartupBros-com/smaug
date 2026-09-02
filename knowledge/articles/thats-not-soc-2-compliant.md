---
title: "That's not SOC 2 compliant"
type: article
date_added: 2026-08-13
source: "https://ampcode.com/notes/thats-not-soc-2-compliant"
author: "Will Dollman"
tags: [soc-2, change-management, git, compliance, amp, push-to-main, audit]
via: "Twitter bookmark from @willdollman"
---

Amp engineer Will Dollman's answer to the reaction they get every time they describe how they work: no pull requests, everyone pushes to `main`, and they still passed SOC 2. The t.co on the announcement tweet resolved only back to the tweet (the note sits behind Amp auth); the essay itself is at ampcode.com.

The thesis is that SOC 2's Trust Services Criteria never mention `git` or pull requests. They require that changes are authorized, tested, approved, and recorded. A PR is one way to do that, not the required way. Amp asked its auditors directly whether PRs were mandatory; the auditors asked what the change process actually was and designed controls around it.

The four controls Amp landed on:

- **Restricted push access.** Who can push to `main` follows business function. Every Amp engineer can push (most of the company is engineers). The percentage with access matters less than being able to name exactly who has it and why.
- **Signed commits.** Push authentication is not authorship. GitHub enforces verified signatures on `main` so the author on every commit is verifiable.
- **Automated CI.** Tests, infrastructure checks, and security checks run on every change; a red pipeline blocks `main`.
- **An audit trail as good as a PR.** Each commit links to the Amp thread that produced it, so the record is the reasoning, not just the diff. CI/CD then records commit → deploy.

Code review is deliberately not on the list. The criteria do not say a second human has to stare at a diff.

Amp is ~20 people, mostly engineers, everyone close to the code. Dollman is explicit that a 2,000-person company should not copy "everyone pushes to main," and that what *does* scale is thinking about risk per system instead of calibrating every change to the scariest system the company runs. The portable prompt: pick one system and ask what risks its pull requests are actually managing, then ask how else you could manage them.

## Key Takeaways

- SOC 2 wants authorized, tested, approved, recorded changes — not a GitHub PR checkbox
- Ask the auditor what they need evidence of; do not assume the industry-default workflow
- Signed commits, restricted push, blocking CI, and a thread-linked audit trail can substitute for a PR
- Peer review of every diff is not a Trust Services Criteria requirement
- Small high-trust teams can spend process budget on speed; the generalizable move is risk-calibrated controls, not "delete PRs"

## Links

- [Article](https://ampcode.com/notes/thats-not-soc-2-compliant)
- [Original Tweet](https://x.com/willdollman/status/2087921505589985321)
- [How we build (pave the road)](https://ampcode.com/notes/pave-the-road)

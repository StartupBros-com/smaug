---
title: "security-audit-skill"
type: tool
date_added: 2026-06-22
source: "https://github.com/cloudflare/security-audit-skill"
tags: [security, coding-agents, audit-automation]
via: "Twitter bookmark from @Dinosn"
---

Cloudflare’s `security-audit-skill` is an open-source coding-agent skill for source-code security assessments. It organizes a security review into distinct stages, deliberately separating vulnerability discovery from validation and independently checking the final factual claims. The aim is to produce exploitable, evidence-based findings instead of a generic checklist or unverified alerts.

## Key Features

- Maps the target application’s architecture, trust boundaries, and input surfaces during parallel reconnaissance.
- Sends independent agents to investigate attack classes including injection, access control, business logic, cryptography, feature abuse, and chained attacks.
- Uses a separate validation phase to try to disprove proposed findings and reduce false positives.
- Produces both human-readable reports and machine-readable `findings.json` output validated against a bundled schema.
- Assigns fresh agents to independently verify factual claims in the structured output against the target codebase.
- Supports additive repeat runs that consult prior findings to explore uncovered code paths rather than duplicating known results.

## Workflow

The skill’s six phases are reconnaissance, hunting, validation, reporting, structured output, and independent verification. Its core standard is that a reported issue must have a concrete attack scenario and real impact; a theoretical defense-in-depth gap is not automatically treated as a vulnerability.

## Links

- [GitHub](https://github.com/cloudflare/security-audit-skill)
- [Original Tweet](https://x.com/Dinosn/status/2069253991846862932)

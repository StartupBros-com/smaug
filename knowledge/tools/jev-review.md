---
title: "jev-review"
type: tool
date_added: 2026-11-10
source: "https://github.com/devagrawal09/jev-review"
tags: [code-review, typesafe-ai, jev, typescript, github]
via: "Twitter bookmark from @devagrawal09"
---

Jev Review is a small TypeScript code-review workflow built on TypeSafe Jev. It reviews a Git diff or scans a whole codebase by keeping orchestration in plain code and using Jev only for bounded, structured judgments (Choice and Score calls), then shows results in a local dashboard bound to 127.0.0.1.

## Key Features

- Staged pipeline: risk matrix, file profiles, evidence selection, mechanism classification, severity scoring, conditional reviewer routing
- Separate entry points for change review and complete-codebase review
- Uses changed or related tests as context when judging test gaps
- Selects concrete diff hunks or source regions before scoring impact
- Thresholds and workflow policy applied in code, not by the model
- Layered architecture with a dependency check script that fails on upward imports or cycles
- Requires Node.js 24+, Git, and a TypeSafe API key

## Links

- [GitHub](https://github.com/devagrawal09/jev-review)
- [Original Tweet](https://x.com/devagrawal09/status/2100341005690298687)

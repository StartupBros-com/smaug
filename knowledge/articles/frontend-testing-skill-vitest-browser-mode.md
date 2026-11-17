---
title: "frontend-testing skill (iagolast/files)"
type: article
date_added: 2026-10-03
source: "https://www.skills.sh/iagolast/files/frontend-testing"
author: "iagolast"
tags: [testing, vitest, agents, skills, frontend]
via: "Twitter bookmark from @iagolast"
---

An agent skill for setting up, writing, refactoring and reviewing behavior-focused tests for Vite SPAs using Vitest Browser Mode, real browser navigation and user-visible assertions. @iagolast shared it as the concrete form of his argument that shallow unit tests add little and agents need an explicit deep-testing strategy.

## Key Takeaways

- Mount the whole app in Vitest browser mode and mock only server requests (with MSW).
- For backends, run the real stack (Docker, database, cloud emulation) and test over HTTP.
- Test what you would verify by hand; agents default to junk tests unless the strategy is stated.

## Links

- [Skill](https://www.skills.sh/iagolast/files/frontend-testing)
- [Original Tweet](https://x.com/iagolast/status/2106304539737387255)

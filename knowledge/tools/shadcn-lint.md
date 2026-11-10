---
title: "shadcn/lint (@shadcn/lint)"
type: tool
date_added: 2026-09-14
source: "https://github.com/shadcn-ui/lint"
tags: [linting, tailwind, design-systems, agents, shadcn]
via: "Twitter bookmark from @shadcn"
---

An agent-first linter for Tailwind design systems. You declare what is allowed (components, variants, theme values), and when a coding agent breaks a rule the error message explains why and suggests a fix using your own components, instead of a bare type error. It works with Tailwind v4 projects without requiring shadcn/ui, ships for both ESLint and Oxlint, and supports React, Svelte and Vue.

## Key Features

- Rules carry design-system guidance, e.g. "p-4 is not allowed on Button: use a size (sm, lg) or margin/gap on the parent", rather than just "padding not allowed"
- Policies are configured without changing component APIs, avoiding complex TypeScript types
- Works with existing design systems; no rewrite required
- Setup can be delegated to a coding agent via a SETUP.md prompt

## Links

- [GitHub](https://github.com/shadcn-ui/lint)
- [Original Tweet](https://x.com/shadcn/status/2099534231114314145)

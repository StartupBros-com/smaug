---
title: "mattpocock/skills — code-smell review rules"
type: tool
date_added: 2026-06-30
source: "https://github.com/mattpocock/skills/pull/394"
tags: [agent-skills, code-review, refactoring, code-smells, llm]
via: "Twitter bookmark from @mattpocockuk"
---

Matt Pocock’s `skills` repository is a collection of small, composable workflows for coding agents. This pull request extends its `/review` skill with a set of code smells from Martin Fowler’s *Refactoring*, giving an LLM concrete structural patterns to inspect instead of only general instructions to review code.

## Highlighted review prompts

The announced smells include:

- Mysterious Name
- Duplicated Code
- Feature Envy
- Data Clumps
- Primitive Obsession
- Repeated Switches
- Shotgun Surgery
- Divergent Change

These patterns are especially amenable to automated review because they describe recognizable relationships across functions, types, and modules. The rules can help an agent flag maintainability concerns before they develop into bugs or costly refactors.

## Links

- [Pull request adding the review rules](https://github.com/mattpocock/skills/pull/394)
- [Repository](https://github.com/mattpocock/skills)
- [Original tweet](https://x.com/mattpocockuk/status/2071883208266776589)

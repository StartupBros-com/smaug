---
title: "cccc"
type: tool
date_added: 2026-11-22
source: "https://github.com/moznion/cccc"
tags: [code-complexity, cognitive-complexity, cyclomatic-complexity, rust, cli, ai-agents, testing]
via: "Twitter bookmark from @andrestaltz"
---

cccc is a fast Rust CLI (a single binary) and library that measures Cognitive Complexity (SonarSource / G. Ann Campbell) and Cyclomatic Complexity (McCabe). It routes each file to a language front-end by extension, so one run can analyze a mixed-language tree. Bookmarked because André Staltz uses it in an AGENTS.md rule to stop AI agents from writing trivial tests: skip tests for code with cognitive complexity of 5 or less, unless it contains regular expressions.

## Key Features

- Single `cccc` binary computing both cognitive and cyclomatic complexity
- Many languages supported through one shared engine, flags and output format, including TypeScript/JavaScript (oxc), Rust, Go, PHP, Ruby, Python, Java, Kotlin, Swift, C/C++, C#, Zig, Dart, Scala, Perl, shell and several Lisps
- Language-agnostic core crate (normalized IR plus scoring rules) reusable as a Rust library
- About 614 GitHub stars at time of bookmarking

## Links

- [GitHub](https://github.com/moznion/cccc)
- [Original Tweet](https://x.com/andrestaltz/status/2123503426218713176)

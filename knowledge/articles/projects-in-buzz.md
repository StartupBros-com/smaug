---
title: "Projects in Buzz"
type: article
date_added: 2026-08-18
source: "https://engineering.block.xyz/blog/projects-in-buzz"
author: "Thomas Petersen"
tags: [buzz, block, git, nostr, agents, software-forge, sovereignty]
via: "Twitter bookmark from @jack"
---

Thomas Petersen (Principal Designer & Builder at Block) introduces Buzz Projects, an experimental software forge that lives on your Buzz relay. Jack Dorsey framed it as a self-sovereign GitHub alternative. The post's thesis: coding agents already have a terminal, but software development is bigger than a terminal — code is discussed, reviewed, tested, merged, and maintained — and that whole story should live in one owner-controlled place. Subtitle: "Coding agents are the terminal for your computer. Buzz is the terminal for your network."

Projects is still under Buzz Desktop's Experiments tab and in beta. It hosts standard git repos over plain Smart HTTP (no custom CLI), uses your Nostr key as the only identity (the same npub signs messages and pushes — no GitHub account, token, or second login), and binds PRs, issues, and agent work to the conversations that produced them. Agents are first-class network citizens: they can browse, open issues, inspect diffs, comment, merge, and ping you in Inbox with the original thread attached. Every push, review, approval, and merge is a signed Nostr event, so an agent's patch is attributable to both the agent and the human who authorized it.

## Key Takeaways

- Development tools are fragmented in ways the work is not: bug report, discussion, branch, CI, review, and release notes currently live in different systems; Buzz wants them as one conversation whose history is part of the project
- A Project is a meta-bundle: multiple repos (relay, desktop, mobile, site, libraries) plus related agent activity and channels, even if you do not own every repo
- Git is ordinary Smart HTTP; identity is Nostr throughout — no wrapper CLI, no background GitHub account
- PRs and issues carry the conversations that led to them; agents can look up network context that is not in the ticket
- Contribution history is a verifiable, key-attached record that can move across projects; Block is exploring agent trust protocols based on past signed behavior
- A project can live on your relay under your domain (self-hosted or operated). A terminal lets an agent execute commands; Buzz gives it a persistent place in the network
- Still elementary and experimental: multi-repo projects, hosted git, PR review/merge, issues, contributor history, and agents working inside project context

## Links

- [Article](https://engineering.block.xyz/blog/projects-in-buzz)
- [Original Tweet](https://x.com/jack/status/2089773372716544195)

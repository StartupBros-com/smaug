---
title: "Foreman (eve Software Factory)"
type: tool
date_added: 2026-08-13
source: "https://github.com/vercel-labs/eve-software-factory-template"
tags: [vercel, eve, agents, software-factory, code-review, multi-agent, github, linear]
via: "Twitter bookmark from @Granite0x"
---

Vercel Labs template for **Foreman**, an eve software factory that puts a separate sandboxed agent on each stage of the development loop and keeps humans on the merge. Label a GitHub issue `factory` (or delegate from Linear / @mention / a local TUI) and Foreman walks it through four stations, then opens a draft PR for you to mark ready and merge.

Granite's write-up (58 stars at announcement; 936 when filed) is the reason this was bookmarked: one agent writing, reviewing, and merging its own work rubber-stamps its own bugs. Foreman splits the loop and runs the Reviewer on a *different model vendor* so it never sees the Implementer's reasoning — only the pushed branch. Agents cannot collude.

## How it works

- **Classifier** — triages type, priority, complexity, and whether the task is even actionable. Vague issues get questions instead of a wrong build.
- **Analyst** — turns the task into a plan with acceptance criteria against a live checkout of the repo.
- **Implementer** — codes in its own sandbox, runs the repo's own checks, pushes a branch.
- **Reviewer** — judges the real diff against the criteria, with evidence for each verdict; can send the work back (Granite: twice) before it becomes a draft PR.

Between runs Foreman keeps a **factory brain**: durable notes about the repo's quirks that every run starts from. Issue text cannot write into it, which is the prompt-injection guard.

Other arrival paths from the README: @mention on an issue or PR (owners/members/collaborators), Linear Agent Sessions, a local dev TUI (GitHub writes wait for approval), red CI on a factory PR (Foreman diagnoses and pushes a fix to *its* branches), and an orienting summary comment when someone else opens a PR.

MIT. One Vercel deploy button. Docs at [ask-foreman.dev](https://ask-foreman.dev). Built on Vercel's eve / Agent Stack.

## Key Features

- Four isolated stations; Reviewer is a different-vendor model that sees only the branch
- Factory brain that survives runs and cannot be written by issue text
- GitHub label, @mention, Linear, and local TUI entry points
- Draft PR is the human gate — review, mark ready, merge
- One-click Vercel deploy with GitHub + Linear connectors

## Links

- [GitHub](https://github.com/vercel-labs/eve-software-factory-template)
- [Docs](https://ask-foreman.dev/docs)
- [Original Tweet](https://x.com/Granite0x/status/2087960767287230592)

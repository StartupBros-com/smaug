---
title: "vectal-labs/repo-sync: Automatic Commit, Pull, and Push for Shared Git Repos"
type: tool
date_added: 2026-11-10
source: "https://github.com/vectal-labs/repo-sync"
tags: [git, automation, macos, go, team-tools]
via: "Twitter bookmark from @DavidOndrej1"
---

repo-sync is a small Go app for macOS that keeps Git repositories continuously in sync. After 60 seconds of quiet following an edit, it commits, pulls (rebase), and pushes in the background, starting at login. It is aimed at shared team repos full of documents, finance, legal, skills, and team context rather than complex software projects. David Ondrej announced it as free, open-source, and used by his whole team.

## Key Features

- Debounced auto-commit/pull/push after 60 seconds of inactivity, run as a background service started at login
- Install via Homebrew cask (`brew install --cask vectal-labs/tap/repo-sync && repo-sync setup`) or `go install`
- Commands: `repo-sync add [path]`, `repo-sync status`, `repo-sync uninstall`
- Optional agent skill (`repo-sync skill install`) that teaches an AI agent to set up, check, and stop it
- Safety: secret filenames (`.env`, `*.pem`, `.npmrc`) blocked by default, no force-pushes, aborts rebase on conflict and retries later, only syncs the remote default branch
- MIT licensed, macOS only (about 75 stars when captured)

## Links

- [GitHub](https://github.com/vectal-labs/repo-sync)
- [Original Tweet](https://x.com/DavidOndrej1/status/2097258691594445017)

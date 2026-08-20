---
title: "git-worktree Documentation"
type: article
date_added: 2026-02-20
source: "https://git-scm.com/docs/git-worktree"
author: "Git contributors"
tags: [git, worktrees, version-control, developer-workflow]
via: "Twitter bookmark from @bcherny"
---

The official `git worktree` documentation explains how one repository can support multiple working directories attached to different branches or commits. Worktrees share the repository's object database, so they avoid making a separate full clone for each parallel task while preserving independently checked-out files and branch state.

## Key Operations

- `git worktree add` creates an additional working tree, optionally on a new or existing branch.
- `git worktree list` reports registered worktrees and their associated revisions.
- `git worktree move` relocates a worktree, while `git worktree remove` unregisters and removes one.
- `git worktree lock` and `unlock` protect worktrees that may be temporarily unavailable, such as those on removable storage.
- `git worktree prune` removes stale administrative records for deleted worktree directories.

The documentation also covers branch-sharing constraints, per-worktree configuration, and management of linked-worktree references. In the linked Claude Code announcement, worktrees are the mechanism that gives parallel agents isolated filesystem states without requiring separate clones.

## Links

- [Documentation](https://git-scm.com/docs/git-worktree)
- [Original Tweet](https://x.com/bcherny/status/2025007393290272904)

---
title: "openai/git"
type: tool
date_added: 2026-07-31
source: "https://github.com/openai/git"
tags: [git, openai, performance, large-repos, scm, upstream, c]
via: "Twitter bookmark from @tnm"
---

Public C fork of git/git that OpenAI uses for large-repository performance, correctness, and testing work. Ted Nyman's policy is that generally useful patches go upstream in C rather than living in a private SCM. Codex builds also pick up more efficient git usage from the same work. 187 stars at capture; fork of git/git, language C.

The [patches & notes](https://openai-git-upstream.openai.chatgpt.site/) dashboard tracks an integration queue from local cooking through openai/git into git.git `seen` / `next` / `master`. Snapshot around 12 Aug 2026: 6 cooking, 19 merged to the fork, 4 in `seen`, 1 in `next`, 2 in `master`.

## Key Features

- Upstream-first C patches for large-repo git, not a separate Git implementation
- Sparse-index stash that avoids expanding the index for in-cone paths (18.87s → 0.06s in the published stash case)
- Path-walk pack-objects that can use reachability bitmaps and delta islands
- Safer concurrent packfile-URI downloads over HTTP
- Geometric repack combined with cruft packs; incremental MIDX that honors a custom base layer
- Bitmap commit selection weighted by dominated history (MIDX bitmap write 984.73s → 200.06s, same 578 bitmaps)
- Filesystem-monitor and `git status` proofs: worktree identity, attribute invalidation, config fingerprints, APFS/Linux bulk preload, closed scoped untracked-cache reuse
- Trace2 regions for packfile-URI download time and per-worker parallel-checkout load

## Links

- [GitHub](https://github.com/openai/git)
- [Patches & notes](https://openai-git-upstream.openai.chatgpt.site/)
- [Upstream git/git](https://github.com/git/git)
- [Original Tweet](https://x.com/tnm/status/2083328099975119044)
- [Public-fork policy tweet](https://x.com/tnm/status/2076098499842875790)

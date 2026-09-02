---
title: "OMP Best Of"
type: tool
date_added: 2026-08-17
source: "https://github.com/wolfiesch/omp-best-of"
tags: [oh-my-pi, omp, best-of-n, llm-as-a-verifier, coding-agents, git-worktree, test-time-scaling]
via: "Twitter bookmark from @wolfie_"
---

Oh My Pi extension that runs several candidate coding agents on the same task in isolated copy-on-write workspaces (OMP isolation, Git worktree fallback), ranks complete trajectories, and optionally applies only the winning patch. Wolfie built it as a wrapper around the Kwok et al. LLM-as-a-Verifier workflow so `/best-of --n 5 --apply …` is a first-class OMP command.

Selection is the hard part: sampling raises Pass@k, but you still have to pick. The default `logprob` backend shells out to pinned `llm-verifier==0.2.0` and runs the paper's continuous-score tournament (DeepSeek V4 Flash by default, because its native score-tag path works). A separate `sampled` backend is a conventional pairwise judge invoked through the `omp` binary so subscription routes such as `openai-codex/gpt-5.6-luna` work without API credits. The plugin does not claim the upstream paper's benchmark numbers.

## How it works

1. **Preflight** — refuse a dirty tree, record `HEAD`. Sampled mode then runs a local audit-sandbox check before any paid verifier probe.
2. **Fan out** — one OMP isolation workspace per candidate.
3. **Generate** — concurrent headless Oh My Pi sessions (JSON events; extensions and sessions off). Candidates inherit the calling session's model and thinking level unless `--model` / `--thinking` override.
4. **Collect** — transcript parse plus baseline-aware binary-safe patches. Non-zero exits or uncapturable patches are dropped before ranking.
5. **Rank** — logprob tournament or seeded sampled round-robin.
6. **Select** — apply the winner only with `--apply`, and only if parent `HEAD` is still unchanged.
7. **Clean** — tear down every workspace; keep artifacts.

## Requirements

- Oh My Pi 17+, Bun 1.3+, Git
- `uv` only for the logprob sidecar
- A verifier route in omp (score-capable endpoint for logprob; any omp model for sampled)
- Clean working tree

TypeScript, MIT, 49 stars at capture.

## Links

- [GitHub](https://github.com/wolfiesch/omp-best-of)
- [LLM-as-a-Verifier (upstream)](https://github.com/llm-as-a-verifier/llm-as-a-verifier)
- [Original Tweet](https://x.com/wolfie_/status/2089541657364754768)
- [Jacky Kwok on self-verification scaling](https://x.com/jackyk02/status/2089421448784023553)

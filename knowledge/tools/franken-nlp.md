---
title: "franken_nlp"
type: tool
date_added: 2026-07-31
source: "https://github.com/Dicklesworthstone/franken_nlp"
tags: [rust, nlp, local-llm, nanbeige, cpu-inference, structured-extraction, agent-skills, reality-check, beads]
via: "Twitter bookmark from @doodlestein"
---

Jeffrey Emanuel's (`@doodlestein`) FrankenSuite NLP engine: a pure-Rust, CPU-only, no-Python/no-CUDA runtime built around **one** model — [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) (Apache-2.0; ~4.17B params, 3.149B non-embedding; looped decoder that runs its 22 physical layers twice with a final RMSNorm after each pass). Target product is a local NLP toolbox (`fnlp` / `franken_nlp`) for schema-guaranteed structured extraction, source-grounded NER + entity resolution, sentiment scoring, zero-shot classification, PII redaction, faithfulness judging, summarization, keyphrases, QA, and generation. After a one-time digest-verified model pull the runtime is meant to stay offline.

The README is written in the **present tense as a 1.0 spec**, not as a status report. As of the 2026-07-31 reality-check, the binary only exposes `robot schema|health|backends`, `schema check|sample`, a provisional `convert` path, release-package scaffolding, and a `models derive` path that refuses until the owner-only model-root transaction is ratified. Inference, `pull`, `batch`, durable `job`, `doctor`, eval/calibrate/qualify, and installers are not live. [WIRING.md](https://github.com/Dicklesworthstone/franken_nlp/blob/main/WIRING.md) records DSR/`scripts/check.sh` authority as **BLOCKED**.

Bookmarked because Emanuel used `/reality-check-for-project` (from his paid [jeffreys-skills.md](https://jeffreys-skills.md/) pack) on a 12-agent GPT-5.6 Terra swarm that implemented the first wave, producing [docs/REALITY_BRIDGE_PLAN.md](https://github.com/Dicklesworthstone/franken_nlp/blob/main/docs/REALITY_BRIDGE_PLAN.md) — an independent audit that strips earlier "WORKING/proven/green" labels and lists what still lacks DSR, model, host, and release evidence.

## Key Features (1.0 target, not current binary)

- Model-specific Rust kernels: every weight-side dimension is a compile-time constant; the loop is scheduled as 44 KV slots (`layer + loop×22`), not a generic graph replay
- Structured outputs grammar-constrained during decode: JSON valid by construction; `verbatim` fields cannot contain off-source bytes
- Layer-major batch engine, prefix cache with copy-on-write forks, prefill-only scoring, crash-resumable NDJSON jobs
- Closed dependency universe; `unsafe` only in audited islands; nightly Rust 2024 edition
- Custom quantized format redistributed as digest-verified, provenance-attested GitHub release assets

## Links

- [GitHub](https://github.com/Dicklesworthstone/franken_nlp)
- [Reality-check / bridge plan](https://github.com/Dicklesworthstone/franken_nlp/blob/main/docs/REALITY_BRIDGE_PLAN.md)
- [Original Tweet](https://x.com/doodlestein/status/2083388824848138358)
- [Quoted workflow tweet](https://x.com/doodlestein/status/2041194080680477151)

---
title: "Incompressible Knowledge Probes: Estimating Black-Box LLM Parameter Counts via Factual Capacity"
type: article
date_added: 2026-04-28
source: "https://arxiv.org/abs/2604.24827"
author: "Bojie Li"
tags: [llm, scaling, benchmarks, research, ai]
via: "Twitter bookmark from @bojie_li"
---

A paper introducing Incompressible Knowledge Probes (IKP): 1,400 obscure factual questions across 7 tiers of difficulty, tested against 188 models from 27 vendors. The core finding is that factual knowledge scales log-linearly with parameter count (R² = 0.917 on 89 open-weight models from 135M to 1.6T params), enabling black-box model size estimation from API calls alone. Used to project closed-source model sizes: GPT-5.5 ~9T params, Claude Opus 4.7 ~4T, GPT-5.4 ~2.2T, Claude Sonnet 4.6 ~1.7T, Gemini 2.5 Pro ~1.2T.

## Key Takeaways

- Reasoning benchmarks compress and saturate; factual capacity does not — it scales linearly with parameters across 96 open-weight models over 3 years
- Factual accuracy can size any black-box LLM: penalized accuracy is log-linear in log(params) with R² = 0.917
- Citation count does not predict model memorization — models memorize impact (work that shaped a field), not incremental volume
- The IKP time coefficient is statistically zero, rejecting the Densing-Law prediction of +0.0117/month at p<10⁻¹⁵
- The insight originated from asking frontier models about USTC Hackergame CTF over three years, watching factual recall improve with model generations

## Links

- [Paper](https://arxiv.org/abs/2604.24827)
- [Interactive Visualization](https://01.me/research/ikp/)
- [Original Tweet](https://x.com/bojie_li/status/2049314403208896521)

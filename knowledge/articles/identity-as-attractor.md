---
title: "Identity as Attractor: Geometric Evidence for Persistent Agent Architecture in LLM Activation Space"
type: article
date_added: 2026-05-06
source: "https://arxiv.org/abs/2604.12016"
author: "Vladimir Vasilenko"
tags: [llm, ai-agents, interpretability, identity, activation-space]
via: "Twitter bookmark from @Anina_CE"
---

This paper tests whether an identity document for a persistent cognitive agent behaves like an attractor in an LLM's activation space. On Llama 3.1 8B Instruct, semantically equivalent paraphrases of a cognitive-core document clustered more tightly than structurally matched controls; the result was replicated on Gemma 2 9B. The authors interpret the effect as evidence that a semantically coherent identity specification can exert a stable representational pull, though the experiment measures internal-state geometry rather than proving durable agent identity across context resets.

## Key Takeaways

- Seven paraphrases of the identity document formed a tighter activation-space cluster than seven structurally matched control documents.
- The reported separation was strongest in mean-pooled hidden states sampled from layers 8, 16, and 24 of Llama 3.1 8B Instruct.
- A replication on Gemma 2 9B suggests the observed pattern is not unique to one model architecture.
- Ablations indicate that semantic content, plus sufficient structural completeness, matters more than exact wording for reaching the identity-associated region.
- Reading a description of the agent moved states toward the attractor less than operating with the identity document itself.

## Links

- [Paper (arXiv)](https://arxiv.org/abs/2604.12016)
- [Original Tweet](https://x.com/Anina_CE/status/2051955753267667089)

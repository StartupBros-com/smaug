---
title: "Stanford CME 295: LLM Evaluation"
type: video
date_added: 2025-12-26
source: "https://www.youtube.com/playlist?list=PLoROMvodv4rPZxxeUFvQHCkZJsaEBdDZj&si=5iQjZJNl-YvJ6EaS"
channel: "Stanford"
tags: [llms, evaluation, llm-as-a-judge, agentic-workflows, machine-learning]
via: "Twitter bookmark from @srishticodes"
status: transcribed
transcript_source: "yt-dlp-captions"
---

This CME 295 lecture presents LLM evaluation as a measurement-design problem rather than a single benchmark score. It first explains why human ratings are expensive and can be inconsistent, using inter-rater agreement measures such as Cohen's kappa to distinguish observed agreement from agreement expected by chance. It then contrasts reference-based metrics including METEOR, BLEU, and ROUGE with their limits on stylistic variation and correlation with human judgment.

The lecture introduces LLM-as-a-Judge: supply the original prompt, an output, and explicit criteria, then have a separate model return a rationale and score. It recommends structured output to make judge results parseable, asking for rationale before score, using crisp guidelines and simpler binary scales where possible, evaluating at low temperature for repeatability, and checking that judge ratings remain calibrated against human ratings.

It also identifies common judge biases: position bias in pairwise comparisons, a tendency to favor verbose answers, and self-enhancement when a model judges its own output. Suggested mitigations include swapping response order and aggregating judgments, stating length expectations in the rubric, and using a different, preferably stronger model as judge. For factuality, the course describes decomposing a response into claims, verifying each claim with retrieval or search, and aggregating the results with optional importance weights.

## Key Takeaways

- Evaluation should reflect the decision it will inform, not reduce broad quality to an unexamined scalar metric.
- Human review is the reference point, but structured LLM judging can make iterative evaluation faster and more interpretable.
- Judge prompts need explicit criteria and bias controls; otherwise the evaluator can optimize for presentation rather than correctness.
- Factuality evaluation benefits from checking individual claims, rather than rating a multi-claim response as wholly right or wrong.

## Links

- [YouTube playlist](https://www.youtube.com/playlist?list=PLoROMvodv4rPZxxeUFvQHCkZJsaEBdDZj&si=5iQjZJNl-YvJ6EaS)
- [Original Tweet](https://x.com/srishticodes/status/2004583963952865389)

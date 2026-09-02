---
title: "openai/privacy-filter"
type: tool
date_added: 2026-04-22
source: "https://github.com/openai/privacy-filter"
tags: [pii, privacy, nlp, open-source, openai, text-classification]
via: "Twitter bookmark from @scaling01"
---

OpenAI's privacy-filter is a bidirectional token-classification model for detecting and masking personally identifiable information (PII) in text. Released as open source, it applies NER-style token-level classification to identify PII spans — names, emails, phone numbers, addresses, and other sensitive entities — and can mask or redact them. This is a practical privacy-preserving tool for data pipelines that need to sanitize user-generated or document content before storage, training, or sharing.

## Key Features

- Bidirectional transformer token-classifier (NER-style) for PII detection
- Identifies and masks PII categories: names, emails, phones, addresses, etc.
- Open source release from OpenAI
- Available on Hugging Face for inference and fine-tuning

## Links

- [GitHub](https://github.com/openai/privacy-filter)
- [Hugging Face](https://huggingface.co/openai/privacy-filter)
- [Original Tweet](https://x.com/scaling01/status/2046972437422543064)

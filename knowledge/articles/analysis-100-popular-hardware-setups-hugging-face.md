---
title: "Analysis of the 100 Most Popular Hardware Setups on Hugging Face"
type: article
date_added: 2026-05-07
source: "https://x.com/i/article/2052018833469181954"
author: "Clement Delangue"
tags: [local-ai, hardware, hugging-face, inference]
via: "Twitter bookmark from @0xSero"
---

Clement Delangue analyzes the 100 most frequently reported local hardware configurations among Hugging Face users. The data comes from 297,135 opt-in profile reports and classifies the 140,141 top-100 reports into discrete GPU, SoC/APU, CPU-only, and CPU-plus-GPU configurations, avoiding misleading vendor comparisons across fundamentally different hardware categories.

The analysis finds distinct category leaders rather than a single local-AI winner: NVIDIA leads discrete GPUs, Apple dominates SoCs and APUs, and Intel leads CPU-only systems. It also shows that local builders often optimize for memory capacity and software compatibility over headline compute performance, explaining the enduring popularity of the 12 GB RTX 3060 and higher-memory Apple Pro and Max chips.

## Key Takeaways

- The top 100 configurations cover only 47% of reports, indicating substantial hardware fragmentation among local-AI builders.
- NVIDIA holds 97.3% of discrete-GPU reports, while Apple holds 95.6% of SoC/APU reports; comparing those shares directly obscures their different markets.
- The 12 GB RTX 3060 is the most common discrete GPU in the data, underscoring that VRAM can matter more than nominal GPU speed for fitting models locally.
- Intel leads CPU-only reports, but AMD Ryzen leads self-built CPU-plus-GPU systems, reflecting different broad-user and enthusiast segments.
- The survey is opt-in and likely undercounts cloud and shared-cluster hardware, so it is a directional view of Hugging Face’s local-builder community rather than the entire AI hardware market.

## Links

- [Article](https://x.com/i/article/2052018833469181954)
- [Dataset](https://huggingface.co/datasets/clem/100_most_popular_hardware_setups_on_HF)
- [Original Tweet](https://x.com/0xSero/status/2052295196516221180)

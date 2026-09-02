---
title: "Building a 1-Outlet, 4-GPU Workstation"
type: article
date_added: 2026-05-19
source: "https://x.com/i/article/2056415309213405184"
author: "Joe Barrow"
tags: [hardware, gpu, machine-learning, homelab]
via: "Twitter bookmark from @pupposandro"
---

Joe Barrow documents a home multi-GPU machine designed to fine-tune and run vision-language workloads while sharing a standard 15 A, 120 V household circuit. The approximately $4,500 build combines four power-limited RTX 3090 Ti cards for 96 GB of VRAM with an EPYC-based server board, 256 GB ECC RAM, and used storage. Its central lesson is that a capacity plan must account for transient power spikes, heat, noise, and the limits of secondhand components—not just nominal GPU wattage.

## Key Takeaways

- A server motherboard with plentiful PCIe lanes and slots makes a four-GPU system expandable without bifurcation, while used enterprise components reduce the initial cost.
- A single household circuit should be planned around a sustained load below its theoretical maximum; clock limits are needed in addition to `nvidia-smi` power limits to avoid overcurrent trips from transient spikes.
- Four RTX 3090 cards are preferable to 3090 Ti models for a similar 24 GB-per-card capacity because their lower TDP improves performance per watt and makes the household-power constraint easier to meet.
- ECC memory, GPU peer-to-peer support, remote access through Tailscale, and workflow tooling for code and data transfers complete the machine as a usable research system.
- The author advises weighing the living-space burden of a loud, hot workstation and the volatility and fraud exposure of used-parts markets before attempting the build.

## Links

- [Article](https://x.com/i/article/2056415309213405184)
- [Original Tweet](https://x.com/pupposandro/status/2056713480200237230)

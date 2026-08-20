---
title: "FrankenSim"
type: tool
date_added: 2026-07-13
source: "https://github.com/Dicklesworthstone/frankensim"
tags: [rust, simulation, physics, geometry, optimization, numerical-methods]
via: "Twitter bookmark from @doodlestein"
---

FrankenSim is a source-first Rust workspace for deterministic geometry, certified numerics, meshing, physics simulation, optimization, rendering, and the evidence needed to reproduce a design result. Its architecture makes units, numerical error, geometry conversion, runtime conditions, and experiment artifacts explicit rather than leaving those concerns distributed across disconnected engineering tools.

The repository currently comprises 159 native `fs-*` crates plus four standalone workspaces, with contracts and integration tests across runtime, numerical, geometry, meshing, solver, adjoint, optimization, imaging, and design-ledger layers. It includes a stable validation CLI, but it is not yet an integrated end-user simulator or crates.io product.

The linked expansion plan frames an agent-first future for the substrate: rather than use a GUI to develop one candidate design, coordinated agents could evaluate a much larger physical design space through unified simulation kernels and optimization pipelines. The author specifically imagines using that process to discover and test improved motors, generators, and other manufactured devices.

## Key Features

- Deterministic numerical and physics infrastructure with explicit validation contracts
- Geometry representations, meshing, solvers, adjoints, and optimization in one Rust workspace
- Evidence and design-ledger layers intended to preserve assumptions, artifacts, and reproducibility
- A planned agent-native workflow for exploring many simulated designs in parallel

## Links

- [GitHub](https://github.com/Dicklesworthstone/frankensim)
- [Expansion Plan](https://github.com/Dicklesworthstone/frankensim/blob/main/COMPREHENSIVE_PLAN_TO_EXTEND_FRANKENSIM_TO_NEW_DOMAINS.md)
- [Original Tweet](https://x.com/doodlestein/status/2076813600392400938)

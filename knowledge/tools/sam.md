---
title: "SAM (Sovereign Agent Mesh)"
type: tool
date_added: 2026-08-17
source: "https://github.com/google/sam"
tags: [agents, p2p, libp2p, mcp, biscuit, networking, golang, google]
via: "Twitter bookmark from @Itsuugo"
---

SAM (Sovereign Agent Mesh) is a Google-published, unofficial P2P network for autonomous AI agents. Kubernetes contributor Antonio Ojea built it as an "internet for agents": zero-config node discovery, zero-trust auth on every connection, and portable cryptographic identities that move across cloud, laptop, and edge. The data plane is libp2p; decentralized authorization uses Biscuit tokens. ~299 stars, Go. Not an officially supported Google product.

Three components: `sam-control-plane` (identity registry, authorization policy, router coordination), `sam-router` (libp2p bootstrap/relay), and `sam-node` (local client that exposes mesh transport plus an MCP sidecar so agents can discover and invoke tools on other nodes). A public testnet lives at `bananas.sam-mesh.dev`. Integrations cover Gemini, Claude, and other MCP-capable agents. Production path is Kubernetes manifests or the `sam-mesh` Helm chart.

The interesting use case is a warm pool: one agent fans a batch of work across reviewer agents already on the mesh instead of spinning cold workers. Getting on the mesh is framed as a one-liner — install the node, add the skill, and the agent can see remote tools.

## Key Features

- Zero-config P2P discovery with libp2p bootstrap/relay
- Zero-trust auth via Biscuit tokens on every node and packet
- MCP sidecar so agents dynamically discover and call tools across the mesh
- Environment-agnostic cryptographic identities (cloud / local / edge)
- Public testnet plus Helm/Kubernetes self-hosted hub

## Links

- [GitHub](https://github.com/google/sam)
- [Original Tweet](https://x.com/Itsuugo/status/2089317252390584733)

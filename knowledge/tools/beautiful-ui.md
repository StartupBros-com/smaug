---
title: "beautiful-ui"
type: tool
date_added: 2026-09-22
source: "https://github.com/slev12397/beautiful-ui"
tags: [ui, react, nextjs, design-system, ai-agents, shadcn]
via: "Twitter bookmark from @joshpuckett"
---

Copy-paste React interface primitives for AI-native products (thinking/reasoning states, streaming answers, human-in-the-loop approvals, tool-call status, diff tables, prompt bars), plus a live "harness" route composing them into a working agent chat. Bookmarked because @joshpuckett pointed to a commit in this repo while explaining why its Vercel bill spiked ($369): the gallery prefetched all source, demos, and images, and a demo video was served from the owner's own Vercel blob storage.

## Key Features

- One self-contained component per primitive, built on a small design-token layer (Tailwind v4 `@theme`, light/dark)
- Install via shadcn registry (`npx shadcn add https://www.beautifului.dev/r/<component>.json`) or manual copy-paste
- Stack: Next.js App Router, React, Tailwind CSS v4, TypeScript; MIT licensed
- Note: SidebarNav depends on a paid `@central-icons-react` license
- Cautionary tale on bandwidth: lazy-load source and demos, use long cache max-age with versioned filenames, avoid hotlinked media on your own blob storage

## Links

- [GitHub](https://github.com/slev12397/beautiful-ui)
- [Commit](https://github.com/slev12397/beautiful-ui/commit/c99a3586cf4fc093091feb47d3c066da1fb2e342)
- [Original Tweet](https://x.com/joshpuckett/status/2102585074277638617)

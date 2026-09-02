---
title: "chatbot-template"
type: tool
date_added: 2026-08-11
source: "https://github.com/shadcn-ui/chatbot-template"
tags: [shadcn, nextjs, vercel, chatbot, ai-sdk, hitl, tool-calling]
via: "Twitter bookmark from @shadcn"
---

Official shadcn-ui minimal chatbot starter: Next.js + Vercel AI SDK + shadcn/ui + shadcn/react + shadcn/typeset, one-click deploy to the Vercel AI Gateway (OIDC on Vercel, `AI_GATEWAY_API_KEY` locally). It packages the weeks of component work shadcn had been shipping — streaming markdown via typeset, typed message parts, tool calling, and a human-in-the-loop questionnaire — into a repo you can clone rather than assemble. Tools live one-file-per-tool under `tools/` (filename is the model-facing name) and compose in `tools/index.ts`: server-side GitHub repo lookup, provider-native web search, and `ask_user` (no `execute`; the UI collects answers). `InferUITools` makes `part.input` / `part.output` a type error if you rename a field.

`/api/chat` is public and unauthenticated — every request spends AI Gateway credits — so the README treats denial-of-wallet as the real threat and tells you to add WAF/`@upstash/ratelimit`, a Gateway spend cap, and auth before real traffic. Per-request it already validates the body, allowlists models from `lib/models.ts`, caps output tokens and step count, and aborts on client disconnect. MIT, TypeScript, created the same day as the tweet.

## Key Features

- Streaming chat with markdown + shadcn/typeset
- Typed message parts (`text`, `tool-github_repo`, `tool-web_search`, `tool-ask_user`, `source-url`) with per-state UI
- HITL questionnaire: the model asks clarifying questions, answers pin to the scroller
- One-click Vercel deploy; Gateway OIDC so production needs no API key in env
- Add-a-tool path: `tools/<name>.ts` + a `components/parts/` renderer + a switch case

## Links

- [GitHub](https://github.com/shadcn-ui/chatbot-template)
- [Original Tweet](https://x.com/shadcn/status/2087153563340325341)

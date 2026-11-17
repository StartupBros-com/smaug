---
title: "liveavatar-gpt-live-demos - HeyGen LiveAvatar Driven by OpenAI GPT-Live"
type: tool
date_added: 2026-11-10
source: "https://github.com/heygen-com/liveavatar-gpt-live-demos"
tags: [voice-agents, avatars, openai, heygen, typescript]
via: "Twitter bookmark from @CanavanCathal"
---

A minimal reference integration that wires OpenAI GPT-Live (a full-duplex speech-to-speech model) to a HeyGen LiveAvatar, giving a realtime voice agent a face whose tool calls appear on screen as animated overlays. Out of the box it is a Japanese tutor that speaks vocabulary, shows term cards, and periodically shrinks to a corner to display a recap panel built from the server's own session record.

## Key Features

- Orchestrator server sits between browser mic audio, GPT-Live websocket, and the LiveAvatar media server; browser never holds an API key (gets a LiveKit token only)
- Persona is two markdown files (server/prompts/instructions.md and greeting.md); each visual is one tool plus one composition
- Setup via `pnpm run setup` (verifies both API keys), then `pnpm dev` (server :8787, web :5173)
- Node 20.12+, pnpm, LiveAvatar and OpenAI keys with GPT-Live access (gpt-live-1)
- No push-to-talk or VAD; the model decides when the user is done talking

## Links

- [GitHub](https://github.com/heygen-com/liveavatar-gpt-live-demos)
- [Original Tweet](https://x.com/CanavanCathal/status/2098155036543213589)

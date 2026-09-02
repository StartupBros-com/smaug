---
title: "neuralese-leaker"
type: tool
date_added: 2026-08-11
source: "https://github.com/lyramakesmusic/neuralese-leaker"
tags: [llm, reasoning, openrouter, chain-of-thought, jailbreak]
via: "Twitter bookmark from @_lyraaaa_"
---

Local Python web app that chats with OpenRouter models and surfaces leaked, unabridged reasoning traces the providers normally hide. Lyra kept the method and the app closed until similar leaks circulated on Twitter, then published the repo on the assumption the window will close once vendors patch it.

Run `uv run chat_stream_fable.py` (or `python chat_stream_fable.py`) and open `localhost:5454`. At publish time Fable was returning server errors with this method; Opus 5, GPT-5.6, and o3 still worked. Author takes no responsibility and frames it as use-it-while-you-can.

## Key Features

- Chat UI over OpenRouter with hidden reasoning streamed in full
- Single-script local server on port 5454
- Worked on several frontier models at release; Fable already flaky

## Links

- [GitHub](https://github.com/lyramakesmusic/neuralese-leaker)
- [Original Tweet](https://x.com/_lyraaaa_/status/2087248726704505204)

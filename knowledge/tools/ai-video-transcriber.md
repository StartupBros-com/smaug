---
title: "AI Video Transcriber"
type: tool
date_added: 2026-08-11
source: "https://github.com/wendy7756/AI-Video-Transcriber"
tags: [transcription, whisper, yt-dlp, summarization, podcasts, youtube, fastapi]
via: "Twitter bookmark from @Ryrenz"
---

wendy7756/AI-Video-Transcriber is an open-source FastAPI app (~3.2k stars) that turns a video or podcast URL — or a local audio/video/text file — into a cleaned transcript plus multilingual summaries. It covers YouTube, TikTok, Bilibili, Apple Podcasts, SoundCloud, and other yt-dlp platforms, with a default 200 MB upload cap.

The pipeline is subtitle-first: native captions are pulled when they exist so there is no audio download; Faster-Whisper is only the fallback. An OpenAI-compatible LLM then fixes typos, completes sentences, paragraphs the text, summarizes in 11 languages, and translates when the summary language differs from the source. You paste any OpenAI-compatible base URL and key in the UI and fetch available models — no server-side env var required.

## Key Features

- Subtitle-first architecture; Whisper only when the platform has no captions
- Optional original-video download in parallel with transcription (toggle off for text-only)
- Local uploads: `.txt`, `.mp3`, `.mp4`, `.m4a`, `.wav`, `.webm`, `.mkv`, `.ogg`, `.flac` via FFmpeg normalize
- Live SSE progress with a badge for subtitle vs Whisper path
- Local install or Docker Compose; `python3 start.py --prod` keeps SSE stable on 30–60+ minute jobs
- Agent/API surface for Claude, Codex, or scripts

## Links

- [GitHub](https://github.com/wendy7756/AI-Video-Transcriber)
- [Original Tweet](https://x.com/Ryrenz/status/2087073028517609524)

---
title: "parakeet.cpp"
type: tool
date_added: 2026-10-04
source: "https://github.com/mudler/parakeet.cpp"
tags: [speech-recognition, asr, cpp, ggml, diarization, local-ai]
via: "Twitter bookmark from @CardilloSamuel"
---

parakeet.cpp is a C++17/ggml port of NVIDIA NeMo's Parakeet speech recognition models from the LocalAI team. It runs on CPU and GPU backends from self-contained GGUF files with no Python at inference time, and its transcripts match NeMo output. Bookmarked because @CardilloSamuel swapped Whisper for it in a Hermes voice setup and used its speaker-embedding model to recognize his own voice and self-enroll further voices (capped at 10).

## Key Features

- Parakeet ASR with word-exact parity against NeMo checkpoints; faster than Whisper per the author
- Voice activity detection, speaker diarization, speaker identification (enroll from short clips) and sound-event tagging
- Speaker embeddings exposed through the C API
- CPU, CUDA, Vulkan and Apple Metal backends; bundle GGUF packs ASR, VAD, diarization and voice models in one file
- Server and Docker images available

## Links

- [GitHub](https://github.com/mudler/parakeet.cpp)
- [Original Tweet](https://x.com/CardilloSamuel/status/2106837611503649214)

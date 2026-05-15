---
title: "llama.cpp"
type: tool
date_added: 2026-05-15
source: https://github.com/ggml-org/llama.cpp
tags: [llm-inference, local-ai, cuda, gguf, c-cpp, quantization]
via: "@sudoingX"
---

# llama.cpp

LLM inference in C/C++ by ggml-org. The reference inference engine for local/personal GPU inference. 110k+ stars.

## Key capabilities

- Plain C/C++ with no mandatory dependencies
- CUDA backend for NVIDIA GPUs (HIP for AMD, MUSA for Moore Threads)
- Vulkan and SYCL backends
- Apple Silicon support via ARM NEON, Accelerate, and Metal
- 1.5-bit through 8-bit integer quantization (GGUF format)
- CPU+GPU hybrid inference for models larger than VRAM
- OpenAI-compatible `llama-server` REST API out of the box
- Multimodal support in llama-server

## Build from source (CUDA)

```bash
git clone https://github.com/ggml-org/llama.cpp
cd llama.cpp
cmake -B build -DGGML_CUDA=ON -DCMAKE_CUDA_ARCHITECTURES=120
cmake --build build --config Release -j
```

GPU arch targets: `120` = RTX 5090, `89` = RTX 4090, `86` = RTX 3090, `80` = A100. For AMD swap `GGML_CUDA` for `GGML_VULKAN`.

## When NOT to use llama.cpp

- Multi-GPU batch serving at scale → vllm
- Production async high-throughput → vllm or sglang
- Apple Silicon → mlx is faster

## Why compile from source vs Ollama/LM Studio

Both are wrappers around llama.cpp. Compiling direct gives: latest features on merge day (Vulkan flash attention, dp4a, KV cache quant), exact GPU arch optimization flags, and direct control over all inference parameters.

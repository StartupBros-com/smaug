---
title: "minimal-embodiment"
type: tool
date_added: 2026-04-30
source: "https://github.com/oliviazzzu/minimal-embodiment"
tags: [embodied-ai, esp32, llm, self-perception, hardware, hci, open-source]
via: "Twitter bookmark from @oliviazzzu"
---

Reference implementation (C++ firmware + TypeScript bridge) for giving a large language model a closed-loop physical body on an ESP32 microcontroller. Six sensor inputs (temperature, humidity, pressure, light, motion, sound) pair with three output channels (haptic motor, OLED face, piezo buzzer). Two of those channels are coupled back to sensors — the buzzer feeds the microphone, the motor feeds the accelerometer — so the LLM can verify its own outputs landed in the physical world. The bridge service exposes nine HTTP endpoints; the LLM client calls them remotely, turning any cloud model into an embodied agent for roughly €125 in parts.

## Key Features

- Self-perception loops: LLM hears itself via buzzer↔microphone coupling and feels itself via motor↔accelerometer coupling
- Single-file TypeScript bridge (~1.2k lines, no production dependencies) listening on localhost:3737
- Arduino sketch (~1.1k lines C++) handles all sensor reads, haptic/OLED/buzzer output, and echo reporting
- Validation dataset included: 660 trials (30 reps × 22 conditions) backing the paper's latency tables
- MIT licensed; designed to be reproduced by beginners (author had never soldered before)
- Companion paper published on Zenodo (DOI 10.5281/zenodo.19903098) with full hardware BOM and wiring

## Links

- [GitHub](https://github.com/oliviazzzu/minimal-embodiment)
- [Paper (Zenodo)](https://zenodo.org/records/19903098)
- [Original Tweet](https://x.com/oliviazzzu/status/2049778751689425392)

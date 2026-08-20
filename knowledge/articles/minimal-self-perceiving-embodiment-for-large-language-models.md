---
title: "A Minimal Self-Perceiving Embodiment for Large Language Models"
type: article
date_added: 2026-05-05
source: "https://zenodo.org/records/19903098"
author: "Olivia Zhu"
tags: [embodied-ai, large-language-models, self-perception, esp32, human-ai-interaction]
via: "Twitter bookmark from @oliviazzzu"
---

This paper presents a small hardware-software body for an LLM: an ESP32 exposes environmental and contact sensing while a remote model can express through an OLED face, piezo buzzer, and haptic motor. The central design is two closed loops—buzzer to microphone and motor to accelerometer—so the model can receive physical evidence that its own actions occurred. The paper argues that perception, expression, and self-perception together form a minimal substrate for closed-loop physical agency rather than merely passive sensing or remote control.

## Key Takeaways

- Six sensing modalities span temperature, humidity, pressure, light, motion, and sound, while three outputs provide haptic, visual, and audio expression.
- Audio and haptic feedback loops let the LLM verify that its buzzer and motor outputs affected the surrounding physical system.
- The implementation documents how concurrent LLM-driven channels can share a TLS session on a constrained microcontroller.
- The project includes an end-to-end demonstration, hardware documentation, and validation data for reproducing its self-perception measurements.

## Links

- [Paper (Zenodo)](https://zenodo.org/records/19903098)
- [Implementation](https://github.com/oliviazzzu/minimal-embodiment)
- [Original Tweet](https://x.com/oliviazzzu/status/2051560644206326203)

---
title: "How to build a shitty robot"
type: article
date_added: 2026-05-30
source: "https://mariozechner.at/posts/2026-05-30-shitty-robot/"
author: "Mario Zechner"
tags: [robotics, local-ai, llm, speech-to-text, text-to-speech, webusb, typescript]
via: "Twitter bookmark from @badlogicgames"
---

Mario Zechner turns a 10-euro toy robot into an LLM-powered, voice-driven project intended to be simple enough for parents and children to reproduce. He begins by tearing down the Silverlit YCOO NEO OCTOBOT, tracing its single-layer PCB, and reusing its H-bridge motor driver after removing the original controller.

The toy's mechanics are part of the lesson: one motor drives either the legs or the turning platform depending on rotation direction, so the robot can only move forward and turn one way. Rather than redesigning that mechanism, Zechner uses cardboard for the chassis and a phone as the display and client.

The laptop-based server is intended to run speech-to-text, text-to-speech, an LLM, and its agent locally so a child's interactions remain private. The browser client exposes audio, camera, and USB motor control, with WebUSB making the phone-client approach unavailable in iOS Safari.

## Key Takeaways

- Reverse-engineering a cheap toy can expose reusable motors, power, and driver circuitry without needing a custom PCB.
- A narrow physical capability can still make an engaging agent interface when the software handles conversation and expression.
- Splitting the robot into a local AI server and a browser client keeps the hardware simple while retaining an upgrade path for local models.

## Links

- [Original article](https://mariozechner.at/posts/2026-05-30-shitty-robot/)
- [Original tweet](https://x.com/badlogicgames/status/2060901805433733520)

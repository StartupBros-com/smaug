---
title: "Build an AI Weatherman Character with Daily Bots"
type: video
date_added: 2024-10-01
source: "https://www.youtube.com/watch?v=2ukMoQRsL6w"
tags: [ai-characters, voice-agents, daily-bots, nextjs, function-calling, vtubers]
via: "Twitter bookmark from @gregisenberg"
---

# Build an AI Weatherman Character with Daily Bots

Greg Isenberg and developer Eric walk beginners through turning Daily Bots' browser demo into a voice-enabled AI weather character. The tutorial uses an existing starter repository so the work concentrates on configuration, personality, function calls, and deployment rather than building a real-time voice stack from scratch.

## What it teaches

- Daily Bots handles the voice-agent pipeline: speech-to-text, an LLM response, text-to-speech, and the integrations required to run it in a browser.
- Start by cloning the demo repository, adding a Daily API key to the local environment, and launching the Next.js app with the development command.
- Define a character in the configuration file to control its name, prompt, speaking style, and selectable persona.
- Give the model structured tools for actions such as looking up weather, with matching function names and parameter definitions on the client and server.
- Use deliberately unusual mock weather conditions to make successful function calls obvious in the demo and potentially more shareable in social video.
- Deploy the Next.js app through Vercel's CLI, then share the resulting URL so it runs on a phone or any browser.

## Design and product takeaways

The speakers frame character design as a product surface: personality, constraints, and memorable outputs can make a voice experience more engaging and more likely to be shared. They recommend making small, understandable changes to a working template rather than one-shotting an entire application with an AI coding tool.

For a more sophisticated experience, Eric demonstrates a personal video-call-style AI Vtuber application. That project uses Pipecat rather than Daily Bots for finer control over the voice and application data flow, illustrating a path from a managed beginner stack to a more customizable implementation.
---
title: "iPhone-use (Codex drives a real iPhone over USB)"
type: tool
date_added: 2026-10-08
source: "https://github.com/zhongerxin/iPhone-use"
tags: [codex, mcp, ios, automation, webdriveragent]
via: "Twitter bookmark from @wlzh"
---

iPhone Use lets Codex (and adapted versions for WorkBuddy and Doubao Work) operate a real iPhone over USB using natural-language tasks: open apps, read pages, tap, scroll, type text (including Chinese), and organize lists, while a sidebar widget shows the live phone screen. It talks to the phone through Appium's WebDriverAgent (WDA) and ships a local MCP server (17 tools per the tweet), setup/usage skills, and the screen widget. No jailbreak is needed, but the first run requires full Xcode and the user's own Apple account to sign and install the WDA Runner on the phone. MIT licensed, MacOS-based, about 5k stars shortly after creation.

## Key Features

- Local MCP service plus install and usage skills; install can be done by pasting a prompt into Codex so it sets itself up
- Falls back to screenshots and coordinate taps when element lookup fails, so the model reads the image and taps by position
- Direct-manipulation preview (click, drag, trackpad scroll), trimmed control tree (max 200 nodes), AirDrop file transfer guidance
- Passwords, verification codes and Face ID are left for the human to handle
- Sends anonymous usage analytics by default (PostHog/GA4); disable with IPHONE_USE_ANALYTICS=0 or DO_NOT_TRACK=1

## Links

- [GitHub](https://github.com/zhongerxin/iPhone-use)
- [Original Tweet](https://x.com/wlzh/status/2108113769196929071)

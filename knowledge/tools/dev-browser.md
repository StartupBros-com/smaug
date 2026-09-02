---
title: "dev-browser"
type: tool
date_added: 2026-03-25
source: "https://www.npmjs.com/package/dev-browser"
tags: []
via: "Twitter bookmark from @LLMJunky (quoting @sawyerhood)"
---

dev-browser is a CLI tool that gives AI agents fast, code-driven browser control by connecting to your actual Chrome instance via Google's WebMCP remote debugging protocol (`chrome://inspect/#remote-debugging`). Unlike sandboxed Playwright instances, it operates in the user's real browser session, preserving cookies, passwords, and existing authentication — making it suitable for agents that need to interact with authenticated services.

Install with `npm i -g dev-browser` and instruct your agent to "use dev-browser." The author's framing: the fastest way for an agent to use a browser is to let it write code rather than use visual click-automation.

## Key Features

- Connects to user's real Chrome instance (not a sandboxed environment)
- Preserves cookies, sessions, and passwords across agent interactions
- Uses Google's WebMCP protocol via Chrome remote debugging
- Code-driven browser control — agent writes code rather than clicking
- Requires enabling `chrome://inspect/#remote-debugging`

## Links

- [npm](https://www.npmjs.com/package/dev-browser)
- [Announcement Tweet](https://x.com/sawyerhood/status/2036842374933180660)

---
title: "AI Agents: What They Are and How to Build Your Own Step by Step"
type: article
date_added: 2026-06-16
source: "https://x.com/i/article/2062147039652155392"
author: "Anatoli Kopadze"
tags: [ai-agents, claude-code, telegram, automation, self-hosting]
via: "Twitter bookmark from @AnatoliKopadze"
---

Anatoli Kopadze presents AI agents as a spectrum rather than a binary category. A plain LLM chat has no independent action; an agentic system gains capability as it adds tool use, durable memory, and a loop that continues until its goal is complete. The article uses research, writing, coding, business-operations, and personal-planning agents to ground that model in current use cases.

The practical portion proposes a beginner-oriented path to a self-hosted Telegram agent built with Claude Code on a Linux VPS. It supplies prompts for a Python `python-telegram-bot` implementation, a systemd deployment, disk-backed per-user history, and incremental capabilities such as web search, note saving, account restriction, cost tracking, and daily briefings. The guidance emphasizes that persistent memory needs explicit storage, bounded history, and progress checkpoints rather than reliance on a single chat session.

## Key Takeaways

- Agentic behavior depends on the surrounding system—tools, memory, and iterative execution—not solely on the selected model.
- A useful first deployment can be a Telegram bot that gives Claude a conversational interface while retaining per-user context on disk.
- Durable operation requires practical controls: environment-based credentials, private-user restrictions, bounded conversation history, systemd restarts, and logs.
- Research, writing, code, business workflows, and personal planning are presented as distinct promptable agent patterns.
- Progress notes, periodic summaries, and a memory file mitigate context loss from long sessions, restarts, and interruptions.

## Links

- [Article](https://x.com/i/article/2062147039652155392)
- [Original Tweet](https://x.com/AnatoliKopadze/status/2066930058820780370)

---
title: "What if you don't need MCP at all?"
type: article
date_added: 2025-11-02
source: "https://mariozechner.at/posts/2025-11-02-what-if-you-dont-need-mcp/?t=0"
author: "Mario Zechner"
tags: [ai-agents, mcp, cli, browser-automation, developer-tools]
via: "Twitter bookmark from @badlogicgames"
---

Mario Zechner argues that an agent does not always need an MCP server when it can already run shell commands and write code. His alternative is a small, purpose-built command-line toolkit: composable scripts the agent can read in full, invoke directly, extend for the task, and use without routing every intermediate result through model context.

He illustrates the approach with browser automation. Rather than exposing a general browser DevTools MCP server, he gives an agent four Puppeteer Core-backed scripts: start Chrome with remote debugging, navigate tabs, evaluate JavaScript in the active page, and capture a screenshot. That constrained surface covers his frontend and scraping workflows while remaining understandable and easy to tailor.

The critique is not that MCP is categorically wrong. Zechner notes that MCP and Bash can both be efficient when designed carefully, but broad servers have to cover many use cases. Their numerous tool descriptions consume context, can confuse agents alongside other tools, and make small custom extensions harder than writing another focused script.

## Key Takeaways

- Prefer the narrowest interface that covers the agent’s actual job; general-purpose MCP servers can expose much more than a workflow requires.
- Bash scripts and ordinary code compose through files and pipes, so large results can stay out of the model context until they are needed.
- A short README documenting a small local toolkit can give an agent enough operational context without loading an entire server’s tool schema.
- For the author’s browser workflow, four CDP operations—start, navigate, evaluate, and screenshot—are more useful than a comprehensive DevTools interface.
- Custom scripts are easy for an agent to inspect and extend, whereas modifying an existing MCP server requires understanding and maintaining its codebase.

## Links

- [Article](https://mariozechner.at/posts/2025-11-02-what-if-you-dont-need-mcp/?t=0)
- [Original Tweet](https://x.com/badlogicgames/status/1985127737481154951)

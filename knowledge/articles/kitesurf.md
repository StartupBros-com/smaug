---
title: "Introducing Kitesurf: The agent-first browser that runs in V8 isolates on Cloudflare Workers"
type: article
date_added: 2026-08-06
source: "https://blog.cloudflare.com/kitesurf/"
author: "Celso Martinho"
tags: [cloudflare, browser-run, browser-automation, agents, rust, v8-isolates, cdp]
via: "Twitter bookmark from @DanielMiessler"
---

Kitesurf is Cloudflare’s agent-focused browser, built to run on its Workers platform rather than allocating a full Chromium process to every task. It separates persistent browser session state in an Engine isolate from short-lived PageScript isolates that construct DOMs, parse HTML and CSS with Rust components, and run page JavaScript or Wasm. A distinct PageRenderer turns page scenes into PNG, JPEG, or PDF output, while a SandboxOutbound worker intermediates every external request to apply CORS, headers, response filtering, and page-specific cookie isolation.

The project exposes CDP and REST interfaces, so existing tools such as Puppeteer, Playwright, Chrome DevTools, and compatible agent clients can connect without a bespoke browser protocol. Cloudflare presents it as best suited to isolated, short-lived work such as extracting content, taking screenshots, and generating PDFs. Its published 14-URL benchmark reports materially lower CPU and memory use than warm Chromium, but longer elapsed execution time for screenshots and HTML extraction.

Kitesurf is free in beta through Cloudflare Browser Run within account limits; callers select it with `browser=kitesurf` in the CDP or Quick Actions endpoints, and Chromium remains the default. The beta does not yet target video, WebGL, real-TLS bot challenges, or persistent authenticated browser sessions.

## Key Takeaways

- Kitesurf is an agent-first browser that runs in V8 isolates on Cloudflare Workers, not full Chromium processes.
- Its Engine, PageScript, PageRenderer, and SandboxOutbound components separate sessions, page execution, rendering, and network control.
- Standard CDP compatibility allows existing automation clients, including Playwright and Puppeteer, to use it.
- Cloudflare reports 3.1–3.8× less CPU use and 4.7–7× less memory than warm Chromium on its stated benchmark.
- It is roughly 1.7–1.8× slower in elapsed time for HTML extraction and screenshots, trading latency for lower resource use.
- The free beta is designed for stateless tasks, not video, WebGL, strong bot checks, or durable logged-in sessions.

## Links

- [Article](https://blog.cloudflare.com/kitesurf/)
- [Original Tweet](https://x.com/DanielMiessler/status/2085435725835825246)
- [Quoted Announcement](https://x.com/CloudflareDev/status/2085394318005846411)

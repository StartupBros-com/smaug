---
title: "X API + Hermes via xurl skill"
type: article
date_added: 2026-05-19
source: "https://x.com/i/article/2055126803224883200"
author: "X Developers"
tags: [hermes, xurl, x-api, agents, oauth]
via: "Twitter bookmark from @XDevelopers"
---

This setup guide connects Nous Research’s terminal-based Hermes agent to X through the `xurl` skill. It covers installing Hermes, selecting an xAI Grok OAuth provider, installing the standalone xurl CLI, registering an X developer app, completing OAuth 2.0, and invoking the skill with natural-language requests. The resulting agent can post, search, inspect timelines, retrieve and manage bookmarks, work with lists, and perform other X API actions through conversational instructions.

## Key Takeaways

- Hermes must be installed and configured with a model provider before its xurl skill can make use of the X API.
- xurl is a separate CLI and must be installed, placed on `PATH`, and authenticated independently of Hermes.
- An X developer app needs OAuth 2.0 credentials and the exact `http://localhost:8080/callback` redirect URI.
- Keeping the `--app` flag during xurl OAuth authentication avoids associating tokens with the wrong application and the resulting 401 failures.
- Once authenticated, Hermes translates natural-language requests into xurl commands for posting, search, bookmarks, timelines, and other supported API operations.

## Links

- [Article](https://x.com/i/article/2055126803224883200)
- [Original Tweet](https://x.com/XDevelopers/status/2056871280599847054)

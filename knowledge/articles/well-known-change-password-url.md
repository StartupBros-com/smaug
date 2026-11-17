---
title: "Help users change passwords easily by adding a well-known URL for changing passwords"
type: article
date_added: 2026-08-28
source: "https://web.dev/articles/change-password-url"
author: "web.dev (Google Chrome team)"
tags: [web, security, passwords, authentication]
via: "Twitter bookmark from @DanielLockyer"
---

A web.dev guide to the /.well-known/change-password convention. If a site redirects requests for that path to its real password-change page, password managers and browsers can send users straight there instead of making them hunt through account settings. This matters most when a manager flags a weak, reused or breached password and wants to prompt a change.

## Key Takeaways

- Serve `https://<your-domain>/.well-known/change-password` and redirect it (302, 303 or 307) to the actual change-password page.
- Chrome, Safari and major password managers use the URL to take users directly to the change flow.
- Password managers now detect vulnerable passwords, but a change page buried deep in a site is hard to reach without this redirect.
- Cheap to implement: a single redirect rule, no UI work.

## Links

- [Article](https://web.dev/articles/change-password-url)
- [Original Tweet](https://x.com/DanielLockyer/status/2093264247530676501)

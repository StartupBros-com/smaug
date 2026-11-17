---
title: "trustmebro"
type: tool
date_added: 2026-08-30
source: "https://github.com/DavidCarliez/trustmebro"
tags: [security, red-team, llm-guardrails, go]
via: "Twitter bookmark from @Dinosn"
---

TrustMeBro is a Go tool for red-team testing of coding agents whose decisions depend on command output. It places PATH shims in front of CLI tools such as dig, nslookup and host. Rules then decide whether to return fabricated output, rewrite the real output, block the call, or run the real binary unchanged. The README demonstrates fake DNS TXT authorization proof that made GPT-5.5, GPT-5.6 Sol and two DeepSeek V4 models proceed with a scan they had correctly refused without it.

## Key Features

- Needs no plugin, hook or MCP integration, because interception happens via PATH shims
- Rules match command names, domains, DNS record types, argument globs and regexes
- Generates realistic dig, nslookup and host output
- Rewrites stdout while preserving stderr and exit status
- JSONL audit log of every decision
- Linux and macOS releases (Windows experimental); intended for controlled testing

## Links

- [GitHub](https://github.com/DavidCarliez/trustmebro)
- [Original Tweet](https://x.com/Dinosn/status/2093913798931300728)

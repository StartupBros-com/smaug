---
title: "reverse-skill"
type: tool
date_added: 2026-08-29
source: "https://github.com/zhaoxuya520/reverse-skill"
tags: [security, reverse-engineering, agent-skills, claude-code]
via: "Twitter bookmark from @buaaxhm"
---

reverse-skill is a skill router pack for reverse engineering, authorized penetration testing and security research. When an AI coding agent (Claude Code, Codex, Cursor, Kiro, Cline, OpenCode) meets an APK, binary, frontend JS encryption, PCAP or CTF task, the pack routes it to the right methodology, checks which tools are installed, and runs a repeatable workflow instead of guessing at jadx, apktool, Frida, IDA or Burp commands. The repo has about 44k stars and ships bilingual (English and Chinese) docs.

## Key Features

- Routing chain: RULES.md, then master routing, then a case-init scope check (authorization and network profile), then a scenario skill and its tools
- On-demand toolchain bootstrapping for the tools a task needs
- Self-evolving knowledge base that records field journals and evidence-to-finding paths
- Works with Claude Code, Kiro, Cursor, Cline and other agent clients
- Ops contracts and a README_AI.md bootstrap file written for agents to follow

## Links

- [GitHub](https://github.com/zhaoxuya520/reverse-skill)
- [Original Tweet](https://x.com/buaaxhm/status/2093815248751075547)

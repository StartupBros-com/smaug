---
title: "T3MP3ST"
type: tool
date_added: 2026-07-06
source: "https://github.com/elder-plinius/T3MP3ST"
tags: [ai, agents, multi-agent, offensive-security, red-team, typescript]
via: "Twitter bookmark from @7h3h4ckv157"
---

## Overview

T3MP3ST is a self-hosted, multi-agent framework for authorized offensive-security assessments. It wraps an AI coding agent the operator already runs and coordinates stages such as reconnaissance, exploitation, and reporting through a CLI and browser-based War Room.

## Scope and approach

The project describes support for web-application testing, CTF challenges, source-code analysis, robotics or embedded OSS vulnerability research, and limited smart-contract reproduction. It can use local or hosted coding-agent backends, including Claude Code, Codex, and offline model runners, rather than requiring a separate platform API key.

Its README emphasizes reproducibility: it includes benchmark data and an `npm run verify-claims` command intended to recalculate reported results. The maintainers explicitly frame the software for systems the user owns or has written authorization to test.

## Notes

- GitHub metadata at bookmarking time: 5,621 stars; TypeScript.
- License: AGPL-3.0.
- The status documentation distinguishes stable functionality from experimental and roadmap work.

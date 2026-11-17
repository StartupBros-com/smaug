---
title: "xai-org/plugin-marketplace"
type: tool
date_added: 2026-11-10
source: "https://github.com/xai-org/plugin-marketplace"
tags: [plugins, marketplace, grok, agents]
via: "Twitter bookmark from @illyism"
---

Official xAI plugin marketplace for Grok Build. The repo is an index that points at plugin sources so Grok Build can browse, install, and update them. It mirrors the plugin/skill marketplace model used by Claude and Cursor, and was bookmarked as one of several agent/plugin directories worth getting listed in early.

## Key Features

- Catalog index in `.grok-plugin/marketplace.json` is the source of truth; `plugin-index.json` is generated and lists the components each plugin provides
- First-party plugins live in `plugins/`, third-party ones in `external_plugins/`
- A plugin bundles skills (`SKILL.md`), slash commands, subagents, hooks, MCP servers, and LSP servers, with an optional `plugin.json` manifest
- Remote sources must pin a full 40-character commit SHA, which Grok Build re-verifies after cloning
- Entries support keywords and domains so plugins can be suggested from a request or a pasted URL

## Links

- [GitHub](https://github.com/xai-org/plugin-marketplace)
- [Original Tweet](https://x.com/illyism/status/2094918348551204880)

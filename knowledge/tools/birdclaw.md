---
title: "birdclaw"
type: tool
date_added: 2026-04-27
source: "https://github.com/steipete/birdclaw"
tags: [twitter, sqlite, local-first, archive, bookmarks, agents, typescript]
via: "Twitter bookmark from @steipete"
---

birdclaw is a local-first Twitter workspace built by @steipete that stores all Twitter data (tweets, DMs, likes, bookmarks) in a local SQLite database with FTS5 full-text search. It imports Twitter archives, syncs live data via xurl/bird helper tools, and backs up to Git as human-readable JSONL shards. A local web UI covers timelines, mentions, DMs, and inbox triage with AI ranking. The agent-readable JSON output makes it useful for automation pipelines.

## Key Features

- Local SQLite storage with FTS5 full-text search over tweets and DMs
- Twitter archive import (tweets, likes, profiles, DMs, bookmarks)
- Live sync for likes, bookmarks, mentions, and DMs via xurl/bird
- Git-friendly text backups: yearly tweet shards, per-conversation DM shards
- Local web UI: Home, Mentions, Likes, Bookmarks, DMs, Inbox, Blocks screens
- AI-ranked inbox using OpenAI scoring hook for mention/DM triage
- Scriptable JSON output designed for agents and automation

## Links

- [GitHub](https://github.com/steipete/birdclaw)
- [Original Tweet](https://x.com/steipete/status/2048626844694421842)

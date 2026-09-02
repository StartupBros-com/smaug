---
title: "Five architectures for agent memory around a harness"
type: video
date_added: 2026-08-07
source: "https://www.youtube.com/channel/UCx-OfB7xsTN_GnoplitHfXg"
channel: "Sean AI Stories"
tags: [youtube, agent-memory, waku-agent, hermes, mem0, zep, langmem, rag]
via: "Twitter bookmark from @ShenSeanChen"
---

Lecture from Shen Sean Chen's channel on how to design memory *around* an agent harness. Auto-translated Chinese captions (~41k chars); the attached URL is the channel, not a single-video watch page. The frame is three questions — what is it, how do you find it, how do you maintain it — then a live bake-off inside the Waku Agent dashboard.

An LLM call carries no memory weights. ChatGPT and Claude Code "remember" because their harness wrote a memory system, not because the model did. Waku (and Hermes) split that system into procedural skills, semantic facts, and episodic events, with a retrieval gate in front of the loop.

## Storage, retrieval, maintenance

Storage is three shapes: plain markdown (`memory.md`, `SOUL.md` — Hermes and Waku both do this), tables/rows (spreadsheets, SQLite, Postgres), and graphs of nodes and edges (Zep's temporal knowledge graph). Vector DBs are a retrieval index over one of those shapes, not a fourth kind of memory — pgvector is still rows plus a vector column.

Retrieval is four modes: do nothing and preload a short `memory.md` into every turn (Hermes' default, same tax as a fat `CLAUDE.md`); keyword search (SQLite FTS5 over `state.db`); embedding similarity / RAG; Graph RAG, which embeds nodes *and* edges so the hit can return a subgraph of relations, not just a chunk.

Maintenance is the part most wrappers skip: add, delete, overwrite, no-op, or **retire** (invalidate a fact without erasing the history — "1,000 stars in 25 days" stays true after you record 1,300 on day 26). Plus attribution (did this come from the user, a web search, or the calendar?) and reflection / "dreaming": an off-turn job that merges duplicates and drops stale items the way Anthropic describes memory consolidation.

## What he actually compared

Product tour plus Waku's Memory Arena seeded the same dinner-party facts (Jensen spilling chili oil, Elon arriving at 9 not 7, Paul Graham owing £20 from a Lisbon sourdough bet, Tom Holland leaking an ending) across SQLite, mem0 (row + graph), LangMem (a store-agnostic LangChain wrapper with no DB of its own), Zep (temporal graph), and a no-memory control. SQLite and mem0 answered in ~4–6s; LangMem ~7.5s; Zep was correct once the graph finished building but so slow he called it overkill for small personal agents. The control correctly knew nothing. Keyword SQLite stumbled on a Chinese probe of an English fact; mem0 and LangMem did not. Repo `examples/memory-native/` shows the same facts wired through each client.

His close: Hermes and Pi keep memory boring on purpose so people actually start; pick the layer that matches the job and treat the accumulated memory file as the harness's real asset.

## Key Takeaways

- Memory is a harness feature (store + retrieve + maintain), not a model weight
- Three stores (text, rows, graph) and four finds (preload, FTS, RAG, Graph RAG); vectors index a store, they are not the store
- Prefer retire/invalidate over delete so history stays attributable
- Reflection/dreaming is offline consolidation, not a turn-loop tool call
- For a personal agent, SQLite or mem0 beat a temporal graph on latency; Zep's graph is richer and much slower to seed

## Links

- [YouTube channel](https://www.youtube.com/channel/UCx-OfB7xsTN_GnoplitHfXg)
- [waku-agent](https://github.com/ShenSeanChen/waku-agent)
- [Original Tweet](https://x.com/ShenSeanChen/status/2085660113273020432)

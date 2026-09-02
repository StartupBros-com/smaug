---
title: "Using RLMs with Deep Agents"
type: video
date_added: 2026-08-07
source: "https://www.youtube.com/watch?v=5_LLMZfKI6w"
channel: "Sydney Runkle"
tags: [youtube, rlm, recursive-language-models, deep-agents, langchain, dcode, code-interpreter, oolong]
via: "Twitter bookmark from @sydneyrunkle"
status: transcribed
transcript_source: "yt-dlp-captions"
---

LangChain OSS engineer Sydney Runkle walks through recursive language models (RLMs) as implemented in Deep Agents: a supervisor that writes code to call itself (and subagents) so bulk context lives in variables and files instead of the model's window. The pitch is divide-and-conquer for work that agents fail at scale — thousand-line files, finite context, and lossy summarization — with code-shaped orchestration (loops, fan-out, pipelines) and more deterministic coverage on large data jobs.

## Video Info

- **Channel:** Sydney Runkle (LangChain)
- **Title:** Using RLMs with Deep Agents
- **Why bookmarked:** Compact definition of the then-buzzy "RLM harness" plus a concrete Deep Agents / dcode path to turn it on

## How it works in Deep Agents

Deep Agents is LangChain's open-source harness for general-purpose agents on complex tasks. RLM support is a code-interpreter middleware, not a heavier sandbox: the main agent gets a `task()` function inside that interpreter, writes code that calls `task()` to spawn subagents, and can wrap those calls with prep and aggregation. Enable it with the `createDeepAgent` primitive plus the code-interpreter middleware. In **dcode** (their terminal coding agent on the same harness), the keyword **workflow** is the trigger.

Live demo: "run a workflow to generate 16 haikus about breakfast and pick a winner in a tournament." Sixteen subagents write haikus; the model drives JSEval through round-of-16 / quarters / finals, recovers from a bad code snippet, and lands on a berries haiku.

## Oolong results

They test on the Oolong AG-News slice: thousands of unlabeled (date, user, headline) rows. The model must classify each headline into World / Sports / Science and Tech / Business, then answer distributional questions — raw counts, user-filtered counts, and temporal comparisons (e.g. "before August 2004, was Sports more common than World?"). A plain Deep Agent and the RLM-enabled one look similar at 64k context; at 128k the RLM agent pulls ahead because the baseline starts refusing or saying it is blocked. Tradeoff: higher latency and token cost; Runkle thinks skills that teach the approach could cut spend.

## Key Takeaways

- An RLM is a model that can call itself; in Deep Agents the recursion is code the supervisor writes, not a hidden graph
- Context in variables/files beats stuffing the window and then summarizing
- Turn it on with code-interpreter middleware; in dcode, say **workflow**
- The gap shows up on long-context aggregation (Oolong at 128k), not on short tasks
- Expect more tokens and latency; the win is not giving up when the table is huge

## Links

- [Video](https://www.youtube.com/watch?v=5_LLMZfKI6w)
- [Original Tweet](https://x.com/sydneyrunkle/status/2085827387892359467)

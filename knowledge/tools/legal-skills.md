---
title: "legal-skills"
type: tool
date_added: 2026-08-12
source: "https://github.com/gfodor/legal-skills"
tags: [patents, legal, agent-skills, claude-code, uspto, open-source]
via: "Twitter bookmark from @gfodor"
---

Greg Fodor's `legal-skills` is a public, executable playbook for U.S. utility-patent work: `SKILL.md` files, checklists, examiner/adversary protocols, intake questionnaires, and deterministic Python that make a language model do the process work a patent boutique invoices at several hundred dollars an hour. The stated goal is to displace legal fees, not "assist" counsel. GPL-3.0. It is not a law firm, not legal advice, does not file or sign anything, and refuses reserved acts (declarations under penalty of perjury, IDS materiality calls, assignments, PTO payments).

Three skills, meant to run in order:

- **patent-audit** — 316-item primary-source pre-filing checklist (35 U.S.C., 37 CFR, MPEP). 105 items are blocking. 28 mechanical (Python), 169 assisted, 119 judgment. 26 can only be answered from intake facts. Agents are forbidden to edit the draft. Silence is never a pass (`cannot_assess` is valid).
- **patent-examine** — recurrent simulated USPTO prosecution until two independent examiners clear the same version; amend only after a simulated Office Action.
- **patent-workaround** — adversarial design-around: can a competitor keep the commercial value and miss the claims? Iterate examine ↔ workaround until two examiners and two adversaries clear the same packet.

Audit phases: intake questionnaire → deterministic pre-pass (parse, mechanical checks, deadline table) → fail-fast gates (threshold / inventorship / priority) → eight specialist plus three red-team agents on the whole application (chunking the spec is treated as a bug) → three fresh verifiers on every blocking fail (2 of 3 to survive) → synthesis that reports `not_reached`. Dates, claim counts, fee tiers, dependency graphs, and numeral reconciliation run in Python because models cannot do them.

Copy `patent-audit`, `patent-examine`, and `patent-workaround` into the host skills directory (`~/.claude/skills/`, `~/.grok/skills/`, etc.). Python 3 required; PDF needs PyMuPDF, `.docx` needs python-docx.

## Key Features

- 316-item statute/MPEP-cited pre-filing audit with blocking flags and honest coverage accounting
- Simulated USPTO examination loop plus competitor design-around red team
- Deterministic parsers and state lockers so the model cannot invent "all numerals consistent"
- Whole-application context for every agent; no spec chunking
- Explicit refusal of acts reserved to a registered practitioner

## Links

- [GitHub](https://github.com/gfodor/legal-skills)
- [Original Tweet](https://x.com/gfodor/status/2087658547140276534)

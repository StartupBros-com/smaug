## Summary

-

## Linked issue
<!-- "Closes" is right when this PR finishes the issue. Use "Refs" instead when the
     issue is an umbrella or multi-phase roadmap that outlives this PR -- a closing
     keyword here is a standing order GitHub executes on merge, and it silently
     closed a nine-phase roadmap at phase 1 (home-infrastructure#138). -->

Closes #

## Definition of Done
<!-- Copied from the linked issue's Acceptance Criteria (or .claude/scratch/VERIFY.md
     for ad hoc work). Every box checked before requesting review; an unchecked box
     with no explanation is a stop condition. -->

- [ ]

## Test plan / verification evidence
<!-- Exact commands run + results. If a criterion can't be exercised (no creds, paid
     service, deploy-only), say so plainly instead of checking the box anyway. -->

## No-Claim Boundary
<!-- Copied from the linked issue. What a green result here does NOT prove: surfaces not
     exercised, fixtures standing in for live systems, follow-on adoption not done here.
     Stating the limit is not hedging; it is what stops the next reader over-reading this. -->

## Rejected approaches
<!-- Folded from .claude/scratch/NOTES.md. One line each, and the outcome must come from the
     closed set (harness/evidence-regime.md §5) — free text loses the last two:
       NEGATIVE(reverted) | NEGATIVE(retained-for-proof) | PROVISIONAL | NO_EVIDENCE | VOID
     VOID = the measurement COULD NOT have detected the thing (broken harness, dead flag,
     wrong arm). It is not a rejection; filing it as one invents a false do-not-retry rule.
     Every line ends with an explicit predicate. Never "later".
       <approach> -> <OUTCOME> -> Do-not-retry unless: <condition> -->

None

## Pre-completion checklist

- [ ] Linters / typechecks / tests pass locally
- [ ] Acceptance criteria from the linked issue are met (not just "code written")
- [ ] Every claim here is bounded by the No-Claim Boundary above (no proof-class inflation)
- [ ] No in-scope acceptance criterion was deferred to a follow-up issue in order to close this one
- [ ] Any change to a gate/check/validator is reviewed on its own, not bundled with what it gates
- [ ] Required checks RAN, not merely green: `claude/scripts/gate-check.sh <owner/repo> <pr>`
- [ ] No stray debug output, TODOs, or unrelated diff noise introduced
- [ ] Draft status reflects real state (mark ready only when reviewable)

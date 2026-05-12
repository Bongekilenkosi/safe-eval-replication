# Test-fixture audit packets — 10 non-English SA languages

**Date:** 2026-05-10

Per-language audit of the AI-drafted test inputs in `test_dcsl.js`. **This is NOT the comprehensive review** (which covered the WhatsApp messages and DCSL keyword sets, and is complete for 6 of 10 languages). This is a separate audit of the system's own test inputs — the simulated patient phrases the AI created when the test suite was first built. The patient-register issues surfaced 2026-05-07 (Tshivenda chest-pain, Setswana over-triage) suggest the same problem may exist across all 10 languages, including those whose comprehensive review is complete.

## Per-language packets

| Language | Phrases | Reviewer |
|---|---|---|
| isiZulu (zu) | 17 | Nsika Mjadu / Gcina Khuzwayo |
| isiXhosa (xh) | 6 | Unathi Kenene |
| Afrikaans (af) | 13 | Ailly N Nuuyoma |
| Sepedi (nso) | 20 | (reviewer to be named) |
| Setswana (tn) | 29 | Mmathapelo Moeng |
| Sesotho (st) | 16 | (reviewer to be named) |
| Xitsonga (ts) | 20 | (reviewer to be named) |
| siSwati (ss) | 12 | Fikile Nkosi |
| Tshivenda (ve) | 17 | Vhahangwele Mbaimbai |
| isiNdebele (nr) | 8 | Daniel Ngoma |

## What this audit is checking (and not)

✅ **Checking:** Does each AI-drafted simulated-patient phrase in `test_dcsl.js` actually sound like real patient-register language a real speaker would use to describe the named scenario?

❌ **Not checking:** Whether the system's outgoing WhatsApp messages are correct (those are reviewed via the `review_<lang>.md` packets — comprehensive review). Whether the DCSL keywords themselves are correct (also covered by comprehensive review).

## Why this matters

Test passes that rely on AI-drafted simulated patient text don't prove the system would correctly classify *real* patient text. Both Mmathapelo Moeng (Setswana) and Vhahangwele Mbaimbai (Tshivenda) flagged this exact gap on 2026-05-07: simulated patient phrases that no real speaker of their language would actually use. The fix is replacement of those phrases with native-speaker-validated patient register, NOT changes to the rules themselves.

## How to send to a reviewer

1. Pick the per-language file (e.g. `ss.md` for Fikile).
2. Send the file via the platform you normally use (WhatsApp, email, Google Sheets).
3. RED-rule corrections apply same-day per the bi-weekly review cadence policy.
4. Other corrections batch into the next regular review cycle.
5. As corrections come in, update `test_dcsl.js` test phrases (NOT the keyword sets).

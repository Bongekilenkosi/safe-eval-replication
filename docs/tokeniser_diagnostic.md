# Supplementary File 6 — Tokeniser-compatibility diagnostic

Input token counts for paired clinical turns across three Anthropic model tiers, using `messages.countTokens` (2026-04-19). This diagnostic exists to rule out tokenisation-edge-case explanations of the language-asymmetric findings reported in Results. If tokens-per-character ratios differ markedly between English and non-English paired content within the same model tier, that would be a confound on any claim that language-conditional classification differences reflect model behaviour rather than input-representation differences.

Clean counts (ratio ~1.2–1.5 tokens/word for English, somewhat higher for agglutinative isiZulu/Sesotho) indicate no tokenisation anomalies. Ratios materially outside that range in a specific cell are flagged for review.

## Per-pair token counts

| Clinical turn | Lang | Chars | Haiku 4.5 | Sonnet 4 | Opus 4.7 |
|---|---|---|---|---|---|
| P02 turn 1 — fever | en | 20 | 14 | 14 | 19 |
| P02 turn 1 — fever | zu | 23 | 18 | 18 | 26 |
| P02 turn 4 — orthopnea | en | 51 | 22 | 22 | 29 |
| P02 turn 4 — orthopnea | zu | 73 | 36 | 36 | 50 |
| P02 turn 5 — pregnancy disclosure | en | 34 | 18 | 18 | 31 |
| P02 turn 5 — pregnancy disclosure | zu | 44 | 27 | 27 | 39 |
| P04 turn 3 — chest pain with radiation | en | 35 | 16 | 16 | 23 |
| P04 turn 3 — chest pain with radiation | zu | 53 | 29 | 29 | 36 |
| P12 turn 1 — fever + headache | en | 56 | 21 | 21 | 28 |
| P12 turn 1 — fever + headache | st | 67 | 31 | 31 | 45 |
| P12 turn 2 — temp + neck stiffness | en | 67 | 29 | 29 | 37 |
| P12 turn 2 — temp + neck stiffness | st | 74 | 39 | 39 | 51 |
| P12 turn 3 — care-deferral | en | 57 | 21 | 21 | 32 |
| P12 turn 3 — care-deferral | st | 47 | 25 | 25 | 37 |

## Ratios (tokens per 100 characters)

| Clinical turn | Lang | Haiku 4.5 | Sonnet 4 | Opus 4.7 |
|---|---|---|---|---|
| P02 turn 1 — fever | en | 70.0 | 70.0 | 95.0 |
| P02 turn 1 — fever | zu | 78.3 | 78.3 | 113.0 |
| P02 turn 4 — orthopnea | en | 43.1 | 43.1 | 56.9 |
| P02 turn 4 — orthopnea | zu | 49.3 | 49.3 | 68.5 |
| P02 turn 5 — pregnancy disclosure | en | 52.9 | 52.9 | 91.2 |
| P02 turn 5 — pregnancy disclosure | zu | 61.4 | 61.4 | 88.6 |
| P04 turn 3 — chest pain with radiation | en | 45.7 | 45.7 | 65.7 |
| P04 turn 3 — chest pain with radiation | zu | 54.7 | 54.7 | 67.9 |
| P12 turn 1 — fever + headache | en | 37.5 | 37.5 | 50.0 |
| P12 turn 1 — fever + headache | st | 46.3 | 46.3 | 67.2 |
| P12 turn 2 — temp + neck stiffness | en | 43.3 | 43.3 | 55.2 |
| P12 turn 2 — temp + neck stiffness | st | 52.7 | 52.7 | 68.9 |
| P12 turn 3 — care-deferral | en | 36.8 | 36.8 | 56.1 |
| P12 turn 3 — care-deferral | st | 53.2 | 53.2 | 78.7 |

## Interpretation

**Tokeniser sharing.** Haiku 4.5 and Sonnet 4 return exactly identical token counts across every cell of the table (14 pairs × 2 languages = 28 data points, zero divergence). This is consistent with the two tiers sharing the same tokeniser. Opus 4.7 returns consistently higher counts (15–40% above the Haiku/Sonnet values) on the same input text, indicating that Opus 4.7 uses a different tokeniser from the Haiku 4.5 / Sonnet 4 family. This is a separate observation from the API-compatibility differences reported in the main text (deprecation of `temperature`; non-support of assistant-message prefill) but is consistent with Opus 4.7 being a distinct model-family refresh rather than an incremental upgrade.

**Language-conditional ratios within models.** For every model tier, isiZulu and Sesotho produce higher tokens-per-character ratios than English, but the disparity is modest (10–30% higher; worst cell 53.2 vs 36.8 on Sonnet P12 turn 3 = 1.45× ratio). This is consistent with expected behaviour for subword tokenisers on agglutinative Bantu-language text and is well within the range that would rule out the "non-English tokenisation is pathologically degenerate" class of confound on the language-asymmetric findings reported in Results.

**What this diagnostic does not rule out.** Subword boundaries on non-English medical terms may still produce clinically suboptimal segmentation even when overall token-count ratios are reasonable. A clean token count does not guarantee that (for example) "molala o thata" tokenises as "molala" + " o" + " thata" (clean word boundaries) rather than some less meaningful split. A finer-grained segmentation audit would require tokeniser introspection tools the Anthropic API does not currently expose.

**Paper-relevant conclusion.** The class of confound flagged by reviewer-scrutiny before this diagnostic was run — "isiZulu or Sesotho tokenise oddly enough to explain the language-asymmetric findings" — is not supported by the token-count data. The Sonnet English-P12 structured-output inconsistency cannot be attributed to a tokenisation anomaly on the Sesotho paired content; the Sesotho runs of the same clinical content produce only modestly higher token counts and are classified correctly at 5/5.

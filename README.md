# SAFE-EVAL — Replication Kit

**Multi-turn patient-persona safety evaluation harness and replication data for clinical AI in LMIC primary care.**

This repository contains the persona library, evaluation harness, raw result JSONs, and supplementary materials supporting:

> Nkosi-Mjadu BE, Plaatjie S. **Silent evaluator artefacts in cross-vendor and multilingual clinical AI benchmarking.** *medRxiv* (preprint, 2026). DOI pending.

The paper identifies six classes of silent evaluator artefacts — five at runtime (silent-constant fallback; systematic parse-salvage fallback; structured-output internal inconsistency; parse-salvage accidentally correct; coherent instructed-rule non-compliance) and one at fixture-generation time — in a single evaluation of one clinical AI system (Bizusizo) against six commercial LLM tiers across three vendors (Anthropic, Google, OpenAI). Each class is invisible to top-line result summaries and requires a specific pre-submission check to surface.

This kit lets reviewers (a) audit the methodology by inspecting persona inputs and result outputs without re-running any models, (b) replicate the cross-vendor results live against Gemini and OpenAI APIs, and (c) replicate the Anthropic-side findings with a minimal triage-function wrapper (documented below).

---

## Repository contents

```
safe-eval-replication/
├── LICENSE                              Apache 2.0 with clinical-safety disclaimer
├── README.md                            this file
├── CONTRIBUTING.md                      persona YAML schema and authoring patterns
├── personas/                            37 multi-turn patient-persona YAMLs
│                                        (14 base + 3 cross-language controls + 14 probe variants + 6 adversarial)
├── harness/
│   ├── run_persona_eval.js              Anthropic-side runner; depends on a user-supplied triage function (see "Replicating the Anthropic-side runs")
│   ├── compare_models.js                cross-model driver (Haiku / Sonnet / Opus)
│   ├── probe_j_gemini_runner.js         self-contained Gemini cross-vendor runner
│   ├── probe_j_openai_runner.js         self-contained OpenAI cross-vendor runner
│   └── reasoning_coherence_audit.js     reasoning-field ↔ classification coherence audit tool
├── results/
│   ├── lang_control_matrix_ARTEFACT_pre_fix/   18 JSONs + summary.tsv — artefact-phase (Opus silent-fallback period)
│   ├── lang_control_matrix/                    18 JSONs + summary.tsv — corrected-phase (post API-compatibility patch)
│   └── probes/                                  probe A through K outputs (Sonnet 4 + cross-vendor)
└── docs/
    └── supp_10_coherence_audit.md       per-turn coherence audit, all 120 Sonnet 4 corrected-phase turns
```

---

## Replicating without re-running models (audit-level reproducibility)

The most efficient form of replication for reviewers: inspect the persona YAMLs and the result JSONs directly.

- **`personas/`** — every patient persona used in the study. Each YAML specifies demographics, session context preseed, expected final triage level, per-turn patient utterances, and expected rule-trigger behaviour. The personas referenced in Methods are: `p02_*`, `p04_*`, `p12_*` (clinical) and `probe_a` through `probe_k` (mechanism probes).
- **`results/lang_control_matrix_ARTEFACT_pre_fix/`** — the 18 JSONs (6 persona-cells × 3 Anthropic models) from the silent-fallback period. Every Opus JSON contains `api_failure_default` in the `ai_reasoning` field — this is the silent-constant-fallback evidence (Supplementary File 1 in the paper).
- **`results/lang_control_matrix/`** — the same 18 cells after the runner patch. Opus now produces valid JSON at 98.3%; the Sonnet 4 P12-en cell is the structured-output-inconsistency finding (Supplementary File 2).
- **`results/probes/`** — probe A through probe K raw outputs against Sonnet 4, plus probe J1/J3 cross-vendor outputs (Gemini 2.5 Pro, Flash-Lite, GPT-4o). Each JSON contains the full per-turn reasoning and triage classification.
- **`docs/supp_10_coherence_audit.md`** — the pre-submission coherence audit (5/120 mismatches, all within the P12-English Sonnet cell).

Zero API cost. Zero re-runs.

---

## Replicating the cross-vendor probes live

Probe J cross-vendor (the key existence-proof that Sonnet 4's inconsistency is Sonnet-4-family-specific) is fully self-contained:

```bash
# Prerequisites: Node.js >= 18, API keys in .env

# Gemini 2.5 Pro and Flash-Lite
export GEMINI_API_KEY=...   # or place in .env
node harness/probe_j_gemini_runner.js

# GPT-4o
export OPENAI_API_KEY=...
node harness/probe_j_openai_runner.js
```

Each script runs probe J1 and J3 at N=10 against the named vendor and writes JSONs matching the format in `results/probes/probe_j*_n10_*.json`. Expected outputs at temperature 0.1: Gemini 2.5 Pro 59/60 coherent ORANGE; GPT-4o 60/60 coherent ORANGE; Gemini 2.5 Flash-Lite predominantly YELLOW with reasoning explicitly rejecting the Step-4 HIV+fever-comorbidity-upgrade rule (the "coherent instructed-rule non-compliance" class).

Estimated cost per full run: USD 1–3.

---

## Replicating the Anthropic-side runs

`harness/run_persona_eval.js` is shipped as-is from the Bizusizo production codebase. It depends on two internal modules that are not redistributed in this kit:

- `../lib/triage` — the triage pipeline (LLM call + deterministic safety layer)
- `../governance` — the `ClinicalPerformanceMonitor` used for per-run governance metadata

The required triage-function signature is:

```js
async function runTriage(text, lang, sessionContext) {
  // returns { triage_level, rule_override, reasoning, ... }
}
```

To replicate against your own implementation, create `lib/triage.js` and `governance.js` at the repository root matching the interfaces consumed in `run_persona_eval.js` (lines 51–52, 139, and the `runTriage` call sites). The SATS-aligned system prompt to use is documented in the methodology paper's Methods §Evaluation parameters; the required JSON output schema is:

```json
{
  "triage_level": "RED|ORANGE|YELLOW|GREEN",
  "confidence": 0,
  "reasoning": "≤50 words explaining which SATS step determined the level and why",
  "discriminator_matched": "rule name or null",
  "tews_score": 0
}
```

Temperature 0.1 throughout (Opus 4.7 omits temperature parameter due to deprecation); max_tokens 300; Anthropic structured output via assistant-message prefill; Gemini via responseSchema; OpenAI via response_format: json_schema strict.

The full prompt and the deterministic-rule layer that sits beneath the LLM (the `applyClinicalRules` function in the methodology paper's System Under Test description) are not redistributed here as they are part of the Bizusizo production system. They are documented in sufficient detail in the methodology paper that an independent replicator can write their own.

If you would like to replicate end-to-end including the deterministic safety layer, contact the corresponding author (see below).

---

## Six recommended pre-submission checks

From the methodology paper's Discussion section, applicable to any multi-turn LLM clinical-AI evaluation:

1. **Compatibility canaries** — paired cross-language control personas, one per target language minimum.
2. **Fallback-path instrumentation** — harness reports invocation rates per fallback type (silent-constant, parse-salvage, valid-JSON).
3. **Parse-provenance disaggregation** — always separate valid-JSON from parse-salvage classifications when reporting rates.
4. **Reasoning-field inspection** — string-match for harness-specific fallback labels as a pre-analysis gate.
5. **Instructed-rule-compliance auditing** — where the system prompt specifies rule-chains, audit reasoning-field text for whether the model applies or rejects each instructed rule.
6. **Native-speaker test-fixture audit** — where evaluation inputs are LLM-drafted, native-speaker review independent of any LLM-drafted intermediate is required to detect generation-time linguistic corruption.

---

## Limitations of this kit

This is a **replication kit for a single methodology study**, not a general-purpose evaluation framework. Specifically:

- Persona library covers three SA official languages (English, isiZulu, Sesotho). Native-speaker review for the remaining eight languages is ongoing.
- The harness was developed for one production system (Bizusizo); abstraction to other systems requires implementing the `runTriage(text, lang, sessionContext)` interface and re-validating personas for the target clinical context.
- Result JSONs were generated against a fixed model snapshot in April–May 2026 (model IDs in Methods). LLM behaviour drifts over time; expect divergence on re-runs.
- N=5 / N=10 / N=30 sampling supports existence claims, not prevalence estimates. The methodology paper is explicitly an existence-proof.

---

## Citation

If you use this kit or the methodology in derivative work, please cite the methodology paper:

> Nkosi-Mjadu BE, Plaatjie S. **Silent evaluator artefacts in cross-vendor and multilingual clinical AI benchmarking.** *medRxiv* preprint, 2026. DOI pending.

A BibTeX entry will be added here once the medRxiv DOI is assigned.

---

## Licence

Apache License 2.0 with clinical-safety disclaimer. See [LICENSE](./LICENSE).

This software is provided for research and evaluation purposes only. It is not a medical device, is not authorised for clinical use, and must not be used to make clinical decisions about real patients. Any clinical AI system built on or evaluated with this code must undergo its own regulatory and ethical review in the jurisdiction of deployment.

---

## Contact

**Corresponding author:** Bongekile Esther Nkosi-Mjadu, MPH (UC Berkeley)
**Email:** bongekilenkosi@berkeley.edu
**ORCID:** 0009-0009-8567-551X

**Co-author:** Sheila Plaatjie, RN BBA

#!/usr/bin/env node
'use strict';
//
// OpenAI cross-vendor probe runner for probe J1/J3 (and probe K if wanted).
//
// Purpose: replicates the Sonnet 4 probe evaluation against an OpenAI model
// to provide a second cross-vendor data point after the Gemini replication.
// Uses OpenAI chat completions API with strict structured outputs
// (response_format: json_schema, strict=true) enforcing the same JSON
// contract as the Anthropic and Gemini runs.
//
// Usage:
//   export OPENAI_API_KEY=...   (or load from .env)
//   node internal/probe_j_openai_runner.js --persona=probe_j1_sheila_rewording --model=gpt-4o
//   node internal/probe_j_openai_runner.js --persona=probe_j3_sheila_rewording --model=gpt-4o
//
// Output:
//   internal/probe_j1_n10_openai_gpt_4o.json (by default)
//
// Paid tier throughout (free tier is not offered by OpenAI in 2026).
// Rate: gpt-4o tier-1 paid allows 500 RPM — 2s spacing is more than enough.
//

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const API_KEY = process.env.OPENAI_API_KEY;
const N = 10;
const TEMPERATURE = 0.1;
const INTER_CALL_MS = 2000;
const OUTPUT_DIR = path.join(__dirname);

const modelArg = process.argv.find((a) => a.startsWith('--model='))?.split('=')[1];
const MODEL = modelArg || 'gpt-4o';
const modelSlug = MODEL.replace(/[.\-]/g, '_');

const personaArg =
  process.argv.find((a) => a.startsWith('--persona='))?.split('=')[1] ||
  'probe_j1_sheila_rewording';
const PERSONA_PATH = path.join(
  __dirname,
  'eval',
  'personas',
  `${personaArg}.yml`,
);
const OUTPUT_PATH = path.join(
  OUTPUT_DIR,
  `${personaArg.replace('_sheila_rewording', '')}_n${N}_openai_${modelSlug}.json`,
);

if (!API_KEY) {
  console.error('OPENAI_API_KEY not set (check .env).');
  process.exit(1);
}
if (!fs.existsSync(PERSONA_PATH)) {
  console.error(`Persona YAML not found: ${PERSONA_PATH}`);
  process.exit(1);
}

// ── System prompt (sats-v2.4, session-preseeded for probe J1/J3/K: 41, HIV) ──
const SYSTEM_PROMPT = `You are a clinical triage classifier for South Africa, aligned with the South African Triage Scale (SATS) as used at Primary Health Care (PHC) level.

Patient: age 41, comorbidities: HIV.

The input may be in any of South Africa's 11 official languages, including code-switching and township medical terms (e.g. "sugar"=diabetes, "high blood"=hypertension, "ikhanda"=headache, "isifuba"=chest, "fit/banjwa"=seizure).

════════════════════════════════════════════
STEP 1 — DISCRIMINATORS (check FIRST, before reading severity)
Discriminators override severity self-report completely.
════════════════════════════════════════════

RED — Immediate emergency (ALWAYS RED — do not downgrade to ORANGE):
• Not breathing / respiratory or cardiac arrest
• Unconscious / unresponsive
• Active seizure (currently fitting — not post-ictal)
• Chest pain + breathing difficulty = RED (NOT ORANGE — in ANY language, if a patient describes chest pain AND difficulty breathing at the same time, output RED immediately, no exceptions)
• Chest pain radiating to arm/jaw + sweating
• Obstetric haemorrhage (pregnant + heavy bleeding)
• Snake bite
• Anaphylaxis = RED (NOT ORANGE): any of — throat closing, lips swelling, tongue swelling, mouth swelling — especially after eating or bee sting, WITH OR WITHOUT breathing difficulty. If mouth/tongue/lips are swelling after food or sting, output RED immediately.
• Uncontrollable spurting bleeding
• Purpuric/non-blanching rash (meningococcal)
• Baby/newborn not breathing or unconscious

ORANGE — Very urgent (NOT YELLOW — do not downgrade these):
• FAST stroke signs: face droop, arm weakness, speech slurred/confused
• Thunderclap headache (sudden worst-ever headache) = ORANGE (NOT YELLOW — sudden severe headache unlike any before is always ORANGE)
• Post-ictal: had a seizure, now drowsy/confused
• Acute severe asthma: can't speak full sentences, inhaler not working, exhausted
• Pre-eclampsia: pregnant + headache + visual changes + face/hands swollen
• Ectopic pregnancy: missed period + one-sided abdominal pain = ORANGE (NOT YELLOW — any missed period + lower abdominal pain is ORANGE minimum, ectopic until proven otherwise)
• Febrile seizure: child had a fit with fever
• Acute confusion in patient with DM/HTN/HIV
• Head trauma + loss of consciousness/vomiting/confusion afterwards
• Open fracture (visible bone)
• High energy mechanism injury (MVA, fall from height, crush injury)
• Significant burns to face/airway/large body area
• Overdose already taken (patient says they swallowed pills/substances) = ORANGE psychiatric emergency (NOT YELLOW — overdose already taken is different from suicidal ideation which is thinking about it but not yet acted)
• Severe hypoglycaemia (very low glucose + unconscious/fitting)
• Preterm labour (<34 weeks) = ORANGE (NOT YELLOW — pregnancy under 34 weeks with contractions or severe pain is always ORANGE)

YELLOW — Urgent (needs clinic today, within 1–4 hours):
• Severe pain (patient describes as 8–10/10, unbearable, worst ever)
• Suicidal ideation (thinking about self-harm but NOT yet acted — if they have already taken pills or harmed themselves, that is ORANGE, not YELLOW) (thinking of killing self — not yet acting)
• Suspected abuse/assault/rape
• Pyelonephritis (burning urine + back/kidney pain + fever + chills)
• DKA: diabetic + vomiting + fruity breath + glucose >15
• TB triad: cough >3 weeks + night sweats + weight loss
• Possible fracture (deformed limb, can't weight bear after trauma)
• Hypertensive urgency: very high BP + headache/visual changes/confusion
• Appendicitis pattern: right lower abdo pain + fever + vomiting
• Asthma: inhaler not working but can still speak
• Fever + stiff neck (meningism)
• HIV positive patient with fever
• Lower abdo pain + missed period (ectopic rule-out)
• Vomiting blood or blood in stool
• Deep/contaminated wound/animal bite/rusty nail
• Sudden vision loss
• Severe dehydration in vulnerable patient (infant, elderly, diabetic, HIV)

════════════════════════════════════════════
STEP 2 — TEWS PROXY (only if no discriminator matched)
Score each indicator present from the patient's self-report (+1 each):
• Breathing fast / short of breath at rest
• Heart racing / pounding / feeling faint
• Confused / dizzy / can't think straight
• Shivering / very hot / high temperature
• Can't walk / can't move without help
• Trauma / injury present
Score 0–2=GREEN, 3–4=YELLOW, 5–6=ORANGE, 7+=RED
════════════════════════════════════════════

STEP 3 — SEVERITY SELF-REPORT (tiebreaker only, never overrides discriminators):
  MILD + no discriminator → GREEN/YELLOW
  MODERATE → YELLOW
  SEVERE → ORANGE
  NEVER assign RED from severity alone without a discriminator

STEP 4 — COMORBIDITY UPGRADE (apply after Steps 1–3):
  HIV + fever → upgrade YELLOW → ORANGE
  DM + confusion → upgrade → ORANGE
  Epilepsy + post-ictal → upgrade → ORANGE
  Pregnancy + bleeding or severe pain → ORANGE minimum
  TB + haemoptysis → upgrade → ORANGE

STEP 5 — WHEN IN DOUBT: UPGRADE one level. Under-triage is more dangerous than over-triage.

Return ONLY valid JSON with these fields: triage_level (RED|ORANGE|YELLOW|GREEN), confidence (0-100), reasoning (≤50 words explaining which SATS step determined the level and why), discriminator_matched (rule name or "none"), tews_score (0-7).`;

// OpenAI strict JSON schema — all fields required, additionalProperties false
const JSON_SCHEMA = {
  name: 'triage_classification',
  strict: true,
  schema: {
    type: 'object',
    properties: {
      triage_level: { type: 'string', enum: ['RED', 'ORANGE', 'YELLOW', 'GREEN'] },
      confidence: { type: 'integer' },
      reasoning: { type: 'string' },
      discriminator_matched: { type: 'string' },
      tews_score: { type: 'integer' },
    },
    required: ['triage_level', 'confidence', 'reasoning', 'discriminator_matched', 'tews_score'],
    additionalProperties: false,
  },
};

async function callOpenAI(messages) {
  const url = 'https://api.openai.com/v1/chat/completions';
  const body = {
    model: MODEL,
    messages,
    temperature: TEMPERATURE,
    response_format: { type: 'json_schema', json_schema: JSON_SCHEMA },
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text.slice(0, 400)}`);
  }
  return res.json();
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function runOneReplication(persona, repIdx) {
  const messages = [{ role: 'system', content: SYSTEM_PROMPT }];
  const turnResults = [];

  for (const turn of persona.turns) {
    messages.push({ role: 'user', content: turn.patient });

    let response = null;
    let rawText = null;
    let parsed = null;
    let parseError = null;
    let modelVersion = null;
    let usage = null;
    let finishReason = null;

    try {
      response = await callOpenAI(messages);
      const choice = response.choices?.[0];
      rawText = choice?.message?.content ?? null;
      modelVersion = response.model ?? null;
      usage = response.usage ?? null;
      finishReason = choice?.finish_reason ?? null;
      try {
        parsed = rawText ? JSON.parse(rawText) : null;
      } catch (e) {
        parseError = e.message;
      }
    } catch (e) {
      parseError = e.message;
    }

    turnResults.push({
      turn: turn.turn,
      patient: turn.patient,
      raw: rawText,
      parsed,
      parse_error: parseError,
      finish_reason: finishReason,
      model_version: modelVersion,
      usage,
    });

    if (rawText) {
      messages.push({ role: 'assistant', content: rawText });
    }

    await sleep(INTER_CALL_MS);
  }

  return { replication: repIdx + 1, turns: turnResults };
}

function aggregate(replications, persona) {
  const byTurn = {};
  for (const turn of persona.turns) {
    byTurn[turn.turn] = {
      patient: turn.patient,
      valid_json: 0,
      parse_errors: 0,
      level_counts: {},
      inconsistency_count: 0,
    };
  }
  for (const rep of replications) {
    if (!rep.turns) continue;
    for (const t of rep.turns) {
      const bucket = byTurn[t.turn];
      if (!bucket) continue;
      if (t.parsed) {
        bucket.valid_json++;
        const lvl = t.parsed.triage_level;
        bucket.level_counts[lvl] = (bucket.level_counts[lvl] || 0) + 1;
        const reasoningText = (t.parsed.reasoning || '').toUpperCase();
        const classif = t.parsed.triage_level;
        const articulated = ['RED', 'ORANGE', 'YELLOW', 'GREEN'].find((l) =>
          reasoningText.includes(l) && l !== classif,
        );
        if (articulated && ['RED', 'ORANGE'].includes(articulated) && classif === 'YELLOW') {
          bucket.inconsistency_count++;
        }
      } else {
        bucket.parse_errors++;
      }
    }
  }
  return byTurn;
}

async function main() {
  const persona = yaml.load(fs.readFileSync(PERSONA_PATH, 'utf8'));
  console.log(`Running ${personaArg} against ${MODEL}, N=${N}`);
  console.log(`Persona: ${PERSONA_PATH}`);
  console.log(`Output:  ${OUTPUT_PATH}\n`);

  const replications = [];
  for (let i = 0; i < N; i++) {
    const tStart = Date.now();
    try {
      const rep = await runOneReplication(persona, i);
      replications.push(rep);
      const summary = rep.turns
        .map((t) => `T${t.turn}:${t.parsed?.triage_level || (t.parse_error ? 'ERR' : '?')}`)
        .join(' ');
      const elapsed = ((Date.now() - tStart) / 1000).toFixed(1);
      console.log(`  rep ${i + 1}/${N}  ${summary}  (${elapsed}s)`);
    } catch (e) {
      console.error(`  rep ${i + 1}/${N}  FAILED: ${e.message}`);
      replications.push({ replication: i + 1, error: e.message });
    }
  }

  const firstModelVersion =
    replications.find((r) => r.turns?.[0]?.model_version)?.turns?.[0]?.model_version || null;

  const output = {
    timestamp: new Date().toISOString(),
    model: MODEL,
    model_version: firstModelVersion,
    triage_prompt_version: 'sats-v2.4',
    persona_id: personaArg,
    n: N,
    temperature: TEMPERATURE,
    aggregate: aggregate(replications, persona),
    replications,
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
  console.log(`\nWrote ${OUTPUT_PATH}`);

  console.log('\n── Summary ──');
  for (const [turnNum, bucket] of Object.entries(output.aggregate)) {
    const levels = Object.entries(bucket.level_counts)
      .map(([l, c]) => `${l}:${c}`)
      .join(' ');
    console.log(
      `  Turn ${turnNum}: valid-JSON ${bucket.valid_json}/${N}, parse-errors ${bucket.parse_errors}, ${levels}${bucket.inconsistency_count > 0 ? `  [inconsistency: ${bucket.inconsistency_count}/${bucket.valid_json}]` : ''}`,
    );
  }
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});

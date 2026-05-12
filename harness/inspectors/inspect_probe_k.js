#!/usr/bin/env node
'use strict';
//
// Inspector for probe K (Bizusizo-shape persona-eval JSON output).
// Prints per-turn AI-level distribution, reasoning text samples, and
// inconsistency detection against the SATS Step-4 comorbidity rule.
//
// Usage:
//   node internal/inspect_probe_k.js probe_k1_n10_sonnet.json
//   node internal/inspect_probe_k.js probe_k2_n10_sonnet.json

const fs = require('fs');
const path = require('path');

const file = process.argv[2];
if (!file) {
  console.error('Usage: node inspect_probe_k.js <probe_output_file.json>');
  process.exit(1);
}

const p = path.isAbsolute(file) ? file : path.join(__dirname, file);
const data = JSON.parse(fs.readFileSync(p, 'utf8'));

const personaResult = data.results[0];
const runs = personaResult.runs || [];

console.log(`File: ${p}`);
console.log(`Persona: ${personaResult.id}`);
console.log(`Model: ${data.triage_model}`);
console.log(`N=${runs.length}\n`);

for (let turnIdx = 0; turnIdx < 3; turnIdx++) {
  const turnNum = turnIdx + 1;
  const turnData = runs
    .map((r) => r.turns?.[turnIdx])
    .filter(Boolean);

  if (turnData.length === 0) {
    console.log(`─── TURN ${turnNum} — no data ───\n`);
    continue;
  }

  // Patient text (same across reps for this turn)
  const patient = turnData[0].patient;

  // Count AI-levels
  const aiLevels = {};
  turnData.forEach((t) => {
    const lvl = t.output?.ai_level || 'ERR';
    aiLevels[lvl] = (aiLevels[lvl] || 0) + 1;
  });

  // Detect inconsistency heuristic: ai_level=YELLOW with reasoning that
  // articulates ORANGE-upgrade (e.g. "upgrades YELLOW→ORANGE", "comorbidity
  // upgrade to ORANGE").
  const inconsistent = turnData.filter((t) => {
    const lvl = t.output?.ai_level;
    const reasoning = (t.output?.ai_reasoning || '').toLowerCase();
    if (lvl !== 'YELLOW') return false;
    // Look for phrases indicating ORANGE is articulated
    return (
      reasoning.includes('upgrade') &&
      reasoning.includes('orange') &&
      !reasoning.includes('does not upgrade') &&
      !reasoning.includes('not warrant')
    );
  });

  console.log(`─── TURN ${turnNum} ───`);
  console.log(`  Patient: "${patient}"`);
  console.log(`  AI-level distribution:`);
  for (const [lvl, count] of Object.entries(aiLevels)) {
    console.log(`    ${lvl}: ${count}/${turnData.length}`);
  }
  if (inconsistent.length > 0) {
    console.log(`  ⚠  Inconsistency (ai_level=YELLOW with ORANGE-articulating reasoning): ${inconsistent.length}/${turnData.length}`);
  }

  // Show reasoning samples — first 2 of each unique ai_level
  const byLevel = {};
  turnData.forEach((t) => {
    const lvl = t.output?.ai_level || 'ERR';
    if (!byLevel[lvl]) byLevel[lvl] = [];
    if (byLevel[lvl].length < 2) {
      byLevel[lvl].push(t.output?.ai_reasoning || '(no reasoning)');
    }
  });
  for (const [lvl, samples] of Object.entries(byLevel)) {
    console.log(`  Reasoning samples (${lvl}):`);
    samples.forEach((r, i) => console.log(`    ${i + 1}. ${r}`));
  }
  console.log('');
}

// Final summary
console.log('═'.repeat(70));
console.log('SUMMARY');
console.log('═'.repeat(70));
for (let turnIdx = 0; turnIdx < 3; turnIdx++) {
  const turnNum = turnIdx + 1;
  const turnData = runs.map((r) => r.turns?.[turnIdx]).filter(Boolean);
  const levels = {};
  turnData.forEach((t) => {
    const lvl = t.output?.ai_level || 'ERR';
    levels[lvl] = (levels[lvl] || 0) + 1;
  });
  const levelSummary = Object.entries(levels).map(([l, c]) => `${l}:${c}`).join(' ');
  console.log(`  T${turnNum} AI-level: ${levelSummary}`);
}

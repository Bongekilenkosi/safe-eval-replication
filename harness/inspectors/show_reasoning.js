#!/usr/bin/env node
'use strict';
// Focused view — just the reasoning text on valid-JSON YELLOW runs.
// node internal/show_reasoning.js probe_j1_n10_gemini_flash_lite.json

const fs = require('fs');
const path = require('path');
const file = process.argv[2] || 'probe_j1_n10_gemini_flash_lite.json';
const p = path.isAbsolute(file) ? file : path.join(__dirname, file);
const data = JSON.parse(fs.readFileSync(p, 'utf8'));

console.log(`${data.persona_id} on ${data.model}:\n`);

for (let turnIdx = 0; turnIdx < 3; turnIdx++) {
  const turnNum = turnIdx + 1;
  const validRuns = data.replications.filter((r) => r.turns?.[turnIdx]?.parsed);

  // Determine modal level
  const levelCounts = {};
  validRuns.forEach((r) => {
    const lvl = r.turns[turnIdx].parsed.triage_level;
    levelCounts[lvl] = (levelCounts[lvl] || 0) + 1;
  });
  const modal = Object.entries(levelCounts).sort((a, b) => b[1] - a[1])[0]?.[0];

  if (validRuns.length === 0) {
    console.log(`─── TURN ${turnNum} — no valid-JSON runs ───\n`);
    continue;
  }

  console.log(`─── TURN ${turnNum} — all valid-JSON reasoning (modal=${modal}) ───`);
  validRuns.forEach((r) => {
    const t = r.turns[turnIdx];
    const lvl = t.parsed.triage_level;
    const marker = lvl === modal ? ' ' : '*'; // flag outliers
    console.log(`  ${marker} rep ${String(r.replication).padStart(2)} [${lvl}]: ${t.parsed.reasoning}`);
  });
  console.log('');
}

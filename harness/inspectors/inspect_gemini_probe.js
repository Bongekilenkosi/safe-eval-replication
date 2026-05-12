#!/usr/bin/env node
'use strict';
//
// Quick inspector for Gemini probe output JSON — pulls reasoning text on
// valid-JSON classifications and finish-reason / raw-text on parse errors,
// so we can tell which mechanism is causing YELLOW vs ORANGE divergence
// and which mechanism is causing parse errors.
//
// Usage:
//   node internal/inspect_gemini_probe.js                             # defaults to probe_j3
//   node internal/inspect_gemini_probe.js probe_j1_n10_gemini_flash_lite.json
//   node internal/inspect_gemini_probe.js probe_j3_n10_gemini_flash_lite.json
//

const fs = require('fs');
const path = require('path');

const file = process.argv[2] || 'probe_j3_n10_gemini_flash_lite.json';
const p = path.isAbsolute(file) ? file : path.join(__dirname, file);

if (!fs.existsSync(p)) {
  console.error(`File not found: ${p}`);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(p, 'utf8'));
console.log(`Loaded: ${p}`);
console.log(`Model: ${data.model} (${data.model_version})`);
console.log(`Persona: ${data.persona_id}, N=${data.n}\n`);

for (let turnIdx = 0; turnIdx < 3; turnIdx++) {
  const turnNum = turnIdx + 1;
  console.log(`═══════════════════════════════════════════════════════════════`);
  console.log(`TURN ${turnNum}`);
  console.log(`═══════════════════════════════════════════════════════════════`);

  const validRuns = data.replications.filter(
    (r) => r.turns?.[turnIdx]?.parsed,
  );
  const errorRuns = data.replications.filter(
    (r) => r.turns?.[turnIdx]?.parse_error,
  );

  console.log(`\n─ Valid-JSON runs (${validRuns.length}) ─`);
  validRuns.forEach((r) => {
    const t = r.turns[turnIdx];
    const lvl = t.parsed.triage_level;
    const reasoning = t.parsed.reasoning || '';
    const disc = t.parsed.discriminator_matched || 'none';
    const tews = t.parsed.tews_score ?? 'n/a';
    console.log(
      `  rep ${String(r.replication).padStart(2)}: ${lvl.padEnd(7)} | disc=${String(disc).padEnd(20)} | tews=${tews}`,
    );
    console.log(`          reasoning: "${reasoning}"`);
  });

  if (errorRuns.length > 0) {
    console.log(`\n─ Parse-error runs (${errorRuns.length}) ─`);
    errorRuns.forEach((r) => {
      const t = r.turns[turnIdx];
      const finish = t.finish_reason || 'unknown';
      const rawSnippet = (t.raw || '').slice(0, 300).replace(/\n/g, ' ');
      const err = t.parse_error || '';
      console.log(`  rep ${String(r.replication).padStart(2)}: finish_reason=${finish}`);
      console.log(`          parse_error: ${err}`);
      console.log(`          raw (first 300 chars): ${rawSnippet || '(empty)'}`);
    });
  }

  console.log('');
}

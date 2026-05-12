#!/usr/bin/env node
'use strict';
// BIZUSIZO — multi-model persona eval comparison
//
// Runs the persona harness against multiple Anthropic models sequentially
// and produces a cross-model comparison report.
//
// Usage:
//   node compare_models.js                       # haiku + sonnet + opus, all personas
//   node compare_models.js --models=haiku,sonnet # subset of models
//   node compare_models.js --only=p12_hiv_meningitis_signs_st
//
// Output:
//   ./model_comparison.json — full per-model results + cross-model diff
//   console — triage-level-by-persona table

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const RUNNER = path.join(__dirname, 'run_persona_eval.js');
const OUTPUT = path.join(__dirname, 'model_comparison.json');

const args = process.argv.slice(2);
const modelsArg = args.find(a => a.startsWith('--models='))?.split('=')[1];
const onlyArg = args.find(a => a.startsWith('--only='));

const models = modelsArg ? modelsArg.split(',') : ['haiku', 'sonnet', 'opus'];

console.log(`Running persona eval across ${models.length} models: ${models.join(', ')}`);
console.log(`Runner:  ${RUNNER}`);
console.log('');

const perModelResults = {};

for (const modelKey of models) {
  const outPath = path.join(__dirname, `persona_eval_results_${modelKey}.json`);
  console.log(`─── ${modelKey} ───`);
  const runnerArgs = [RUNNER, `--model=${modelKey}`, `--output=${outPath}`];
  if (onlyArg) runnerArgs.push(onlyArg);

  const res = spawnSync('node', runnerArgs, { stdio: 'inherit' });
  if (res.status !== 0) {
    console.error(`Runner failed for model ${modelKey} (exit ${res.status}). Skipping.`);
    continue;
  }

  try {
    perModelResults[modelKey] = JSON.parse(fs.readFileSync(outPath, 'utf8'));
  } catch (e) {
    console.error(`Failed to read ${outPath}: ${e.message}`);
  }
  console.log('');
}

if (Object.keys(perModelResults).length === 0) {
  console.error('No results captured from any model.');
  process.exit(1);
}

// ── Per-persona comparison table ──
const allPersonaIds = new Set();
for (const r of Object.values(perModelResults)) {
  for (const p of r.results || []) if (p.id) allPersonaIds.add(p.id);
}

const comparison = { timestamp: new Date().toISOString(), models_tested: models, personas: {} };

for (const personaId of Array.from(allPersonaIds).sort()) {
  const row = { per_model: {}, agreement: null, final_triage_variance: null };
  const finalLevels = [];
  for (const modelKey of models) {
    const r = perModelResults[modelKey];
    if (!r) continue;
    const p = (r.results || []).find(x => x.id === personaId);
    if (!p || !p.summary) continue;
    row.per_model[modelKey] = {
      final_triage_actual: p.summary.final_triage_actual,
      final_triage_correct: p.summary.final_triage_correct,
      persona_passed: p.summary.persona_passed,
      hard_checks: `${p.summary.passed_hard_checks}/${p.summary.total_hard_checks}`,
    };
    if (p.summary.final_triage_actual) finalLevels.push(p.summary.final_triage_actual);
  }
  const uniq = new Set(finalLevels);
  row.agreement = uniq.size <= 1 ? 'unanimous' : 'disagreement';
  row.final_triage_variance = Array.from(uniq);
  comparison.personas[personaId] = row;
}

// Aggregate stats
comparison.summary_by_model = {};
for (const modelKey of models) {
  const r = perModelResults[modelKey];
  if (!r) continue;
  comparison.summary_by_model[modelKey] = {
    total_personas: r.total_personas,
    passed_personas: r.passed_personas,
    correct_final_triage: (r.results || []).filter(p => p.summary?.final_triage_correct).length,
    errors: r.personas_with_errors,
  };
}

// ── Console table ──
console.log('');
console.log('═══════════════════════════════════════════════════════════');
console.log('Cross-model comparison — final triage level per persona');
console.log('═══════════════════════════════════════════════════════════');
const header = ['persona'.padEnd(42)].concat(models.map(m => m.padEnd(10))).concat(['agree']);
console.log(header.join(' | '));
console.log('─'.repeat(header.join(' | ').length));
for (const personaId of Array.from(allPersonaIds).sort()) {
  const row = comparison.personas[personaId];
  const cells = [personaId.padEnd(42)];
  for (const m of models) {
    const cell = row.per_model[m];
    cells.push((cell?.final_triage_actual || '?').padEnd(10));
  }
  cells.push(row.agreement === 'unanimous' ? '✓' : '✗');
  console.log(cells.join(' | '));
}

console.log('');
console.log('Pass-all-checks summary by model:');
for (const modelKey of models) {
  const s = comparison.summary_by_model[modelKey];
  if (!s) continue;
  console.log(`  ${modelKey.padEnd(10)} ${s.passed_personas}/${s.total_personas} pass | ${s.correct_final_triage}/${s.total_personas} correct final triage`);
}

fs.writeFileSync(OUTPUT, JSON.stringify(comparison, null, 2));
console.log('');
console.log(`Comparison written to ${OUTPUT}`);
console.log(`Per-model reports: persona_eval_results_{${models.join(',')}}.json`);

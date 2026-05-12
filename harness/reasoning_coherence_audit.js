// Reasoning-classification coherence audit.
//
// For each Sonnet 4 corrected-phase turn, check whether the structured-JSON
// `reasoning` field articulates a classification consistent with the
// emitted `triage_level` field.
//
// The P12-en failing cell (known structured-output inconsistency) is
// included as a positive control: the audit must flag those turns.
// If the audit also flags turns in other cells, the P12-en failure is
// less of an outlier than the paper currently claims.
//
// Heuristic: the reasoning field is flagged as potentially incoherent
// with the classification when it contains a lexical pattern of the
// form "<level1> → <level2>" or "upgrades to <level2>" or "upgrade
// <level1> to <level2>" where <level2> differs from the emitted
// triage_level.
//
// Usage: node scripts/reasoning_coherence_audit.js

const fs = require('fs');
const path = require('path');

const LEVELS = ['RED', 'ORANGE', 'YELLOW', 'GREEN'];
const FALLBACK_LABELS = ['api_failure_default', 'parse_failure_default', 'text_parse_fallback'];

// Returns the highest-level classification mentioned as a
// target/upgrade/recommendation in the reasoning text, if any.
function extractReasoningTargetLevel(reasoning) {
  if (!reasoning) return null;
  const r = String(reasoning).toUpperCase();

  // Pattern 1: "X → Y" or "X→Y" (arrow separator — most common in Bizusizo prompt examples)
  const arrowMatch = r.match(/(RED|ORANGE|YELLOW|GREEN)\s*[\-=→]+>?\s*(RED|ORANGE|YELLOW|GREEN)/);
  if (arrowMatch) return arrowMatch[2];

  // Pattern 2: "upgrade to X" / "upgrades to X" / "mandate X"
  const upgradeToMatch = r.match(/(?:UPGRADE\w*|MANDATE\w*)\s*(?:FROM\s+\w+\s+)?TO\s+(RED|ORANGE|YELLOW|GREEN)/);
  if (upgradeToMatch) return upgradeToMatch[1];

  // Pattern 3: "upgrade X to Y"
  const upgradeXtoYMatch = r.match(/UPGRADE\w*\s+(RED|ORANGE|YELLOW|GREEN)\s+TO\s+(RED|ORANGE|YELLOW|GREEN)/);
  if (upgradeXtoYMatch) return upgradeXtoYMatch[2];

  // Pattern 4: "X minimum" / "at minimum X"
  const minimumMatch = r.match(/(?:AT\s+MINIMUM|MINIMUM\s+OF)\s+(RED|ORANGE|YELLOW|GREEN)/);
  if (minimumMatch) return minimumMatch[1];

  // Pattern 5: explicit "should be X" or "warrants X"
  const shouldBeMatch = r.match(/(?:SHOULD\s+BE|WARRANTS?|REQUIRES?\s+CLASSIFICATION\s+AS)\s+(RED|ORANGE|YELLOW|GREEN)/);
  if (shouldBeMatch) return shouldBeMatch[1];

  return null;
}

const LEVEL_RANK = { GREEN: 0, YELLOW: 1, ORANGE: 2, RED: 3 };

function main() {
  const dir = path.join(__dirname, '..', 'docs', 'lang_control_matrix');
  const sonnetFiles = fs.readdirSync(dir).filter(f => f.startsWith('sonnet__') && f.endsWith('.json'));

  const results = [];

  for (const f of sonnetFiles) {
    const r = require(path.join(dir, f));
    const pr = r.results[0];
    const persona = pr.id;

    pr.runs.forEach((run, runIdx) => {
      run.turns.forEach((t, turnIdx) => {
        const aiLevel = t.output.ai_level;
        const reasoning = t.output.ai_reasoning || '';

        // Skip fallback outputs — their reasoning field is a label, not clinical text
        if (FALLBACK_LABELS.includes(reasoning.trim())) return;

        const targetFromReasoning = extractReasoningTargetLevel(reasoning);

        if (targetFromReasoning && targetFromReasoning !== aiLevel) {
          // Coherence mismatch: reasoning articulates a different level than emitted
          const direction = LEVEL_RANK[targetFromReasoning] > LEVEL_RANK[aiLevel] ? 'reasoning_higher_than_emitted' : 'reasoning_lower_than_emitted';
          results.push({
            persona,
            run: runIdx + 1,
            turn: turnIdx + 1,
            emitted_triage_level: aiLevel,
            reasoning_target: targetFromReasoning,
            direction,
            reasoning_snippet: reasoning.slice(0, 200),
          });
        }
      });
    });
  }

  // Aggregate
  console.log('# Reasoning–classification coherence audit — Sonnet 4 corrected-phase matrix');
  console.log('');
  console.log('Total Sonnet turns audited:', sonnetFiles.reduce((n, f) => {
    const r = require(path.join(dir, f));
    return n + r.results[0].runs.reduce((m, run) => m + run.turns.length, 0);
  }, 0));
  console.log('Coherence mismatches detected:', results.length);
  console.log('');

  // Group by persona
  const byPersona = {};
  for (const r of results) {
    byPersona[r.persona] = byPersona[r.persona] || [];
    byPersona[r.persona].push(r);
  }

  for (const [persona, rows] of Object.entries(byPersona)) {
    console.log('## ' + persona + ' (' + rows.length + ' mismatches)');
    for (const row of rows) {
      console.log('  Run ' + row.run + ', turn ' + row.turn + ': emitted ' + row.emitted_triage_level + ' vs reasoning targets ' + row.reasoning_target + ' (' + row.direction + ')');
      console.log('    "' + row.reasoning_snippet + '"');
    }
    console.log('');
  }

  if (Object.keys(byPersona).length === 0) {
    console.log('No coherence mismatches detected outside the known P12-en failing cell.');
  }
}

main();

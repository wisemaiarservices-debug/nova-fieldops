# NOVA FieldOps Scenarios

These scenarios are examples for AI-BOOST Challenge 1 evaluation. They are scenario workflows, not field-validated robot deployments.

## Vineyard Water-Stress Inspection

Natural-language instruction:

> Inspect the north vineyard rows for water stress, avoid wet zones, prioritize high-risk areas, and return to base before sunset.

Generated mission intent:

- Mission type: crop inspection
- Target zone: north vineyard rows
- Objective: water stress detection
- Constraints: avoid wet zones, return before sunset

Mission steps:

1. Start from base station.
2. Navigate to north vineyard rows.
3. Avoid mapped wet zones.
4. Capture crop imagery and stress indicators.
5. Prioritize high-risk rows.
6. Return to base before sunset buffer.

Safety checks:

- Restricted zones checked
- Wet-zone avoidance required
- Operator approval required

Expected output:

- Structured mission JSON with `approval_required: true`
- Water-stress inspection intent
- Operator-approved execution mode

## Irrigation Line Anomaly Check

Natural-language instruction:

> Walk irrigation sector A, flag pressure drops or leaks, and skip the wet zone.

Generated mission intent:

- Mission type: infrastructure diagnostics
- Target zone: irrigation sector A
- Objective: leak and pressure anomaly detection
- Constraints: avoid wet zones

Mission steps:

1. Start from base station.
2. Traverse irrigation sector A.
3. Record candidate pressure or leak anomalies.
4. Avoid wet-zone boundary.
5. Return for operator review.

Safety checks:

- Terrain risk checked
- Wet-zone boundary checked
- Operator approval required

Expected output:

- Structured mission JSON
- Diagnostics intent
- Missing-data warnings if pressure history is unavailable

## Crop Health Monitoring After Heatwave

Natural-language instruction:

> After yesterday's heatwave, sweep all cultivated rows for stress signatures, prioritize southern exposure blocks.

Generated mission intent:

- Mission type: post-event monitoring
- Target zone: all cultivated rows
- Objective: heat stress signature detection
- Priority: southern exposure blocks

Mission steps:

1. Load recent heat-event context.
2. Sweep cultivated rows.
3. Prioritize southern exposure blocks.
4. Flag stress signatures.
5. Surface missing data warnings.
6. Queue output for operator review.

Safety checks:

- Missing soil data warning
- Battery envelope checked
- Operator approval required

Expected output:

- Structured mission JSON
- Heat-stress monitoring intent
- Operator review queue entry

## Field Infrastructure Inspection

Natural-language instruction:

> Inspect perimeter fencing and gate mechanisms, avoid restricted equipment area, generate photo report.

Generated mission intent:

- Mission type: infrastructure inspection
- Target zone: perimeter and gates
- Objective: structural integrity
- Constraints: avoid restricted equipment area

Mission steps:

1. Start from base station.
2. Trace perimeter fence route.
3. Inspect gate mechanisms.
4. Avoid restricted equipment area.
5. Generate photo report.
6. Return to operator review.

Safety checks:

- Restricted zone avoidance required
- Weather checked
- Operator approval required

Expected output:

- Structured mission JSON
- Photo-report mission intent
- Operator-approved execution mode

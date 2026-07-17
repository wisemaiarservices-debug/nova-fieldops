export type FieldOpsScenario = {
  title: string;
  tag: string;
  instruction: string;
  intent: string;
  mission: { k: string; v: string }[];
  steps: string[];
  safety: string[];
  output: Record<string, unknown>;
};

export const fieldOpsScenarios: FieldOpsScenario[] = [
  {
    title: "Vineyard water-stress inspection",
    tag: "Inspection / vineyard",
    instruction:
      "Inspect the north vineyard rows for water stress, avoid wet zones, prioritize high-risk areas, and return to base before sunset.",
    intent:
      "Detect possible crop water stress in a bounded vineyard block while avoiding wet soil and preserving a return window.",
    mission: [
      { k: "Task", v: "crop_inspection" },
      { k: "Target", v: "north_vineyard_rows" },
      { k: "Objective", v: "water_stress_detection" },
      { k: "Constraints", v: "avoid_wet_zones / return_before_sunset" },
    ],
    steps: [
      "Start from base station",
      "Navigate to north vineyard rows",
      "Avoid mapped wet zones",
      "Capture crop imagery and stress indicators",
      "Prioritize high-risk rows",
      "Return to base before sunset buffer",
    ],
    safety: [
      "Restricted zones checked",
      "Wet-zone avoidance required",
      "Operator approval required",
    ],
    output: {
      mission_type: "crop_inspection",
      target_zone: "north_vineyard_rows",
      objective: "water_stress_detection",
      approval_required: true,
      execution_mode: "operator_approved",
    },
  },
  {
    title: "Irrigation line anomaly check",
    tag: "Diagnostics / irrigation",
    instruction: "Walk irrigation sector A, flag pressure drops or leaks, and skip the wet zone.",
    intent:
      "Inspect irrigation infrastructure for anomalies while preserving exclusion-zone constraints.",
    mission: [
      { k: "Task", v: "infrastructure_diagnostics" },
      { k: "Target", v: "irrigation_sector_a" },
      { k: "Objective", v: "leak_and_pressure_anomaly" },
      { k: "Constraints", v: "avoid_wet_zones" },
    ],
    steps: [
      "Start from base station",
      "Traverse irrigation sector A",
      "Record candidate pressure or leak anomalies",
      "Avoid wet-zone boundary",
      "Return for operator review",
    ],
    safety: ["Terrain risk checked", "Wet-zone boundary checked", "Operator approval required"],
    output: {
      mission_type: "infrastructure_diagnostics",
      target_zone: "irrigation_sector_a",
      objective: "leak_and_pressure_anomaly",
      approval_required: true,
      execution_mode: "operator_approved",
    },
  },
  {
    title: "Crop health monitoring after heatwave",
    tag: "Monitoring / post-event",
    instruction:
      "After yesterday's heatwave, sweep all cultivated rows for stress signatures, prioritize southern exposure blocks.",
    intent: "Generate a post-event crop-health monitoring mission after a heat-stress event.",
    mission: [
      { k: "Task", v: "post_event_monitoring" },
      { k: "Target", v: "all_cultivated_rows" },
      { k: "Objective", v: "heat_stress_signature" },
      { k: "Priority", v: "southern_exposure_blocks" },
    ],
    steps: [
      "Load recent heat-event context",
      "Sweep cultivated rows",
      "Prioritize southern exposure blocks",
      "Flag stress signatures",
      "Surface missing data warnings",
      "Queue output for operator review",
    ],
    safety: ["Missing soil data warning", "Battery envelope checked", "Operator approval required"],
    output: {
      mission_type: "post_event_monitoring",
      target_zone: "all_cultivated_rows",
      objective: "heat_stress_signature",
      approval_required: true,
      execution_mode: "operator_approved",
    },
  },
  {
    title: "Field infrastructure inspection",
    tag: "Inspection / infrastructure",
    instruction:
      "Inspect perimeter fencing and gate mechanisms, avoid restricted equipment area, generate photo report.",
    intent: "Inspect field infrastructure while avoiding restricted equipment zones.",
    mission: [
      { k: "Task", v: "infrastructure_inspection" },
      { k: "Target", v: "perimeter_and_gates" },
      { k: "Objective", v: "structural_integrity" },
      { k: "Constraints", v: "avoid_restricted_area" },
    ],
    steps: [
      "Start from base station",
      "Trace perimeter fence route",
      "Inspect gate mechanisms",
      "Avoid restricted equipment area",
      "Generate photo report",
      "Return to operator review",
    ],
    safety: ["Restricted zone avoidance required", "Weather checked", "Operator approval required"],
    output: {
      mission_type: "infrastructure_inspection",
      target_zone: "perimeter_and_gates",
      objective: "structural_integrity",
      approval_required: true,
      execution_mode: "operator_approved",
    },
  },
];

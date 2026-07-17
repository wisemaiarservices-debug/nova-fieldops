export const missionSchemaExample = {
  mission_type: "crop_inspection",
  target_zone: "north_vineyard_rows",
  objective: "water_stress_detection",
  constraints: ["avoid_wet_zones", "return_before_sunset"],
  priority: "high_risk_areas",
  approval_required: true,
  execution_mode: "operator_approved",
};

export const missionSchemaFields = [
  { field: "mission_type", purpose: "Classifies the agricultural mission intent." },
  { field: "target_zone", purpose: "Identifies the field area or asset to inspect." },
  { field: "objective", purpose: "Defines the mission goal to evaluate." },
  { field: "constraints", purpose: "Lists limits such as restricted zones or time windows." },
  { field: "priority", purpose: "Captures operator prioritization for routing and review." },
  { field: "approval_required", purpose: "Requires human approval before downstream use." },
  { field: "execution_mode", purpose: "Keeps output in operator-approved mode only." },
] as const;

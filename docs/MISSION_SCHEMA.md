# Mission Schema

NOVA FieldOps produces structured mission outputs for operator review and integration-ready downstream workflows. The schema is intentionally explicit about approval and execution mode.

## Example

```json
{
  "mission_type": "crop_inspection",
  "target_zone": "north_vineyard_rows",
  "objective": "water_stress_detection",
  "constraints": ["avoid_wet_zones", "return_before_sunset"],
  "priority": "high_risk_areas",
  "approval_required": true,
  "execution_mode": "operator_approved"
}
```

## Field Notes

- `mission_type`: agricultural mission category.
- `target_zone`: field area, asset, or route segment.
- `objective`: operator goal translated into a structured intent.
- `constraints`: limits that must be checked before approval.
- `priority`: routing or inspection priority.
- `approval_required`: must remain true for physical workflows.
- `execution_mode`: must remain `operator_approved`.

No autonomous physical execution is permitted without human approval.

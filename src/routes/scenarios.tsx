import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Panel, SectionHeading, StatusDot } from "@/components/ui-parts";

export const Route = createFileRoute("/scenarios")({
  head: () => ({ meta: [{ title: "Scenarios — NOVA FieldOps" }, { name: "description", content: "Example mission scenarios demonstrating natural-language planning across agricultural operations." }] }),
  component: Scenarios,
});

type Scenario = {
  title: string;
  tag: string;
  instruction: string;
  mission: { k: string; v: string }[];
  safety: string[];
  output: Record<string, unknown>;
};

const scenarios: Scenario[] = [
  {
    title: "Vineyard water-stress inspection",
    tag: "Inspection · vineyard",
    instruction: "Inspect the north vineyard rows for water stress, avoid wet zones, prioritize high-risk areas, and return to base before sunset.",
    mission: [
      { k: "Task", v: "crop_inspection" },
      { k: "Target", v: "north_vineyard_rows" },
      { k: "Objective", v: "water_stress_detection" },
      { k: "Constraints", v: "avoid_wet_zones · return_before_sunset" },
    ],
    safety: ["Restricted zones cleared", "Battery within envelope", "Operator approval required"],
    output: { mission_type: "crop_inspection", target_zone: "north_vineyard_rows", objective: "water_stress_detection", approval_required: true },
  },
  {
    title: "Irrigation line anomaly check",
    tag: "Diagnostics · irrigation",
    instruction: "Walk irrigation sector A, flag pressure drops or leaks, and skip the wet zone.",
    mission: [
      { k: "Task", v: "infrastructure_diagnostics" },
      { k: "Target", v: "irrigation_sector_a" },
      { k: "Objective", v: "leak_and_pressure_anomaly" },
      { k: "Constraints", v: "avoid_wet_zones" },
    ],
    safety: ["Terrain risk low", "Weather nominal", "Operator approval required"],
    output: { mission_type: "infrastructure_diagnostics", target_zone: "irrigation_sector_a", objective: "leak_and_pressure_anomaly", approval_required: true },
  },
  {
    title: "Crop health monitoring after heatwave",
    tag: "Monitoring · post-event",
    instruction: "After yesterday's heatwave, sweep all cultivated rows for stress signatures, prioritize southern exposure blocks.",
    mission: [
      { k: "Task", v: "post_event_monitoring" },
      { k: "Target", v: "all_cultivated_rows" },
      { k: "Objective", v: "heat_stress_signature" },
      { k: "Priority", v: "southern_exposure_blocks" },
    ],
    safety: ["Missing data: overnight soil temp", "Battery envelope tight", "Operator approval required"],
    output: { mission_type: "post_event_monitoring", target_zone: "all_cultivated_rows", objective: "heat_stress_signature", approval_required: true },
  },
  {
    title: "Field infrastructure inspection",
    tag: "Inspection · infrastructure",
    instruction: "Inspect perimeter fencing and gate mechanisms, avoid restricted equipment area, generate photo report.",
    mission: [
      { k: "Task", v: "infrastructure_inspection" },
      { k: "Target", v: "perimeter_and_gates" },
      { k: "Objective", v: "structural_integrity" },
      { k: "Constraints", v: "avoid_restricted_area" },
    ],
    safety: ["Restricted zone avoidance ✓", "Weather nominal", "Operator approval required"],
    output: { mission_type: "infrastructure_inspection", target_zone: "perimeter_and_gates", objective: "structural_integrity", approval_required: true },
  },
];

function Scenarios() {
  return (
    <PageShell>
      <SectionHeading eyebrow="Scenarios" title="Example missions" description="How natural-language intent becomes structured, safety-validated, operator-approved plans across common agricultural operations." />

      <div className="grid gap-6 md:grid-cols-2">
        {scenarios.map((s) => (
          <Panel key={s.title}>
            <div className="flex items-center justify-between">
              <div className="hud-label text-primary">{s.tag}</div>
              <span className="flex items-center gap-1.5 hud-label"><StatusDot />ready</span>
            </div>
            <h3 className="mt-2 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground italic">"{s.instruction}"</p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <div className="hud-label">Generated mission</div>
                <dl className="mt-2 space-y-1.5 text-xs">
                  {s.mission.map((m) => (
                    <div key={m.k} className="flex justify-between gap-3 border-b border-border/50 pb-1">
                      <dt className="text-muted-foreground">{m.k}</dt>
                      <dd className="font-mono">{m.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <div className="hud-label">Safety checks</div>
                <ul className="mt-2 space-y-1 text-xs">
                  {s.safety.map((x) => <li key={x} className="flex gap-2"><span className="text-primary">✓</span>{x}</li>)}
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <div className="hud-label">Expected output</div>
              <pre className="mt-2 overflow-x-auto rounded-md bg-background/70 border border-border p-3 text-[11px] leading-relaxed">
{JSON.stringify(s.output, null, 2)}
              </pre>
            </div>
          </Panel>
        ))}
      </div>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Panel, SectionHeading, StatusDot } from "@/components/ui-parts";

export const Route = createFileRoute("/mission-review")({
  head: () => ({
    meta: [
      { title: "Mission Review - NOVA FieldOps" },
      {
        name: "description",
        content: "Operator-facing review of mission steps, assumptions, and missing data warnings.",
      },
    ],
  }),
  component: Review,
});

const steps = [
  "Start from base station",
  "Navigate to north vineyard rows",
  "Avoid wet zone",
  "Capture crop imagery",
  "Check irrigation sector A",
  "Flag water-stress anomalies",
  "Return to base",
  "Generate mission report",
];

const assumptions = [
  "Sunset window at 18:42 local; return buffer 20 min applied.",
  "Row spacing consistent across north vineyard block.",
  "Base station reachable via primary service track.",
];

const warnings = [
  "Latest soil moisture reading unavailable; using 24h stale snapshot.",
  "Wind forecast beyond mission window not verified.",
];

function Review() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Mission Review"
        title="Operator review queue"
        description="Illustrative mission-review fixture. The steps, timings and assumptions are sample content, not a live robot mission or verified field assessment."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Panel className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <div className="hud-label text-primary">Sample mission steps</div>
            <span className="hud-label">MSN-2417 / rover-03</span>
          </div>
          <ol className="mt-4 space-y-2">
            {steps.map((s, i) => (
              <li
                key={s}
                className="flex items-start gap-3 rounded-md border border-border/60 bg-background/40 p-3"
              >
                <span className="font-mono text-xs w-8 h-8 rounded-md bg-primary/15 text-primary flex items-center justify-center border border-primary/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="text-sm font-medium">{s}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    sample estimate: {2 + i} min / not safety-validated
                  </div>
                </div>
                <StatusDot tone={i === steps.length - 1 ? "info" : "ok"} />
              </li>
            ))}
          </ol>
        </Panel>

        <div className="space-y-6">
          <Panel>
            <div className="hud-label text-primary">Assumptions</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/90">
              {assumptions.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="text-primary">-</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel className="border-l-4 border-l-yellow-400/70">
            <div className="hud-label text-yellow-400">Missing data warnings</div>
            <ul className="mt-3 space-y-2 text-sm">
              {warnings.map((w) => (
                <li key={w} className="flex gap-2">
                  <span className="text-yellow-400">!</span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel>
            <div className="hud-label">Approval</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Preview only. Approval is not connected to a durable workflow and this mission cannot be dispatched.
            </p>
            <div className="mt-3 flex gap-2">
              <button disabled className="flex-1 cursor-not-allowed rounded-md bg-primary/30 px-4 py-2 text-sm font-semibold text-primary-foreground/60" title="Approval workflow is not connected">
                Approval unavailable
              </button>
              <button disabled className="flex-1 cursor-not-allowed rounded-md border border-border px-4 py-2 text-sm text-muted-foreground" title="Change-request workflow is not connected">
                Changes unavailable
              </button>
            </div>
          </Panel>
        </div>
      </div>
    </PageShell>
  );
}

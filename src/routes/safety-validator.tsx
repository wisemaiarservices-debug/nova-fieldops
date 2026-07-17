import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Panel, SectionHeading, StatusDot } from "@/components/ui-parts";
import { safetyChecks } from "@/data/safety-checks";

export const Route = createFileRoute("/safety-validator")({
  head: () => ({
    meta: [
      { title: "Safety Validator - NOVA FieldOps" },
      {
        name: "description",
        content:
          "Pre-execution safety checks: restricted zones, weather, battery, terrain, and human approval.",
      },
    ],
  }),
  component: Safety,
});

function Safety() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Safety Validator"
        title="Pre-execution checks"
        description="Every mission is checked across environmental, physical, and governance gates. Any unresolved failure blocks approval."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Panel className="lg:col-span-2">
          <div className="hud-label text-primary">Validation matrix</div>
          <div className="mt-4 divide-y divide-border/60">
            {safetyChecks.map((c) => (
              <div key={c.label} className="py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <StatusDot tone={c.tone} />
                  <div>
                    <div className="font-medium">{c.label}</div>
                    <div className="text-xs text-muted-foreground">{c.note}</div>
                  </div>
                </div>
                <span
                  className={`font-mono text-xs uppercase tracking-widest ${
                    c.tone === "ok"
                      ? "text-primary"
                      : c.tone === "warn"
                        ? "text-yellow-400"
                        : c.tone === "err"
                          ? "text-destructive"
                          : "text-accent"
                  }`}
                >
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </Panel>

        <div className="space-y-6">
          <Panel>
            <div className="hud-label">Overall</div>
            <div className="mt-2 font-display text-3xl font-semibold text-yellow-400">
              Conditional
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Mission may proceed only after operator approval and acknowledgment of warnings.
            </p>
          </Panel>
          <Panel className="border-l-4 border-l-destructive/70">
            <div className="hud-label text-destructive">Governance</div>
            <p className="mt-2 text-sm">
              Autonomous physical execution is disabled by design. Civil agricultural applications
              only.
            </p>
          </Panel>
        </div>
      </div>
    </PageShell>
  );
}

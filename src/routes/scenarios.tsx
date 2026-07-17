import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Panel, SectionHeading, StatusDot } from "@/components/ui-parts";
import { fieldOpsScenarios } from "@/data/scenarios";

export const Route = createFileRoute("/scenarios")({
  head: () => ({
    meta: [
      { title: "Scenarios - NOVA FieldOps" },
      {
        name: "description",
        content:
          "Example mission scenarios demonstrating natural-language planning across agricultural operations.",
      },
    ],
  }),
  component: Scenarios,
});

function Scenarios() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Scenarios"
        title="Example missions"
        description="How natural-language intent becomes structured, scenario-tested, operator-approved plans across common agricultural operations."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {fieldOpsScenarios.map((s) => (
          <Panel key={s.title}>
            <div className="flex items-center justify-between">
              <div className="hud-label text-primary">{s.tag}</div>
              <span className="flex items-center gap-1.5 hud-label">
                <StatusDot />
                sample
              </span>
            </div>
            <h3 className="mt-2 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground italic">"{s.instruction}"</p>
            <p className="mt-2 text-xs text-foreground/80">{s.intent}</p>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <div className="hud-label">Generated mission</div>
                <dl className="mt-2 space-y-1.5 text-xs">
                  {s.mission.map((m) => (
                    <div
                      key={m.k}
                      className="flex justify-between gap-3 border-b border-border/50 pb-1"
                    >
                      <dt className="text-muted-foreground">{m.k}</dt>
                      <dd className="font-mono">{m.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <div className="hud-label">Safety checks</div>
                <ul className="mt-2 space-y-1 text-xs">
                  {s.safety.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-primary">ok</span>
                      {x}
                    </li>
                  ))}
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

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, Panel, SectionHeading, StatusDot } from "@/components/ui-parts";

export const Route = createFileRoute("/mission-generator")({
  head: () => ({
    meta: [
      { title: "Mission Generator - NOVA FieldOps" },
      {
        name: "description",
        content:
          "Convert natural-language agricultural instructions into structured, operator-approved robot missions.",
      },
    ],
  }),
  component: Generator,
});

const DEFAULT_INSTRUCTION =
  "Inspect the north vineyard rows for water stress, avoid wet zones, prioritize high-risk areas, and return to base before sunset.";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="hud-label">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

const inputCls =
  "w-full rounded-md bg-input/60 border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

function Generator() {
  const [instruction, setInstruction] = useState(DEFAULT_INSTRUCTION);
  const [crop, setCrop] = useState("Vineyard");
  const [zone, setZone] = useState("North vineyard rows");
  const [robot, setRobot] = useState("Ground rover / imaging");
  const [priority, setPriority] = useState("High-risk crop areas");
  const [weather, setWeather] = useState("Clear / low wind");
  const [restricted, setRestricted] = useState("Wet zone, restricted equipment area");
  const [notes, setNotes] = useState("Return before sunset window (18:42 local).");
  const [generated, setGenerated] = useState(true);

  return (
    <PageShell>
      <SectionHeading
        eyebrow="Mission Generator"
        title="Describe the field intent"
        description="Enter natural-language instructions. NOVA FieldOps extracts task, target, constraints, and priorities into a structured, operator-approved plan."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <Panel className="lg:col-span-3">
          <Field label="Mission instruction">
            <textarea
              rows={4}
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
              className={inputCls}
            />
          </Field>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Field label="Crop type">
              <input className={inputCls} value={crop} onChange={(e) => setCrop(e.target.value)} />
            </Field>
            <Field label="Field zone">
              <input className={inputCls} value={zone} onChange={(e) => setZone(e.target.value)} />
            </Field>
            <Field label="Robot type">
              <select className={inputCls} value={robot} onChange={(e) => setRobot(e.target.value)}>
                <option>Ground rover / imaging</option>
                <option>UAV drone / multispectral</option>
                <option>Irrigation inspector</option>
                <option>Soil sampler</option>
              </select>
            </Field>
            <Field label="Priority">
              <select
                className={inputCls}
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option>High-risk crop areas</option>
                <option>Uniform sweep</option>
                <option>Perimeter first</option>
              </select>
            </Field>
            <Field label="Weather condition">
              <input
                className={inputCls}
                value={weather}
                onChange={(e) => setWeather(e.target.value)}
              />
            </Field>
            <Field label="Restricted zones">
              <input
                className={inputCls}
                value={restricted}
                onChange={(e) => setRestricted(e.target.value)}
              />
            </Field>
          </div>
          <div className="mt-4">
            <Field label="Operator notes">
              <textarea
                rows={2}
                className={inputCls}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Field>
          </div>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => setGenerated(true)}
              className="rounded-md bg-primary px-5 py-2.5 font-semibold text-primary-foreground glow-primary"
            >
              Generate mission intent
            </button>
            <button
              onClick={() => setGenerated(false)}
              className="rounded-md border border-border px-5 py-2.5 text-sm"
            >
              Reset
            </button>
          </div>
        </Panel>

        <Panel className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <div className="hud-label text-primary">Generated mission intent</div>
            <span className="flex items-center gap-1.5 hud-label">
              <StatusDot tone={generated ? "ok" : "warn"} />
              {generated ? "parsed" : "idle"}
            </span>
          </div>
          {generated ? (
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ["Task type", "inspection"],
                ["Target zone", "north vineyard rows"],
                ["Objective", "detect water stress"],
                ["Constraints", "avoid wet zones / return before sunset"],
                ["Priority", "high-risk areas"],
                ["Approval required", "yes"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-border/60 pb-2">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="text-right font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="mt-4 text-sm text-muted-foreground">
              Awaiting instruction. Complete the form and generate.
            </p>
          )}
          <div className="mt-6 rounded-md border border-primary/30 bg-primary/5 p-3 text-xs text-foreground/80">
            <span className="font-semibold text-primary">Approval gate:</span> No autonomous
            physical execution. Mission enters review queue.
          </div>
        </Panel>
      </div>
    </PageShell>
  );
}

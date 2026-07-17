import { createFileRoute, Link } from "@tanstack/react-router";

import { Badge, PageShell, Panel, SectionHeading, StatusDot } from "@/components/ui-parts";

export const Route = createFileRoute("/demo")({ component: Demo });

const instruction =
  "Inspect the north vineyard rows for water stress, avoid wet zones, prioritize high-risk areas, and return to base before sunset.";

const missionIntent = [
  ["Task type", "crop inspection"],
  ["Target zone", "north vineyard rows"],
  ["Objective", "water-stress detection"],
  ["Constraints", "avoid wet zones, return before sunset"],
  ["Priority", "high-risk areas"],
  ["Approval required", "yes"],
];

const fieldContext = [
  "Vineyard rows",
  "Irrigation sector A",
  "Wet zone",
  "Restricted equipment area",
  "Base station",
  "High-risk stress area",
];

const missionPlan = [
  "Start from base station",
  "Navigate to north vineyard rows",
  "Avoid wet zone",
  "Capture crop imagery",
  "Inspect irrigation sector A",
  "Flag water-stress anomalies",
  "Return before sunset",
  "Generate mission report",
];

const safetyValidation = [
  ["Restricted zone avoidance", "passed", "ok"],
  ["Weather risk", "moderate", "warn"],
  ["Battery requirement", "passed", "ok"],
  ["Terrain risk", "low", "ok"],
  ["Human approval", "required", "warn"],
  ["Missing data", "latest soil moisture reading unavailable", "warn"],
  ["Autonomous execution", "disabled", "err"],
] as const;

const structuredOutput = {
  mission_type: "crop_inspection",
  target_zone: "north_vineyard_rows",
  objective: "water_stress_detection",
  constraints: ["avoid_wet_zones", "return_before_sunset"],
  priority: "high_risk_areas",
  approval_required: true,
  execution_mode: "operator_approved",
};

function Demo() {
  return (
    <PageShell>
      <section className="relative overflow-hidden rounded-none border-b border-border/50 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Video-ready walkthrough</Badge>
          <Badge>AI-BOOST Challenge 1</Badge>
          <Badge>Operator-approved</Badge>
        </div>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight md:text-6xl">
          NOVA FieldOps demo
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          A guided recording page showing how natural agricultural instructions become safe,
          structured, operator-approved mission plans.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/mission-generator"
            className="rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground glow-primary transition hover:brightness-110"
          >
            Open Generator
          </Link>
          <Link
            to="/about"
            className="rounded-md border border-border bg-secondary/40 px-5 py-3 font-semibold transition hover:bg-secondary"
          >
            Challenge Fit
          </Link>
        </div>
      </section>

      <section className="mt-14">
        <SectionHeading
          eyebrow="Section 1"
          title="Natural-language instruction"
          description="The operator starts with plain field language, not robot-specific syntax."
        />
        <Panel className="border-l-4 border-l-primary">
          <p className="font-display text-2xl leading-relaxed text-foreground">"{instruction}"</p>
        </Panel>
      </section>

      <section className="mt-14">
        <SectionHeading
          eyebrow="Section 2"
          title="Generated mission intent"
          description="The instruction is converted into mission fields that can be reviewed before export."
        />
        <Panel>
          <div className="grid gap-3 md:grid-cols-2">
            {missionIntent.map(([label, value]) => (
              <div key={label} className="rounded-md border border-border bg-background/45 p-4">
                <div className="hud-label">{label}</div>
                <div className="mt-2 font-display text-lg font-semibold text-primary">{value}</div>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      <section className="mt-14">
        <SectionHeading
          eyebrow="Section 3"
          title="Field context"
          description="The mission is grounded in sample field entities and constraints before planning."
        />
        <Panel>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {fieldContext.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-md border border-border bg-secondary/30 p-4"
              >
                <StatusDot
                  tone={item.includes("Wet") || item.includes("Restricted") ? "warn" : "info"}
                />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      <section className="mt-14">
        <SectionHeading
          eyebrow="Section 4"
          title="Mission plan"
          description="NOVA FieldOps turns intent and context into an ordered plan for operator review."
        />
        <Panel>
          <ol className="space-y-3">
            {missionPlan.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 rounded-md border border-border bg-background/45 p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/15 font-mono text-sm font-semibold text-primary">
                  {index + 1}
                </span>
                <span className="pt-1 text-sm md:text-base">{step}</span>
              </li>
            ))}
          </ol>
        </Panel>
      </section>

      <section className="mt-14">
        <SectionHeading
          eyebrow="Section 5"
          title="Safety validation"
          description="The system checks constraints and keeps physical execution disabled until a human operator approves."
        />
        <Panel>
          <div className="space-y-3">
            {safetyValidation.map(([label, value, tone]) => (
              <div
                key={label}
                className="flex flex-col gap-2 rounded-md border border-border bg-background/45 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="font-medium">{label}</span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <StatusDot tone={tone} />
                  {value}
                </span>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      <section className="mt-14">
        <SectionHeading
          eyebrow="Section 6"
          title="Structured mission output"
          description="The final output is readable JSON for simulators, middleware adapters, or partner robot systems."
        />
        <Panel>
          <pre className="overflow-x-auto rounded-md border border-border bg-background/70 p-5 text-xs leading-relaxed md:text-sm">
            {JSON.stringify(structuredOutput, null, 2)}
          </pre>
        </Panel>
      </section>

      <section className="mt-14">
        <SectionHeading eyebrow="Section 7" title="AI-BOOST fit" />
        <Panel className="border-l-4 border-l-primary">
          <p className="max-w-4xl text-base leading-7 text-muted-foreground">
            NOVA FieldOps directly addresses AI-BOOST Challenge 1 by translating natural-language
            agricultural instructions into structured mission plans, while adding field context,
            safety validation, human approval, and structured export.
          </p>
          <p className="mt-4 max-w-4xl text-base leading-7 text-muted-foreground">
            The product remains a challenge-focused PoC / Spark Phase candidate. It does not claim
            field validation, live robot deployment, production use, or autonomous physical
            execution.
          </p>
        </Panel>
      </section>
    </PageShell>
  );
}

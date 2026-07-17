import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Panel, SectionHeading } from "@/components/ui-parts";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "AI-BOOST Challenge 1 Fit - NOVA FieldOps" },
      {
        name: "description",
        content:
          "How NOVA FieldOps fits AI-BOOST Challenge 1 as a challenge-focused PoC for natural-language agricultural robot mission generation.",
      },
      { property: "og:title", content: "AI-BOOST Challenge 1 Fit - NOVA FieldOps" },
      {
        property: "og:description",
        content:
          "Challenge-focused PoC extension of NOVA OS / NeoAgro for operator-approved agricultural robot mission generation.",
      },
    ],
  }),
  component: ChallengeFit,
});

export const challengeFitSections = [
  {
    title: "Problem",
    body: "Agricultural robots require structured mission definitions, while farm operators often express intent in natural language. Converting field instructions into safe, auditable robot plans is still manual, inconsistent, and difficult to govern.",
  },
  {
    title: "Proposed Solution",
    body: "NOVA FieldOps turns natural-language agricultural instructions into structured mission plans with explicit constraints, safety checks, missing-data warnings, and required operator approval before any downstream execution.",
  },
  {
    title: "Technical Approach",
    body: "The PoC combines intent extraction, mission decomposition, zone-aware planning, deterministic JSON output, safety gate evaluation, and human approval status. It is designed to plug into NOVA OS / NeoAgro workflows without claiming live robot-fleet integration.",
  },
  {
    title: "Responsible AI",
    body: "The system keeps humans in control, flags assumptions, surfaces missing data, blocks autonomous physical execution by design, and limits use to civil agricultural applications.",
  },
  {
    title: "Spark Phase Plan",
    body: "The Spark Phase would support development of the first focused mission-generation PoC: refined prompts, structured schema outputs, scenario workflows, safety gate logic, and operator review screens.",
  },
  {
    title: "Advance Phase Plan",
    body: "The Advance Phase would support integration-ready adapters, expanded crop and field scenarios, deeper geospatial context, controlled simulation testing, and a field-validation pathway with agricultural robotics partners.",
  },
  {
    title: "Expected Outputs",
    body: "Expected outputs include a mission generator, scenario library, safety validator, structured mission schema, operator review workflow, mission output examples, and documentation for responsible use.",
  },
  {
    title: "Why NeoHaven",
    body: "NeoHaven AI Urban Labs is building NOVA OS and NeoAgro around decision intelligence for sustainable infrastructure and agriculture, making NOVA FieldOps a focused extension of an existing product architecture.",
  },
] as const;

export function ChallengeFit() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="AI-BOOST Challenge 1"
        title="AI-BOOST Challenge 1 Fit"
        description="GenAI-Based Natural Language Mission Generator for Autonomous Robots in Agriculture."
      />

      <Panel className="border-l-4 border-l-primary">
        <div className="hud-label text-primary">Current stage</div>
        <p className="mt-2 text-foreground/90 leading-relaxed">
          NOVA FieldOps is a challenge-focused PoC extension of NOVA OS / NeoAgro. It has not yet
          been field-validated with agricultural robots. The Spark Phase would support development
          of the first focused mission-generation PoC.
        </p>
      </Panel>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {challengeFitSections.map((section, index) => (
          <Panel key={section.title}>
            <div className="hud-label">{String(index + 1).padStart(2, "0")}</div>
            <h3 className="mt-1 font-display text-xl font-semibold text-primary">
              {section.title}
            </h3>
            <p className="mt-2 text-sm text-foreground/85 leading-relaxed">{section.body}</p>
          </Panel>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Panel>
          <div className="hud-label">Product family</div>
          <div className="mt-2 font-display text-lg">NOVA OS</div>
          <p className="text-sm text-muted-foreground">
            Decision intelligence architecture across NeoHaven product pillars.
          </p>
        </Panel>
        <Panel>
          <div className="hud-label">Vertical</div>
          <div className="mt-2 font-display text-lg">NeoAgro</div>
          <p className="text-sm text-muted-foreground">
            Agricultural intelligence stack for field context, scenario workflows, and
            recommendations.
          </p>
        </Panel>
        <Panel>
          <div className="hud-label">This product</div>
          <div className="mt-2 font-display text-lg text-primary">NOVA FieldOps</div>
          <p className="text-sm text-muted-foreground">
            Operator-approved mission generation for agricultural robot planning.
          </p>
        </Panel>
      </div>
    </PageShell>
  );
}

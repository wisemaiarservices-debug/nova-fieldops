import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Panel, SectionHeading } from "@/components/ui-parts";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NOVA FieldOps" },
      {
        name: "description",
        content:
          "About NOVA FieldOps, NeoHaven's GenAI mission-planning layer for agricultural robots and field operations.",
      },
      { property: "og:title", content: "About NOVA FieldOps" },
      {
        property: "og:description",
        content:
          "NOVA FieldOps turns natural-language agricultural instructions into safe, structured, operator-approved robot mission plans.",
      },
    ],
  }),
  component: ProductOverview,
});

export const productOverviewSections = [
  {
    title: "Product Overview",
    body: "NOVA FieldOps is a GenAI mission-planning layer for agricultural robots and field operations. It converts natural-language agricultural instructions into structured mission plans that operators can review before downstream use.",
  },
  {
    title: "Problem",
    body: "Agricultural operators think in field language, while robotic workflows need explicit mission types, target zones, constraints, maps, task steps, safety checks, and structured outputs.",
  },
  {
    title: "Solution",
    body: "NOVA FieldOps translates plain-language field intent into mission intent, field context, safety validation, human approval status, and readable JSON output for integration-ready workflows.",
  },
  {
    title: "Workflow",
    body: "The workflow moves from natural-language instruction to mission intent, field context, mission plan, safety validation, operator approval, and structured export.",
  },
  {
    title: "Technology Approach",
    body: "The product combines intent extraction, mission decomposition, zone-aware planning, deterministic schema output, safety-gate evaluation, and human-in-the-loop review.",
  },
  {
    title: "Safety Principles",
    body: "The system keeps humans in control, flags assumptions, surfaces missing data, blocks autonomous physical execution by design, and limits use to civil agricultural applications.",
  },
  {
    title: "Current Stage",
    body: "NOVA FieldOps is a product-preview and PoC-ready extension of NOVA OS / NeoAgro. It is designed for scenario workflows, operator review, safety validation, and integration-ready structured mission outputs. Field validation and partner integrations are part of the next deployment pathway.",
  },
  {
    title: "NeoHaven Product Family",
    body: "NOVA FieldOps extends NeoHaven's NOVA OS and NeoAgro product architecture with mission-planning workflows for agricultural robotics and field operations.",
  },
] as const;

export function ProductOverview({ title = "About NOVA FieldOps" }: { title?: string }) {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="NOVA OS / NeoAgro"
        title={title}
        description="GenAI mission planning for agricultural robots and field operations."
      />

      <Panel className="border-l-4 border-l-primary">
        <div className="hud-label text-primary">Product one-liner</div>
        <p className="mt-2 text-foreground/90 leading-relaxed">
          NOVA FieldOps turns natural-language agricultural instructions into safe, structured,
          operator-approved robot mission plans.
        </p>
      </Panel>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {productOverviewSections.map((section, index) => (
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

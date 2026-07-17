import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Panel, SectionHeading } from "@/components/ui-parts";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "Challenge Fit — NOVA FieldOps" },
    { name: "description", content: "How NOVA FieldOps addresses AI-BOOST Challenge 1: GenAI-based natural-language mission generation for autonomous agricultural robots." },
    { property: "og:title", content: "Challenge Fit — NOVA FieldOps" },
    { property: "og:description", content: "GenAI-based natural-language mission generation for autonomous robots in agriculture." },
  ] }),
  component: About,
});

const sections: { t: string; d: string }[] = [
  { t: "Problem", d: "Agricultural robots remain hard to deploy: field intent lives in operator language, but robot fleets consume rigid mission definitions. Translation is manual, brittle, and unsafe." },
  { t: "Solution", d: "NOVA FieldOps is a GenAI mission-planning layer that parses natural-language field instructions, aligns them with spatial and temporal context, validates safety, and exports structured mission plans for approved execution." },
  { t: "Technical approach", d: "LLM-driven intent extraction · zone-aware planner · rule-based and heuristic safety validators · deterministic mission schema · signed operator approval · integration hooks to NOVA OS and partner fleets." },
  { t: "Responsible AI", d: "Human-in-the-loop by design. No autonomous physical execution. Explicit assumption and missing-data surfacing. Civil agricultural applications only. Full audit trail per mission." },
  { t: "Spark Phase plan", d: "Deliver a working mission generator, safety validator, and structured export. Validate on vineyard, irrigation, and infrastructure scenarios with operator user studies." },
  { t: "Advance Phase plan", d: "Integrate with live NOVA OS fleets, extend planner with multi-robot coordination, add continuous field-context ingestion (weather, soil, imagery), and expand scenario library across crops and geographies." },
];

function About() {
  return (
    <PageShell>
      <SectionHeading eyebrow="About · Challenge Fit" title="AI-BOOST Challenge 1" description="GenAI-Based Natural Language Mission Generator for Autonomous Robots in Agriculture." />

      <Panel className="border-l-4 border-l-primary">
        <div className="hud-label text-primary">Challenge fit</div>
        <p className="mt-2 text-foreground/90">
          NOVA FieldOps directly addresses the challenge objective of translating natural-language agricultural instructions into structured robot mission plans. It combines GenAI, field context, mission decomposition, safety validation, human approval, and structured mission export.
        </p>
      </Panel>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {sections.map((s, i) => (
          <Panel key={s.t}>
            <div className="hud-label">0{i + 1}</div>
            <h3 className="mt-1 font-display text-xl font-semibold text-primary">{s.t}</h3>
            <p className="mt-2 text-sm text-foreground/85 leading-relaxed">{s.d}</p>
          </Panel>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Panel>
          <div className="hud-label">Product family</div>
          <div className="mt-2 font-display text-lg">NOVA OS</div>
          <p className="text-sm text-muted-foreground">Operating layer for decision intelligence across NeoHaven products.</p>
        </Panel>
        <Panel>
          <div className="hud-label">Vertical</div>
          <div className="mt-2 font-display text-lg">NeoAgro</div>
          <p className="text-sm text-muted-foreground">Agricultural intelligence stack — field context, crop analytics, robotics.</p>
        </Panel>
        <Panel>
          <div className="hud-label">This product</div>
          <div className="mt-2 font-display text-lg text-primary">NOVA FieldOps</div>
          <p className="text-sm text-muted-foreground">GenAI mission-planning layer for agricultural robots.</p>
        </Panel>
      </div>
    </PageShell>
  );
}

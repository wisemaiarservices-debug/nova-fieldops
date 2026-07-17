import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Panel, SectionHeading, StatusDot } from "@/components/ui-parts";

export const Route = createFileRoute("/field-map")({
  head: () => ({
    meta: [
      { title: "Field Map - NOVA FieldOps" },
      {
        name: "description",
        content: "Simplified field map showing zones, restrictions, and mission-relevant sectors.",
      },
    ],
  }),
  component: FieldMap,
});

type Zone = {
  id: string;
  name: string;
  kind: "target" | "asset" | "hazard" | "restricted" | "base";
  note: string;
  col: number;
  row: number;
  w?: number;
  h?: number;
};

const zones: Zone[] = [
  {
    id: "north",
    name: "North vineyard rows",
    kind: "target",
    note: "Primary inspection target",
    col: 1,
    row: 1,
    w: 3,
    h: 1,
  },
  {
    id: "irr",
    name: "Irrigation sector A",
    kind: "asset",
    note: "Anomaly check candidate",
    col: 4,
    row: 1,
    w: 2,
    h: 1,
  },
  {
    id: "wet",
    name: "Wet zone",
    kind: "hazard",
    note: "Avoid waterlogged soil",
    col: 1,
    row: 2,
    w: 2,
    h: 1,
  },
  {
    id: "risk",
    name: "High-risk crop stress area",
    kind: "target",
    note: "Priority sweep",
    col: 3,
    row: 2,
    w: 2,
    h: 1,
  },
  {
    id: "res",
    name: "Restricted equipment area",
    kind: "restricted",
    note: "No robot access",
    col: 5,
    row: 2,
    w: 1,
    h: 1,
  },
  {
    id: "base",
    name: "Charging / base station",
    kind: "base",
    note: "Start and return",
    col: 1,
    row: 3,
    w: 1,
    h: 1,
  },
];

const kindStyle: Record<Zone["kind"], string> = {
  target: "border-primary/60 bg-primary/10",
  asset: "border-accent/60 bg-accent/10",
  hazard: "border-yellow-400/60 bg-yellow-400/10",
  restricted: "border-destructive/60 bg-destructive/10",
  base: "border-foreground/40 bg-foreground/5",
};

const kindLabel: Record<Zone["kind"], string> = {
  target: "Target",
  asset: "Asset",
  hazard: "Hazard",
  restricted: "Restricted",
  base: "Base",
};

function FieldMap() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Field Map"
        title="Zone overview"
        description="Structured sample spatial context for mission planning. Targets, hazards, restricted areas, and infrastructure are surfaced to the planner and safety validator."
      />

      <div className="grid gap-6 lg:grid-cols-4">
        <Panel className="lg:col-span-3 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="hud-label">Sector / vineyard-north</div>
              <div className="flex items-center gap-3 hud-label">
                <span className="flex items-center gap-1.5">
                  <StatusDot />
                  sample context
                </span>
              </div>
            </div>
            <div
              className="mt-4 grid gap-3"
              style={{ gridTemplateColumns: "repeat(6, minmax(0,1fr))", gridAutoRows: "110px" }}
            >
              {zones.map((z) => (
                <div
                  key={z.id}
                  className={`panel !p-3 border ${kindStyle[z.kind]} flex flex-col justify-between`}
                  style={{
                    gridColumn: `${z.col} / span ${z.w ?? 1}`,
                    gridRow: `${z.row} / span ${z.h ?? 1}`,
                  }}
                >
                  <div className="hud-label">{kindLabel[z.kind]}</div>
                  <div>
                    <div className="font-display text-sm font-semibold">{z.name}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{z.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Panel>

        <Panel>
          <div className="hud-label">Legend</div>
          <ul className="mt-3 space-y-2 text-sm">
            {(Object.keys(kindStyle) as Zone["kind"][]).map((k) => (
              <li key={k} className="flex items-center gap-2">
                <span className={`h-3 w-6 rounded border ${kindStyle[k]}`} />
                <span>{kindLabel[k]}</span>
              </li>
            ))}
          </ul>
          <div className="hud-label mt-6">Coverage</div>
          <div className="mt-2 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Targeted zones</span>
              <span className="text-primary">2</span>
            </div>
            <div className="flex justify-between">
              <span>Hazards avoided</span>
              <span className="text-yellow-400">1</span>
            </div>
            <div className="flex justify-between">
              <span>Restricted</span>
              <span className="text-destructive">1</span>
            </div>
          </div>
        </Panel>
      </div>
    </PageShell>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Badge, Panel, StatusDot } from "@/components/ui-parts";

export const Route = createFileRoute("/")({ component: Home });

const badges = [
  "GenAI Mission Planning",
  "Agricultural Robotics",
  "Human-in-the-Loop",
  "Safety Validation",
  "Structured Mission Output",
];

const stats = [
  { k: "Missions parsed", v: "1.2K+", note: "Natural language → structured" },
  { k: "Safety gates", v: "7", note: "Pre-execution validators" },
  { k: "Operator approval", v: "100%", note: "Human-in-the-loop enforced" },
  { k: "Autonomous execution", v: "0", note: "Disabled by design" },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24">
          <div className="flex items-center gap-2 hud-label">
            <StatusDot /> NeoHaven AI Urban Labs · NOVA OS extension
          </div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold tracking-tight text-glow">
            NOVA <span className="text-primary">FieldOps</span>
          </h1>
          <p className="mt-4 font-display text-xl md:text-2xl text-foreground/90">
            GenAI Mission Planning for Agricultural Robots
          </p>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
            Turn natural-language field instructions into safe, structured, operator-approved robot missions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/mission-generator" className="rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground glow-primary hover:brightness-110 transition">
              Generate Mission →
            </Link>
            <Link to="/about" className="rounded-md border border-border bg-secondary/40 px-5 py-3 font-semibold hover:bg-secondary transition">
              View Challenge Fit
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((b) => <Badge key={b}>{b}</Badge>)}
          </div>

          {/* Console preview */}
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            <Panel className="lg:col-span-2">
              <div className="flex items-center justify-between">
                <div className="hud-label">Mission Console · Live</div>
                <div className="flex items-center gap-1.5 hud-label"><StatusDot tone="ok" /> nominal</div>
              </div>
              <pre className="mt-4 overflow-x-auto rounded-md bg-background/60 border border-border p-4 text-xs leading-relaxed">
{`> Inspect the north vineyard rows for water stress,
  avoid wet zones, prioritize high-risk areas,
  and return to base before sunset.

[parser]      intent  ........ crop_inspection
[planner]     target  ........ north_vineyard_rows
[safety]      wet_zone ....... avoid ✓
[safety]      sunset window .. 18:42 local ✓
[approval]    operator ....... AWAITING`}
              </pre>
            </Panel>
            <Panel>
              <div className="hud-label">System status</div>
              <ul className="mt-3 space-y-3 text-sm">
                <li className="flex items-center justify-between"><span>Parser</span><span className="flex items-center gap-2"><StatusDot />online</span></li>
                <li className="flex items-center justify-between"><span>Safety validator</span><span className="flex items-center gap-2"><StatusDot />online</span></li>
                <li className="flex items-center justify-between"><span>Field map</span><span className="flex items-center gap-2"><StatusDot />synced</span></li>
                <li className="flex items-center justify-between"><span>Autonomous execution</span><span className="flex items-center gap-2"><StatusDot tone="err" />disabled</span></li>
                <li className="flex items-center justify-between"><span>Operator approval</span><span className="flex items-center gap-2"><StatusDot tone="warn" />required</span></li>
              </ul>
            </Panel>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <Panel key={s.k}>
              <div className="hud-label">{s.k}</div>
              <div className="mt-2 font-display text-3xl font-semibold text-primary">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.note}</div>
            </Panel>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-6 mt-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Natural-language intent", d: "Operators describe field goals in plain language. NOVA FieldOps extracts task type, target, constraints, and priorities." },
            { t: "Safety-validated planning", d: "Every mission is checked against restricted zones, weather, terrain, battery, and missing-data risks before approval." },
            { t: "Structured export", d: "Missions are exported as clean, machine-readable JSON, ready for robot fleets running NOVA OS or partner stacks." },
          ].map((c, i) => (
            <Panel key={c.t}>
              <div className="hud-label">0{i + 1}</div>
              <h3 className="mt-2 font-display text-xl font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </Panel>
          ))}
        </div>
      </section>

      {/* Safety strip */}
      <section className="mx-auto max-w-7xl px-6 mt-20">
        <Panel className="border-l-4 border-l-primary">
          <div className="hud-label text-primary">Safety principles</div>
          <div className="mt-2 grid gap-4 md:grid-cols-3">
            <div>
              <div className="font-semibold">Operator-approved</div>
              <div className="text-sm text-muted-foreground">Missions never execute without explicit human sign-off.</div>
            </div>
            <div>
              <div className="font-semibold">No autonomous physical execution</div>
              <div className="text-sm text-muted-foreground">NOVA FieldOps plans and validates. Robots act only after approval.</div>
            </div>
            <div>
              <div className="font-semibold">Civil agriculture only</div>
              <div className="text-sm text-muted-foreground">Scoped to farming, monitoring, and infrastructure inspection.</div>
            </div>
          </div>
        </Panel>
      </section>
    </div>
  );
}

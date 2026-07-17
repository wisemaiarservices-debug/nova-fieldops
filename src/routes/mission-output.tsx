import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Panel, SectionHeading } from "@/components/ui-parts";
import { useState } from "react";
import { missionSchemaExample } from "@/data/mission-schema";

export const Route = createFileRoute("/mission-output")({
  head: () => ({
    meta: [
      { title: "Mission Output - NOVA FieldOps" },
      {
        name: "description",
        content: "Structured JSON mission output for operator-approved downstream workflows.",
      },
    ],
  }),
  component: Output,
});

function Output() {
  const [copied, setCopied] = useState(false);
  const json = JSON.stringify(missionSchemaExample, null, 2);
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Mission Output"
        title="Structured export"
        description="Machine-readable mission payload, exported after operator approval. Designed for integration-ready NOVA OS and partner robot-stack workflows."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Panel className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <div className="hud-label text-primary">mission.json</div>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(json);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
              className="rounded-md border border-border px-3 py-1 text-xs hover:bg-secondary"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <pre className="mt-4 overflow-x-auto rounded-md bg-background/70 border border-border p-5 text-sm leading-relaxed">
            {json}
          </pre>
        </Panel>

        <div className="space-y-6">
          <Panel>
            <div className="hud-label">Delivery</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>REST-style handoff for future NOVA OS mission workflows</li>
              <li>Signed manifest concept with operator ID</li>
              <li>Audit trail design for challenge PoC review</li>
            </ul>
          </Panel>
          <Panel className="border-l-4 border-l-primary">
            <div className="hud-label text-primary">Downstream contract</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Any system consuming this payload should re-check{" "}
              <code className="text-primary">approval_required</code> and refuse execution if{" "}
              <code className="text-primary">execution_mode</code> is not{" "}
              <code className="text-primary">operator_approved</code>.
            </p>
          </Panel>
        </div>
      </div>
    </PageShell>
  );
}

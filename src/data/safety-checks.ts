export const safetyChecks = [
  {
    label: "Restricted zone avoidance",
    status: "Sample: pass",
    tone: "ok",
    note: "Illustrative route fixture; not map-validated",
  },
  {
    label: "Weather risk",
    status: "Sample: moderate",
    tone: "warn",
    note: "Example weather note; no forecast feed connected",
  },
  {
    label: "Battery requirement",
    status: "Passed",
    tone: "ok",
    note: "Example battery estimate; no robot telemetry connected",
  },
  {
    label: "Terrain risk",
    status: "Sample: low",
    tone: "ok",
    note: "Example terrain note; no surveyed terrain data connected",
  },
  { label: "Human approval", status: "Sample: required", tone: "warn", note: "No approval workflow connected" },
  {
    label: "Missing data",
    status: "Sample: attention",
    tone: "warn",
    note: "No field sensor feed connected",
  },
  {
    label: "Autonomous execution",
    status: "Design note: disabled",
    tone: "err",
    note: "Physical execution integration is not connected",
  },
] as const satisfies {
  label: string;
  status: string;
  tone: "ok" | "warn" | "err" | "info";
  note: string;
}[];

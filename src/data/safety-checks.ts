export const safetyChecks = [
  {
    label: "Restricted zone avoidance",
    status: "Passed",
    tone: "ok",
    note: "1 restricted zone routed around",
  },
  {
    label: "Weather risk",
    status: "Moderate",
    tone: "warn",
    note: "Wind gusts forecast late window",
  },
  {
    label: "Battery requirement",
    status: "Passed",
    tone: "ok",
    note: "Estimated 62% remaining on return",
  },
  {
    label: "Terrain risk",
    status: "Low",
    tone: "ok",
    note: "Grade below 6 degrees, service track available",
  },
  { label: "Human approval", status: "Required", tone: "warn", note: "Awaiting operator sign-off" },
  {
    label: "Missing data",
    status: "Attention",
    tone: "warn",
    note: "Latest soil moisture reading unavailable",
  },
  {
    label: "Autonomous execution",
    status: "Disabled",
    tone: "err",
    note: "No autonomous physical execution permitted",
  },
] as const satisfies {
  label: string;
  status: string;
  tone: "ok" | "warn" | "err" | "info";
  note: string;
}[];

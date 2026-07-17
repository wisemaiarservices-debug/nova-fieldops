import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow && <div className="hud-label mb-2 text-primary">{eyebrow}</div>}
      <h2 className="font-display text-3xl md:text-4xl font-semibold">{title}</h2>
      {description && <p className="mt-2 text-muted-foreground max-w-2xl">{description}</p>}
    </div>
  );
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`panel p-6 ${className}`}>{children}</div>;
}

export function StatusDot({ tone = "ok" }: { tone?: "ok" | "warn" | "err" | "info" }) {
  const c =
    tone === "ok"
      ? "bg-primary"
      : tone === "warn"
        ? "bg-yellow-400"
        : tone === "err"
          ? "bg-destructive"
          : "bg-accent";
  return (
    <span className={`inline-block h-2 w-2 rounded-full ${c} shadow-[0_0_10px_currentColor]`} />
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-foreground/90">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-7xl px-6 py-10">{children}</div>;
}

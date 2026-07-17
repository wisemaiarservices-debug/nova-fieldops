import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportAppError } from "../lib/app-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center panel p-8">
        <div className="hud-label">Signal lost</div>
        <h1 className="mt-2 text-6xl font-bold text-foreground">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This coordinate is not on the mission grid.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          Return to base
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportAppError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center panel p-8">
        <h1 className="text-xl font-semibold text-foreground">System interrupt</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The console encountered an unexpected fault.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Retry
          </button>
          <a href="/" className="rounded-md border border-border px-4 py-2 text-sm">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NOVA FieldOps - GenAI Mission Planning for Agricultural Robots" },
      {
        name: "description",
        content:
          "NOVA FieldOps turns natural-language field instructions into safe, structured, operator-approved robot missions for agricultural robotics.",
      },
      { name: "author", content: "NeoHaven AI Urban Labs" },
      {
        property: "og:title",
        content: "NOVA FieldOps - GenAI Mission Planning for Agricultural Robots",
      },
      {
        property: "og:description",
        content:
          "Challenge-focused mission-planning layer for agricultural robots. Human-in-the-loop, scenario-tested, operator-approved.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const navItems = [
  { to: "/", label: "Home" },
  { to: "/demo", label: "Demo" },
  { to: "/mission-generator", label: "Generator" },
  { to: "/field-map", label: "Field Map" },
  { to: "/mission-review", label: "Review" },
  { to: "/safety-validator", label: "Safety" },
  { to: "/mission-output", label: "Output" },
  { to: "/scenarios", label: "Scenarios" },
  { to: "/about", label: "Challenge Fit" },
] as const;

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-md bg-background/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="relative h-8 w-8 rounded-md bg-gradient-to-br from-primary to-accent">
            <div className="absolute inset-[3px] rounded-sm bg-background flex items-center justify-center">
              <span className="font-display text-[10px] font-bold text-primary">NF</span>
            </div>
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-semibold tracking-wide">NOVA FieldOps</div>
            <div className="hud-label text-[9px]">NeoHaven / NOVA OS</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:text-foreground hover:bg-secondary/60"
              activeProps={{
                className:
                  "rounded-md px-3 py-1.5 text-xs font-medium text-primary bg-secondary/80",
              }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden md:flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 hud-label">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> PoC
          </span>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/60">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display font-semibold">NeoHaven AI Urban Labs</div>
          <div className="hud-label mt-1">NOVA OS / NeoAgro / NOVA FieldOps</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Operator-approved decision intelligence. No autonomous physical execution.
          </p>
        </div>
        <div className="text-sm">
          <div className="hud-label mb-2">Contact</div>
          <a className="block hover:text-primary" href="mailto:wisemaiarservices@gmail.com">
            wisemaiarservices@gmail.com
          </a>
          <a
            className="block hover:text-primary"
            href="https://neohaven-nova-os-website.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            neohaven-nova-os-website.vercel.app
          </a>
        </div>
        <div className="text-sm">
          <div className="hud-label mb-2">Safety</div>
          <p className="text-muted-foreground">
            Civil agricultural applications only. Missions require explicit operator approval before
            execution.
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} NeoHaven AI Urban Labs
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

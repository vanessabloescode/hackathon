import Link from "next/link";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ paddingBlock: "var(--space-16)", borderBottom: "var(--border-thin)" }}>
      <div className="container">
        <p
          className="text-label"
          style={{
            color: "var(--color-muted)",
            marginBottom: "var(--space-8)",
          }}
        >
          {title}
        </p>
        {children}
      </div>
    </section>
  );
}

function Swatch({ name, value, bg, border }: { name: string; value: string; bg: string; border?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
      <div
        style={{
          width: "80px",
          height: "80px",
          background: bg,
          border: border ? "1px solid var(--color-subtle)" : undefined,
        }}
      />
      <span className="text-body-sm" style={{ fontWeight: 500 }}>{name}</span>
      <span className="text-caption">{value}</span>
    </div>
  );
}

export default function StyleguidePage() {
  return (
    <main className="flex flex-col min-h-dvh">
      {/* Nav */}
      <header style={{ borderBottom: "var(--border-thin)", paddingBlock: "var(--space-4)" }}>
        <div className="container flex items-center justify-between" style={{ gap: "var(--space-8)" }}>
          <Link
            href="/"
            className="text-label"
            style={{ textDecoration: "none", color: "var(--color-muted)" }}
          >
            ← Back
          </Link>
          <span className="text-label" style={{ letterSpacing: "var(--tracking-wider)" }}>
            Styleguide
          </span>
        </div>
      </header>

      {/* Page title */}
      <div style={{ borderBottom: "var(--border-thin)", paddingBlock: "var(--space-16)" }}>
        <div className="container">
          <span className="tag" style={{ marginBottom: "var(--space-6)", display: "inline-flex" }}>
            Design System
          </span>
          <h1 className="text-title" style={{ marginBottom: "var(--space-4)" }}>
            Styleguide
          </h1>
          <p className="text-body" style={{ color: "var(--color-muted)", maxWidth: "480px" }}>
            Tokens, typography, and components. Bold, minimal, monochromatic.
          </p>
        </div>
      </div>

      {/* Colors */}
      <Section title="01 — Colors">
        <div className="flex flex-wrap" style={{ gap: "var(--space-8)" }}>
          <Swatch name="Ink" value="#0A0A0A" bg="var(--color-ink)" />
          <Swatch name="Paper" value="#FFFFFF" bg="var(--color-paper)" border />
          <Swatch name="Surface" value="#F5F5F4" bg="var(--color-surface)" border />
          <Swatch name="Subtle" value="#E8E8E6" bg="var(--color-subtle)" border />
          <Swatch name="Muted" value="#A3A39E" bg="var(--color-muted)" />
        </div>
      </Section>

      {/* Typography */}
      <Section title="02 — Typography">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
          <div>
            <p className="text-caption" style={{ marginBottom: "var(--space-2)" }}>Display</p>
            <p className="text-display">Hello, World.</p>
          </div>
          <div className="divider" />
          <div>
            <p className="text-caption" style={{ marginBottom: "var(--space-2)" }}>Headline</p>
            <p className="text-headline">Bold by design.</p>
          </div>
          <div className="divider" />
          <div>
            <p className="text-caption" style={{ marginBottom: "var(--space-2)" }}>Title</p>
            <p className="text-title">Made for the brave.</p>
          </div>
          <div className="divider" />
          <div>
            <p className="text-caption" style={{ marginBottom: "var(--space-2)" }}>Heading</p>
            <p className="text-heading">Clean. Confident. Minimal.</p>
          </div>
          <div className="divider" />
          <div>
            <p className="text-caption" style={{ marginBottom: "var(--space-2)" }}>Subheading</p>
            <p className="text-subheading">Precision in every detail.</p>
          </div>
          <div className="divider" />
          <div>
            <p className="text-caption" style={{ marginBottom: "var(--space-2)" }}>Body</p>
            <p className="text-body" style={{ maxWidth: "520px" }}>
              A design system built on restraint. Every element earns its place.
              Generous whitespace, confident type, and a monochromatic palette
              that lets the work speak for itself.
            </p>
          </div>
          <div className="divider" />
          <div>
            <p className="text-caption" style={{ marginBottom: "var(--space-2)" }}>Body Small</p>
            <p className="text-body-sm" style={{ maxWidth: "520px", color: "var(--color-muted)" }}>
              Supporting text sits at 14px. Used for metadata, secondary
              descriptions, and contextual detail that complements — never
              competes with — primary content.
            </p>
          </div>
          <div className="divider" />
          <div>
            <p className="text-caption" style={{ marginBottom: "var(--space-2)" }}>Label</p>
            <p className="text-label">Section label</p>
          </div>
          <div className="divider" />
          <div>
            <p className="text-caption" style={{ marginBottom: "var(--space-2)" }}>Caption</p>
            <p className="text-caption">Metadata · 12px · Muted</p>
          </div>
        </div>
      </Section>

      {/* Buttons */}
      <Section title="03 — Buttons">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
          <div>
            <p className="text-caption" style={{ marginBottom: "var(--space-4)" }}>Primary</p>
            <div className="flex flex-wrap" style={{ gap: "var(--space-4)" }}>
              <button className="btn-primary">Get started</button>
              <button className="btn-primary">View work →</button>
            </div>
          </div>
          <div className="divider" />
          <div>
            <p className="text-caption" style={{ marginBottom: "var(--space-4)" }}>Ghost</p>
            <div className="flex flex-wrap" style={{ gap: "var(--space-4)" }}>
              <button className="btn-ghost">Learn more</button>
              <button className="btn-ghost">Contact us</button>
            </div>
          </div>
        </div>
      </Section>

      {/* Tags */}
      <Section title="04 — Tags & Badges">
        <div className="flex flex-wrap" style={{ gap: "var(--space-3)" }}>
          <span className="tag">Design</span>
          <span className="tag">Development</span>
          <span className="tag">Strategy</span>
          <span className="tag">v0.1</span>
          <span className="tag">In progress</span>
        </div>
      </Section>

      {/* Spacing */}
      <Section title="05 — Spacing Scale">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          {[
            { name: "--space-1", px: "4px", size: "4px" },
            { name: "--space-2", px: "8px", size: "8px" },
            { name: "--space-3", px: "12px", size: "12px" },
            { name: "--space-4", px: "16px", size: "16px" },
            { name: "--space-6", px: "24px", size: "24px" },
            { name: "--space-8", px: "32px", size: "32px" },
            { name: "--space-12", px: "48px", size: "48px" },
            { name: "--space-16", px: "64px", size: "64px" },
          ].map(({ name, px, size }) => (
            <div key={name} className="flex items-center" style={{ gap: "var(--space-6)" }}>
              <div
                style={{
                  width: size,
                  height: "16px",
                  background: "var(--color-ink)",
                  flexShrink: 0,
                }}
              />
              <div className="flex items-baseline" style={{ gap: "var(--space-4)" }}>
                <span className="text-body-sm" style={{ fontFamily: "var(--font-mono)" }}>{name}</span>
                <span className="text-caption">{px}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer style={{ paddingBlock: "var(--space-6)" }}>
        <div className="container flex flex-wrap items-center justify-between" style={{ gap: "var(--space-4)" }}>
          <span className="text-caption">Styleguide — Hackathon</span>
          <Link href="/" className="text-caption link">← Back to home</Link>
        </div>
      </footer>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      {/* Nav */}
      <header
        style={{
          borderBottom: "var(--border-thin)",
          paddingBlock: "var(--space-4)",
        }}
      >
        <div
          className="container flex items-center justify-between"
          style={{ gap: "var(--space-8)" }}
        >
          <span className="text-label" style={{ letterSpacing: "var(--tracking-wider)" }}>
            Hackathon
          </span>
          <nav className="flex items-center" style={{ gap: "var(--space-8)" }}>
            <Link href="/styleguide" className="text-label" style={{ textDecoration: "none", color: "var(--color-muted)" }}>
              Styleguide
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        className="section flex-1 flex flex-col justify-center"
        style={{ borderBottom: "var(--border-thin)" }}
      >
        <div className="container">
          <div style={{ maxWidth: "900px" }}>
            <span
              className="tag"
              style={{ marginBottom: "var(--space-8)", display: "inline-flex" }}
            >
              v0.1 — In progress
            </span>
            <h1
              className="text-display"
              style={{ marginBottom: "var(--space-8)" }}
            >
              Hello, World.
            </h1>
            <p
              className="text-body"
              style={{
                maxWidth: "520px",
                color: "var(--color-muted)",
                marginBottom: "var(--space-12)",
              }}
            >
              A workspace built for bold ideas. Mobile-first, deployed on Vercel,
              designed with purpose.
            </p>
            <div className="flex flex-wrap" style={{ gap: "var(--space-4)" }}>
              <Link href="/styleguide" className="btn-primary">
                View Styleguide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ paddingBlock: "var(--space-6)" }}>
        <div
          className="container flex flex-wrap items-center justify-between"
          style={{ gap: "var(--space-4)" }}
        >
          <span className="text-caption">© 2026 Hackathon</span>
          <span className="text-caption">Built for Vercel</span>
        </div>
      </footer>
    </main>
  );
}

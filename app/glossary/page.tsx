import type { Metadata } from "next";
import Link from "next/link";
import { GLOSSARY } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Glossary — Padel Business Case",
  description:
    "Plain-English definitions of the finance and property terms used in the business case.",
};

export default function GlossaryPage() {
  const entries = [...GLOSSARY].sort((a, b) =>
    a.term.localeCompare(b.term, "en", { sensitivity: "base" }),
  );
  return (
    <div className="shell">
      <div className="layout">
        <div className="min-w-0">
          <header className="doc">
            <p className="kicker">Reference</p>
            <h1>Glossary</h1>
            <p className="meta">
              Every finance and property term used in the documents, in plain
              English. In the text itself, dotted-underlined words show these
              definitions on hover or tap.
            </p>
          </header>

          <main className="doc-body">
            <section className="measure" style={{ paddingTop: "1.4rem" }}>
              <dl className="glossary">
                {entries.map((e) => (
                  <div key={e.term} className="g-entry">
                    <dt>{e.term}</dt>
                    <dd>{e.def}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </main>

          <footer className="doc">
            Padel business case · working documents ·{" "}
            <Link href="/">Business case</Link> ·{" "}
            <Link href="/next-steps">Next steps</Link>
          </footer>
        </div>
      </div>
    </div>
  );
}

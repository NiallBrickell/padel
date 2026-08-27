import type { Metadata } from "next";
import Link from "next/link";
import { CHANGELOG } from "@/lib/changelog";
import { MarkSeen } from "@/components/whats-new";

export const metadata: Metadata = {
  title: "What's new — Padel Business Case",
  description:
    "What's changed across the documents, the board and the site, newest first.",
};

export default function WhatsNewPage() {
  return (
    <div className="shell">
      <div className="layout">
        <div className="min-w-0">
          <header className="doc">
            <p className="kicker">Updates</p>
            <h1>What&apos;s new</h1>
            <p className="meta">
              The documents keep changing as the research lands, and the changes
              tend to be buried deep in long pages. Each entry below is one
              release: what changed, and where to read it.
            </p>
          </header>

          <main className="doc-body">
            <section className="measure" style={{ paddingTop: "1.4rem" }}>
              <ol className="wn-list">
                {CHANGELOG.map((e) => (
                  <li key={e.id} className="wn-entry">
                    <p className="wn-when">{e.date}</p>
                    <h2 className="wn-title">{e.title}</h2>
                    <p>{e.summary}</p>
                    <p className="wn-links">
                      {e.links.map((l) => (
                        <Link key={l.href} href={l.href}>
                          {l.label}
                        </Link>
                      ))}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          </main>

          <footer className="doc">
            Padel business case · working documents ·{" "}
            <Link href="/">Business case</Link> ·{" "}
            <Link href="/strategy">Strategy</Link> ·{" "}
            <Link href="/next-steps">Next steps</Link>
          </footer>

          <MarkSeen />
        </div>
      </div>
    </div>
  );
}

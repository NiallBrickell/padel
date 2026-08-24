"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Business case" },
  { href: "/strategy", label: "Strategy" },
  { href: "/next-steps", label: "Next steps" },
  { href: "/todos", label: "To-dos" },
];

export function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="site-nav" aria-label="Site">
      <div className="nav-inner">
        <Link href="/" className="brand">
          <span className="dot" aria-hidden="true" />
          Padel<span className="brand-rest"> Business Case</span>
        </Link>
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`nav-link${pathname === l.href ? " active" : ""}`}
            aria-current={pathname === l.href ? "page" : undefined}
          >
            {l.label}
          </Link>
        ))}
        <a
          href="https://github.com/NiallBrickell/padel"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-gh"
          aria-label="View source on GitHub"
        >
          {/* GitHub mark (octocat) as inline SVG — not in lucide's set */}
          <svg width="19" height="19" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.68 7.68 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
        </a>
      </div>
    </nav>
  );
}

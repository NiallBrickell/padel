"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type TocSub = { id: string; title: string };
export type TocSection = {
  id: string;
  title: string;
  /** Section number shown before the title (e.g. "2"); "§" style markers allowed. */
  no?: string;
  subs?: TocSub[];
};

/** Scrollspy over the given h2 sections (and their h3 subheadings). */
function useScrollSpy(sections: TocSection[]) {
  const [active, setActive] = useState<string | null>(sections[0]?.id ?? null);
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const clickLock = useRef(0);

  const recompute = useCallback(() => {
    if (Date.now() < clickLock.current) return;
    const line = window.innerHeight * 0.3;
    let pick: TocSection | null = null;
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el && el.getBoundingClientRect().top <= line) pick = s;
    }
    if (!pick && sections.length) pick = sections[0];
    // bottom of page: force last section
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4
    ) {
      pick = sections[sections.length - 1];
    }
    if (!pick) return;
    setActive(pick.id);
    let sub: string | null = null;
    for (const sd of pick.subs ?? []) {
      const el = document.getElementById(sd.id);
      if (el && el.getBoundingClientRect().top <= line) sub = sd.id;
    }
    setActiveSub(sub);
  }, [sections]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        recompute();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    recompute();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [recompute]);

  const lockFor = (id: string, subId?: string) => {
    clickLock.current = Date.now() + 900;
    setActive(id);
    setActiveSub(subId ?? null);
  };

  return { active, activeSub, lockFor };
}

/** Desktop sticky right-rail TOC: active section highlights and expands its h3s. */
export function Toc({ sections }: { sections: TocSection[] }) {
  const { active, activeSub, lockFor } = useScrollSpy(sections);
  return (
    <aside className="tocwrap">
      <nav className="toc" aria-label="Contents">
        <div className="tlabel">Contents</div>
        <ol>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={active === s.id ? "on" : undefined}
                onClick={() => lockFor(s.id)}
              >
                {s.no ? <span className="n">{s.no}</span> : null}
                {s.title}
              </a>
              {active === s.id && s.subs && s.subs.length > 0 && (
                <ol className="subs">
                  {s.subs.map((sd) => (
                    <li key={sd.id}>
                      <a
                        href={`#${sd.id}`}
                        className={activeSub === sd.id ? "on" : undefined}
                        onClick={() => lockFor(s.id, sd.id)}
                      >
                        {sd.title}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}

/** Mobile disclosure TOC (h2 sections only), sticky under the site nav. */
export function MobileToc({ sections }: { sections: TocSection[] }) {
  const { active, lockFor } = useScrollSpy(sections);
  const ref = useRef<HTMLDetailsElement>(null);
  return (
    <details className="toc-m" ref={ref}>
      <summary>Contents</summary>
      <ol>
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={active === s.id ? "on" : undefined}
              onClick={() => {
                lockFor(s.id);
                ref.current?.removeAttribute("open");
              }}
            >
              {s.no ? <span className="n">{s.no}</span> : null}
              {s.title}
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LATEST } from "@/lib/changelog";

const KEY = "padel-whats-new-seen";
const SEEN_EVENT = "padel-wn-seen";

function markSeen() {
  try {
    localStorage.setItem(KEY, LATEST.id);
  } catch {
    // storage unavailable — the banner just shows again next visit
  }
  window.dispatchEvent(new Event(SEEN_EVENT));
}

function useUnseen() {
  const [unseen, setUnseen] = useState(false);
  useEffect(() => {
    try {
      setUnseen(localStorage.getItem(KEY) !== LATEST.id);
    } catch {
      setUnseen(false);
    }
    const onSeen = () => setUnseen(false);
    window.addEventListener(SEEN_EVENT, onSeen);
    return () => window.removeEventListener(SEEN_EVENT, onSeen);
  }, []);
  return unseen;
}

/** Slim strip under the nav announcing the latest release until seen or dismissed. */
export function WhatsNewBanner() {
  const unseen = useUnseen();
  if (!unseen) return null;
  return (
    <div className="wn-banner" role="status">
      <div className="wn-inner">
        <Link href="/whats-new">
          <span className="wn-tag">New</span>
          <span className="wn-date">{LATEST.date}</span> — {LATEST.title}
        </Link>
        <button type="button" aria-label="Dismiss" onClick={markSeen}>
          ×
        </button>
      </div>
    </div>
  );
}

/** Sparkle icon in the nav linking to /whats-new, with a dot while the latest release is unseen. */
export function WhatsNewNavLink() {
  const unseen = useUnseen();
  return (
    <Link href="/whats-new" className="nav-wn" aria-label="What's new">
      <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 0l1.9 6.1L16 8l-6.1 1.9L8 16l-1.9-6.1L0 8l6.1-1.9z" />
      </svg>
      {unseen && <span className="wn-dot" aria-hidden="true" />}
    </Link>
  );
}

/** Rendered on /whats-new: visiting the page counts as having seen the latest release. */
export function MarkSeen() {
  useEffect(() => {
    markSeen();
  }, []);
  return null;
}

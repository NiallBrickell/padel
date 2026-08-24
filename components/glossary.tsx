"use client";

// Inline jargon helper: <G term="EIS">EIS</G> renders its children with a
// subtle dotted underline; hovering (desktop) or tapping (touch) shows the
// plain-English definition from lib/glossary.ts. Built on Base UI's Popover —
// unlike a pure tooltip it opens on click/tap as well as hover, so it works
// on phones.

import type { ReactNode } from "react";
import { Popover } from "@base-ui/react/popover";
import { GLOSSARY_MAP } from "@/lib/glossary";

export function G({ term, children }: { term: string; children?: ReactNode }) {
  const def = GLOSSARY_MAP[term];
  // Unknown term: render the text untouched rather than a dead underline.
  if (!def) return <>{children ?? term}</>;
  return (
    <Popover.Root>
      <Popover.Trigger
        openOnHover
        delay={150}
        closeDelay={100}
        nativeButton={false}
        render={
          <span
            className="g-term"
            tabIndex={0}
            role="button"
            aria-label={`What does “${term}” mean?`}
          />
        }
      >
        {children ?? term}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner
          side="top"
          sideOffset={7}
          collisionPadding={12}
          className="isolate z-50"
        >
          <Popover.Popup className="g-pop font-ui">
            <span className="g-pop-term">{term}</span>
            {def}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

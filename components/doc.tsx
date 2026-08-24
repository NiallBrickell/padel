import type { ReactNode } from "react";

/** Amber caveat call-out (the ⚠ blockquotes / flags). */
export function Caveat({
  title,
  children,
}: {
  title?: ReactNode;
  children: ReactNode;
}) {
  return (
    <aside className="caveat">
      {title ? (
        <span className="ctitle">
          <span className="cmark" aria-hidden="true">
            ⚠
          </span>
          {title}
        </span>
      ) : null}
      {children}
    </aside>
  );
}

/** "What has to be true / For / Against" block on financing routes. */
export function Verdict({ children }: { children: ReactNode }) {
  return <div className="verdict">{children}</div>;
}

/** Table wrapper: breaks out of the 70ch measure, scrolls horizontally on overflow. */
export function TW({
  size,
  children,
}: {
  size?: "wide" | "mid";
  children: ReactNode;
}) {
  const cls = size === "wide" ? " t-wide" : size === "mid" ? " t-mid" : "";
  return <div className={`tw breakout${cls}`}>{children}</div>;
}

/** h3 with the lettered route badge, e.g. "A" — used inside the financing tabs. */
export function RouteHead({
  letter,
  id,
  children,
}: {
  letter: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <h3 className="routehead" id={id}>
      <span className="rb" aria-hidden="true">
        {letter}
      </span>
      {children}
    </h3>
  );
}

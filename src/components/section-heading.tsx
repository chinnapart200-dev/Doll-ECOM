import { ArrowIcon } from "./store-icons";
import type { ReactNode } from "react";

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm bg-[color:var(--accent-lime)] px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-black">
      {children}
    </span>
  );
}

export function SectionHeading({
  title,
  action,
}: {
  title: string;
  action?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-6">
      <div>
        <SectionTag>Follow collection</SectionTag>
        <h2 className="mt-3 font-display text-[clamp(2.4rem,4vw,4.4rem)] leading-none text-black">
          {title}
        </h2>
      </div>
      {action ? (
        <span className="hidden items-center gap-2 text-[0.78rem] font-extrabold uppercase tracking-[0.2em] text-black md:inline-flex">
          {action}
          <ArrowIcon />
        </span>
      ) : null}
    </div>
  );
}

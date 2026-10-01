import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Tone = "light" | "muted" | "dark";

const toneClass: Record<Tone, string> = {
  light: "bg-background text-foreground",
  muted: "bg-muted text-foreground",
  dark: "bg-surface-dark text-surface-dark-foreground",
};

/** Base wrapper for every Home section: anchor id, tone and responsive spacing. */
export function Section({
  id,
  tone = "light",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-16 md:py-20 lg:py-24", toneClass[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}

/** Temporary placeholder used until each section is developed. */
export function SectionPlaceholder({ eyebrow, title, note }: { eyebrow: string; title: string; note: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</span>
      <h2 className="max-w-2xl text-2xl font-bold md:text-3xl lg:text-4xl">{title}</h2>
      <p className="max-w-xl text-sm opacity-70">{note}</p>
      <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-24 rounded-lg border border-dashed border-current/20" />
        ))}
      </div>
    </div>
  );
}

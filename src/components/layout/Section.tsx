import type { CSSProperties, ReactNode } from "react";
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
  style,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-16 md:py-20 lg:py-24",
        toneClass[tone],
        className
      )}
      style={style}
    >
      <Container>{children}</Container>
    </section>
  );
}

/** Temporary placeholder used until each section is developed. */
export function SectionPlaceholder({
  eyebrow,
  title,
  note,
  align = "center",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  note: string;
  align?: "center" | "left";
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "left"
          ? "items-start text-left"
          : "items-center text-center"
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="text-base">{note}</p>
      {children}
    </div>
  );
}
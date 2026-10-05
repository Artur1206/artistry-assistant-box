import { Link } from "@tanstack/react-router";
import { SITE } from "@/config/site";

export function Brand() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Dimensional - início">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-lg font-black text-primary-foreground">d</span>
      <span className="min-w-0 leading-none">
        <span className="block truncate text-lg font-semibold lowercase">{SITE.name}</span>
        <span className="mt-1 block truncate text-[8px] font-semibold uppercase tracking-[0.16em] text-primary">{SITE.tagline}</span>
      </span>
    </Link>
  );
}
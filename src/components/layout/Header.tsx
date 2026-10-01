import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { CTA, NAV_ITEMS, SITE } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-surface-dark/95 text-surface-dark-foreground backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#" className="flex min-w-0 flex-col leading-none">
          <span className="truncate text-lg font-extrabold uppercase tracking-wide">{SITE.name}</span>
          <span className="truncate text-[10px] uppercase tracking-widest opacity-70">{SITE.tagline}</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="text-xs font-semibold uppercase hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>
        <a href={CTA.href} className="hidden shrink-0 rounded-md bg-primary px-4 py-2 text-xs font-bold uppercase text-primary-foreground hover:bg-primary/90 lg:inline-flex">
          {CTA.label}
        </a>
        <button className="shrink-0 lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? <X /> : <Menu />}
        </button>
      </Container>
      {open && (
        <nav className="border-t border-surface-dark-foreground/10 lg:hidden">
          <Container className="flex flex-col gap-3 py-4">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-sm font-semibold uppercase">
                {item.label}
              </a>
            ))}
            <a href={CTA.href} onClick={() => setOpen(false)} className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-xs font-bold uppercase text-primary-foreground">
              {CTA.label}
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}

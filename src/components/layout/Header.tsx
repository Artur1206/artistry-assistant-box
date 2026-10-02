import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "./Container";
import { CTA, NAV_ITEMS, SITE } from "@/config/site";

const SEGMENTS = [
  { label: "Restaurantes", to: "/restaurantes" },
  { label: "Saúde", to: "/saude" },
  { label: "Comércios", to: "/comercios" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [segmentsOpen, setSegmentsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface-dark/95 text-surface-dark-foreground backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#" className="flex min-w-0 flex-col leading-none">
          <span className="truncate text-lg font-extrabold uppercase tracking-wide">
            {SITE.name}
          </span>
          <span className="truncate text-[10px] uppercase tracking-widest opacity-70">
            {SITE.tagline}
          </span>
        </a>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) =>
            item.label === "Segmentos" ? (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  onClick={() => setSegmentsOpen(!segmentsOpen)}
                  className="flex items-center gap-1 text-xs font-semibold uppercase hover:text-accent"
                >
                  Segmentos
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      segmentsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {segmentsOpen && (
                  <div className="absolute left-0 top-full mt-3 w-48 rounded-md border border-surface-dark-foreground/10 bg-surface-dark py-2 shadow-lg">
                    {SEGMENTS.map((segment) => (
                      <Link
                        key={segment.label}
                        to={segment.to}
                        onClick={() => setSegmentsOpen(false)}
                        className="block px-4 py-3 text-xs font-semibold uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {segment.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-semibold uppercase hover:text-accent"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* CTA */}
        <a
          href={CTA.href}
          target={CTA.target}
          rel={CTA.rel}
          className="hidden shrink-0 rounded-md bg-primary px-4 py-2 text-xs font-bold uppercase text-primary-foreground hover:bg-primary/90 lg:inline-flex"
        >
          {CTA.label}
        </a>

        {/* Menu mobile */}
        <button
          type="button"
          className="shrink-0 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </Container>

      {open && (
        <nav className="border-t border-surface-dark-foreground/10 lg:hidden">
          <Container className="flex flex-col gap-3 py-4">
            {NAV_ITEMS.map((item) =>
              item.label === "Restaurantes" ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => setSegmentsOpen(!segmentsOpen)}
                    className="flex w-full items-center justify-between py-1 text-sm font-semibold uppercase"
                  >
                    <span>Segmentos</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        segmentsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {segmentsOpen && (
                    <div className="mt-2 flex flex-col gap-1 border-l border-primary/40 pl-4">
                      {SEGMENTS.map((segment) => (
                        <Link
                          key={segment.label}
                          to={segment.to}
                          onClick={() => {
                            setOpen(false);
                            setSegmentsOpen(false);
                          }}
                          className="py-2 text-sm font-semibold uppercase opacity-80 hover:text-primary"
                        >
                          {segment.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold uppercase"
                >
                  {item.label}
                </a>
              )
            )}

            <a
              href={CTA.href}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-xs font-bold uppercase text-primary-foreground"
            >
              {CTA.label}
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
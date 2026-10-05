import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA, NAV_ITEMS, SEGMENTS } from "@/config/site";
import { Brand } from "./Brand";
import { Container } from "./Container";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [segmentsOpen, setSegmentsOpen] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setSegmentsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-surface-dark-foreground/10 bg-surface-dark text-surface-dark-foreground">
      <Container className="grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex">
        <Brand />

        <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) =>
            item.to ? (
              <Link key={item.label} to={item.to} className="text-xs font-medium transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>
                {item.label}
              </Link>
            ) : (
              <div key={item.label} className="group relative">
                <button type="button" className="flex items-center gap-1 text-xs font-medium transition-colors hover:text-primary" aria-haspopup="true">
                  {item.label}<ChevronDown className="h-3 w-3" />
                </button>
                <div className="invisible absolute left-0 top-full w-56 translate-y-1 border border-border bg-background py-1 text-foreground opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-3 group-hover:opacity-100">
                  {SEGMENTS.map((segment) => (
                    <Link key={segment.to} to={segment.to} className="block px-4 py-2.5 text-xs hover:bg-muted hover:text-primary">
                      {segment.label}
                    </Link>
                  ))}
                </div>
              </div>
            ),
          )}
        </nav>

        <Button asChild size="sm" className="ml-4 hidden lg:inline-flex">
          <Link to={CTA.to}>{CTA.label}</Link>
        </Button>

        <Button variant="ghost" size="icon" className="text-surface-dark-foreground hover:bg-surface-dark-foreground/10 hover:text-primary lg:hidden" onClick={() => setMenuOpen((current) => !current)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </Container>

      {menuOpen && (
        <nav className="border-t border-surface-dark-foreground/10 lg:hidden" aria-label="Navegação móvel">
          <Container className="py-4">
            {NAV_ITEMS.map((item) =>
              item.to ? (
                <Link key={item.label} to={item.to} onClick={closeMenus} className="block border-b border-surface-dark-foreground/10 py-3 text-sm font-medium">
                  {item.label}
                </Link>
              ) : (
                <div key={item.label} className="border-b border-surface-dark-foreground/10">
                  <button type="button" className="flex w-full items-center justify-between py-3 text-sm font-medium" onClick={() => setSegmentsOpen((current) => !current)}>
                    {item.label}<ChevronDown className={`h-4 w-4 transition-transform ${segmentsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {segmentsOpen && (
                    <div className="border-l border-primary pb-2 pl-4">
                      {SEGMENTS.map((segment) => (
                        <Link key={segment.to} to={segment.to} onClick={closeMenus} className="block py-2 text-sm text-surface-dark-foreground/75">
                          {segment.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ),
            )}
            <Button asChild className="mt-4 w-full"><Link to={CTA.to} onClick={closeMenus}>{CTA.label}</Link></Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
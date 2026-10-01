import { Container } from "./Container";
import { NAV_ITEMS, SITE } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-surface-dark py-12 text-surface-dark-foreground">
      <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-lg font-extrabold uppercase">{SITE.name}</p>
          <p className="text-xs uppercase tracking-widest opacity-70">{SITE.tagline}</p>
        </div>
        {/* Colunas (Soluções, Restaurantes, Institucional, Contato) serão desenvolvidas na próxima etapa */}
        <nav className="flex flex-col gap-2 text-sm opacity-80">
          {NAV_ITEMS.map((i) => (
            <a key={i.label} href={i.href} className="hover:text-accent">{i.label}</a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}

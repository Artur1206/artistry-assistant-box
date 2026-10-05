import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ImagePlaceholder } from "@/components/layout/ImagePlaceholder";
import { SEGMENTS } from "@/config/site";

const copy = [
  "Restaurantes, bares, pizzarias, hamburguerias, padarias e cafeterias.",
  "Médicos, dentistas, fonoaudiólogos, psicólogos, terapeutas e clínicas.",
  "Empresas de serviços em diferentes áreas de atuação.",
  "Lojas, varejo e diferentes formatos de negócios comerciais.",
];

export function BusinessSegments() {
  return (
    <section className="py-14 lg:py-16">
      <Container>
        <div className="grid items-end gap-4 md:grid-cols-[1fr_0.7fr]"><div><p className="section-kicker">Entendemos seu setor.</p><h2 className="mt-2 text-3xl font-extrabold">Acompanhamos seu negócio.</h2></div><p className="text-sm text-muted-foreground">Soluções contábeis e de gestão alinhadas aos desafios de cada atividade.</p></div>
        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {SEGMENTS.map((segment, index) => (
            <article key={segment.to} className="border border-border bg-card">
              <ImagePlaceholder className={`min-h-36 ${index === 0 ? "lg:min-h-52" : ""}`} />
              <div className="p-5"><h3 className="text-base font-bold">{segment.label}</h3><p className="mt-2 min-h-14 text-xs leading-relaxed text-muted-foreground">{copy[index]}</p><Button asChild variant="outline" size="sm" className="mt-4 w-full"><Link to={segment.to}>Conheça o segmento <ArrowRight /></Link></Button></div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
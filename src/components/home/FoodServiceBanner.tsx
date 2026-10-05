import { ArrowRight, ChartNoAxesCombined, CircleDollarSign, Users } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ImagePlaceholder } from "@/components/layout/ImagePlaceholder";

const points = [{ icon: ChartNoAxesCombined, text: "Financeiro e controle" }, { icon: Users, text: "Custos e margem" }, { icon: CircleDollarSign, text: "Informação para decidir" }];

export function FoodServiceBanner() {
  return (
    <section className="bg-primary text-primary-foreground">
      <Container className="grid p-0 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="px-5 py-12 sm:px-7 lg:px-0 lg:pr-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em]">Alimentação / Food Service</p>
          <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">Seu restaurante vende.<br />A Dimensional ajuda a fazer sobrar.</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80">Contabilidade e gestão para restaurantes, bares, pizzarias, hamburguerias, padarias e cafeterias.</p>
          <Button asChild variant="secondary" className="mt-6"><Link to="/alimentacao">Conheça nossas soluções <ArrowRight /></Link></Button>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">{points.map(({ icon: Icon, text }) => <div key={text} className="flex items-center gap-2 text-xs font-semibold"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-primary-foreground/40"><Icon className="h-4 w-4" /></span>{text}</div>)}</div>
        </div>
        <ImagePlaceholder className="min-h-64 bg-surface-dark/15 text-primary-foreground/65 lg:min-h-full" />
      </Container>
    </section>
  );
}
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ImagePlaceholder } from "@/components/layout/ImagePlaceholder";

export function InstitutionalHero() {
  return (
    <section className="border-b border-border bg-background">
      <Container className="grid min-h-[410px] p-0 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center px-5 py-14 sm:px-7 lg:px-0 lg:pr-14">
          <h1 className="max-w-xl text-4xl font-extrabold leading-[0.98] sm:text-5xl lg:text-6xl">Contabilidade<br />é só o começo.</h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">Contabilidade, gestão financeira e orientação estratégica para organizar sua empresa e tomar decisões com mais clareza.</p>
          <p className="mt-2 text-xs font-semibold text-foreground">Atuação especializada em negócios de alimentação.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild><Link to="/contato">Quero trocar de contador <ArrowRight /></Link></Button>
            <Button asChild variant="outline"><Link to="/contato">Quero abrir minha empresa <ArrowRight /></Link></Button>
          </div>
        </div>
        <ImagePlaceholder className="min-h-64 lg:min-h-full" />
      </Container>
    </section>
  );
}
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { PageShell } from "./PageShell";

type Highlight = { icon: LucideIcon; title: string; text: string };

export function InternalPage({ eyebrow, title, description, highlights }: { eyebrow: string; title: string; description: string; highlights: Highlight[] }) {
  return (
    <PageShell>
      <section className="border-b border-border bg-background">
        <Container className="grid min-h-[440px] items-stretch p-0 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center px-5 py-16 sm:px-7 lg:px-0 lg:pr-14">
            <p className="section-kicker">{eyebrow}</p>
            <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.05] sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{description}</p>
            <Button asChild className="mt-7 w-fit">
              <Link to="/contato">Fale com um especialista <ArrowRight /></Link>
            </Button>
          </div>
          <ImagePlaceholder className="min-h-72 lg:min-h-full" />
        </Container>
      </section>
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map(({ icon: Icon, title: itemTitle, text }) => (
              <article key={itemTitle} className="bg-card p-7">
                <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <h2 className="mt-5 text-lg font-bold">{itemTitle}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
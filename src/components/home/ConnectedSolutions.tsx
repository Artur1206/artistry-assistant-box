import { ArrowRight, ChartNoAxesCombined, FileText, PieChart, Users } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

const items = [
  { icon: FileText, title: "Contabilidade Completa", text: "Rotinas contábeis com conformidade e segurança para o seu negócio." },
  { icon: ChartNoAxesCombined, title: "Gestão Financeira", text: "Organização do financeiro para mais controle, clareza e previsibilidade." },
  { icon: PieChart, title: "Inteligência Tributária", text: "Análise e planejamento tributário para uma operação mais eficiente." },
  { icon: Users, title: "Gestão & Estratégia", text: "Orientação para apoiar suas decisões e a organização do negócio." },
];

export function ConnectedSolutions() {
  return (
    <section className="bg-surface-dark py-14 text-surface-dark-foreground">
      <Container>
        <div className="grid gap-4 md:grid-cols-[1fr_0.55fr]"><div><p className="section-kicker">Nossas soluções</p><h2 className="mt-2 text-3xl font-extrabold">Contabilidade, gestão e estratégia conectadas.</h2></div><p className="text-sm text-surface-dark-foreground/65">Da rotina contábil à gestão financeira, soluções para diferentes necessidades da sua empresa.</p></div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{items.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background p-6 text-foreground"><Icon className="h-8 w-8 text-primary" strokeWidth={1.5} /><h3 className="mt-4 text-base font-bold">{title}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
        <div className="mt-5 text-center"><p className="text-xs text-surface-dark-foreground/65">Soluções contratadas conforme a necessidade da sua empresa.</p><Button asChild size="sm" className="mt-3"><Link to="/solucoes">Conheça nossas soluções <ArrowRight /></Link></Button></div>
      </Container>
    </section>
  );
}
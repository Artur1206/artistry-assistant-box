import { ArrowRight, ChartNoAxesCombined, Cog, MessageCircle, Users } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ImagePlaceholder } from "@/components/layout/ImagePlaceholder";

const experience = [{ icon: Cog, title: "Implantação acompanhada", text: "Orientamos os primeiros passos, organizamos documentos e alinhamos prazos." }, { icon: Users, title: "Relacionamento competente", text: "Uma equipe dedicada a acompanhar sua experiência e facilitar o contato." }, { icon: ChartNoAxesCombined, title: "Especialistas por área", text: "Profissionais responsáveis pelas áreas fiscal, contábil e trabalhista." }];

export function ExperienceAndTrust() {
  return (
    <>
      <section className="border-b border-border"><Container className="grid p-0 lg:grid-cols-2 lg:px-8"><ImagePlaceholder className="min-h-72 lg:min-h-[340px]" /><div className="px-5 py-12 sm:px-7 lg:pl-12 lg:pr-0"><p className="section-kicker">Experiência Dimensional</p><h2 className="mt-2 text-3xl font-extrabold leading-tight">Uma entrada organizada.<br />Uma parceria próxima.</h2><div className="mt-7 grid gap-5 sm:grid-cols-3">{experience.map(({ icon: Icon, title, text }) => <div key={title}><Icon className="h-7 w-7 text-primary" /><h3 className="mt-3 text-xs font-bold">{title}</h3><p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{text}</p></div>)}</div><Button asChild variant="outline" size="sm" className="mt-7"><Link to="/sobre">Conheça a experiência <ArrowRight /></Link></Button></div></Container></section>
      <section className="bg-muted"><Container className="grid p-0 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"><ImagePlaceholder className="min-h-64" /><div className="px-5 py-12 sm:px-7 lg:pl-12 lg:pr-0"><p className="section-kicker">Confiança</p><h2 className="mt-2 text-3xl font-extrabold">Confiança construída no dia a dia.</h2><p className="mt-2 text-sm text-muted-foreground">Conheça a experiência de quem conta com a Dimensional no dia a dia.</p><div className="mt-6 grid gap-3 sm:grid-cols-2"><blockquote className="bg-background p-5 text-xs leading-relaxed">“Depoimento real de cliente”<footer className="mt-3 text-muted-foreground">Inserir após autorização</footer></blockquote><blockquote className="bg-background p-5 text-xs leading-relaxed">“Depoimento real de cliente”<footer className="mt-3 text-muted-foreground">Inserir após autorização</footer></blockquote></div><div className="mt-3 flex items-center gap-2 bg-background p-4 text-xs"><MessageCircle className="text-primary" /> Avaliações verificadas serão inseridas aqui.</div></div></Container></section>
    </>
  );
}
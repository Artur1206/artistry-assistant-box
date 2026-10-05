import { ArrowRight, Minus, Play, Plus } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { ImagePlaceholder } from "@/components/layout/ImagePlaceholder";

const articles = ["CMV: o que acompanhar no seu restaurante", "Gestão financeira para clínicas e consultórios", "Como organizar o financeiro da sua empresa"];
const faq = ["Como faço para trocar de contador?", "Como funciona a implantação?", "Quais documentos preciso enviar?", "Como será o atendimento da minha empresa?"];

export function KnowledgeHub() {
  return (
    <section className="py-14 lg:py-16"><Container>
      <div className="flex items-end justify-between gap-4"><div><p className="section-kicker">Artigos</p><h2 className="mt-2 text-3xl font-extrabold">Conteúdo para decisões melhores.</h2></div><Button asChild variant="outline" size="sm" className="hidden sm:inline-flex"><Link to="/conteudos">Ver todos os artigos <ArrowRight /></Link></Button></div>
      <div className="mt-6 grid gap-3 md:grid-cols-3">{articles.map((title, index) => <article key={title} className="border border-border"><ImagePlaceholder className="min-h-32" /><div className="p-4"><p className="section-kicker">{index === 0 ? "Alimentação" : index === 1 ? "Saúde" : "Gestão"}</p><h3 className="mt-2 text-sm font-bold">{title}</h3></div></article>)}</div>
      <div className="mt-10 flex items-end justify-between gap-4"><div><p className="section-kicker">Vídeos</p><h2 className="mt-2 text-2xl font-extrabold">A Dimensional também em vídeo.</h2></div></div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">{["Finanças no restaurante: do controle ao lucro", "Gestão empresarial na prática"].map((title) => <article key={title} className="relative"><ImagePlaceholder className="min-h-40" /><div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-surface-dark/90 p-4 text-sm font-semibold text-surface-dark-foreground"><span className="grid h-8 w-8 place-items-center rounded-full border border-surface-dark-foreground"><Play className="h-3 w-3" /></span>{title}</div></article>)}</div>
      <div className="mt-10 grid gap-5 md:grid-cols-[0.55fr_1.45fr]"><div><p className="section-kicker">FAQ</p><h2 className="mt-2 text-2xl font-extrabold">Dúvidas frequentes</h2><p className="mt-2 text-xs text-muted-foreground">Tire suas principais dúvidas sobre nossos serviços, processos e atendimento.</p></div><div className="border border-border">{faq.map((item, index) => <div key={item} className="flex items-center gap-3 border-b border-border px-4 py-3 text-xs font-semibold last:border-0">{index === 0 ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}{item}</div>)}</div></div>
    </Container></section>
  );
}
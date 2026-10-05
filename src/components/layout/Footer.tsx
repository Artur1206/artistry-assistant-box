import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Youtube } from "lucide-react";
import { SEGMENTS } from "@/config/site";
import { Brand } from "./Brand";
import { Container } from "./Container";

const solutions = ["Contabilidade Completa", "Gestão Financeira", "Inteligência Tributária", "Gestão & Estratégia"];

export function Footer() {
  return (
    <footer className="bg-surface-dark py-12 text-surface-dark-foreground">
      <Container>
        <div className="grid gap-10 border-b border-surface-dark-foreground/10 pb-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div><Brand /><p className="mt-5 max-w-xs text-xs leading-relaxed text-surface-dark-foreground/60">Contabilidade, gestão financeira e orientação estratégica para empresas que querem decidir com mais clareza.</p></div>
          <div><h2 className="footer-title">Soluções</h2><nav className="footer-links">{solutions.map((item) => <Link key={item} to="/solucoes">{item}</Link>)}</nav></div>
          <div><h2 className="footer-title">Segmentos</h2><nav className="footer-links">{SEGMENTS.map((item) => <Link key={item.to} to={item.to}>{item.shortLabel}</Link>)}</nav></div>
          <div>
            <h2 className="footer-title">Fale com a Dimensional</h2>
            <div className="footer-links">
              <a href="https://wa.me/5534999759899" target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a>
              <a href="mailto:contato@dimensionalcontabil.com.br"><Mail /> E-mail</a>
              <span><MapPin /> Endereço</span>
            </div>
            <div className="mt-5 flex gap-4 text-primary"><Instagram /><Youtube /><Linkedin /></div>
          </div>
        </div>
        <p className="pt-5 text-center text-[10px] text-surface-dark-foreground/45">Fotos ilustrativas. Depoimentos, avaliações e contatos serão preenchidos com dados reais.</p>
      </Container>
    </footer>
  );
}
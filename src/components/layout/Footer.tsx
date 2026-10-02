import { Link } from "@tanstack/react-router";
import {Mail, MapPin, MessageCircle,} from "lucide-react";
import { Container } from "./Container";

const solutions = [
  "Contabilidade",
  "Gestão Financeira",
  "Custos & Precificação",
  "Tributário",
  "Processos & Rotinas",
  "Soluções para Sócios",
];

const segments = [
  { label: "Restaurantes", to: "/restaurantes" },
  { label: "Saúde", to: "/saude" },
  { label: "Comércios", to: "/comercios" },
];

const institutional = [
  "Sobre a Dimensional",
  "Método Dimensional",
  "Cases e Depoimentos",
  "Trabalhe Conosco",
  "Contato",
];

export function Footer() {
  return (
    <footer className="bg-surface-dark py-10 text-surface-dark-foreground">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr_1.15fr_1fr_1.45fr]">
          {/* Logo + descrição */}
          <div>
            <img
              src="/images/logo-dimensional.png"
              alt="Dimensional Contabilidade & Gestão"
              className="h-12 w-auto object-contain"
            />

            <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-80">
              Contabilidade e gestão especializadas em restaurantes.
              Mais experiência, informação e resultado para o seu negócio.
            </p>
          </div>

          {/* Soluções */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary">
              Soluções
            </h3>

            <nav className="mt-4 flex flex-col gap-2 text-sm opacity-80">
              {solutions.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition-colors hover:text-primary"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
            
            {/* Segmentos */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary">
              Segmentos
            </h3>

            <nav className="mt-4 flex flex-col gap-2 text-sm opacity-80">
             {segments.map((segment) => (
              <Link
                key={segment.label}
                to={segment.to}
                className="transition-colors hover:text-primary"
                >
                  {segment.label}
              </Link>
                ))}
              </nav>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary">
              Institucional
            </h3>

            <nav className="mt-4 flex flex-col gap-2 text-sm opacity-80">
              {institutional.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition-colors hover:text-primary"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div className="border-l border-white/20 pl-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary">
              Fale com a gente
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm opacity-80">
              <a
                href="https://wa.me/5534999759899"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span>(34) 99975-9899</span>
              </a>

              <a
                href="mailto:contato@dimensionalcontabil.com.br"
                className="flex items-center gap-3 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>contato@dimensionalcontabil.com.br</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Rua Otavio Borges, 12
                  <br />
                  Patos de Minas/MG
                </span>
              </div>
            </div>
            </div>
          </div>
      </Container>
    </footer>
  );
}
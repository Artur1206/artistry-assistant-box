// Configuração central do site: menu, botão de contato e nome.
// Para criar páginas internas no futuro, basta trocar o href de "#secao" para "/pagina".

import { Target } from "lucide-react";

export const NAV_ITEMS = [
  { label: "Sobre nós", href: "#diferenciais" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Segmentos"},
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Casos", href: "#diferenciais" },
  { label: "Contato", href: "#diagnostico" },
];

export const CTA = { label: "Fale com um especialista", href: "https://wa.me/55349?text=Quero%20um%20diagnostico%20do%20meu%20restaurante", target: "_blank" as const, rel: "noopener noreferrer" as const };

export const SITE = {
  name: "Dimensional",
  tagline: "Contabilidade & Gestão ",
};

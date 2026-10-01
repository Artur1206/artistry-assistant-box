// Central site config: navigation, anchors and contact info.
// Future internal pages (Restaurantes, Soluções, Conteúdos, Cases, Contato)
// only need their `href` switched from an anchor to a route here.

export const SECTION_IDS = {
  hero: "inicio",
  challenges: "desafios",
  solutions: "solucoes",
  method: "metodo",
  socialProof: "diferenciais",
  clients: "clientes",
  diagnostic: "diagnostico",
  content: "conteudos",
} as const;

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Sobre nós", href: `#${SECTION_IDS.socialProof}` },
  { label: "Soluções", href: `#${SECTION_IDS.solutions}` },
  { label: "Restaurantes", href: `#${SECTION_IDS.challenges}` },
  { label: "Conteúdos", href: `#${SECTION_IDS.content}` },
  { label: "Cases", href: `#${SECTION_IDS.clients}` },
  { label: "Contato", href: `#${SECTION_IDS.diagnostic}` },
];

export const CTA = { label: "Fale com um especialista", href: `#${SECTION_IDS.diagnostic}` };

export const SITE = {
  name: "Dimensional",
  tagline: "Contabilidade & Gestão",
};

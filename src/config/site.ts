export const NAV_ITEMS = [
  { label: "Sobre nós", to: "/sobre" },
  { label: "Soluções", to: "/solucoes" },
  { label: "Segmentos", to: null },
  { label: "Conteúdos", to: "/conteudos" },
  { label: "Contato", to: "/contato" },
] as const;

export const SEGMENTS = [
  { label: "Alimentação / Food Service", shortLabel: "Alimentação", to: "/alimentacao" },
  { label: "Saúde", shortLabel: "Saúde", to: "/saude" },
  { label: "Prestadores de Serviço", shortLabel: "Prestadores de Serviço", to: "/prestadores-de-servico" },
  { label: "Comércio", shortLabel: "Comércio", to: "/comercio" },
] as const;

export const CTA = {
  label: "Fale com um especialista",
  to: "/contato",
} as const;

export const SITE = {
  name: "Dimensional",
  tagline: "Contabilidade & Gestão",
};

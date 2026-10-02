import { Section } from "@/components/layout/Section";

const contents = [
  {
    title: "Título do artigo",
    href: "#",
  },
  {
    title: "Título do artigo",
    href: "#",
  },
  {
    title: "Título do artigo",
    href: "#",
  },
  {
    title: "Título do artigo",
    href: "#",
  },
];

export function ContentSection() {
  return (
    <Section id="conteudos" tone="light">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_repeat(4,1fr)]">
        {/* Conteúdo da esquerda */}
        <div className="flex flex-col items-start justify-center text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Conteúdos para restaurantes
          </span>

          <h2 className="mt-3 max-w-sm text-3xl font-bold leading-tight md:text-4xl">
            Informação que gera decisão.
          </h2>

          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Acesse nossos conteúdos e fique sempre à frente.
          </p>

          <a
            href="#"
            className="mt-7 inline-flex items-center rounded-lg bg-surface-dark px-5 py-3 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          >
            VER TODOS OS CONTEÚDOS
            <span className="ml-3">→</span>
          </a>
        </div>

        {/* Artigos */}
        {contents.map((content, index) => (
          <a
            key={index}
            href={content.href}
            className="group flex min-h-[230px] flex-col overflow-hidden rounded-lg border border-border bg-background text-left transition-all hover:-translate-y-1 hover:border-primary hover:shadow-md"
          >
            {/* Espaço reservado para imagem */}
            <div className="h-28 w-full bg-muted" />

            <div className="flex flex-1 flex-col p-4">

              <h3 className="mt-3 text-sm font-bold leading-snug">
                {content.title}
              </h3>

              <span className="mt-auto pt-5 text-xs font-semibold text-primary">
                Ler artigo →
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
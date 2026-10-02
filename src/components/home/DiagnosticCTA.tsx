import { Section } from "@/components/layout/Section";

export function DiagnosticCTA() {
  return (
    <Section
      id="diagnostico"
      tone="dark"
      className="py-12 md:py-14 lg:py-16"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr_0.9fr]">
        {/* Texto principal */}
        <div className="text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Diagnóstico Dimensional para restaurantes
          </span>

          <h2 className="mt-2 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
            Descubra onde seu restaurante pode estar perdendo margem.
          </h2>

          <p className="mt-4 max-w-xl text-base text-surface-dark-foreground/80">
            Um diagnóstico completo para entender seus números e identificar
            oportunidades reais de melhoria.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              ✓
            </span>
            <span className="text-sm">
              Análise de custos, margem e tributação
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              ✓
            </span>
            <span className="text-sm">
              Avaliação de precificação e CMV
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              ✓
            </span>
            <span className="text-sm">
              Diagnóstico financeiro completo
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              ✓
            </span>
            <span className="text-sm">
              Plano de ações personalizado
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-start lg:items-center">
          <a
            href="https://wa.me/55349?text=Quero%20agendar%20um%20diagnostico"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg bg-primary px-5 py-4 text-center font-semibold transition-opacity hover:opacity-90"
          >
            <span className="block text-sm">
              QUERO AGENDAR MEU
              <br />
              DIAGNÓSTICO GRATUITO
            </span>

            <span className="mt-2 block text-xs font-normal">
              Rápido, sem compromisso
              <br />
              e 100% online.
            </span>
          </a>
        </div>
      </div>
    </Section>
  );
}
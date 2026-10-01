import {
  BarChart3,
  CheckCircle2,
  Star,
  Users,
} from "lucide-react";
import { Section } from "@/components/layout/Section";

export function SocialProof() {
  return (
    <Section id="diferenciais" tone="muted">
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.9fr_0.9fr_0.9fr] lg:items-stretch">
        {/* Texto principal */}
        <div className="flex flex-col items-start text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Por que restaurantes escolhem a Dimensional
          </span>

          <h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight md:text-4xl">
            Especialistas no que fazemos. Parceiros no que mais importa para
            você.
          </h2>

          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-primary"
                strokeWidth={1.8}
              />
              <span className="text-sm">
                Especialização em food service
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-primary"
                strokeWidth={1.8}
              />
              <span className="text-sm">
                Equipe experiente e constantemente treinada
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-primary"
                strokeWidth={1.8}
              />
              <span className="text-sm">
                Tecnologia e processos que geram eficiência
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-primary"
                strokeWidth={1.8}
              />
              <span className="text-sm">
                Atendimento próximo e ágil via CS dedicado
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-primary"
                strokeWidth={1.8}
              />
              <span className="text-sm">
                Informações que viram decisões melhores
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-primary"
                strokeWidth={1.8}
              />
              <span className="text-sm">
                Foco em resultado e crescimento sustentável
              </span>
            </div>
          </div>

          <a
            href="#"
            className="mt-7 rounded-lg bg-surface-dark px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            CONHEÇA NOSSA HISTÓRIA
          </a>
        </div>

        {/* Card +120 */}
        <div className="flex flex-col justify-center rounded-lg bg-surface-dark p-7 text-white">
          <Users
            className="h-10 w-10 text-primary"
            strokeWidth={1.5}
          />

          <span className="mt-6 text-4xl font-bold">
            +120
          </span>

          <span className="mt-1 text-lg font-semibold">
            restaurantes atendidos
          </span>

          <p className="mt-4 text-sm leading-relaxed text-white/70">
            de bares e lanchonetes
            <br />
            a redes de restaurantes
          </p>
        </div>

        {/* Card 5,0 */}
        <div className="flex flex-col justify-center rounded-lg bg-background p-7">
          <Star
            className="h-10 w-10 text-primary"
            strokeWidth={1.5}
          />

          <span className="mt-6 text-4xl font-bold">
            5,0
          </span>

          <span className="mt-1 text-lg font-semibold">
            avaliação no Google
          </span>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            mais de 120 avaliações
            <br />
            de clientes satisfeitos
          </p>
        </div>

        {/* Card Resultados */}
        <div className="flex flex-col justify-center rounded-lg bg-background p-7">
          <BarChart3
            className="h-10 w-10 text-primary"
            strokeWidth={1.5}
          />

          <span className="mt-6 text-2xl font-bold leading-tight">
            Resultados
            <br />
            que aparecem
          </span>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            mais organização,
            <br />
            margem e mais lucro
          </p>
        </div>
      </div>
    </Section>
  );
}
import { Rocket, UserRound, CalendarCheck, ChartNoAxesCombined, ShieldCheck, Trophy, Infinity,} from "lucide-react";
import { Section } from "@/components/layout/Section";

const steps = [
  {
    number: "01",
    title: "Implantação",
    description:
      "Entendemos seu negócio e coletamos as informações necessárias.",
    icon: Rocket,
  },
  {
    number: "02",
    title: "Onboarding",
    description:
      "Organizamos processos, definimos responsáveis e alinhamos rotinas.",
    icon: UserRound,
  },
  {
    number: "03",
    title: "30 dias",
    description:
      "Primeiros ajustes e melhorias para você entender os números.",
    icon: CalendarCheck,
  },
  {
    number: "04",
    title: "60 dias",
    description:
      "Acompanhamento de resultados e melhorias nos indicadores.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "05",
    title: "90 dias",
    description:
      "Análise de performance, estratégias e plano de ações.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "180 dias",
    description:
      "Evolução contínua, mais margem e mais valor para o negócio.",
    icon: Trophy,
  },
  {
    number: "∞",
    title: "Acompanhamento contínuo",
    description:
      "Relacionamento próximo e decisões melhores todos os meses.",
    icon: Infinity,
  },
];

export function Method() {
  return (
    <Section id="metodo" tone="light">
      {/* Cabeçalho */}
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Como trabalhamos
        </span>

        <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
          Um método que organiza, acompanha e gera resultados.
        </h2>
      </div>

      {/* Etapas */}
      <div className="relative mt-12">
        {/* Linha horizontal */}
        <div className="absolute left-[7%] right-[7%] top-8 hidden h-px bg-primary lg:block" />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-7 lg:gap-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Ícone */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-background">
                  <Icon
                    className="h-7 w-7 text-primary"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Número */}
                <span className="mt-3 text-[11px] font-bold text-muted-foreground">
                  {step.number}
                </span>

                {/* Título */}
                <h3 className="mt-1 text-sm font-bold">
                  {step.title}
                </h3>

                {/* Descrição */}
                <p className="mt-2 max-w-[150px] text-xs leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Destaque inferior */}
      <div className="mx-auto mt-12 max-w-3xl rounded-md bg-muted px-6 py-4 text-center">
        <p className="text-sm text-muted-foreground">
          Não esperamos o problema aparecer para começar a conversar.
        </p>

        <p className="mt-1 text-sm font-semibold text-primary">
          Acompanhar é o que nos torna diferentes.
        </p>
      </div>
    </Section>
  );
}
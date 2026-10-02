import {
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Section } from "@/components/layout/Section";

const restaurants = [
  {
    name: "Restaurante 01",
    image: "/imagens/hero-restaurante.png",
  },
  {
    name: "Restaurante 02",
    image: "/images/clientes/restaurante-02.png",
  },
  {
    name: "Restaurante 03",
    image: "/images/clientes/restaurante-03.png",
  },
  {
    name: "Restaurante 04",
    image: "/images/clientes/restaurante-04.png",
  },
  {
    name: "Restaurante 05",
    image: "/images/clientes/restaurante-05.png",
  },
  {
    name: "Restaurante 06",
    image: "/images/clientes/restaurante-06.png",
  },
  {
    name: "Restaurante 07",
    image: "/images/clientes/restaurante-07.png",
  },
  {
    name: "Restaurante 08",
    image: "/images/clientes/restaurante-08.png",
  },
];

export function SocialProof() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleRestaurants = restaurants.slice(
    startIndex,
    startIndex + 4
  );

  const handleNext = () => {
    if (startIndex + 4 < restaurants.length) {
      setStartIndex(startIndex + 4);
    } else {
      setStartIndex(0);
    }
  };

  return (
    <Section id="diferenciais" tone="muted">
      {/* PARTE SUPERIOR */}
      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.9fr_0.9fr_0.9fr]">
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
            href="#historia"
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

        {/* DEPOIMENTO - fica embaixo do texto principal */}
        <div className="rounded-lg bg-surface-dark p-6 text-white">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            O que nossos clientes dizem
          </span>

          <p className="mt-4 text-lg font-semibold leading-snug">
            “A Dimensional entende de restaurante. A gente fala a mesma língua
            e isso faz toda a diferença no dia a dia.”
          </p>

          <div className="mt-4 flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="h-4 w-4 fill-primary text-primary"
              />
            ))}
          </div>

          <div className="mt-5">
            <p className="text-sm font-semibold">
              Rodrigo Campos
            </p>

            <p className="text-xs text-white/60">
              Proprietário • Hamburgueria Artesanal
            </p>
          </div>
        </div>

        {/* LOGOS - ocupa o espaço dos 3 cards */}
        <div className="lg:col-span-3">
          {/* Título */}
          <div className="mb-4 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Alguns restaurantes que confiam na Dimensional
            </span>
          </div>

          {/* Card das logos */}
          <div className="min-h-[250px] rounded-lg bg-background px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex items-center gap-4">
              {/* Logos */}
              <div className="grid flex-1 grid-cols-2 items-center gap-8 sm:grid-cols-4">
                {visibleRestaurants.map((restaurant) => (
                  <div
                    key={restaurant.name}
                    className="flex h-40 items-center justify-center"
                  >
                    <img
                      src={restaurant.image}
                      alt={`Logo ${restaurant.name}`}
                      className="h-48 auto object contain"
                    />
                  </div>
                ))}
              </div>

              {/* Botão próximo */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Mostrar mais restaurantes"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
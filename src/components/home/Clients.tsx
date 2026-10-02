import { ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { Section } from "@/components/layout/Section";

const restaurants = [
  {
    name: "Restaurante 01",
    image: "/images/clientes/restaurante-01.png",
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

export function Clients() {
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
    <Section id="clientes" tone="muted" className="py-12 md:py-14">
      <div className="grid items-center gap-8 lg:grid-cols-[310px_1fr]">
        {/* Depoimento */}
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
            <p className="text-sm font-semibold">Rodrigo Campos</p>
            <p className="text-xs text-white/60">
              Proprietário • Hamburgueria Artesanal
            </p>
          </div>
        </div>

        {/* Restaurantes */}
        <div>
          {/* Título centralizado */}
          <div className="mb-5 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Alguns restaurantes que confiam na Dimensional
            </span>
          </div>

          {/* Card das logos */}
          <div className="relative rounded-lg bg-background px-5 py-6 sm:px-8">
            <div className="flex items-center gap-4">
              {/* Logos */}
              <div className="grid flex-1 grid-cols-2 items-center gap-6 sm:grid-cols-4">
                {visibleRestaurants.map((restaurant) => (
                  <div
                    key={restaurant.name}
                    className="flex h-20 items-center justify-center"
                  >
                    <img
                      src={restaurant.image}
                      alt={`Logo ${restaurant.name}`}
                      className="max-h-16 max-w-full object-contain"
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
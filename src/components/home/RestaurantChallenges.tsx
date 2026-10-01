import { Section, SectionPlaceholder } from "@/components/layout/Section";
import { CookingPot, ShoppingCart, Store, Users, CircleDollarSign, ChartNoAxesColumnIncreasing,} from "lucide-react";

export function RestaurantChallenges() {
  return (
    <Section id="desafios" tone="light">
      <SectionPlaceholder
        title={
          <>Restaurante não é como qualquer outro negócio.</>
        }
        note="Você lida com muitas variáveis todos os dias. Nós ajudamos a trasnformar isso em resultados."
      />

      <div className="mt-10 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
  <div className="px-6 text-center lg:border-r">
    <CookingPot
      className="mx-auto mb-4 h-10 w-10 text-primary"
      strokeWidth={1.5}
    />
    <h3 className="font-bold">CMV e ficha técnica</h3>
    <p className="mt-2 text-sm">
      Você sabe quanto custa cada prato que vende?
    </p>
  </div>

  <div className="px-6 text-center lg:border-r">
    <ShoppingCart
      className="mx-auto mb-4 h-10 w-10 text-primary"
      strokeWidth={1.5}
    />
    <h3 className="font-bold">Precificação</h3>
    <p className="mt-2 text-sm">
      Preço errado tira margem e compromete a competitividade.
    </p>
  </div>

  <div className="px-6 text-center lg:border-r">
    <Store
      className="mx-auto mb-4 h-10 w-10 text-primary"
      strokeWidth={1.5}
    />
    <h3 className="font-bold">Marketplaces</h3>
    <p className="mt-2 text-sm">
      Taxas, repasses e regras que impactam seu lucro.
    </p>
  </div>

  <div className="px-6 text-center lg:border-r">
    <Users
      className="mx-auto mb-4 h-10 w-10 text-primary"
      strokeWidth={1.5}
    />
    <h3 className="font-bold">Folha e escala</h3>
    <p className="mt-2 text-sm">
      Mão de obra é um dos maiores custos do setor.
    </p>
  </div>

  <div className="px-6 text-center lg:border-r">
    <CircleDollarSign
      className="mx-auto mb-4 h-10 w-10 text-primary"
      strokeWidth={1.5}
    />
    <h3 className="font-bold">Impostos</h3>
    <p className="mt-2 text-sm">
      Tributação correta faz muita diferença no caixa.
    </p>
  </div>

  <div className="px-6 text-center">
    <ChartNoAxesColumnIncreasing
      className="mx-auto mb-4 h-10 w-10 text-primary"
      strokeWidth={1.5}
    />
    <h3 className="font-bold">Gestão e resultados</h3>
    <p className="mt-2 text-sm">
      Decisões melhores com informações certas.
    </p>
  </div>
</div>
    </Section>
  );
}
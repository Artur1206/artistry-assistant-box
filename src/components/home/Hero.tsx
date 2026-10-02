import { Section, SectionPlaceholder } from "@/components/layout/Section";

export function Hero() {
  return (
    <Section
      id="inicio"
      tone="dark"
      className="relative overflow-hidden"
    >
      {/* Imagem do restaurante */}
      <div className="absolute inset-y-0 right-0 w-[52%]">
        <img
          src="/imagens/hero-restaurante.png"
          alt="Interior de restaurante"
          className="h-full w-full object-cover object-center"
        />

        {/* Transição da imagem para o fundo escuro */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/30 to-transparent" />
      </div>

      {/* Conteúdo do Hero */}
      <div className="relative z-10 max-w-[48%]">
      <SectionPlaceholder
        eyebrow="Contabilidade & gestão para restaurantes"
        title={
          <>
            Seu restaurante vende.
            <br />
            <span className="text-primary">
              Mas você sabe quanto realmente <br/>sobra?
            </span>
          </>
        }
        note={ <>Contabilidade, financeiro, custos precificação e estratégia para restaurantes <br /> que querem crescer com mais margem e controle.</>}
        align="left"
      >
        <div className="mt-8 flex gap-4">
          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/55349?text=Quero%20um%20diagnostico%20do%20meu%20restaurante"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[280px] rounded-lg bg-primary px-6 py-3 text-center font-semibold"
          >
            Quero um diagnóstico do meu restaurante
          </a>

          {/* Botão para a próxima seção */}
          <a
            href="#desafios"
            className="w-[180px] rounded-lg border border-primary px-6 py-3 text-center font-semibold"
          >
            Conheça nossa atuação
          </a>
        </div>
      </SectionPlaceholder>
      </div>
    </Section>
  );
}
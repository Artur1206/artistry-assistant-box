import { Section, SectionPlaceholder } from "@/components/layout/Section";
import { FileText, CircleDollarSign, ChartPie, Scale, Settings,UsersRound,} from "lucide-react";

export function Solutions() {
  return (
    <Section id={"solucoes"} tone="dark">
      <SectionPlaceholder eyebrow="Soluções Dimensional para food service" 
      title={
      <> Muito além da contabilidade.</>
    }
      note="Soluções integradas para aumentar para aumentar sua margem e o valor do seu negócio." 
     />

     <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
  <div className="rounded-xl border border-primary/40 bg-surface-dark p-6 text-center shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)] transition-transform hover:-translate-y-1">
    <FileText
      className="mx-auto mb-4 h-10 w-10 text-primary"
      strokeWidth={1.5}
    />
    <h3 className="font-bold">Contabilidade</h3>
    <p className="mt-2 text-sm">
      Fiscal, contábil, departamento pessoal e obrigações do seu restaurante.
    </p>
  </div>

  <div className="rounded-xl border border-primary/40 bg-surface-dark p-6 text-center shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)] transition-transform hover:-translate-y-1">
    <CircleDollarSign
      className="mx-auto mb-4 h-10 w-10 text-primary"
      strokeWidth={1.5}
    />
    <h3 className="font-bold">Gestão Financeira</h3>
    <p className="mt-2 text-sm">
      BPO financeiro, fluxo de caixa, conciliações e relatórios gerenciais personalizados.
    </p>
  </div>

  <div className="rounded-xl border border-primary/40 bg-surface-dark p-6 text-center shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)] transition-transform hover:-translate-y-1">
    <ChartPie
      className="mx-auto mb-4 h-10 w-10 text-primary"
      strokeWidth={1.5}
    />
    <h3 className="font-bold">Custos & Precificação</h3>
    <p className="mt-2 text-sm">
      CMV, ficha técnica, formação de preço e análise de margem por prato, categoria e loja.
    </p>
  </div>

  <div className="rounded-xl border border-primary/40 bg-surface-dark p-6 text-center shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)] transition-transform hover:-translate-y-1">
    <Scale
      className="mx-auto mb-4 h-10 w-10 text-primary"
      strokeWidth={1.5}
    />
    <h3 className="font-bold">Tributário</h3>
    <p className="mt-2 text-sm">
      Planejamento tributário, recuperação de créditos e acompanhamento das mudanças fiscais.
    </p>
  </div>

  <div className="rounded-xl border border-primary/40 bg-surface-dark p-6 text-center shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)] transition-transform hover:-translate-y-1">
    <Settings
      className="mx-auto mb-4 h-10 w-10 text-primary"
      strokeWidth={1.5}
    />
    <h3 className="font-bold">Processos & Rotinas</h3>
    <p className="mt-2 text-sm">
      Rotinas financeiras, controles e processos que tornam a gestão eficiente e segura.
    </p>
  </div>

  <div className="rounded-xl border border-primary/40 bg-surface-dark p-6 text-center shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.05)] transition-transform hover:-translate-y-1">
    <UsersRound
      className="mx-auto mb-4 h-10 w-10 text-primary"
      strokeWidth={1.5}
    />
    <h3 className="font-bold">Soluções para Sócios</h3>
    <p className="mt-2 text-sm">
      Planejamento, pró-labore, distribuição de lucros e proteção patrimonial.
    </p>
  </div>
</div>
    </Section>
  );
}

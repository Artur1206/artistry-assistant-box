import { Section, SectionPlaceholder } from "@/components/layout/Section";
import { SECTION_IDS } from "@/config/site";

export function Clients() {
  return (
    <Section id={SECTION_IDS.clients} tone="light">
      <SectionPlaceholder eyebrow="Clientes" title="Alguns restaurantes que confiam na Dimensional" note="Seção em construção." />
    </Section>
  );
}

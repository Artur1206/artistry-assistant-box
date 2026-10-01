import { Section, SectionPlaceholder } from "@/components/layout/Section";
import { SECTION_IDS } from "@/config/site";

export function DiagnosticCTA() {
  return (
    <Section id={SECTION_IDS.diagnostic} tone="dark">
      <SectionPlaceholder eyebrow="Diagnóstico para restaurantes" title="Descubra onde seu restaurante pode estar perdendo margem." note="Seção em construção." />
    </Section>
  );
}

import { Section, SectionPlaceholder } from "@/components/layout/Section";
import { SECTION_IDS } from "@/config/site";

export function Method() {
  return (
    <Section id={SECTION_IDS.method} tone="light">
      <SectionPlaceholder eyebrow="Como trabalhamos" title="Um método que organiza, acompanha e gera resultados." note="Seção em construção." />
    </Section>
  );
}

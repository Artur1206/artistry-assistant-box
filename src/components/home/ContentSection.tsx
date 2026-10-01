import { Section, SectionPlaceholder } from "@/components/layout/Section";
import { SECTION_IDS } from "@/config/site";

export function ContentSection() {
  return (
    <Section id={SECTION_IDS.content} tone="light">
      <SectionPlaceholder eyebrow="Conteúdos para restaurantes" title="Informação que gera decisão." note="Seção em construção." />
    </Section>
  );
}

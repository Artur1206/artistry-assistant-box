import { Section, SectionPlaceholder } from "@/components/layout/Section";
import { SECTION_IDS } from "@/config/site";

export function Hero() {
  return (
    <Section id={SECTION_IDS.hero} tone="dark">
      <SectionPlaceholder eyebrow="Contabilidade & gestão para restaurantes" title="Seu restaurante vende. Mas você sabe quanto realmente sobra?" note="Seção em construção." />
    </Section>
  );
}

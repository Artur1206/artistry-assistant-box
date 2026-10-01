import { Section, SectionPlaceholder } from "@/components/layout/Section";
import { SECTION_IDS } from "@/config/site";

export function RestaurantChallenges() {
  return (
    <Section id={SECTION_IDS.challenges} tone="light">
      <SectionPlaceholder eyebrow="Desafios" title="Restaurante não é como qualquer outro negócio." note="Seção em construção." />
    </Section>
  );
}

import { Section, SectionPlaceholder } from "@/components/layout/Section";
import { SECTION_IDS } from "@/config/site";

export function SocialProof() {
  return (
    <Section id={SECTION_IDS.socialProof} tone="muted">
      <SectionPlaceholder eyebrow="Por que restaurantes escolhem a Dimensional" title="Especialistas no que fazemos." note="Seção em construção." />
    </Section>
  );
}

import { Section, SectionPlaceholder } from "@/components/layout/Section";
import { SECTION_IDS } from "@/config/site";

export function Solutions() {
  return (
    <Section id={SECTION_IDS.solutions} tone="dark">
      <SectionPlaceholder eyebrow="Soluções Dimensional para food service" title="Muito além da contabilidade." note="Seção em construção." />
    </Section>
  );
}

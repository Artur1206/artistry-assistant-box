import { Section, SectionPlaceholder } from "@/components/layout/Section";

export function ContentSection() {
  return (
    <Section id={"conteudos"} tone="light">
      <SectionPlaceholder eyebrow="Conteúdos para restaurantes" 
      title={
      <>Informação que gera decisão.</>
    }
      note="Acesse nossos conteudos e fique sempre a frente." 
      align="left"/>
    </Section>
  );
}

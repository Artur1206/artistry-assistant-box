import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";

const title = "Dimensional Contabilidade & Gestão para Saúde";
const description =
  "Contabilidade e gestão especializadas para clínicas e profissionais da saúde. Página em construção.";

export const Route = createFileRoute("/saude")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SaudePage,
});

// Página do segmento Saúde — estrutura básica, conteúdo será desenvolvido depois.
function SaudePage() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <section className="bg-surface-dark py-24 text-surface-dark-foreground">
          <Container className="text-center">
            <h1 className="text-3xl font-extrabold uppercase tracking-wide md:text-4xl">
              Saúde
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm opacity-80 md:text-base">
              Contabilidade e gestão especializadas para clínicas e
              profissionais da saúde.
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-primary">
              Página em construção
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Hero,
  RestaurantChallenges,
  Solutions,
  Method,
  SocialProof,
  Clients,
  DiagnosticCTA,
  ContentSection,
} from "@/components/home";

const title = "Dimensional Contabilidade & Gestão para Restaurantes";
const description =
  "Contabilidade, financeiro, custos, precificação e estratégia para restaurantes que querem crescer com mais margem e controle.";

export const Route = createFileRoute("/")({
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
  component: HomePage,
});

// Ordem das seções da Home — adicione/remova/reordene aqui.
function HomePage() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <RestaurantChallenges />
        <Solutions />
        <Method />
        <SocialProof />
        <Clients />
        <DiagnosticCTA />
        <ContentSection />
      </main>
      <Footer />
    </div>
  );
}

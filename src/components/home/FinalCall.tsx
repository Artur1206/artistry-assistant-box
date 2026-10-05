import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function FinalCall() {
  return <section className="bg-primary py-8 text-primary-foreground"><Container className="grid items-center gap-5 md:grid-cols-[1fr_auto]"><h2 className="text-2xl font-semibold leading-tight">Vamos conversar sobre o<br />próximo passo da sua empresa?</h2><div className="flex flex-col gap-3 sm:flex-row"><Button asChild variant="secondary"><Link to="/contato">Quero trocar de contador <ArrowRight /></Link></Button><Button asChild className="bg-surface-dark text-surface-dark-foreground hover:bg-surface-dark/90"><Link to="/contato">Quero abrir minha empresa <ArrowRight /></Link></Button></div></Container></section>;
}
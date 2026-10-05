import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
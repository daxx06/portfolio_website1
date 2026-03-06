import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Services />
      <Industries />
      <Portfolio />
      <Pricing />
      <Features />
      <Contact />
    </main>
  );
}

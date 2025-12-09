import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import { workItems, playItems } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <PortfolioGrid
          title="My work"
          subtitle="My Range Of Work"
          id="work"
          items={workItems}
        />
        <PortfolioGrid
          title="My Play"
          subtitle="In My Spare Time"
          id="play"
          items={playItems}
        />
      </main>
      <Footer />
    </div>
  );
}

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { OnboardingSection } from "@/components/site/OnboardingSection";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ScooterFleet } from "@/components/site/ScooterFleet";
import { Benefits } from "@/components/site/Benefits";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <main>
        <Hero />
        <OnboardingSection />
        <HowItWorks />
        <ScooterFleet />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

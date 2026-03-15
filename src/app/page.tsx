import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import UseCasesSection from "@/components/UseCasesSection";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <PricingSection />
      <Footer />
    </main>
  );
}

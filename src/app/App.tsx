import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { USPSection } from './components/USPSection';
import { UseCasesSection } from './components/UseCasesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { StatsSection } from './components/StatsSection';
import { PricingSection } from './components/PricingSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <FeaturesGrid />
      <USPSection />
      <UseCasesSection />
      <TestimonialsSection />
      <StatsSection />
      <PricingSection />
      <FinalCTASection />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

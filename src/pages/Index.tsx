import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import InsightPairSection from "@/components/home/InsightPairSection";
import PlatformSection from "@/components/home/PlatformSection";
import DifferentiationPairSection from "@/components/home/DifferentiationPairSection";

import HowItWorksSection from "@/components/home/HowItWorksSection";

import WhoSection from "@/components/home/WhoSection";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => (
  <div className="overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <ProblemSection />
      <InsightPairSection />
      <PlatformSection />
      <DifferentiationPairSection />
      <HowItWorksSection />
      
      <WhoSection />
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

export default Index;

import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ServicesSection from "@/components/home/ServicesSection";
import ResultsSection from "@/components/home/ResultsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <ProblemSection />
    <HowItWorksSection />
    <ServicesSection />
    <ResultsSection />
    <TestimonialsSection />
    <CtaSection />
  </Layout>
);

export default Index;

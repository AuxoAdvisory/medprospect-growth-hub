import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import WhoWeWorkWith from "@/components/home/WhoWeWorkWith";
import IndustriesSection from "@/components/home/IndustriesSection";
import ProcessSection from "@/components/home/ProcessSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <WhoWeWorkWith />
    <IndustriesSection />
    <ProcessSection />
    <FeaturesSection />
    <TestimonialsSection />

    {/* Final CTA */}
    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed max-w-md mx-auto">
            No commitment. Just a candid discussion about whether this is the right fit.
          </p>
          <Button variant="gold" size="lg" className="mt-8" asChild>
            <Link to="/contact">Book a call <ArrowRight className="ml-1.5" size={16} /></Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Index;

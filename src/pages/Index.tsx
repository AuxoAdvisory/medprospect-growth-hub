import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ProcessSection from "@/components/home/ProcessSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <IndustriesSection />
    <ProcessSection />
    <FeaturesSection />
    <TestimonialsSection />

    {/* Final CTA */}
    <section className="section-padding bg-background">
      <div className="container-narrow max-w-2xl mx-auto text-center">
        <FadeIn>
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Next step</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            Let's start a conversation.
          </h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-md mx-auto">
            No commitment. Just a candid discussion about whether this is the right fit for your business.
          </p>
          <Button variant="gold" size="lg" className="mt-10 text-sm tracking-wider uppercase px-12" asChild>
            <Link to="/contact">Book a call <ArrowRight className="ml-2" size={16} /></Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Index;

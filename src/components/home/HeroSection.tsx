import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="bg-hero text-hero-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-light/20 opacity-90" />
    <div className="container-narrow relative z-10 px-6 md:px-10 py-28 md:py-40 lg:py-48">
      <div className="max-w-2xl">
        <FadeIn>
          <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-8">Auxo Advisory</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight">
            Stop chasing clients.{" "}
            <span className="text-gradient-gold italic">Let them find you.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-8 text-base md:text-lg text-hero-muted max-w-lg leading-relaxed">
            We handle outreach, follow-ups, and booking — so you can focus on the work that matters.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button variant="gold" size="lg" className="text-sm tracking-wider uppercase px-10" asChild>
              <Link to="/contact">Get in touch <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="text-sm tracking-wider uppercase px-10" asChild>
              <Link to="/how-it-works">Our process</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default HeroSection;

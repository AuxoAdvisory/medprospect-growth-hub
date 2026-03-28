import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
    <div className="container-narrow relative z-10 px-6 md:px-10 py-32 md:py-44 lg:py-52">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Now accepting new clients
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            You do great work.{" "}
            <span className="text-gradient-primary">We bring the clients.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We handle outreach, follow-ups, and booking — so you can focus on the work that matters.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Get started <ArrowRight className="ml-1.5" size={16} /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/how-it-works">See how it works</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default HeroSection;

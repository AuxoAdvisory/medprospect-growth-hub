import { useState, useEffect } from "react";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const headlines = [
  { main: "More patients.", accent: "Less no-shows." },
  { main: "More clients.", accent: "Less missed calls." },
  { main: "More bookings.", accent: "Less admin." },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % headlines.length);
        setVisible(true);
      }, 300);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      {/* Gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="container-narrow relative z-10 px-6 md:px-10 py-32 md:py-44 lg:py-52">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground mb-8 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Helping local businesses grow with AI
            </div>
          </FadeIn>
          <div className="h-[4.5rem] md:h-[6.5rem] lg:h-[8rem] flex items-center justify-center">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight transition-opacity duration-300"
              style={{ opacity: visible ? 1 : 0 }}
            >
              {headlines[index].main}{" "}
              <span className="text-gradient-primary">{headlines[index].accent}</span>
            </h1>
          </div>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
              We install AI-powered systems into local service businesses — so you get more bookings, better reviews, and faster follow-ups without lifting a finger.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">Book a free call <ArrowRight className="ml-1" size={14} /></Link>
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
};

export default HeroSection;

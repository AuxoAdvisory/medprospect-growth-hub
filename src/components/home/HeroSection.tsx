import { useState, useEffect } from "react";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const headlines = [
  <>More patients. Less no-shows.{" "}<span className="text-gradient-primary">Growth on autopilot.</span></>,
  <>More clients. Less missed calls.{" "}<span className="text-gradient-primary">Growth on autopilot.</span></>,
  <>More bookings. Less admin.{" "}<span className="text-gradient-primary">Growth on autopilot.</span></>,
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
      }, 400);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
    <div className="container-narrow relative z-10 px-6 md:px-10 py-32 md:py-44 lg:py-52">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Helping local businesses grow with AI
          </div>
        </FadeIn>
        <div className="h-[4.5rem] md:h-[7rem] lg:h-[8.5rem] flex items-center justify-center">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight transition-opacity duration-400"
            style={{ opacity: visible ? 1 : 0 }}
          >
            {headlines[index]}
          </h1>
        </div>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We install AI-powered systems into local service businesses — so you get more bookings, better reviews, and faster follow-ups without lifting a finger.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Book a free call <ArrowRight className="ml-1.5" size={16} /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/services">See our services</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;

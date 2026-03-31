import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const headlines = [
  { main: "More clients.", accent: "Less missed calls." },
  { main: "More bookings.", accent: "Less admin." },
  { main: "More patients.", accent: "Less no-shows." },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % headlines.length);
        setVisible(true);
      }, 350);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        {/* Base dark */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Primary orb — top center, slow drift */}
        <motion.div
          className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsla(220, 80%, 55%, 0.12) 0%, transparent 70%)",
            top: "-20%",
            left: "50%",
            x: "-50%",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Secondary orb — bottom left, purple */}
        <motion.div
          className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsla(260, 70%, 50%, 0.08) 0%, transparent 70%)",
            bottom: "-30%",
            left: "-10%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Tertiary orb — right side, teal */}
        <motion.div
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsla(190, 70%, 50%, 0.06) 0%, transparent 70%)",
            top: "20%",
            right: "-15%",
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(hsla(0,0%,100%,0.05) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,100%,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
      </div>

      {/* Content */}
      <div className="container-narrow relative z-10 px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="min-h-[3.5rem] md:min-h-[5rem] lg:min-h-[6.5rem] flex items-center justify-center">
              <h1
                className="text-4xl md:text-6xl lg:text-[4.5rem] font-semibold leading-[1.05] tracking-[-0.03em] transition-all duration-350"
                style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(4px)" }}
              >
                <span className="text-foreground">{headlines[index].main}</span>
                <br className="hidden sm:block" />{" "}
                <span className="text-gradient-primary">{headlines[index].accent}</span>
              </h1>
            </div>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            className="mt-6 text-[15px] md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            AI-powered systems for local service businesses. More bookings, better reviews, faster follow-ups — without lifting a finger.
          </motion.p>

          {/* Single glowing CTA */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button
              variant="default"
              size="lg"
              className="relative bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_30px_-5px_hsl(220_80%_60%_/_0.5)] hover:shadow-[0_0_40px_-5px_hsl(220_80%_60%_/_0.6)] transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Get started
                <ArrowRight className="ml-1" size={14} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
};

export default HeroSection;

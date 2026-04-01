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
    <section ref={ref} className="relative overflow-hidden min-h-[70vh] md:min-h-[75vh] flex items-center justify-center">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background" />
        <motion.div
          className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsla(226, 100%, 71%, 0.08) 0%, transparent 70%)",
            top: "-20%",
            left: "50%",
            x: "-50%",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsla(255, 80%, 65%, 0.05) 0%, transparent 70%)",
            bottom: "-30%",
            left: "-10%",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <div className="absolute inset-0 opacity-[0.035]" style={{
          backgroundImage: "linear-gradient(hsl(0 0% 0% / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 0% / 0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
      </div>

      <div className="container-narrow relative z-10 px-5 md:px-10 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="min-h-[4rem] md:min-h-[5rem] lg:min-h-[7rem] flex items-center justify-center px-1">
              <h1
                className="text-[2.25rem] sm:text-5xl md:text-7xl lg:text-[5rem] font-bold leading-[1.08] tracking-[-0.04em] transition-all duration-350"
                style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(4px)" }}
              >
                <span className="text-foreground">{headlines[index].main}</span>
                <br className="hidden sm:block" />{" "}
                <span className="text-gradient-primary">{headlines[index].accent}</span>
              </h1>
            </div>
          </motion.div>

          <motion.p
            className="mt-5 text-[15px] md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            AI-powered systems for local service businesses. More bookings, better reviews, faster follow-ups — without lifting a finger.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button
              variant="default"
              size="lg"
              className="relative bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_30px_-5px_hsl(226_100%_71%_/_0.35)] hover:shadow-[0_0_40px_-5px_hsl(226_100%_71%_/_0.45)] transition-all duration-300"
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

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
};

export default HeroSection;

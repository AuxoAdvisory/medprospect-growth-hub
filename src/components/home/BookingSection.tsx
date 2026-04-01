import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-24 lg:py-32 border-t border-border" style={{ background: "hsl(228, 20%, 8%)" }}>
      {/* Radial accent glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsla(226, 100%, 71%, 0.12) 0%, hsla(255, 80%, 65%, 0.05) 40%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(hsla(0,0%,100%,0.06) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,100%,0.06) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Content */}
      <div className="relative z-10 container-narrow px-5 md:px-10 text-center">
        <motion.h2
          className="text-[1.75rem] sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-2xl mx-auto"
          style={{ color: "white" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Ready to grow?
        </motion.h2>

        <motion.p
          className="mt-5 text-[14px] md:text-base max-w-md mx-auto leading-relaxed"
          style={{ color: "hsl(0 0% 58%)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Book a free 15-minute call. We'll audit your online presence and show you exactly where you're losing clients.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-11 px-7 text-sm font-medium rounded-md bg-accent text-accent-foreground hover:bg-accent/85 transition-all duration-300 shadow-[0_0_40px_-8px_hsl(226_100%_71%_/_0.5)] hover:shadow-[0_0_50px_-6px_hsl(226_100%_71%_/_0.6)]"
          >
            Get started
            <ArrowRight className="ml-1.5" size={14} />
          </Link>
        </motion.div>

        <motion.p
          className="mt-6 text-[11px]"
          style={{ color: "hsl(0 0% 40%)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          No contracts · Cancel anytime · Free audit included
        </motion.p>
      </div>
    </section>
  );
};

export default BookingSection;

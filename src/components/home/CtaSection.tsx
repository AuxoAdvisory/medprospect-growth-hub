import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";

const CtaSection = () => (
  <section className="px-5 md:px-10 py-[100px] bg-accent">
    <div className="container-narrow text-center">
      <FadeIn>
        <h2 className="text-[32px] md:text-[44px] leading-[1.2] max-w-[700px] mx-auto" style={{ color: "white" }}>
          Ready to see exactly what we would fix for your business?
        </h2>
        <p className="mt-5 text-[17px] max-w-[520px] mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.8)" }}>
          Book a free 15-minute call. We will review your online presence before the call and show you specifically where you are losing clients — and what it is worth to fix it.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center mt-9 h-[56px] px-10 text-[16px] font-bold rounded-md bg-white text-accent hover:bg-white/90 transition-colors duration-200"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Book a Free 15-Minute Call
        </Link>
        <p className="mt-4 text-[13px]" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)" }}>
          No contracts. No pressure. Free audit included.
        </p>
      </FadeIn>
    </div>
  </section>
);

export default CtaSection;

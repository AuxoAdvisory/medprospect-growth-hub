import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";

const CtaSection = () => (
  <section className="px-6 md:px-16 py-[80px]" style={{ backgroundColor: "#111827" }}>
    <div className="container-narrow text-center">
      <FadeIn>
        <h2 className="text-[32px] md:text-[44px] leading-[1.2] max-w-[640px] mx-auto" style={{ color: "#FFFFFF", fontWeight: 800 }}>
          Ready to see exactly what we would fix for your business?
        </h2>
        <p className="mt-5 text-[17px] max-w-[480px] mx-auto leading-[1.7]" style={{ color: "rgba(255,255,255,0.65)" }}>
          Book a free 15-minute call. We will review your online presence before the call and show you specifically where you are losing clients — and what it is worth to fix it.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center mt-9 h-[56px] px-10 text-[16px] rounded-[10px] text-white transition-colors duration-200 hover:opacity-90"
          style={{ backgroundColor: "#2563EB", fontWeight: 600, boxShadow: "0 4px 14px rgba(37,99,235,0.4)" }}
        >
          Book a Free 15-Minute Call
        </Link>
        <p className="mt-4 text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
          No contracts. No pressure. Free audit included.
        </p>
      </FadeIn>
    </div>
  </section>
);

export default CtaSection;

import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";

const GoldStar = () => <span style={{ color: "#F59E0B" }}>★</span>;
const GreyStar = () => <span style={{ color: "#D1D5DB" }}>★</span>;

const BeforeAfterCard = () => (
  <div className="rounded-2xl p-7" style={{ backgroundColor: "#FFFFFF", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
    <div className="grid grid-cols-2 gap-0">
      {/* Before */}
      <div className="pr-6 rounded-l-lg" style={{ borderRight: "1px solid #E5E7EB" }}>
        <div className="p-2 rounded-lg" style={{ background: "#F9FAFB" }}>
          <p className="text-[11px] uppercase tracking-[0.1em] mb-4" style={{ color: "#9CA3AF", fontWeight: 600 }}>Before</p>
          <p className="text-[14px] mb-3" style={{ color: "#9CA3AF", fontWeight: 500 }}>Thornhill Dental Group</p>
          <div className="space-y-2.5 text-[13px]" style={{ color: "#9CA3AF" }}>
            <p><GoldStar /><GoldStar /><GoldStar /><GreyStar /><GreyStar /> <span className="ml-1">3.2</span></p>
            <p>14 reviews</p>
            <p>✕ No online booking</p>
            <p>✕ No review responses</p>
          </div>
        </div>
      </div>
      {/* After */}
      <div className="pl-6 rounded-r-lg">
        <div className="p-2 rounded-lg" style={{ background: "#EFF6FF" }}>
          <p className="text-[11px] uppercase tracking-[0.1em] mb-4" style={{ color: "#9CA3AF", fontWeight: 600 }}>After</p>
          <p className="text-[14px] mb-3" style={{ color: "#2563EB", fontWeight: 700 }}>Thornhill Dental Group</p>
          <div className="space-y-2.5 text-[13px]" style={{ color: "#111827" }}>
            <p><GoldStar /><GoldStar /><GoldStar /><GoldStar /><GoldStar /> <span className="ml-1">4.8</span></p>
            <p>67 reviews</p>
            <p className="flex items-center gap-1.5">
              ✓ Book online 24/7
              <span className="inline-block w-[4px] h-[4px] rounded-full animate-pulse" style={{ backgroundColor: "#22C55E" }} />
            </p>
            <p>✓ Every review answered</p>
          </div>
        </div>
      </div>
    </div>
    <p className="text-center text-[12px] mt-4 pt-4" style={{ color: "#9CA3AF", borderTop: "1px solid #F3F4F6" }}>Typical results within 60 days</p>
  </div>
);

const HeroSection = () => (
  <section className="px-6 md:px-16 pt-[80px] pb-[80px]" style={{ backgroundColor: "#FAFAFA" }}>
    <div className="container-narrow">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 lg:pr-12">
          <FadeIn>
            <span className="inline-block text-[12px] uppercase tracking-[0.05em] rounded-full px-3.5 py-1.5 mb-5" style={{ backgroundColor: "#EFF6FF", color: "#2563EB", fontWeight: 600, letterSpacing: "0.05em" }}>
              AI Consulting for Local Business
            </span>
            <h1 className="text-[34px] md:text-[48px] leading-[1.1] max-w-[560px]" style={{ color: "#111827", fontWeight: 800 }}>
              Your business is losing clients online. We fix that.
            </h1>
            <p className="mt-5 text-[18px] max-w-[480px] leading-[1.7]" style={{ color: "#6B7280", fontWeight: 400 }}>
              Auxo Advisory works with established local service businesses across the GTA. We identify exactly where you are losing new clients and implement AI systems to fix it — without adding work to your team.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center mt-8 h-[52px] px-8 text-[16px] rounded-[10px] text-white transition-colors duration-200 hover:opacity-90"
              style={{ backgroundColor: "#2563EB", fontWeight: 600, boxShadow: "0 4px 14px rgba(37,99,235,0.3)" }}
            >
              Book a Free 15-Minute Call
            </Link>
            <p className="mt-3.5 text-[13px]" style={{ color: "#9CA3AF" }}>
              No pitch. No commitment. Just a specific audit of your business.
            </p>
          </FadeIn>
        </div>
        <div className="lg:col-span-5">
          <FadeIn delay={0.15}>
            <BeforeAfterCard />
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

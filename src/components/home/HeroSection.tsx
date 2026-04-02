import { Link } from "react-router-dom";
import FadeIn from "@/components/FadeIn";

const GoldStar = () => <span style={{ color: "#F59E0B" }}>★</span>;
const GreyStar = () => <span style={{ color: "#D1D5DB" }}>★</span>;

const BeforeAfterCard = () => (
  <div className="rounded-xl border border-border bg-card p-7">
    <div className="grid grid-cols-2 gap-0">
      {/* Before */}
      <div className="pr-6 border-r border-border rounded-l-lg" style={{ background: "#F7F6F3" }}>
        <div className="p-1">
          <p className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-4" style={{ fontFamily: "var(--font-body)" }}>Before</p>
          <p className="text-[14px] text-muted-foreground font-medium mb-3" style={{ fontFamily: "var(--font-body)" }}>Thornhill Dental Group</p>
          <div className="space-y-2.5 text-[13px]" style={{ fontFamily: "var(--font-body)", color: "#6B7280" }}>
            <p><GoldStar /><GoldStar /><GoldStar /><GreyStar /><GreyStar /> <span className="ml-1">3.2</span></p>
            <p>14 reviews</p>
            <p>✕ No online booking</p>
            <p>✕ No review responses</p>
          </div>
        </div>
      </div>
      {/* After */}
      <div className="pl-6 rounded-r-lg" style={{ background: "#EBF2FF" }}>
        <div className="p-1">
          <p className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-4" style={{ fontFamily: "var(--font-body)" }}>After</p>
          <p className="text-[14px] font-medium mb-3" style={{ fontFamily: "var(--font-body)", color: "#2563EB" }}>Thornhill Dental Group</p>
          <div className="space-y-2.5 text-[13px] text-foreground" style={{ fontFamily: "var(--font-body)" }}>
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
    <p className="text-center text-[12px] text-muted-foreground mt-6 pt-5 border-t border-border" style={{ fontFamily: "var(--font-body)" }}>Typical results within 60 days</p>
  </div>
);

const HeroSection = () => (
  <section className="bg-background px-6 md:px-10 pt-[140px] pb-[180px]">
    <div className="container-narrow">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 pb-[60px] lg:pl-16">
          <FadeIn>
            <p className="text-[12px] uppercase tracking-[0.15em] text-accent font-medium mb-5" style={{ fontFamily: "var(--font-body)" }}>
              AI Consulting for Local Business
            </p>
            <h1 className="text-[34px] md:text-[52px] leading-[1.15] text-foreground">
              Your business is losing clients online. We fix that.
            </h1>
            <p className="mt-6 text-[18px] text-muted-foreground max-w-[480px] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Auxo Advisory works with established local service businesses across the GTA. We identify exactly where you are losing new clients and implement AI systems to fix it — without adding work to your team.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center mt-9 h-[52px] px-9 text-[16px] font-bold rounded-md bg-accent text-accent-foreground transition-colors duration-200 hover:bg-accent/90"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Book a Free 15-Minute Call
            </Link>
            <p className="mt-3 text-[13px] text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
              No pitch. No commitment. Just a specific audit of your business.
            </p>
          </FadeIn>
        </div>
        <div className="lg:col-span-5 lg:pr-16">
          <FadeIn delay={0.15}>
            <BeforeAfterCard />
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

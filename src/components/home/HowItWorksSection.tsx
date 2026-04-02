import FadeIn from "@/components/FadeIn";

const steps = [
  { num: "01", title: "15-Minute Discovery Call", body: "We review your Google profile, website, booking system, and online reputation before the call. You get a specific breakdown of what is costing you clients — on the first conversation." },
  { num: "02", title: "We Identify Your Two Biggest Problems", body: "Not a generic audit. We tell you exactly which two issues are costing you the most new clients right now and what fixing them is worth to your business every month." },
  { num: "03", title: "We Implement. You See Results.", body: "We build and manage everything. Most clients see measurable results within 30 days — more reviews, more bookings, fewer missed calls. You do not touch anything." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding" style={{ backgroundColor: "#FAFAFA" }}>
    <div className="container-narrow">
      <FadeIn>
        <div className="text-center mb-4">
          <span className="inline-block text-[12px] uppercase tracking-[0.05em] rounded-full px-3.5 py-1.5" style={{ backgroundColor: "#EFF6FF", color: "#2563EB", fontWeight: 600 }}>
            How It Works
          </span>
        </div>
        <h2 className="text-center text-[28px] md:text-[40px] leading-tight" style={{ color: "#111827", fontWeight: 800 }}>
          Three steps. No complexity.
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
        {steps.map((s, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="rounded-xl h-full" style={{ backgroundColor: "#FFFFFF", boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)", borderTop: "3px solid #2563EB", padding: "40px 32px" }}>
              <p className="text-[13px] mb-4" style={{ color: "#2563EB", fontWeight: 700 }}>{s.num}</p>
              <h3 className="text-[20px] mb-3" style={{ color: "#111827", fontWeight: 700 }}>{s.title}</h3>
              <p className="text-[15px] leading-[1.65]" style={{ color: "#6B7280" }}>{s.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;

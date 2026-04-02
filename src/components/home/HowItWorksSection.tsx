import FadeIn from "@/components/FadeIn";

const steps = [
  {
    num: "01",
    title: "15-Minute Discovery Call",
    body: "We review your Google profile, website, booking system, and online reputation before the call. You get a specific breakdown of what is costing you clients — on the first conversation.",
  },
  {
    num: "02",
    title: "We Identify Your Two Biggest Problems",
    body: "Not a generic audit. We tell you exactly which two issues are costing you the most new clients right now and what fixing them is worth to your business every month.",
  },
  {
    num: "03",
    title: "We Implement. You See Results.",
    body: "We build and manage everything. Most clients see measurable results within 30 days — more reviews, more bookings, fewer missed calls. You do not touch anything.",
  },
];

const HowItWorksSection = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <FadeIn>
        <p className="text-center text-[12px] uppercase tracking-[0.15em] text-accent font-medium mb-4" style={{ fontFamily: "var(--font-body)" }}>How It Works</p>
        <h2 className="text-center text-[28px] md:text-[40px] text-foreground leading-tight">
          Three steps. No complexity.
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
        {steps.map((s, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="rounded-lg border border-border bg-background p-9">
              <p className="text-[13px] font-semibold text-accent mb-5" style={{ fontFamily: "var(--font-body)" }}>{s.num}</p>
              <h3 className="text-[22px] text-foreground mb-3">{s.title}</h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{s.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;

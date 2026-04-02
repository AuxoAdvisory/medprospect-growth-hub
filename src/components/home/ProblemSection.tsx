import FadeIn from "@/components/FadeIn";

const problems = [
  "Clients search after hours and cannot book — so they book your competitor instead.",
  "Negative reviews sit unanswered for months, costing you new clients before they ever call.",
  "Your Google listing has fewer than 30 reviews — clients skip you for whoever ranks higher.",
  "Happy clients never get asked for a review, so your rating stays flat while others climb.",
  "Your website has not been updated in years and does not work properly on mobile.",
];

const ProblemSection = () => (
  <section className="section-padding border-t border-border bg-background">
    <div className="container-narrow max-w-[860px]">
      <FadeIn>
        <p className="text-center text-[12px] uppercase tracking-[0.15em] text-accent font-medium mb-4" style={{ fontFamily: "var(--font-body)" }}>The Problem</p>
        <h2 className="text-center text-[28px] md:text-[40px] text-foreground leading-tight max-w-[700px] mx-auto">
          Most local service businesses are losing new clients every week without knowing it.
        </h2>
      </FadeIn>
      <div className="mt-14">
        {problems.map((p, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="border-t border-border py-[22px] text-[17px] text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-default" style={{ fontFamily: "var(--font-body)" }}>
              {p}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;

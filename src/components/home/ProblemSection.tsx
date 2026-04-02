import FadeIn from "@/components/FadeIn";

const problems = [
  "Clients search after hours and cannot book — so they book your competitor instead.",
  "Negative reviews sit unanswered for months, costing you new clients before they ever call.",
  "Your Google listing has fewer than 30 reviews — clients skip you for whoever ranks higher.",
  "Happy clients never get asked for a review, so your rating stays flat while others climb.",
  "Your website has not been updated in years and does not work properly on mobile.",
];

const ProblemSection = () => (
  <section className="section-padding border-t border-border" style={{ backgroundColor: "#F0EEE9" }}>
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
            <div
              className="group border-t border-border py-[32px] pl-0 hover:pl-4 text-[17px] text-muted-foreground hover:text-foreground transition-all duration-200 ease-in-out cursor-default flex items-center justify-between"
              style={{ fontFamily: "var(--font-body)", borderLeftWidth: "0px", borderLeftColor: "transparent" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderLeftWidth = "2px"; e.currentTarget.style.borderLeftColor = "#2563EB"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderLeftWidth = "0px"; e.currentTarget.style.borderLeftColor = "transparent"; }}
            >
              <span>{p}</span>
              <span className="ml-4 text-[17px] transition-colors duration-200 shrink-0" style={{ color: "#E2E0DB" }}>
                <span className="group-hover:hidden">→</span>
                <span className="hidden group-hover:inline" style={{ color: "#2563EB" }}>→</span>
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;

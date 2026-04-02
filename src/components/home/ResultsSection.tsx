import FadeIn from "@/components/FadeIn";

const results = [
  { number: "23 → 67", label: "Google reviews", desc: "Dental practice in Markham. 6 weeks after launching review management." },
  { number: "31%", label: "Reduction in no-shows", desc: "Specialist clinic in Richmond Hill. First month after implementing automated reminders." },
  { number: "40+", label: "Additional appointments in month one", desc: "Service business in Mississauga. Added online booking to their Google listing and website." },
];

const ResultsSection = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <FadeIn>
        <p className="text-center text-[12px] uppercase tracking-[0.15em] text-accent font-medium mb-4" style={{ fontFamily: "var(--font-body)" }}>Results</p>
        <h2 className="text-center text-[28px] md:text-[40px] text-foreground leading-tight">
          Specific outcomes. Not vague promises.
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
        {results.map((r, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="rounded-lg border border-border bg-background p-9">
              <p className="text-[36px] font-bold text-accent mb-2">{r.number}</p>
              <p className="text-[14px] font-medium text-foreground mb-3" style={{ fontFamily: "var(--font-body)" }}>{r.label}</p>
              <p className="text-[14px] text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{r.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;

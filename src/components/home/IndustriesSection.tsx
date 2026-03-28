import FadeIn from "@/components/FadeIn";

const industries = [
  "Dental & Medical", "Plumbing & HVAC", "Electricians", "Accounting",
  "Law Firms", "Real Estate", "Cleaning Services", "Gyms & Wellness",
  "Landscaping", "Auto Services",
];

const IndustriesSection = () => (
  <section className="section-padding border-t border-border">
    <div className="container-narrow">
      <FadeIn>
        <p className="text-sm text-muted-foreground text-center mb-8">Trusted by businesses across</p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((ind) => (
            <span
              key={ind}
              className="px-5 py-2.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all cursor-default"
            >
              {ind}
            </span>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default IndustriesSection;

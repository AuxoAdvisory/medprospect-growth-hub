import FadeIn from "@/components/FadeIn";

const industries = [
  "Dental & Medical", "Plumbing & HVAC", "Electricians",
  "Accounting", "Law Firms", "Real Estate",
  "Cleaning Services", "Gyms & Wellness", "And more",
];

const IndustriesSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Who we serve</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
              Built for local service businesses
            </h2>
            <div className="editorial-divider" />
          </FadeIn>
        </div>
        <div className="md:col-span-7">
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground leading-relaxed mb-8">
              If you're excellent at what you do but tired of chasing leads, we're probably a good fit. We work with businesses that rely on a steady pipeline of local clients.
            </p>
          </FadeIn>
          <div className="flex flex-wrap gap-2">
            {industries.map((label, i) => (
              <FadeIn key={label} delay={0.05 * i}>
                <span className="inline-block px-4 py-2 text-sm border border-border rounded-sm text-foreground hover:border-gold/50 transition-colors">
                  {label}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IndustriesSection;

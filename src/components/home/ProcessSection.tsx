import FadeIn from "@/components/FadeIn";

const steps = [
  { num: "01", title: "We find your people", desc: "We dig through local business data to build a list of prospects who actually need what you offer." },
  { num: "02", title: "We write the emails", desc: "Not templates. Every email is written specifically for that person and their business." },
  { num: "03", title: "You take the calls", desc: "Interested prospects book a time with you. That's it — you just show up." },
];

const ProcessSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <FadeIn>
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Our process</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight max-w-lg">
          Three steps. No complexity.
        </h2>
        <div className="editorial-divider" />
      </FadeIn>
      <div className="mt-16 space-y-0 divide-y divide-border">
        {steps.map((step, i) => (
          <FadeIn key={step.num} delay={i * 0.1}>
            <div className="grid grid-cols-12 gap-6 py-10 items-baseline">
              <span className="col-span-2 md:col-span-1 font-display text-2xl md:text-3xl text-gold/70">{step.num}</span>
              <h3 className="col-span-10 md:col-span-3 font-display text-xl md:text-2xl text-foreground">{step.title}</h3>
              <p className="col-span-12 md:col-span-8 text-muted-foreground leading-relaxed md:pl-4">{step.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;

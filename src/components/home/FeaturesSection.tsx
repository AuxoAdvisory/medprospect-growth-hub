import FadeIn from "@/components/FadeIn";

const features = [
  { title: "Smart lead scoring", desc: "We prioritise the leads most likely to convert." },
  { title: "Emails that feel personal", desc: "Each one is written for a real person, not blasted to a list." },
  { title: "Follow-ups on autopilot", desc: "We keep the conversation going so you don't have to." },
  { title: "Reply tracking", desc: "You'll know who's interested and who's not." },
  { title: "One clear dashboard", desc: "Opens, clicks, replies, booked calls — all visible." },
  { title: "Fully managed", desc: "We handle everything. You focus on your clients." },
];

const FeaturesSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <FadeIn>
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">What's included</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight max-w-lg">
          Everything you need. Nothing you don't.
        </h2>
        <div className="editorial-divider" />
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {features.map((f, i) => (
          <FadeIn key={f.title} delay={i * 0.05}>
            <div className="border-l-2 border-gold/30 pl-6">
              <h3 className="font-display text-lg text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;

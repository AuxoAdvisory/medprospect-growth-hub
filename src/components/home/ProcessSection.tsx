import FadeIn from "@/components/FadeIn";
import { Search, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    time: "Week 1",
    title: "Audit",
    desc: "We audit your Google profile, website, and missed call rate.",
  },
  {
    icon: Rocket,
    time: "Weeks 2–3",
    title: "Deploy",
    desc: "We set up your AI chatbot, review automation, and SMS follow-up system.",
  },
  {
    icon: TrendingUp,
    time: "Month 2+",
    title: "Grow",
    desc: "You start getting more leads, reviews, and bookings on autopilot.",
  },
];

const ProcessSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Three steps. No complexity.
          </h2>
        </div>
      </FadeIn>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-6 relative">
          {/* Timeline connector */}
          <div className="absolute top-10 left-[16.67%] right-[16.67%] h-px bg-border z-0" />

          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.12}>
              <div className="relative flex flex-col items-center text-center">
                {/* Node */}
                <div className="w-20 h-20 rounded-full border-2 border-primary/30 bg-card flex items-center justify-center relative z-10 mb-6">
                  <step.icon className="text-primary" size={28} />
                </div>

                <div className="rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-all w-full">
                  <span className="text-xs font-bold text-primary uppercase tracking-wide">
                    {step.time}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mt-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden flex flex-col relative pl-10">
        {/* Vertical line */}
        <div className="absolute left-[18px] top-4 bottom-4 w-px bg-border" />

        {steps.map((step, i) => (
          <FadeIn key={step.title} delay={i * 0.1}>
            <div className="relative mb-8 last:mb-0">
              {/* Node */}
              <div className="absolute -left-10 top-0 w-9 h-9 rounded-full border-2 border-primary/30 bg-card flex items-center justify-center z-10">
                <step.icon className="text-primary" size={16} />
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all">
                <span className="text-xs font-bold text-primary uppercase tracking-wide">
                  {step.time}
                </span>
                <h3 className="text-lg font-bold text-foreground mt-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;

import FadeIn from "@/components/FadeIn";
import { Search, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    time: "Week 1",
    title: "Audit",
    desc: "We audit your Google profile, website, and missed call rate.",
    num: "01",
  },
  {
    icon: Rocket,
    time: "Weeks 2–3",
    title: "Deploy",
    desc: "We set up your AI chatbot, review automation, and SMS follow-up system.",
    num: "02",
  },
  {
    icon: TrendingUp,
    time: "Month 2+",
    title: "Grow",
    desc: "You start getting more leads, reviews, and bookings on autopilot.",
    num: "03",
  },
];

const ProcessSection = () => (
  <section className="section-padding border-t border-border relative">
    <div className="absolute inset-0 grid-lines opacity-20" />
    <div className="container-narrow relative z-10">
      <FadeIn>
        <div className="text-center mb-14">
          <p className="text-[11px] font-medium text-accent/60 mb-4 tracking-[0.2em] uppercase font-mono">How it works</p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground tracking-tight">
            Three steps. No complexity.
          </h2>
        </div>
      </FadeIn>

      {/* Desktop: horizontal */}
      <div className="hidden md:grid grid-cols-3 gap-4 relative">
        {/* Connector line */}
        <div className="absolute top-[2.75rem] left-[16.67%] right-[16.67%] h-px bg-border z-0" />

        {steps.map((step, i) => (
          <FadeIn key={step.title} delay={i * 0.1}>
            <div className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-md border border-border bg-card flex items-center justify-center relative z-10 mb-5">
                <span className="text-sm font-mono font-medium text-accent">{step.num}</span>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 w-full hover:border-accent/30 transition-colors">
                <span className="text-[11px] font-mono font-medium text-accent uppercase tracking-wider">
                  {step.time}
                </span>
                <h3 className="text-sm font-semibold text-foreground mt-2">{step.title}</h3>
                <p className="text-[13px] text-muted-foreground mt-2 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="md:hidden flex flex-col relative pl-12">
        <div className="absolute left-[18px] top-2 bottom-2 w-px bg-border" />

        {steps.map((step, i) => (
          <FadeIn key={step.title} delay={i * 0.08}>
            <div className="relative mb-6 last:mb-0">
              <div className="absolute -left-12 top-0 w-9 h-9 rounded-md border border-border bg-card flex items-center justify-center z-10">
                <span className="text-xs font-mono font-medium text-accent">{step.num}</span>
              </div>
              <div className="rounded-lg border border-border bg-card p-5 hover:border-accent/30 transition-colors">
                <span className="text-[11px] font-mono font-medium text-accent uppercase tracking-wider">
                  {step.time}
                </span>
                <h3 className="text-sm font-semibold text-foreground mt-2">{step.title}</h3>
                <p className="text-[13px] text-muted-foreground mt-2 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;

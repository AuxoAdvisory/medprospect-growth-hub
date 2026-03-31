import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Brain, CalendarCheck, Phone, Target, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  { icon: Search, title: "We find your ideal customers", desc: "We use data tools to identify potential clients in your area who need exactly what you offer." },
  { icon: Brain, title: "We reach out on your behalf", desc: "Every message is tailored to the person receiving it. We mention their situation and why you can help." },
  { icon: CalendarCheck, title: "They book time with you", desc: "When someone's interested, they pick a slot on your calendar. You just show up and have the conversation." },
];

const timeline = [
  { icon: Phone, title: "Quick onboarding call", desc: "We learn about your business, who you want to reach, and how you like to communicate.", time: "Day 1" },
  { icon: Target, title: "Prospect list is ready", desc: "Within a couple of days, we've built and scored your lead list.", time: "Day 2–3" },
  { icon: CalendarCheck, title: "Outreach begins", desc: "Emails start going out. Replies and bookings usually start within 48 hours.", time: "Day 4–5" },
  { icon: BarChart3, title: "You get a weekly update", desc: "A straightforward report showing what's working: opens, replies, and booked calls.", time: "Weekly" },
];

const HowItWorks = () => (
  <Layout>
    <section className="section-padding pt-24 md:pt-36">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-[11px] font-medium text-accent/60 mb-4 tracking-[0.2em] uppercase font-mono">How it works</p>
          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">From signup to booked calls in a week</h1>
          <p className="mt-5 text-muted-foreground text-base">Here's the breakdown.</p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding border-t border-border/50">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn><h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-10 tracking-tight">Three steps. That's it.</h2></FadeIn>
        <div className="space-y-4">
          {steps.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div className="rounded-lg border border-border bg-card p-6 flex gap-5 items-start hover:border-accent/20 hover:shadow-[0_0_24px_-8px_hsl(235_90%_64%_/_0.12)] transition-all duration-300 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                  <s.icon className="text-accent" size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-medium text-accent uppercase tracking-wider">Step {i + 1}</span>
                  <h3 className="font-semibold text-sm mt-1 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground mt-1.5 text-[13px] leading-relaxed max-w-lg">{s.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding border-t border-border/50">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn><h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-8 tracking-tight">After you sign up</h2></FadeIn>
        <div className="space-y-3">
          {timeline.map((t, i) => (
            <FadeIn key={t.title} delay={i * 0.08}>
              <div className="rounded-lg border border-border bg-card p-5 flex gap-4 items-start hover:border-accent/20 hover:shadow-[0_0_24px_-8px_hsl(235_90%_64%_/_0.12)] transition-all duration-300 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                  <t.icon className="text-accent" size={16} />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-medium text-accent uppercase tracking-wider">{t.time}</span>
                  <h3 className="font-semibold text-sm text-foreground mt-0.5">{t.title}</h3>
                  <p className="text-muted-foreground text-[13px] mt-1 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding border-t border-border/50">
      <div className="container-narrow max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground tracking-tight">Sound like what you need?</h2>
          <p className="text-muted-foreground mt-3 text-sm">Let's chat. No commitment required.</p>
          <Button variant="default" size="lg" className="mt-8" asChild>
            <Link to="/contact">Book a free call <ArrowRight className="ml-1" size={14} /></Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default HowItWorks;

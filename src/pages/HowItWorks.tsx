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
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium text-primary mb-3">How it works</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">From signup to booked calls in a week</h1>
          <p className="mt-5 text-muted-foreground text-lg">Here's the breakdown.</p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn><h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-12">Three steps. That's it.</h2></FadeIn>
        <div className="space-y-6">
          {steps.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-card p-8 flex gap-6 items-start hover:border-primary/30 transition-all group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <s.icon className="text-primary" size={22} />
                </div>
                <div>
                  <span className="text-xs font-bold text-primary">Step {i + 1}</span>
                  <h3 className="font-bold text-lg mt-1 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed max-w-lg">{s.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn><h2 className="text-3xl font-extrabold text-foreground mb-10">After you sign up</h2></FadeIn>
        <div className="space-y-4">
          {timeline.map((t, i) => (
            <FadeIn key={t.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-card p-6 flex gap-5 items-start hover:border-primary/30 transition-all group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <t.icon className="text-primary" size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold text-primary">{t.time}</span>
                  <h3 className="font-bold text-foreground mt-1">{t.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl font-extrabold text-foreground">Sound like what you need?</h2>
          <p className="text-muted-foreground mt-3">Let's chat. No commitment required.</p>
          <Button variant="gold" size="lg" className="mt-8" asChild>
            <Link to="/contact">Book a free call <ArrowRight className="ml-1" size={18} /></Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default HowItWorks;

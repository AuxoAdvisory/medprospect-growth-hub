import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, Star, MessageSquare, CalendarCheck, Globe, Phone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Receptionist Chatbot",
    desc: "A smart chatbot that sits on your website and answers customer questions 24/7. It captures leads, answers FAQs, and books appointments — even at 2am.",
  },
  {
    icon: Star,
    title: "Google Review Management",
    desc: "We set up automated systems that respond to every Google review professionally — positive or negative. More responses means better rankings.",
  },
  {
    icon: MessageSquare,
    title: "Lead Follow-up SMS",
    desc: "When a new enquiry comes in, our system responds within 60 seconds via SMS. Speed-to-lead is everything.",
  },
  {
    icon: CalendarCheck,
    title: "Online Booking Integration",
    desc: "Clients want to book at 10pm on a Sunday. We integrate a seamless online booking system so they can schedule without calling.",
  },
  {
    icon: Globe,
    title: "Website Rebuild",
    desc: "Your website is your digital front door. We build fast, mobile-optimised sites designed to convert visitors into booked clients.",
  },
  {
    icon: Phone,
    title: "AI Voice Agent",
    desc: "An AI that answers your phone calls, understands caller needs, and books appointments automatically. Never miss a call again.",
  },
];

const Services = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-[11px] font-medium text-accent/60 mb-4 tracking-[0.2em] uppercase font-mono">Services</p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
            AI tools that get you more clients
          </h1>
          <p className="mt-5 text-muted-foreground text-base">
            Every tool we deploy is designed to do one thing: put more clients on your calendar.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow space-y-4">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.06}>
            <div className="rounded-lg border border-border bg-card p-6 flex gap-5 items-start hover:border-accent/30 transition-colors group">
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                <s.icon className="text-accent" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">{s.title}</h3>
                <p className="text-muted-foreground mt-1.5 text-[13px] leading-relaxed max-w-2xl">{s.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground tracking-tight">Not sure what you need?</h2>
          <p className="text-muted-foreground mt-3 text-sm">We'll audit your business for free and tell you exactly where you're losing clients.</p>
          <Button variant="default" size="lg" className="mt-8" asChild>
            <Link to="/contact">Book a free audit <ArrowRight className="ml-1" size={14} /></Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Services;

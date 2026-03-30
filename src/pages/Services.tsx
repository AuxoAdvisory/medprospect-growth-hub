import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, Star, MessageSquare, CalendarCheck, Globe, Phone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Receptionist Chatbot",
    desc: "A smart chatbot that sits on your website and answers customer questions 24/7. It captures leads, answers FAQs, and books appointments — even at 2am. No more missed enquiries.",
  },
  {
    icon: Star,
    title: "Google Review Management",
    desc: "We set up automated systems that respond to every Google review professionally — positive or negative. More responses means better rankings and more trust from new patients.",
  },
  {
    icon: MessageSquare,
    title: "Patient Follow-up SMS",
    desc: "When a new enquiry comes in, our system responds within 60 seconds via SMS. Speed-to-lead is everything — the first practice to respond wins the patient.",
  },
  {
    icon: CalendarCheck,
    title: "Online Booking Integration",
    desc: "Patients want to book at 10pm on a Sunday. We integrate a seamless online booking system so they can schedule without calling during office hours.",
  },
  {
    icon: Globe,
    title: "Website Rebuild",
    desc: "Your website is your digital front door. We build fast, mobile-optimised sites designed to convert visitors into booked patients. No fluff, just results.",
  },
  {
    icon: Phone,
    title: "AI Voice Agent",
    desc: "An AI that answers your phone calls, understands patient needs, and books appointments automatically. Never miss a call again — even when your team is busy.",
  },
];

const Services = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium text-primary mb-3">Services</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            AI tools that get you more patients
          </h1>
          <p className="mt-5 text-muted-foreground text-lg">
            Every tool we deploy is designed to do one thing: put more patients on your calendar.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow space-y-6">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.08}>
            <div className="rounded-2xl border border-border bg-card p-8 flex gap-6 items-start hover:border-primary/30 transition-all group">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={26} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground">{s.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed max-w-2xl">{s.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl font-extrabold text-foreground">Not sure what you need?</h2>
          <p className="text-muted-foreground mt-3">We'll audit your practice for free and tell you exactly where you're losing patients.</p>
          <Button variant="gold" size="lg" className="mt-8" asChild>
            <Link to="/contact">Book a free audit <ArrowRight className="ml-1" size={18} /></Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Services;

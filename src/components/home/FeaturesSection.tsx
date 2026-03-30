import FadeIn from "@/components/FadeIn";
import { Bot, Star, MessageSquare, CalendarCheck, Globe, Phone } from "lucide-react";

const services = [
  { icon: Bot, title: "AI Receptionist Chatbot", desc: "Answers customer questions 24/7, captures leads while you sleep." },
  { icon: Star, title: "Google Review Management", desc: "Automatically responds to every review professionally." },
  { icon: MessageSquare, title: "Lead Follow-up SMS", desc: "Responds to new enquiries within 60 seconds." },
  { icon: CalendarCheck, title: "Online Booking Integration", desc: "Clients book at any hour without calling." },
  { icon: Globe, title: "Website Rebuild", desc: "Fast, mobile-optimised, built to convert visitors into clients." },
  { icon: Phone, title: "AI Voice Agent", desc: "Answers calls, books appointments automatically." },
];

const FeaturesSection = () => (
  <section className="section-padding border-t border-border">
    <div className="container-narrow">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            AI tools built for local businesses
          </h2>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.05}>
            <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={20} />
              </div>
              <h3 className="text-base font-bold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;

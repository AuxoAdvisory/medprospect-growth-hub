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
  <section className="section-padding border-t border-border/50">
    <div className="container-narrow">
      <FadeIn>
        <div className="text-center mb-14">
          <p className="text-[11px] font-medium text-accent/60 mb-4 tracking-[0.2em] uppercase font-mono">Services</p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground tracking-tight">
            AI tools built for local businesses
          </h2>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.05}>
            <div className="rounded-lg border border-border bg-card p-5 hover:border-accent/20 hover:shadow-[0_0_24px_-8px_hsl(226_100%_71%_/_0.12)] transition-all duration-300 group">
              <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/15 transition-colors">
                <s.icon className="text-accent" size={16} />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
              <p className="text-[13px] text-muted-foreground mt-1.5 leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;

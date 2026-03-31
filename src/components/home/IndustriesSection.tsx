import FadeIn from "@/components/FadeIn";
import { AlertTriangle, Globe, Star } from "lucide-react";

const painPoints = [
  {
    icon: Star,
    title: "Low Google reviews",
    desc: "Your competitors have hundreds of reviews. You have a handful. Customers choose them before they even see your website.",
  },
  {
    icon: Globe,
    title: "Slow website losing patients",
    desc: "If your site takes more than 3 seconds to load on mobile, you're losing clients to the business down the street.",
  },
  {
    icon: AlertTriangle,
    title: "No online booking",
    desc: "Customers want to book at 10pm on a Tuesday. If they can't, they'll find someone who lets them.",
  },
];

const IndustriesSection = () => (
  <section className="section-padding border-t border-border">
    <div className="container-narrow">
      <FadeIn>
        <div className="text-center mb-14">
          <p className="text-[11px] font-medium text-accent/60 mb-4 tracking-[0.2em] uppercase font-mono">The problem</p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground tracking-tight">
            Is your business losing clients to competitors?
          </h2>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {painPoints.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.08}>
            <div className="rounded-lg border border-border bg-card p-6 hover:border-accent/30 transition-colors group">
              <div className="w-9 h-9 rounded-md bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                <p.icon className="text-accent" size={18} />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{p.title}</h3>
              <p className="text-[13px] text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;

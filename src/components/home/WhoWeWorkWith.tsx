import FadeIn from "@/components/FadeIn";
import { Stethoscope, SmilePlus, Scale, Dumbbell, Scissors, Wrench, Calculator, UtensilsCrossed, Flame, Gavel } from "lucide-react";

const industries = [
  { icon: Stethoscope, label: "Medical" },
  { icon: SmilePlus, label: "Dental" },
  { icon: Scale, label: "Legal" },
  { icon: Dumbbell, label: "Fitness" },
  { icon: Scissors, label: "Salons" },
  { icon: Wrench, label: "Plumbing" },
  { icon: Flame, label: "HVAC" },
  { icon: Calculator, label: "Accounting" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Gavel, label: "Contractors" },
];

const WhoWeWorkWith = () => (
  <section className="px-5 py-10 md:px-10 md:py-14 border-t border-border">
    <div className="container-narrow">
      <FadeIn>
        <p className="text-center text-[11px] font-medium text-accent mb-8 tracking-[0.2em] uppercase font-mono">
          Trusted across industries
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-y-6 gap-x-2">
          {industries.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center shadow-sm">
                <item.icon className="text-accent" size={18} strokeWidth={1.5} />
              </div>
              <span className="text-[10px] md:text-[11px] text-muted-foreground font-medium whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default WhoWeWorkWith;

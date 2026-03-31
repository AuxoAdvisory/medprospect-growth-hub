import FadeIn from "@/components/FadeIn";
import { Stethoscope, SmilePlus, Scale, Dumbbell, Scissors, Wrench, Calculator, UtensilsCrossed } from "lucide-react";

const industries = [
  { icon: Stethoscope, label: "Medical Clinics" },
  { icon: SmilePlus, label: "Dental Practices" },
  { icon: Scale, label: "Law Firms" },
  { icon: Dumbbell, label: "Gyms & Studios" },
  { icon: Scissors, label: "Salons & Spas" },
  { icon: Wrench, label: "Trades & Contractors" },
  { icon: Calculator, label: "Accountants" },
  { icon: UtensilsCrossed, label: "Restaurants" },
];

const WhoWeWorkWith = () => (
  <section className="px-6 py-16 md:px-10 md:py-20 border-t border-border">
    <div className="container-narrow">
      <FadeIn>
        <p className="text-center text-[11px] font-medium text-muted-foreground mb-10 tracking-widest uppercase font-mono">
          Who we work with
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
          {industries.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2.5 min-w-[90px]">
              <item.icon className="text-muted-foreground" size={22} strokeWidth={1.5} />
              <span className="text-[11px] text-muted-foreground font-medium whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default WhoWeWorkWith;

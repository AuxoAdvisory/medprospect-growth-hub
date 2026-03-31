import FadeIn from "@/components/FadeIn";
import { Building2, Stethoscope, Scale, Dumbbell, Scissors, Wrench, Calculator, UtensilsCrossed, Briefcase, ShieldCheck } from "lucide-react";

const logos = [
  { icon: Stethoscope, name: "MedGroup" },
  { icon: Scale, name: "LexPartners" },
  { icon: Dumbbell, name: "CoreFit" },
  { icon: Building2, name: "UrbanTrades" },
  { icon: Scissors, name: "Luxe Salon" },
  { icon: Calculator, name: "Folio CPA" },
  { icon: Wrench, name: "ProServ" },
  { icon: UtensilsCrossed, name: "Nourish Co" },
  { icon: Briefcase, name: "Apex Realty" },
  { icon: ShieldCheck, name: "TrustCare" },
];

// Duplicate for seamless infinite scroll
const scrollLogos = [...logos, ...logos];

const SocialProof = () => (
  <section className="py-12 md:py-16 border-t border-border overflow-hidden">
    <div className="container-narrow px-6 md:px-10">
      <FadeIn>
        <p className="text-center text-[12px] text-muted-foreground/60 mb-8">
          Trusted by growing businesses across 10+ industries
        </p>
      </FadeIn>
    </div>

    <FadeIn delay={0.1}>
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll gap-12 md:gap-16 w-max">
          {scrollLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center gap-2.5 shrink-0 select-none"
            >
              <logo.icon size={16} strokeWidth={1.5} className="text-muted-foreground/40" />
              <span className="text-[13px] font-medium text-muted-foreground/40 whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  </section>
);

export default SocialProof;

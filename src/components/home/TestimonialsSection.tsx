import FadeIn from "@/components/FadeIn";
import { Star } from "lucide-react";

const testimonials = [
  { quote: "Within two months, our Google reviews doubled and we started getting new patient inquiries every single day.", name: "Dr. Sarah M.", business: "Dental Clinic Owner" },
  { quote: "I was skeptical about AI, but the follow-up system pays for itself. Members who used to ghost now convert at twice the rate.", name: "James T.", business: "Gym & Fitness Studio" },
  { quote: "We went from missing half our after-hours calls to capturing every single lead. An absolute game-changer.", name: "Priya K.", business: "Medical Clinic Manager" },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section className="section-padding border-t border-border">
    <div className="container-narrow">
      <FadeIn>
        <div className="text-center mb-10">
          <p className="text-[11px] font-medium text-accent mb-4 tracking-[0.2em] uppercase font-mono">Testimonials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">What our clients say</h2>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.08}>
            <div className="rounded-lg border border-border bg-card p-6 md:p-7 shadow-sm h-full flex flex-col">
              <Stars />
              <blockquote className="text-foreground text-sm leading-relaxed mt-4 flex-1">"{t.quote}"</blockquote>
              <div className="mt-5 pt-4 border-t border-border">
                <p className="font-semibold text-sm text-foreground">{t.name}</p>
                <p className="text-[12px] text-muted-foreground mt-0.5">{t.business}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

import FadeIn from "@/components/FadeIn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Within two months, our Google reviews doubled and we started getting new patient inquiries every single day. The AI receptionist alone saved our front desk 15 hours a week.",
    name: "Dr. Sarah M.",
    business: "Dental Clinic Owner",
  },
  {
    quote: "I was skeptical about AI, but the follow-up system pays for itself. Members who used to ghost after a trial now convert at almost twice the rate.",
    name: "James T.",
    business: "Gym & Fitness Studio",
  },
  {
    quote: "We went from missing half our after-hours calls to capturing every single lead. The booking system and review automation have been a game-changer.",
    name: "Priya K.",
    business: "Medical Clinic Manager",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding border-t border-border">
    <div className="container-narrow">
      <FadeIn>
        <div className="text-center mb-14">
          <p className="text-[11px] font-medium text-accent/60 mb-4 tracking-[0.2em] uppercase font-mono">Testimonials</p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground tracking-tight">
            What our clients say
          </h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="max-w-2xl mx-auto px-12">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name}>
                  <div className="rounded-lg border border-border bg-card p-8 text-center">
                    <blockquote className="text-foreground text-sm md:text-base leading-relaxed">
                      "{t.quote}"
                    </blockquote>
                    <div className="mt-6">
                      <p className="font-medium text-sm text-foreground">{t.name}</p>
                      <p className="text-[13px] text-muted-foreground">{t.business}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-border text-muted-foreground hover:text-foreground hover:bg-secondary" />
            <CarouselNext className="border-border text-muted-foreground hover:text-foreground hover:bg-secondary" />
          </Carousel>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default TestimonialsSection;

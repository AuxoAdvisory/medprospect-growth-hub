import FadeIn from "@/components/FadeIn";

const testimonials = [
  { quote: "I was sceptical, but they booked me 6 calls in week one. I've never had leads come to me like that before.", name: "Dr. Sarah M.", role: "Dental Consultant" },
  { quote: "We used to cold-call for hours. Now people are booking time on our calendar. Completely different experience.", name: "Mike T.", role: "HVAC Business Owner" },
  { quote: "The emails they write actually sound like a human wrote them. That's why people reply.", name: "Karen L.", role: "Accounting Firm Partner" },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-hero text-hero-foreground">
    <div className="container-narrow">
      <FadeIn>
        <p className="text-xs font-semibold tracking-widest uppercase text-hero-muted mb-4">Testimonials</p>
        <h2 className="font-display text-3xl md:text-4xl leading-tight max-w-lg">
          What our clients say
        </h2>
        <div className="w-16 h-px bg-gold/50 mt-6" />
      </FadeIn>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.1}>
            <div className="border-t border-hero-muted/20 pt-8">
              <p className="text-hero-muted text-sm leading-relaxed italic">"{t.quote}"</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-hero-foreground">{t.name}</p>
                <p className="text-xs text-hero-muted mt-0.5">{t.role}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

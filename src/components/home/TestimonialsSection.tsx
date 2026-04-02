import FadeIn from "@/components/FadeIn";

const testimonials = [
  { quote: "We went from 14 reviews to 67 in under two months. New patients now mention our Google listing when they call. I did not have to do anything.", name: "Dr. Sarah M.", title: "Dental Clinic Owner, Markham" },
  { quote: "I was skeptical. The follow-up system alone recovered three clients in the first week who had gone quiet. It paid for itself immediately.", name: "James T.", title: "Physiotherapy Clinic, North York" },
  { quote: "We were missing half our after-hours enquiries. Now every one gets a response within minutes. Our booking rate has noticeably improved.", name: "Priya K.", title: "Specialist Clinic Manager, Vaughan" },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-4">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-[16px]" style={{ color: "#F59E0B" }}>★</span>
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section className="section-padding border-t border-border" style={{ backgroundColor: "#F4F3F0" }}>
    <div className="container-narrow">
      <FadeIn>
        <p className="text-center text-[12px] uppercase tracking-[0.15em] text-accent font-medium mb-4" style={{ fontFamily: "var(--font-body)" }}>What Clients Say</p>
        <h2 className="text-center text-[28px] md:text-[40px] text-foreground leading-tight">
          From the people we work with.
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="rounded-lg border border-border bg-card p-8 h-full flex flex-col">
              <Stars />
              <p className="text-[16px] text-foreground leading-[1.7] flex-1 mb-6 italic" style={{ fontFamily: "var(--font-body)" }}>"{t.quote}"</p>
              <div>
                <p className="text-[14px] font-semibold text-foreground" style={{ fontFamily: "var(--font-body)" }}>{t.name}</p>
                <p className="text-[13px] text-muted-foreground mt-1" style={{ fontFamily: "var(--font-body)" }}>{t.title}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

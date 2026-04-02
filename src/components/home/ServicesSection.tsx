import FadeIn from "@/components/FadeIn";

const services = [
  { title: "Google Review Management", body: "We respond to every review within 24 hours in your voice. We send automated SMS to happy clients requesting reviews. Most businesses double their review count within 60 days." },
  { title: "Online Booking Setup", body: "We implement and connect a booking system to your website and Google listing. Clients book at any hour without calling. You see the appointment in your calendar." },
  { title: "AI Receptionist", body: "An AI system answers after-hours enquiries, qualifies new clients, and captures contact details while you sleep. No missed opportunities." },
  { title: "Automated Client Follow-Up", body: "Automated SMS follow-up sequence for every new enquiry. Clients who go quiet get a timely, personal-feeling message. Conversion rates improve immediately." },
  { title: "No-Show Reminder System", body: "Automated appointment reminders sent 48 hours and 2 hours before each booking. Reduces no-shows by an average of 30 percent." },
  { title: "Website Rebuild", body: "Fast, mobile-first website built to convert visitors into booked clients. Clear CTA. No clutter. Loads in under 2 seconds." },
];

const ServicesSection = () => (
  <section className="section-padding border-t border-border bg-background">
    <div className="container-narrow">
      <FadeIn>
        <p className="text-center text-[12px] uppercase tracking-[0.15em] text-accent font-medium mb-4" style={{ fontFamily: "var(--font-body)" }}>What We Fix</p>
        <h2 className="text-center text-[28px] md:text-[40px] text-foreground leading-tight">
          Six problems. Six systems.<br />One monthly retainer.
        </h2>
        <p className="text-center text-[17px] text-muted-foreground mt-3 mb-14" style={{ fontFamily: "var(--font-body)" }}>
          Every system is built, managed, and optimised by us. Nothing lands on your team.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="rounded-lg border border-border bg-card p-8 h-full">
              <h3 className="text-[20px] text-foreground mb-3">{s.title}</h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{s.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const services = [
  { title: "Google Review Management", body: "We respond to every review within 24 hours in your voice, handle negative reviews professionally, and send automated SMS to happy clients requesting new reviews. Most businesses double their review count within 60 days.", result: "23 → 67 reviews in 6 weeks" },
  { title: "Online Booking Setup", body: "We implement and connect a booking system to your website and Google listing. Clients book at any hour without calling. Appointments appear directly in your calendar.", result: "40+ appointments added in month one" },
  { title: "AI Receptionist", body: "An AI system answers after-hours enquiries, qualifies new clients, and captures contact details while you sleep. No missed opportunities.", result: "Captures leads 24/7 without adding staff" },
  { title: "Automated Client Follow-Up", body: "Automated SMS follow-up for every new enquiry. Clients who go quiet get a timely message. Conversion rates improve immediately.", result: "3x more leads converted in the first month" },
  { title: "No-Show Reminder System", body: "Automated appointment reminders sent 48 hours and 2 hours before each booking. Reduces no-shows significantly from the first week.", result: "31% reduction in no-shows on average" },
  { title: "Website Rebuild", body: "Fast, mobile-first website built to convert visitors into booked clients. Clear CTA. No clutter. Loads in under 2 seconds.", result: "Built and live within 2 weeks" },
];

const faqs = [
  { q: "Is there a contract or minimum commitment?", a: "No contracts. No minimum term. You can cancel any service at any time. We keep clients because the results speak for themselves — not because they are locked in." },
  { q: "How quickly will I see results?", a: "Most clients see measurable results within 30 days — more reviews, more bookings, or fewer missed calls depending on which service you start with. We track everything and report back monthly." },
  { q: "Do I need to do anything to get started?", a: "Very little. We handle the setup entirely. We will need access to your Google Business Profile and your website, and a 30-minute onboarding call to understand your business. After that, we manage everything." },
  { q: "Can I add more services later?", a: "Yes. Most clients start with one service and add more as they see results. Each service can be added or removed at any time." },
  { q: "What kinds of businesses do you work with?", a: "We work with established local service businesses across the Greater Toronto Area — primarily specialist practices, professional services, and trade businesses with an existing client base who want to improve how they attract and retain clients online." },
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* HERO */}
      <section style={{ backgroundColor: "#FAFAFA", padding: "80px 64px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <span className="inline-block" style={{ backgroundColor: "#EFF6FF", color: "#2563EB", borderRadius: 20, padding: "6px 14px", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Pricing
            </span>
            <h1 style={{ fontSize: 48, fontWeight: 800, color: "#111827", lineHeight: 1.15, marginTop: 16 }}>
              Simple pricing.<br />Specific results.
            </h1>
            <p style={{ fontSize: 18, color: "#6B7280", lineHeight: 1.7, marginTop: 20, maxWidth: 580, marginLeft: "auto", marginRight: "auto" }}>
              No setup fees. No contracts. We implement everything and manage it on an ongoing basis — you see results within 30 days or we keep working until you do.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section style={{ backgroundColor: "#F5F4F0", padding: "80px 64px" }}>
        <div className="container-narrow">
          <FadeIn>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: "#111827", textAlign: "center", marginBottom: 48 }}>
              Six services. Pick what your business needs most.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="h-full flex flex-col justify-between" style={{ backgroundColor: "#FFFFFF", borderRadius: 12, boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)", padding: "36px 32px" }}>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111827", marginBottom: 12 }}>{s.title}</h3>
                    <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.65 }}>{s.body}</p>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#2563EB", marginTop: 16, fontStyle: "italic" }}>{s.result}</p>
                    <p style={{ fontSize: 22, fontWeight: 800, color: "#111827", marginTop: 20 }}>Contact Us</p>
                  </div>
                  <Link to="/contact" className="block text-center" style={{ backgroundColor: "#111827", color: "#FFFFFF", fontWeight: 600, fontSize: 14, padding: "12px 24px", borderRadius: 8, width: "100%", marginTop: 24 }}>
                    Book a Call
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* NOT SURE BANNER */}
      <section style={{ backgroundColor: "#FAFAFA", padding: "40px 64px" }}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6" style={{ backgroundColor: "#EFF6FF", borderRadius: 16, padding: "36px 48px" }}>
          <div>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#111827" }}>Not sure which service is right for your business?</p>
            <p style={{ fontSize: 15, color: "#6B7280", marginTop: 8 }}>Book a free 15-minute call. We will audit your online presence and tell you specifically which one or two services will have the biggest impact.</p>
          </div>
          <Link to="/contact" className="inline-block whitespace-nowrap text-center" style={{ backgroundColor: "#2563EB", color: "#FFFFFF", fontWeight: 600, padding: "14px 28px", borderRadius: 8, flexShrink: 0 }}>
            Book a Free Call
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#FAFAFA", padding: "80px 64px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <FadeIn>
            <div className="text-center mb-2">
              <span className="inline-block" style={{ backgroundColor: "#EFF6FF", color: "#2563EB", borderRadius: 20, padding: "6px 14px", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Common Questions
              </span>
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#111827", marginBottom: 40, textAlign: "center" }}>
              Questions we get asked
            </h2>
          </FadeIn>
          <div>
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div style={{ borderBottom: "1px solid #E5E7EB" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between text-left"
                    style={{ padding: "20px 0", fontSize: 17, fontWeight: 600, color: "#111827" }}
                  >
                    {faq.q}
                    <ChevronDown size={18} style={{ color: "#9CA3AF", flexShrink: 0, marginLeft: 16, transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 200ms ease" }} />
                  </button>
                  <div style={{ maxHeight: openFaq === i ? 300 : 0, overflow: "hidden", transition: "max-height 300ms ease" }}>
                    <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.65, paddingBottom: 20 }}>{faq.a}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;

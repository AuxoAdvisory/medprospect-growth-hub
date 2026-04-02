import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const rows = [
  { name: "Google Review Management", outcome: "We respond to every review within 24 hours and generate new reviews automatically.", stat: "23 → 67 reviews in 6 weeks" },
  { name: "Online Booking Setup", outcome: "Clients book appointments at any hour without calling you.", stat: "40+ bookings added in month one" },
  { name: "AI Receptionist", outcome: "Answers after-hours enquiries and captures leads while you sleep.", stat: "Zero missed enquiries" },
  { name: "Automated Client Follow-Up", outcome: "SMS follow-up for every new enquiry so no lead goes cold.", stat: "3x more leads converted" },
  { name: "No-Show Reminder System", outcome: "Automated reminders reduce cancellations from the first week.", stat: "31% fewer no-shows" },
  { name: "Website Rebuild", outcome: "Fast, mobile-first site built to convert visitors into booked clients.", stat: "Live within 2 weeks" },
  { name: "Google Business Profile Optimisation", outcome: "We complete, optimise, and maintain your Google listing so you rank higher in local search.", stat: "More visibility in local search" },
  { name: "No-Show Reminder System", outcome: "Automated appointment reminders sent 48 and 2 hours before each booking.", stat: "31% fewer no-shows" },
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

      {/* PRICING TABLE */}
      <section style={{ backgroundColor: "#F5F4F0", padding: "80px 64px" }}>
        <div className="container-narrow">
          <FadeIn>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: "#111827", textAlign: "center", marginBottom: 12 }}>
              Everything is $1,400/month.
            </h2>
            <p style={{ fontSize: 17, color: "#6B7280", textAlign: "center", marginBottom: 48 }}>
              Pick one service or combine several. Each is built, managed, and optimised by us. Nothing lands on your team.
            </p>
          </FadeIn>
          <FadeIn>
            <div style={{ backgroundColor: "#FFFFFF", borderRadius: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)", overflow: "hidden" }}>
              {rows.map((r, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-6"
                  style={{
                    padding: "24px 36px",
                    borderBottom: i < rows.length - 1 ? "1px solid #F3F4F6" : "none",
                    transition: "background 200ms ease",
                    cursor: "default",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 17, fontWeight: 700, color: "#111827", marginBottom: 4 }}>{r.name}</p>
                    <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.5 }}>{r.outcome}</p>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#2563EB", backgroundColor: "#EFF6FF", borderRadius: 20, padding: "4px 12px", whiteSpace: "nowrap", alignSelf: "center" }}>
                    {r.stat}
                  </span>
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#111827", whiteSpace: "nowrap" }}>
                    $1,400/mo
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ backgroundColor: "#111827", padding: "80px 64px", textAlign: "center" }}>
        <FadeIn>
          <span className="inline-block" style={{ backgroundColor: "rgba(37,99,235,0.2)", color: "#93C5FD", borderRadius: 20, padding: "6px 14px", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Get Started
          </span>
          <h2 style={{ fontSize: 40, fontWeight: 800, color: "#FFFFFF", maxWidth: 580, margin: "16px auto 0", lineHeight: 1.15 }}>
            Ready to see what we would fix for your business?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 500, margin: "20px auto 0", lineHeight: 1.7 }}>
            Book a free 15-minute call. We will review your online presence before we speak and give you a specific breakdown of which services will have the biggest impact — and what it is worth to fix them.
          </p>
          <div className="flex flex-wrap justify-center gap-10" style={{ marginTop: 32 }}>
            {["No contracts", "Free audit included", "Results within 30 days"].map((item) => (
              <span key={item} style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.7)" }}>
                <span style={{ color: "#2563EB", marginRight: 6 }}>✓</span>{item}
              </span>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-block"
            style={{ backgroundColor: "#2563EB", color: "#FFFFFF", fontWeight: 600, fontSize: 16, padding: "18px 48px", borderRadius: 10, border: "none", boxShadow: "0 4px 20px rgba(37,99,235,0.5)", marginTop: 40 }}
          >
            Book a Free 15-Minute Call
          </Link>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginTop: 16 }}>
            Prefer to email?{" "}
            <a href="mailto:Tim@auxoadvisory.ca" style={{ color: "rgba(255,255,255,0.6)" }}>
              Tim@auxoadvisory.ca
            </a>
          </p>
        </FadeIn>
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

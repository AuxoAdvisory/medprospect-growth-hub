import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";

const Contact = () => (
  <Layout>
    <section style={{ backgroundColor: "#FAFAFA", padding: "100px 64px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <span className="inline-block" style={{ backgroundColor: "#EFF6FF", color: "#2563EB", borderRadius: 20, padding: "6px 14px", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Book a Call
          </span>
          <h1 style={{ fontSize: 44, fontWeight: 800, color: "#111827", marginTop: 16 }}>
            Book a Free 15-Minute Call
          </h1>
          <p style={{ fontSize: 18, color: "#6B7280", lineHeight: 1.7, marginTop: 20, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
            We will review your online presence before the call and come prepared with specific recommendations for your business. No pitch. No pressure.
          </p>

          <div className="flex flex-wrap justify-center gap-8" style={{ marginTop: 32 }}>
            {["No contracts", "Free audit included", "Results within 30 days"].map((item) => (
              <span key={item} style={{ fontSize: 14, fontWeight: 500, color: "#6B7280" }}>
                <span style={{ color: "#2563EB", marginRight: 6 }}>✓</span>{item}
              </span>
            ))}
          </div>

          <div style={{ backgroundColor: "#111827", borderRadius: 16, padding: 48, marginTop: 48, textAlign: "left" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#2563EB", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>
              Book a call
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>
              Use our booking link to pick a time that works for you.
            </p>
            <Link
              to="/contact"
              onClick={() => {
                // If Calendly is integrated, this would open it
              }}
              className="inline-block"
              style={{ backgroundColor: "#2563EB", color: "#FFFFFF", fontWeight: 600, padding: "14px 28px", borderRadius: 8, fontSize: 15 }}
            >
              Book a Time
            </Link>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "28px 0" }} />

            <p style={{ fontSize: 13, fontWeight: 600, color: "#2563EB", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>
              Send an email
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginBottom: 8 }}>
              Prefer to reach out directly?
            </p>
            <a href="mailto:Tim@auxoadvisory.ca" style={{ fontSize: 17, fontWeight: 600, color: "#FFFFFF", textDecoration: "none", display: "block" }}>
              Tim@auxoadvisory.ca
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Contact;

import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    desc: "The essentials to start converting more leads.",
    anchor: "Replaces ~$800/month in missed opportunities",
    features: ["AI Receptionist Chatbot", "Google Review Management", "Monthly performance report", "Email support"],
    highlighted: false,
  },
  {
    name: "Growth",
    desc: "Our most popular option.",
    anchor: "Most clients see ROI within 30 days",
    features: ["Everything in Starter", "Customer Follow-up SMS", "Online Booking Integration", "Weekly performance reports", "Priority support"],
    highlighted: true,
  },
  {
    name: "Scale",
    desc: "The full stack — every tool we offer.",
    anchor: "Full-stack growth — hands completely off",
    features: ["Everything in Growth", "Website Rebuild", "AI Voice Agent", "Custom reporting", "Dedicated account manager"],
    highlighted: false,
  },
];

const faqs = [
  { q: "What kind of businesses do you work with?", a: "Any local service business — dentists, gyms, law firms, trades, salons, accountants, clinics, and more. If you serve local customers, we can help." },
  { q: "How fast will I see results?", a: "Most clients see measurable improvements within the first 2–4 weeks. Chatbots and review management start working immediately after setup." },
  { q: "Do I need to set anything up?", a: "No. We handle the full setup — integrations, configuration, and testing. You just keep running your business." },
  { q: "Can I upgrade my plan later?", a: "Absolutely. Start with Starter and add tools as you grow. No penalties for switching." },
  { q: "Can I cancel anytime?", a: "Yes. No long-term contracts. 30 days' notice and you're out." },
];

const Pricing = () => (
  <Layout>
    <section className="section-padding pt-24 md:pt-36">
      <div className="container-narrow max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="text-[11px] font-medium text-accent/60 mb-4 tracking-[0.2em] uppercase font-mono">Pricing</p>
          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">Simple, transparent pricing</h1>
          <p className="mt-3 text-xs font-mono font-medium text-accent">No contracts · Cancel anytime · Setup included</p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.08}>
              <div className={`rounded-lg p-6 border flex flex-col h-full transition-colors ${
                plan.highlighted
                  ? "border-accent/40 bg-accent/5 relative glow-accent"
                  : "border-border bg-card hover:border-accent/20 hover:shadow-[0_0_24px_-8px_hsl(235_90%_64%_/_0.12)] transition-all duration-300"
              }`}>
                {plan.highlighted && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[11px] font-medium px-3 py-0.5 rounded-md">
                    Popular
                  </span>
                )}
                <h3 className="font-semibold text-base text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground text-[13px] mt-1">{plan.desc}</p>
                <p className="text-[11px] font-mono font-medium text-accent mt-2">{plan.anchor}</p>
                <ul className="mt-5 space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-foreground">
                      <Check className="text-accent flex-shrink-0 mt-0.5" size={14} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  size="default"
                  className="mt-6 w-full"
                  asChild
                >
                  <Link to="/contact">Book a free call <ArrowRight className="ml-1" size={14} /></Link>
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-2xl mx-auto">
        <FadeIn><h2 className="text-2xl font-semibold text-foreground mb-6 tracking-tight">Common questions</h2></FadeIn>
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="font-medium text-sm text-foreground text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[13px] leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Pricing;

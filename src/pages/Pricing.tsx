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
    features: ["AI Receptionist Chatbot", "Google Review Management", "Monthly performance report", "Email support"],
    highlighted: false,
  },
  {
    name: "Growth",
    desc: "Our most popular option.",
    features: ["Everything in Starter", "Customer Follow-up SMS", "Online Booking Integration", "Weekly performance reports", "Priority support"],
    highlighted: true,
  },
  {
    name: "Scale",
    desc: "The full stack — every tool we offer.",
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
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="text-sm font-medium text-primary mb-3">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">Simple, transparent pricing</h1>
          <p className="mt-5 text-muted-foreground text-lg">No hidden fees, no long contracts. Get in touch and we'll find the right fit.</p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div className={`rounded-2xl p-8 border flex flex-col h-full transition-all ${
                plan.highlighted
                  ? "border-primary bg-primary/5 shadow-xl shadow-primary/10 relative"
                  : "border-border bg-card hover:border-primary/30"
              }`}>
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <h3 className="font-bold text-xl text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{plan.desc}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.highlighted ? "gold" : "outline"}
                  size="lg"
                  className="mt-8 w-full"
                  asChild
                >
                  <Link to="/contact">Book a free call <ArrowRight className="ml-1" size={16} /></Link>
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-2xl mx-auto">
        <FadeIn><h2 className="text-3xl font-extrabold text-foreground mb-8">Common questions</h2></FadeIn>
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="font-semibold text-foreground text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Pricing;

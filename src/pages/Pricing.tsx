import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Star, MessageSquare, Phone, Users, TrendingUp, Clock, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const quadrants = [
  { icon: Bot, name: "AI Receptionist Chatbot", desc: "24/7 chatbot that answers questions, captures leads, and books appointments.", quote: '"Booked 3 new clients in the first month."', popular: true },
  { icon: Star, name: "Google Review Management", desc: "Automated responses to every review — boosting your rankings and reputation.", quote: '"Our Google rating went from 3.8 to 4.7 in 8 weeks."', popular: false },
  { icon: MessageSquare, name: "Customer Follow-up SMS", desc: "Instant SMS responses to new enquiries within 60 seconds.", quote: '"We stopped losing leads to competitors overnight."', popular: false },
  { icon: Phone, name: "AI Voice Agent", desc: "AI-powered phone answering that books appointments automatically.", quote: '"Saved us 10 hours a week on phone calls."', popular: false },
];

const stats = [
  { icon: Users, label: "50+ clients served" },
  { icon: TrendingUp, label: "Avg 4× ROI" },
  { icon: Clock, label: "Results in 30 days" },
  { icon: Zap, label: "Setup in 48 hours" },
];

const faqs = [
  { q: "What kind of businesses do you work with?", a: "Any local service business — dentists, gyms, law firms, trades, salons, accountants, clinics, and more. If you serve local customers, we can help." },
  { q: "How fast will I see results?", a: "Most clients see measurable improvements within the first 2–4 weeks. Chatbots and review management start working immediately after setup." },
  { q: "Do I need to set anything up?", a: "No. We handle the full setup — integrations, configuration, and testing. You just keep running your business." },
  { q: "Can I add or remove services later?", a: "Absolutely. Mix and match as you grow. No penalties for changing your selection." },
  { q: "Can I cancel anytime?", a: "Yes. No long-term contracts. 30 days' notice and you're out." },
];

const Pricing = () => (
  <Layout>
    {/* Header */}
    <section className="section-padding pt-24 md:pt-36">
      <div className="container-narrow max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="text-[11px] font-medium text-accent mb-4 tracking-[0.2em] uppercase font-mono">Pricing</p>
          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
            Choose Your Service
          </h1>
          <p className="mt-4 text-muted-foreground text-base max-w-md mx-auto">
            Simple, transparent pricing. Pick what fits your business.
          </p>
          <p className="mt-3 text-xs font-mono font-medium text-accent">No contracts · Cancel anytime · Setup included</p>
        </FadeIn>
      </div>
    </section>

    {/* Trust bar + stats */}
    <section className="px-5 md:px-10 pb-6">
      <div className="container-narrow max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground font-mono">
              Trusted by local businesses across 10+ industries
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {stats.map((s) => (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium text-foreground shadow-sm"
                >
                  <s.icon size={12} className="text-accent" />
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* 2×2 Grid */}
    <section className="section-padding pt-8 md:pt-12">
      <div className="container-narrow max-w-4xl mx-auto">
        <FadeIn>
          <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {quadrants.map((s, i) => (
                <div
                  key={s.name}
                  className={`group relative p-8 md:p-10 flex flex-col transition-all duration-300 hover:bg-accent/[0.03] hover:scale-[1.02] hover:z-10 hover:shadow-[0_0_30px_-6px_hsl(226_100%_71%_/_0.18)] hover:border-accent/40 ${
                    i < 2 ? "border-b border-border" : ""
                  } ${i % 2 === 0 ? "md:border-r border-border" : ""} ${
                    i === 2 ? "border-b border-border md:border-b-0" : ""
                  }`}
                >
                  {s.popular && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground border-accent text-[10px] font-semibold px-2 py-0.5">
                      Most Popular
                    </Badge>
                  )}
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                    <s.icon className="text-accent" size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{s.name}</h3>
                  <p className="text-[13px] text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                  <p className="text-[12px] italic text-muted-foreground/70 mt-2">{s.quote}</p>
                  <div className="mt-6 flex items-center gap-4 pt-2">
                    <Button
                      size="sm"
                      className="bg-foreground text-background hover:bg-foreground/90 hover:shadow-md font-semibold"
                      asChild
                    >
                      <Link to="/contact">Contact <ArrowRight size={13} /></Link>
                    </Button>
                    <Link
                      to="/services"
                      className="text-[13px] text-accent font-medium hover:underline underline-offset-4 transition-colors"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* Decision CTA strip */}
    <section className="px-5 md:px-10 py-10 md:py-14">
      <div className="container-narrow max-w-4xl mx-auto">
        <FadeIn>
          <div className="rounded-lg border border-border bg-card p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <p className="text-sm text-foreground font-medium text-center sm:text-left">
              Not sure which service is right for you? <span className="text-accent">→</span> Book a free 15-minute strategy call
            </p>
            <Button size="default" className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-[0_0_20px_-4px_hsl(226_100%_71%_/_0.3)] transition-all shrink-0 font-semibold" asChild>
              <Link to="/contact">Book a free call <ArrowRight size={14} /></Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* FAQ */}
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

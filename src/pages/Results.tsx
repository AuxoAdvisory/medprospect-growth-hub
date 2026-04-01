import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    industry: "Dental Consulting",
    challenge: "Dr. Sarah was spending 10+ hours a week prospecting manually. Despite being excellent at her job, her calendar was half-empty.",
    solution: "We found 500+ dental practices in her region, scored each one, and launched a personalised 3-step email sequence.",
    result: "8 booked calls in the first 2 weeks. 3 became paying clients within a month.",
    metric: "8 calls / 2 weeks",
  },
  {
    industry: "Plumbing Services",
    challenge: "Mike's company relied on word-of-mouth. Growth had stalled and he wanted commercial contracts.",
    solution: "We targeted property managers and commercial buildings in his area with tailored outreach.",
    result: "3 new commercial contracts in month one — over $12K in new recurring revenue.",
    metric: "3 contracts / month 1",
  },
  {
    industry: "Accounting Firm",
    challenge: "Karen's firm needed clients beyond tax season. They wanted year-round bookkeeping and advisory work.",
    solution: "We identified underserved small businesses in 3 verticals and ran a 4-week campaign.",
    result: "Client base grew 20% in 90 days. Average client value: $8K+.",
    metric: "+20% in 90 days",
  },
];

const Results = () => (
  <Layout>
    <section className="section-padding pt-24 md:pt-36">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-[11px] font-medium text-accent/60 mb-4 tracking-[0.2em] uppercase font-mono">Results</p>
          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">Real numbers from real businesses</h1>
          <p className="mt-5 text-muted-foreground text-base">Here's what happened when they started working with us.</p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow space-y-4">
        {caseStudies.map((cs, i) => (
          <FadeIn key={cs.industry} delay={i * 0.08}>
            <div className="rounded-lg border border-border bg-card overflow-hidden hover:border-accent/20 hover:shadow-[0_0_24px_-8px_hsl(226_100%_71%_/_0.12)] transition-all duration-300">
              <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                <h3 className="font-semibold text-sm text-foreground">{cs.industry}</h3>
                <div className="flex items-center gap-1.5 text-accent font-medium text-xs font-mono">
                  <TrendingUp size={14} /> {cs.metric}
                </div>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <span className="text-[11px] font-mono font-medium text-accent uppercase tracking-wider">The problem</span>
                  <p className="text-muted-foreground text-[13px] mt-2 leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <span className="text-[11px] font-mono font-medium text-accent uppercase tracking-wider">What we did</span>
                  <p className="text-muted-foreground text-[13px] mt-2 leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <span className="text-[11px] font-mono font-medium text-accent uppercase tracking-wider">The outcome</span>
                  <p className="text-muted-foreground text-[13px] mt-2 leading-relaxed">{cs.result}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>

    <section className="section-padding border-t border-border/50">
      <div className="container-narrow max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground tracking-tight">Want to see what we can do for you?</h2>
          <Button variant="default" size="lg" className="mt-8" asChild>
            <Link to="/contact">Let's talk <ArrowRight className="ml-1" size={14} /></Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Results;

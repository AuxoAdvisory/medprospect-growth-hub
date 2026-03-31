import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Eye, TrendingUp, Search, ArrowRight } from "lucide-react";

const values = [
  { icon: Search, title: "We audit first", desc: "We don't sell you things you don't need. We look at your business's online presence and find the real gaps." },
  { icon: Zap, title: "We move fast", desc: "Your tools go live in days, not weeks. We don't waste time on long setups or endless meetings." },
  { icon: Eye, title: "Full transparency", desc: "No black boxes. You see exactly what we're doing, how it's performing, and what's next." },
  { icon: TrendingUp, title: "Results only", desc: "We measure success by one thing: more clients on your calendar." },
];

const About = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium text-primary mb-3">About us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            A small team helping small businesses grow
          </h1>
          <p className="mt-5 text-muted-foreground text-lg">Canadian-based. No fluff. Just straightforward AI consulting for local businesses.</p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Why we started Auxo Advisory</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>We kept meeting small business owners who were great at what they do but losing ground to competitors with better online presence.</p>
            <p>They didn't need a marketing agency. They needed someone who understood AI tools and could deploy them fast — chatbots, review management, automated booking, voice agents.</p>
            <p>So we built Auxo Advisory. A small, focused team that helps local service businesses use AI to get more clients without the complexity.</p>
          </div>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-4xl mx-auto">
        <FadeIn><h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-10">Our approach</h2></FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.08}>
              <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <v.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-bold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl font-extrabold text-foreground">Want to work together?</h2>
          <p className="text-muted-foreground mt-3">Let's have a quick conversation. No obligations.</p>
          <Button variant="gold" size="lg" className="mt-8" asChild>
            <Link to="/contact">Book a free call <ArrowRight className="ml-1" size={18} /></Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default About;

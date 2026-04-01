import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Eye, TrendingUp, Search, ArrowRight } from "lucide-react";
import sanjithImg from "@/assets/sanjith.png";
import timothyImg from "@/assets/timothy.png";

const values = [
  { icon: Search, title: "We audit first", desc: "We don't sell you things you don't need. We look at your business's online presence and find the real gaps." },
  { icon: Zap, title: "We move fast", desc: "Your tools go live in days, not weeks. We don't waste time on long setups or endless meetings." },
  { icon: Eye, title: "Full transparency", desc: "No black boxes. You see exactly what we're doing, how it's performing, and what's next." },
  { icon: TrendingUp, title: "Results only", desc: "We measure success by one thing: more clients on your calendar." },
];

const About = () => (
  <Layout>
    <section className="section-padding pt-24 md:pt-36">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-[11px] font-medium text-accent mb-4 tracking-[0.2em] uppercase font-mono">About us</p>
          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">A small team helping small businesses grow</h1>
          <p className="mt-5 text-muted-foreground text-base">Canadian-based. No fluff. Just straightforward AI consulting for local businesses.</p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground tracking-tight">Why we started Auxo Advisory</h2>
          <div className="mt-6 space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>We kept meeting small business owners who were great at what they do but losing ground to competitors with better online presence.</p>
            <p>They didn't need a marketing agency. They needed someone who understood AI tools and could deploy them fast — chatbots, review management, automated booking, voice agents.</p>
            <p>So we built Auxo Advisory. A small, focused team that helps local service businesses use AI to get more clients without the complexity.</p>
          </div>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-8 tracking-tight">Meet the founders</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FadeIn delay={0.06}>
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm text-center">
              <img src={sanjithImg} alt="Sanjith Thevakumar" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="font-semibold text-foreground">Sanjith Thevakumar</h3>
              <p className="text-[13px] text-muted-foreground mt-1">Co-Founder</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm text-center">
              <img src={timothyImg} alt="Timothy Emino" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="font-semibold text-foreground">Timothy Emino</h3>
              <p className="text-[13px] text-muted-foreground mt-1">Co-Founder</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-4xl mx-auto">
        <FadeIn><h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-10 tracking-tight">Our approach</h2></FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.06}>
              <div className="rounded-lg border border-border bg-card p-6 shadow-sm hover:border-accent/30 hover:shadow-[0_4px_24px_-8px_hsl(226_100%_71%_/_0.1)] transition-all duration-300 group">
                <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/15 transition-colors">
                  <v.icon className="text-accent" size={16} />
                </div>
                <h3 className="font-semibold text-sm text-foreground">{v.title}</h3>
                <p className="text-[13px] text-muted-foreground mt-2 leading-relaxed">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding border-t border-border">
      <div className="container-narrow max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-foreground tracking-tight">Want to work together?</h2>
          <p className="text-muted-foreground mt-3 text-sm">Let's have a quick conversation. No obligations.</p>
          <Button variant="default" size="lg" className="mt-8" asChild>
            <Link to="/contact">Book a free call <ArrowRight className="ml-1" size={14} /></Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default About;

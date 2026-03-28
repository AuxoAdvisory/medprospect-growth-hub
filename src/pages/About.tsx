import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, User, Eye, TrendingUp, ArrowRight } from "lucide-react";

const values = [
  { icon: Zap, title: "Speed", desc: "Campaigns go live within days, not weeks. We move fast because your pipeline can't wait." },
  { icon: User, title: "Personalisation", desc: "Every email is unique. We believe generic outreach belongs in the spam folder." },
  { icon: Eye, title: "Transparency", desc: "Full visibility into your campaigns. No black boxes — you see exactly what we're doing." },
  { icon: TrendingUp, title: "Results", desc: "Everything we do is measured by one metric: booked calls that turn into revenue." },
];

const About = () => (
  <Layout>
    <section className="bg-hero text-hero-foreground section-padding">
      <div className="container-narrow text-center max-w-3xl mx-auto">
        <FadeIn>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl">About <span className="text-gradient-gold">Auxo Advisory</span></h1>
          <p className="mt-5 text-hero-muted text-lg">Helping local service businesses grow without wasting time on manual prospecting.</p>
        </FadeIn>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <FadeIn className="md:col-span-2">
            <div className="w-full aspect-square rounded-2xl bg-secondary flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center mx-auto">
                  <User className="text-gold" size={40} />
                </div>
                <p className="font-display font-bold text-foreground mt-4">Our Team</p>
                <p className="text-sm text-muted-foreground">Auxo Advisory</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15} className="md:col-span-3">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground">The Story Behind Auxo Advisory</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Auxo Advisory was founded after seeing too many talented local service professionals struggle with one thing: finding clients. They were incredible at their craft — whether it was fixing pipes, managing finances, or keeping patients healthy — but marketing and sales? That was a different story.
              </p>
              <p>
                Auxo Advisory was born from a simple idea: what if these businesses could have a dedicated team finding and warming up leads for them, so they could focus entirely on delivering great service?
              </p>
              <p>
                Today, Auxo Advisory combines AI-powered lead scoring, personalised outreach, and automated follow-ups to deliver a steady stream of booked calls to service businesses across 10+ industries.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <FadeIn><h2 className="font-display font-extrabold text-3xl text-center text-foreground">Our Values</h2></FadeIn>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.1}>
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-gold" size={22} />
                </div>
                <h3 className="font-display font-bold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-background text-center">
      <FadeIn>
        <h2 className="font-display font-extrabold text-3xl text-foreground">Let's Grow Your Business Together</h2>
        <Button variant="gold" size="lg" className="mt-8 text-base px-10" asChild>
          <Link to="/contact">Book a Free Strategy Call <ArrowRight className="ml-1" size={18} /></Link>
        </Button>
      </FadeIn>
    </section>
  </Layout>
);

export default About;

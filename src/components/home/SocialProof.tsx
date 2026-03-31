import FadeIn from "@/components/FadeIn";

const logos = ["Dental", "Medical", "Legal", "Fitness", "Trades"];

const SocialProof = () => (
  <section className="px-6 py-10 md:px-10 md:py-14 border-t border-border">
    <div className="container-narrow">
      <FadeIn>
        <p className="text-center text-xs font-medium text-muted-foreground tracking-widest uppercase mb-8">
          Trusted by local businesses across Canada
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {logos.map((label) => (
            <div
              key={label}
              className="flex items-center justify-center rounded-lg bg-secondary/60 border border-border px-6 py-3 min-w-[100px]"
            >
              <span className="text-sm font-medium text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default SocialProof;

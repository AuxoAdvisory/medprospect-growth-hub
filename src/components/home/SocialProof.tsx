import FadeIn from "@/components/FadeIn";

const logos = ["Dental", "Medical", "Legal", "Fitness", "Trades"];

const SocialProof = () => (
  <section className="px-6 py-10 md:px-10 md:py-12 border-t border-border">
    <div className="container-narrow">
      <FadeIn>
        <p className="text-center text-[11px] font-medium text-muted-foreground tracking-widest uppercase mb-6 font-mono">
          Trusted by local businesses across Canada
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {logos.map((label) => (
            <div
              key={label}
              className="flex items-center justify-center rounded-md bg-secondary/40 border border-border px-5 py-2"
            >
              <span className="text-xs font-medium text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default SocialProof;

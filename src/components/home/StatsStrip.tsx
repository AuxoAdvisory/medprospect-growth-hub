import FadeIn from "@/components/FadeIn";

const stats = [
  { number: "50+", label: "Clients Served" },
  { number: "10+", label: "Industries" },
  { number: "4x", label: "Avg ROI" },
  { number: "30", label: "Days to Results" },
];

const StatsStrip = () => (
  <section className="px-5 py-10 md:px-10 md:py-14 border-t border-border">
    <div className="container-narrow">
      <FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">{s.number}</p>
              <p className="text-[12px] md:text-[13px] text-muted-foreground mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default StatsStrip;

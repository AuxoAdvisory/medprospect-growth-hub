import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BookingSection = () => (
  <section className="section-padding border-t border-border relative">
    <div className="absolute inset-0 dot-grid opacity-20" />
    <div className="container-narrow max-w-2xl mx-auto text-center relative z-10">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-semibold text-foreground tracking-tight">
          See it in action — book a free 15-min call
        </h2>
        <p className="text-muted-foreground mt-4 text-sm md:text-base leading-relaxed max-w-md mx-auto">
          We'll audit your online presence live and show you exactly where you're losing clients.
        </p>
        <Button variant="default" size="lg" className="mt-8" asChild>
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
            Book Your Free Call <ArrowRight className="ml-1" size={14} />
          </a>
        </Button>
        <p className="text-xs text-muted-foreground mt-5">
          Or text us at <span className="text-foreground font-medium">(555) 000-0000</span>
        </p>
      </FadeIn>
    </div>
  </section>
);

export default BookingSection;

import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarCheck, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Got it! We'll get back to you within 24 hours.");
    }, 1200);
  };

  return (
    <Layout>
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-[11px] font-medium text-accent/60 mb-4 tracking-[0.2em] uppercase font-mono">Contact</p>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">Let's talk</h1>
            <p className="mt-5 text-muted-foreground text-base">No sales pitch. Just a straightforward conversation about whether we can help.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FadeIn>
            <div className="rounded-lg border border-border bg-card p-8 flex flex-col items-center justify-center min-h-[400px] text-center">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                <CalendarCheck className="text-accent" size={20} />
              </div>
              <h3 className="font-semibold text-base text-foreground">Pick a time</h3>
              <p className="text-muted-foreground text-[13px] mt-2 max-w-xs">
                Choose a slot that works for you. We'll talk about your business and whether our service is a good fit.
              </p>
              <div className="mt-6 w-full rounded-md border border-border bg-secondary p-6">
                <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-mono">Calendar widget</p>
                <p className="text-muted-foreground text-[13px] mt-2">Your scheduling tool will appear here.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-8 space-y-4">
              <h3 className="font-semibold text-base text-foreground">Or drop us a message</h3>
              <div>
                <Label htmlFor="name" className="text-xs">Name</Label>
                <Input id="name" placeholder="Your name" required className="mt-1 bg-secondary border-border rounded-md" />
              </div>
              <div>
                <Label htmlFor="email" className="text-xs">Email</Label>
                <Input id="email" type="email" placeholder="you@business.com" required className="mt-1 bg-secondary border-border rounded-md" />
              </div>
              <div>
                <Label htmlFor="business" className="text-xs">Industry</Label>
                <Select>
                  <SelectTrigger className="mt-1 bg-secondary border-border rounded-md">
                    <SelectValue placeholder="What do you do?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dental">Dental & Medical</SelectItem>
                    <SelectItem value="plumbing">Plumbing & HVAC</SelectItem>
                    <SelectItem value="electrical">Electricians</SelectItem>
                    <SelectItem value="accounting">Accounting</SelectItem>
                    <SelectItem value="legal">Law Firms</SelectItem>
                    <SelectItem value="realestate">Real Estate</SelectItem>
                    <SelectItem value="cleaning">Cleaning</SelectItem>
                    <SelectItem value="fitness">Gyms & Wellness</SelectItem>
                    <SelectItem value="other">Something else</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message" className="text-xs">What can we help with?</Label>
                <Textarea id="message" placeholder="Tell us a bit about your business..." rows={4} className="mt-1 bg-secondary border-border rounded-md" />
              </div>
              <Button variant="default" size="default" type="submit" className="w-full" disabled={sending}>
                {sending ? "Sending..." : "Send message"}
              </Button>
              <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                <Shield size={12} />
                We'll respond within 24 hours. No spam, ever.
              </div>
            </form>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

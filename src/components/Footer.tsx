import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-navy text-hero-muted">
    <div className="container-narrow px-6 md:px-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Auxo Advisory" className="h-10 w-auto rounded bg-background/95 p-0.5" />
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-hero-foreground">
              Auxo Advisory
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed max-w-xs">
            Done-for-you lead generation and cold outreach for local service businesses.
          </p>
        </div>
        <div className="md:col-span-3">
          <h4 className="font-body text-xs font-semibold text-hero-foreground mb-5 uppercase tracking-widest">Navigate</h4>
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/how-it-works" className="hover:text-hero-foreground transition-colors">How It Works</Link>
            <Link to="/pricing" className="hover:text-hero-foreground transition-colors">Pricing</Link>
            <Link to="/results" className="hover:text-hero-foreground transition-colors">Results</Link>
            <Link to="/about" className="hover:text-hero-foreground transition-colors">About</Link>
          </div>
        </div>
        <div className="md:col-span-4">
          <h4 className="font-body text-xs font-semibold text-hero-foreground mb-5 uppercase tracking-widest">Contact</h4>
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/contact" className="hover:text-hero-foreground transition-colors">Book a Conversation</Link>
            <Link to="/contact" className="hover:text-hero-foreground transition-colors">Get in Touch</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-light/30 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-hero-muted/60">
        <p>© {new Date().getFullYear()} Auxo Advisory. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

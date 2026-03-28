import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-navy text-hero-muted">
    <div className="container-narrow px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Auxo Advisory" className="h-12 w-auto rounded-md bg-white/90 p-0.5" />
            <span className="font-display font-extrabold text-2xl text-hero-foreground">
              <span className="text-gold">Auxo</span> Advisory
            </span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed max-w-sm">
            Done-for-you lead generation and cold outreach for local service businesses. Growth on autopilot.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold text-hero-foreground mb-4 text-sm uppercase tracking-wider">Pages</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/how-it-works" className="hover:text-hero-foreground transition-colors">How It Works</Link>
            <Link to="/pricing" className="hover:text-hero-foreground transition-colors">Pricing</Link>
            <Link to="/results" className="hover:text-hero-foreground transition-colors">Results</Link>
            <Link to="/about" className="hover:text-hero-foreground transition-colors">About</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold text-hero-foreground mb-4 text-sm uppercase tracking-wider">Get Started</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/contact" className="hover:text-hero-foreground transition-colors">Book a Call</Link>
            <Link to="/contact" className="hover:text-hero-foreground transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-light/40 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs">
        <p>© {new Date().getFullYear()} Auxo Advisory. All rights reserved.</p>
        <p className="mt-2 md:mt-0 font-display font-semibold text-hero-foreground">Auxo Advisory — Growth on Autopilot</p>
      </div>
    </div>
  </footer>
);

export default Footer;

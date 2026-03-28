import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-hero border-t border-border">
    <div className="container-narrow px-6 md:px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Auxo Advisory" className="h-8 w-auto" />
            <span className="font-semibold text-foreground text-base">Auxo Advisory</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Done-for-you lead generation and cold outreach for local service businesses.
          </p>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-sm font-semibold text-foreground mb-4">Product</h4>
          <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <Link to="/how-it-works" className="hover:text-foreground transition-colors">How It Works</Link>
            <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link to="/results" className="hover:text-foreground transition-colors">Results</Link>
          </div>
        </div>
        <div className="md:col-span-4">
          <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
          <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-12 pt-8 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Auxo Advisory. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

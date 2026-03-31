import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="container-narrow px-6 md:px-10 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5">
          <span className="font-semibold text-foreground text-sm tracking-tight">Auxo Advisory</span>
          <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed max-w-xs">
            AI-powered growth for local service businesses across Canada.
          </p>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Product</h4>
          <div className="flex flex-col gap-2 text-[13px] text-muted-foreground">
            <Link to="/how-it-works" className="hover:text-foreground transition-colors">How It Works</Link>
            <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link to="/results" className="hover:text-foreground transition-colors">Results</Link>
          </div>
        </div>
        <div className="md:col-span-4">
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Company</h4>
          <div className="flex flex-col gap-2 text-[13px] text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Auxo Advisory. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container-narrow px-5 md:px-10 py-10 md:py-16">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-12 gap-8 md:gap-6">
        <div className="col-span-2 sm:col-span-4 md:col-span-4">
          <span className="text-[13px] font-medium text-foreground tracking-[-0.01em]">Auxo Advisory</span>
          <p className="mt-2.5 text-[12px] text-muted-foreground/70 leading-relaxed max-w-[220px]">AI-powered growth for local service businesses across Canada.</p>
        </div>
        <div className="col-span-1 md:col-span-2">
          <p className="text-[11px] text-muted-foreground/50 mb-3">Product</p>
          <div className="flex flex-col gap-2">
            <Link to="/how-it-works" className="text-[12px] text-muted-foreground hover:text-foreground transition-colors duration-200">How It Works</Link>
            <Link to="/pricing" className="text-[12px] text-muted-foreground hover:text-foreground transition-colors duration-200">Pricing</Link>
            <Link to="/results" className="text-[12px] text-muted-foreground hover:text-foreground transition-colors duration-200">Results</Link>
            <Link to="/services" className="text-[12px] text-muted-foreground hover:text-foreground transition-colors duration-200">Services</Link>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <p className="text-[11px] text-muted-foreground/50 mb-3">Company</p>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-[12px] text-muted-foreground hover:text-foreground transition-colors duration-200">About</Link>
            <Link to="/contact" className="text-[12px] text-muted-foreground hover:text-foreground transition-colors duration-200">Contact</Link>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <p className="text-[11px] text-muted-foreground/50 mb-3">Resources</p>
          <div className="flex flex-col gap-2">
            <Link to="/contact" className="text-[12px] text-muted-foreground hover:text-foreground transition-colors duration-200">Book a Call</Link>
            <Link to="/pricing" className="text-[12px] text-muted-foreground hover:text-foreground transition-colors duration-200">FAQ</Link>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <p className="text-[11px] text-muted-foreground/50 mb-3">Connect</p>
          <div className="flex flex-col gap-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[12px] text-muted-foreground hover:text-foreground transition-colors duration-200">LinkedIn</a>
            <a href="mailto:hello@auxoadvisory.com" className="text-[12px] text-muted-foreground hover:text-foreground transition-colors duration-200">Email</a>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-8 md:mt-12 pt-5 md:pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p className="text-[11px] text-muted-foreground/50">© {new Date().getFullYear()} Auxo Advisory</p>
        <div className="flex gap-4">
          <span className="text-[11px] text-muted-foreground/40">Privacy</span>
          <span className="text-[11px] text-muted-foreground/40">Terms</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

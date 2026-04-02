import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container-narrow px-6 md:px-10 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-[15px] font-semibold text-foreground" style={{ fontFamily: "var(--font-body)" }}>Auxo Advisory</span>
          <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed max-w-[280px]">AI consulting for local service businesses across the GTA.</p>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/how-it-works" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">How It Works</Link>
          <Link to="/pricing" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
          <Link to="/contact" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">Book a Call</Link>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p className="text-[12px] text-muted-foreground">© {new Date().getFullYear()} Auxo Advisory</p>
        <a href="mailto:tim@auxoadvisory.ca" className="text-[12px] text-muted-foreground hover:text-foreground transition-colors">tim@auxoadvisory.ca</a>
      </div>
    </div>
  </footer>
);

export default Footer;

import { Link } from "react-router-dom";

const Footer = () => (
  <footer style={{ backgroundColor: "#0A1628" }}>
    <div className="container-narrow px-6 md:px-10 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-[15px] font-semibold" style={{ fontFamily: "var(--font-body)", color: "#FFFFFF" }}>Auxo Advisory</span>
          <p className="mt-2 text-[13px] leading-relaxed max-w-[280px]" style={{ color: "rgba(255,255,255,0.5)" }}>AI consulting for local service businesses across the GTA.</p>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/how-it-works" className="text-[13px] hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>How It Works</Link>
          <Link to="/pricing" className="text-[13px] hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>Pricing</Link>
          <Link to="/contact" className="text-[13px] hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>Book a Call</Link>
        </div>
      </div>
      <div className="mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>© {new Date().getFullYear()} Auxo Advisory</p>
        <a href="mailto:tim@auxoadvisory.ca" className="text-[12px] hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>tim@auxoadvisory.ca</a>
      </div>
    </div>
  </footer>
);

export default Footer;

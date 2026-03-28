import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/98 backdrop-blur-sm border-b border-navy-light/30">
      <div className="container-narrow flex items-center justify-between h-[72px] px-6 md:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Auxo Advisory" className="h-9 w-auto rounded bg-background/95 p-0.5" />
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-hero-foreground">
            Auxo Advisory
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-[13px] font-medium tracking-wide uppercase transition-colors ${
                location.pathname === item.href
                  ? "text-hero-foreground"
                  : "text-hero-muted hover:text-hero-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="gold" size="sm" className="ml-2 text-xs tracking-wider uppercase" asChild>
            <Link to="/contact">Get in touch</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-hero-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-navy-light/30 px-6 pb-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium tracking-wide ${
                location.pathname === item.href
                  ? "text-hero-foreground"
                  : "text-hero-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="gold" size="sm" className="w-full mt-3 text-xs tracking-wider uppercase" asChild>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Get in touch</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

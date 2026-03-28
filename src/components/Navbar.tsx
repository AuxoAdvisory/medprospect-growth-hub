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
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-navy-light/50">
      <div className="container-narrow flex items-center justify-between h-16 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Auxo Advisory" className="h-10 w-auto rounded-md bg-white/90 p-0.5" />
          <span className="font-display font-extrabold text-lg text-hero-foreground tracking-tight">
            <span className="text-gold">Auxo</span> Advisory
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.href
                  ? "text-gold"
                  : "text-hero-muted hover:text-hero-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="gold" size="sm" asChild>
            <Link to="/contact">Book a Call</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-hero-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-navy-light/50 px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium ${
                location.pathname === item.href
                  ? "text-gold"
                  : "text-hero-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="gold" size="sm" className="w-full mt-2" asChild>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Book a Call</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

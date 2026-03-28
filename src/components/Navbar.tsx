import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 px-6 md:px-10">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Auxo Advisory" className="h-8 w-auto" />
          <span className="font-semibold text-foreground text-base">
            Auxo Advisory
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                location.pathname === item.href
                  ? "text-foreground bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="gold" size="sm" className="ml-3" asChild>
            <Link to="/contact">Get started</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium ${
                location.pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="gold" size="sm" className="w-full mt-3" asChild>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Get started</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

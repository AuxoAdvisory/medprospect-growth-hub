import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Results", href: "/results" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-2xl backdrop-saturate-150 border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-12 px-6 md:px-10">
        <Link to="/" className="flex items-center">
          <span className="font-semibold text-foreground text-[13px] tracking-[-0.01em]">
            Auxo Advisory
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`relative px-3 py-1.5 text-[13px] transition-colors duration-200 ${
                location.pathname === item.href
                  ? "text-accent font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="ml-4 inline-flex items-center justify-center h-8 px-4 text-[13px] font-medium rounded-md bg-accent text-accent-foreground hover:bg-accent/85 transition-all duration-200 hover:shadow-[0_0_20px_-4px_hsl(226_100%_71%_/_0.35)]"
          >
            Get started
          </Link>
        </div>

        <button
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden bg-background/90 backdrop-blur-2xl border-t border-border"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-[13px] transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-accent font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-3 text-center h-9 leading-9 text-[13px] font-medium rounded-md bg-accent text-accent-foreground hover:bg-accent/85 transition-all duration-200"
              >
                Get started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

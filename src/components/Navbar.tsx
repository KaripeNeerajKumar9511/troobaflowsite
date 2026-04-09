import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoSrc from "@/assets/trooba-logo-dark.svg";

const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Proof", href: "/proof" },
  { label: "About", href: "/about" },
  
];

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="md:hidden"
      style={{
        position: "fixed",
        top: 60,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#0C0F14",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.5rem",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {navLinks.map((l) => (
        <Link
          key={l.href}
          to={l.href}
          style={{
            color: "#FFFFFF",
            fontSize: "20px",
            fontWeight: 600,
            textDecoration: "none",
            padding: "8px 0",
          }}
          onClick={onClose}
        >
          {l.label}
        </Link>
      ))}
      <Link
        to="/request-access"
        style={{
          marginTop: "16px",
          padding: "12px 32px",
          borderRadius: "6px",
          backgroundColor: "#00C4B4",
          color: "#0C0F14",
          fontWeight: 600,
          fontSize: "16px",
          textDecoration: "none",
        }}
        onClick={onClose}
      >
        Request a Flow Analysis →
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-trooba-teal/20" : "border-b border-transparent"
        }`}
        style={{ backgroundColor: "var(--color-navy)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[60px]">
          <Link to="/" className="flex items-center">
            <img src={logoSrc} alt="Trooba" className="h-[42px] w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm font-medium text-font-mono/90 hover:text-trooba-teal transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/request-access"
              className="text-sm font-medium px-5 py-2.5 rounded-md bg-trooba-teal text-trooba-navy hover:bg-trooba-teal-hover transition-colors"
            >
              Request or login →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-font-mono"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  );
};

export default Navbar;
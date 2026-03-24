/**
 * Navbar — Sticky navigation bar
 * Design: Botanical Gilded Scroll — warm ivory bg with gold accents
 * Transparent at top, becomes solid on scroll
 */
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Αρχική", href: "#hero" },
  { label: "Τελετή", href: "#ceremony" },
  { label: "Δεξίωση", href: "#reception" },
  { label: "Πρόσκληση", href: "#invitation" },
  { label: "RSVP", href: "#rsvp" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-gold-light/30"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo / Names */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="font-script text-2xl md:text-3xl text-gold-dark hover:text-gold transition-colors"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Θ & Κ
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-warm-brown/80 hover:text-gold transition-colors text-base tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gold-dark p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-ivory/98 backdrop-blur-md ${
          mobileOpen ? "max-h-80 border-b border-gold-light/30" : "max-h-0"
        }`}
      >
        <div className="container py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-warm-brown/80 hover:text-gold transition-colors text-lg tracking-wide text-left"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

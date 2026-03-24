/**
 * HeroSection — Full viewport hero with names, subtitle, date, and countdown
 * Design: Botanical Gilded Scroll — warm ivory bg with gold botanical frame
 * Background: Generated hero image with gold leaves
 */
import { useCountdown } from "@/hooks/useCountdown";
import GoldParticles from "./GoldParticles";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/105873545/ZffQFUTLt9CobzFbFLpxvq/hero-bg-WcWJW2PHqcMtCmAjFhg7N3.webp";

// Wedding date: June 13, 2026, 18:00 Athens time (UTC+3)
const WEDDING_DATE = new Date("2026-06-13T18:00:00+03:00");

export default function HeroSection() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(WEDDING_DATE);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />

      {/* Gold Particles */}
      <GoldParticles count={25} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20 max-w-3xl mx-auto">
        {/* Small decorative text */}
        <p
          className="text-gold-dark/70 text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-in-up"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, animationDelay: "0.2s", animationFillMode: "both" }}
        >
          Γάμος & Βάπτιση
        </p>

        {/* Names */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-warm-brown mb-2 animate-fade-in-up"
          style={{ fontFamily: "'Great Vibes', cursive", animationDelay: "0.4s", animationFillMode: "both" }}
        >
          Θάνος & Κέλυ
        </h1>

        {/* Ampersand and subtitle */}
        <p
          className="text-3xl sm:text-4xl md:text-5xl text-gold mb-8 animate-fade-in-up"
          style={{ fontFamily: "'Great Vibes', cursive", animationDelay: "0.6s", animationFillMode: "both" }}
        >
          & ο μικρός μας
        </p>

        {/* Gold line */}
        <div className="gold-line w-48 mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.8s", animationFillMode: "both" }} />

        {/* Date */}
        <div className="animate-fade-in-up" style={{ animationDelay: "1s", animationFillMode: "both" }}>
          <p
            className="text-gold-dark/60 tracking-[0.25em] uppercase text-sm mb-1"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ιουνίου
          </p>
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-1">
            <span
              className="text-warm-brown/70 text-base md:text-lg tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              Σάββατο
            </span>
            <span
              className="text-5xl md:text-6xl text-gold-dark"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
            >
              13
            </span>
            <span
              className="text-warm-brown/70 text-base md:text-lg tracking-[0.2em]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              18:00
            </span>
          </div>
          <p
            className="text-warm-brown/60 text-lg tracking-[0.3em]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            2026
          </p>
        </div>

        {/* Gold line */}
        <div className="gold-line w-32 mx-auto my-8 animate-fade-in-up" style={{ animationDelay: "1.2s", animationFillMode: "both" }} />

        {/* Countdown */}
        {!isExpired && (
          <div className="animate-fade-in-up" style={{ animationDelay: "1.4s", animationFillMode: "both" }}>
            <p
              className="text-gold-dark/50 text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Αντίστροφη Μέτρηση
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-6">
              {[
                { value: days, label: "Ημέρες" },
                { value: hours, label: "Ώρες" },
                { value: minutes, label: "Λεπτά" },
                { value: seconds, label: "Δευτ." },
              ].map((item, i) => (
                <div key={item.label} className="text-center">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border border-gold/30 rounded-sm bg-ivory/60 backdrop-blur-sm"
                  >
                    <span
                      className="text-2xl sm:text-3xl text-gold-dark tabular-nums"
                      style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                    >
                      {String(item.value).padStart(2, "0")}
                    </span>
                  </div>
                  <span
                    className="text-xs text-warm-brown/50 mt-2 block tracking-wider"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce animate-fade-in-up" style={{ animationDelay: "2s", animationFillMode: "both" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto opacity-40">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

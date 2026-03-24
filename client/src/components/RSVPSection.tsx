/**
 * RSVPSection — RSVP with click-to-call phones and IBAN reveal button
 * Design: Botanical Gilded Scroll — warm tones, gold accents
 */
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Phone, Gift, Copy, Check, Calendar } from "lucide-react";

const CORNER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/105873545/ZffQFUTLt9CobzFbFLpxvq/botanical-corner-left-4NgumgPoFYumrE6KY2xitk.webp";

export default function RSVPSection() {
  const [showIBAN, setShowIBAN] = useState(false);
  const [copied, setCopied] = useState(false);

  const IBAN = "GR1901104290000042900552045";

  const handleCopyIBAN = async () => {
    try {
      await navigator.clipboard.writeText(IBAN);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = IBAN;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="rsvp" className="py-20 md:py-28 bg-cream/50 relative overflow-hidden">
      {/* Decorative corner leaves */}
      <img
        src={CORNER_IMG}
        alt=""
        className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 opacity-20 pointer-events-none"
        loading="lazy"
      />
      <img
        src={CORNER_IMG}
        alt=""
        className="absolute bottom-0 right-0 w-32 sm:w-48 md:w-64 opacity-20 pointer-events-none rotate-180"
        loading="lazy"
      />

      <div className="container max-w-3xl mx-auto relative z-10">
        {/* RSVP */}
        <AnimatedSection className="text-center mb-16">
          <p
            className="text-gold/70 text-sm tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Σας Περιμένουμε
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-warm-brown mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            RSVP
          </h2>
          <div className="gold-line w-24 mx-auto mb-8" />

          <div className="flex items-center justify-center gap-2 text-warm-brown/60 mb-8">
            <Calendar className="w-4 h-4 text-gold/60" />
            <p
              className="text-lg"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Παρακαλούμε ενημερώστε μας για την παρουσία σας{" "}
              <span className="text-gold-dark font-semibold">έως 07 Ιουνίου</span>
            </p>
          </div>

          {/* Phone buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+306989621456"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold/30 rounded-sm bg-ivory hover:bg-gold/10 transition-all group pulse-gold"
            >
              <Phone className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <span
                  className="block text-warm-brown text-lg"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  Θάνος
                </span>
                <span
                  className="block text-warm-brown/60 text-sm"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  698 962 1456
                </span>
              </div>
            </a>

            <a
              href="tel:+306978719363"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold/30 rounded-sm bg-ivory hover:bg-gold/10 transition-all group pulse-gold"
            >
              <Phone className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <span
                  className="block text-warm-brown text-lg"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  Κέλυ
                </span>
                <span
                  className="block text-warm-brown/60 text-sm"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  697 871 9363
                </span>
              </div>
            </a>
          </div>
        </AnimatedSection>

        {/* Gift / IBAN Section */}
        <AnimatedSection delay={200} className="text-center">
          <div className="gold-line w-48 mx-auto mb-12" />

          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="w-5 h-5 text-gold" />
            <h3
              className="text-2xl text-warm-brown"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              Προαιρετική Λίστα Γάμου
            </h3>
          </div>

          <p
            className="text-warm-brown/60 text-lg mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Εθνική Τράπεζα
          </p>

          {!showIBAN ? (
            <button
              onClick={() => setShowIBAN(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gold/90 text-ivory hover:bg-gold transition-colors rounded-sm text-sm tracking-wider"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              <Gift className="w-4 h-4" />
              Εμφάνιση IBAN
            </button>
          ) : (
            <div className="animate-fade-in-up">
              <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-4 border border-gold/30 rounded-sm bg-ivory">
                <span
                  className="text-warm-brown text-sm sm:text-base font-mono tracking-wider"
                >
                  {IBAN}
                </span>
                <button
                  onClick={handleCopyIBAN}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-gold/10 hover:bg-gold/20 text-gold-dark rounded-sm transition-colors text-xs"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Αντιγράφηκε
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Αντιγραφή
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}

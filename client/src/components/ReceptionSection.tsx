/**
 * ReceptionSection — Reception venue details with map
 * Design: Botanical Gilded Scroll — warm tones, gold accents
 * Κτήμα Λατάνια, Παλλήνη
 */
import AnimatedSection from "./AnimatedSection";
import { PartyPopper, MapPin, Navigation, Wine } from "lucide-react";

const RECEPTION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/105873545/ZffQFUTLt9CobzFbFLpxvq/reception-bg-bcjvFzpZSfCDgNy8JMLjoQ.webp";
const GOOGLE_MAPS_VENUE = "https://maps.google.com/?q=Κτήμα+Λατάνια+Παλλήνη";
const GOOGLE_MAPS_DIRECTIONS_VENUE = "https://www.google.com/maps/dir/?api=1&destination=Κτήμα+Λατάνια+Παλλήνη";

export default function ReceptionSection() {
  return (
    <section id="reception" className="py-20 md:py-28 bg-ivory">
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p
            className="text-gold/70 text-sm tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Η Δεξίωση
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-warm-brown mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Κτήμα Λατάνια
          </h2>
          <div className="gold-line w-24 mx-auto" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Details (left on desktop) */}
          <AnimatedSection delay={200} className="text-center md:text-left order-2 md:order-1">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <PartyPopper className="w-5 h-5 text-gold" />
              <h3
                className="text-2xl md:text-3xl text-warm-brown"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
              >
                Κτήμα Λατάνια
              </h3>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3 justify-center md:justify-start text-warm-brown/70">
                <Wine className="w-4 h-4 text-gold/60 shrink-0" />
                <span className="text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Θα ακολουθήσει δεξίωση εντός του κτήματος
                </span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start text-warm-brown/70">
                <MapPin className="w-4 h-4 text-gold/60 shrink-0" />
                <span className="text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Παλλήνη, Αττική
                </span>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-sm overflow-hidden border border-gold/20 shadow-sm mb-4">
              <iframe
                src="https://maps.google.com/maps?q=Κτήμα+Λατάνια+Παλλήνη&output=embed&z=15"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Χάρτης Κτήματος"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href={GOOGLE_MAPS_VENUE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold/40 text-gold-dark hover:bg-gold/10 transition-colors rounded-sm text-sm tracking-wider"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                <MapPin className="w-4 h-4" />
                Προβολή στο Χάρτη
              </a>
              <a
                href={GOOGLE_MAPS_DIRECTIONS_VENUE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold/90 text-ivory hover:bg-gold transition-colors rounded-sm text-sm tracking-wider"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                <Navigation className="w-4 h-4" />
                Οδηγίες
              </a>
            </div>
          </AnimatedSection>

          {/* Image (right on desktop) */}
          <AnimatedSection delay={400} className="order-1 md:order-2">
            <div className="relative rounded-sm overflow-hidden shadow-lg">
              <img
                src={RECEPTION_IMG}
                alt="Κτήμα Λατάνια"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/20 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

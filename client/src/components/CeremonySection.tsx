/**
 * CeremonySection — Church ceremony details with map
 * Design: Botanical Gilded Scroll — warm tones, gold accents
 * Ι.Ν. Ευαγγελισμός της Θεοτόκου, εντός Κτήματος Λατάνια, Παλλήνη
 */
import AnimatedSection from "./AnimatedSection";
import { Church, MapPin, Navigation, Clock } from "lucide-react";

const CEREMONY_IMG = "/church.webp";
// ESTATE LATANIA — Μαρίνου Αντύπα 2, Παλλήνη (η εκκλησία είναι εντός κτήματος)
const GOOGLE_MAPS_CHURCH = "https://maps.app.goo.gl/niih9yuPqZu9hbACA";
const GOOGLE_MAPS_DIRECTIONS_CHURCH = "https://www.google.com/maps/dir/?api=1&destination=38.0042793,23.8725721";
// Embed: ESTATE LATANIA coordinates
const MAP_EMBED_CHURCH = "https://maps.google.com/maps?q=38.0042793,23.8725721&output=embed&z=15";

export default function CeremonySection() {
  return (
    <section id="ceremony" className="py-20 md:py-28 bg-cream/50">
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p
            className="text-gold/70 text-sm tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Η Τελετή
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-warm-brown mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Ιερός Ναός
          </h2>
          <div className="gold-line w-24 mx-auto" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image */}
          <AnimatedSection delay={200}>
            <div className="relative rounded-sm overflow-hidden shadow-lg">
              <img
                src={CEREMONY_IMG}
                alt="Εκκλησία"
                className="w-full h-64 sm:h-80 md:h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/20 to-transparent" />
            </div>
          </AnimatedSection>

          {/* Details */}
          <AnimatedSection delay={400} className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <Church className="w-5 h-5 text-gold shrink-0" />
              <h3
                className="text-xl md:text-2xl text-warm-brown"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
              >
                Ι.Ν. Ευαγγελισμός της Θεοτόκου
              </h3>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 justify-center md:justify-start text-warm-brown/70">
                <Clock className="w-4 h-4 text-gold/60 shrink-0" />
                <span className="text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Σάββατο 13 Ιουνίου 2026, 18:00
                </span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start text-warm-brown/70">
                <MapPin className="w-4 h-4 text-gold/60 shrink-0" />
                <span className="text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Μαρίνου Αντύπα 2, Παλλήνη — εντός Κτήματος Λατάνια
                </span>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-sm overflow-hidden border border-gold/20 shadow-sm mb-4">
              <iframe
                src={MAP_EMBED_CHURCH}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Χάρτης Εκκλησίας"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href={GOOGLE_MAPS_CHURCH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold/40 text-gold-dark hover:bg-gold/10 transition-colors rounded-sm text-sm tracking-wider"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                <MapPin className="w-4 h-4" />
                Προβολή στο Χάρτη
              </a>
              <a
                href={GOOGLE_MAPS_DIRECTIONS_CHURCH}
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
        </div>
      </div>
    </section>
  );
}

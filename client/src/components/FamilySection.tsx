/**
 * FamilySection — Families, Koumparoi, and Nona
 * Design: Botanical Gilded Scroll — elegant cards with gold accents
 */
import AnimatedSection from "./AnimatedSection";
import { Heart, Users, Sparkles } from "lucide-react";

export default function FamilySection() {
  return (
    <section id="family" className="py-20 md:py-28 bg-ivory">
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-warm-brown mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Οικογένειες
          </h2>
          <div className="gold-line w-24 mx-auto" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Οικογένειες */}
          <AnimatedSection delay={200}>
            <div className="text-center p-8 border border-gold/20 rounded-sm bg-cream/40 hover:bg-cream/70 transition-colors">
              <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                <Users className="w-5 h-5 text-gold" />
              </div>
              <h3
                className="text-xl text-warm-brown mb-4 tracking-wider"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                Οικογένειες
              </h3>
              <div className="space-y-6">
                <p
                  className="text-warm-brown/80 text-lg"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Παναγιώτη Καλδή<br />
                  <span className="text-gold/60">&</span><br />
                  Μαρίας Χατζηγιαννακού
                </p>
                <div className="gold-line w-12 mx-auto" />
                <p
                  className="text-warm-brown/80 text-lg"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Αλέξανδρου<br />
                  <span className="text-gold/60">&</span><br />
                  Ελένης Μήτσουλα
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Κουμπάροι */}
          <AnimatedSection delay={400}>
            <div className="text-center p-8 border border-gold/20 rounded-sm bg-cream/40 hover:bg-cream/70 transition-colors">
              <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                <Heart className="w-5 h-5 text-gold" />
              </div>
              <h3
                className="text-xl text-warm-brown mb-4 tracking-wider"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                Κουμπάροι
              </h3>
              <div className="space-y-6">
                <p
                  className="text-warm-brown/80 text-lg"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Παναγιώτης<br />
                  <span className="text-gold/60">&</span><br />
                  Χριστιάννα Χαλκιά
                </p>
                <div className="gold-line w-12 mx-auto" />
                <p
                  className="text-warm-brown/80 text-lg"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Βούλα Κατσαβίδα
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Νονά */}
          <AnimatedSection delay={600} className="sm:col-span-2 lg:col-span-1">
            <div className="text-center p-8 border border-gold/20 rounded-sm bg-cream/40 hover:bg-cream/70 transition-colors">
              <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                <Sparkles className="w-5 h-5 text-gold" />
              </div>
              <h3
                className="text-xl text-warm-brown mb-4 tracking-wider"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                Νονά
              </h3>
              <p
                className="text-warm-brown/80 text-lg"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Στεφανία Μιχαλοπούλου
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

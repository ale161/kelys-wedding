/**
 * InvitationSection — Display the wedding invitation image
 * Design: Botanical Gilded Scroll — centered with gold frame
 */
import AnimatedSection from "./AnimatedSection";

const INVITATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/105873545/ZffQFUTLt9CobzFbFLpxvq/kelys_wedding_invitation_1d9c303f.jpeg";

export default function InvitationSection() {
  return (
    <section id="invitation" className="py-20 md:py-28 bg-cream/50">
      <div className="container max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p
            className="text-gold/70 text-sm tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Η Πρόσκληση
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-warm-brown mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Πρόσκληση
          </h2>
          <div className="gold-line w-24 mx-auto" />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="relative mx-auto max-w-lg">
            {/* Gold border frame */}
            <div className="p-2 sm:p-3 border border-gold/30 rounded-sm bg-ivory shadow-xl">
              <div className="border border-gold/15 rounded-sm overflow-hidden">
                <img
                  src={INVITATION_IMG}
                  alt="Πρόσκληση Γάμου Θάνος & Κέλυ"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Decorative corner dots */}
            <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-gold/40" />
            <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-gold/40" />
            <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-gold/40" />
            <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-gold/40" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

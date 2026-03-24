/**
 * Footer — Simple elegant footer
 * Design: Botanical Gilded Scroll
 */
import { Heart } from "lucide-react";

const DIVIDER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/105873545/ZffQFUTLt9CobzFbFLpxvq/section-divider-leaves-f2EjYUXDnbPG5GvJFqzwgL.webp";

export default function Footer() {
  return (
    <footer className="py-12 bg-ivory text-center">
      <img
        src={DIVIDER_IMG}
        alt=""
        className="w-40 sm:w-56 h-auto opacity-50 mx-auto mb-6"
        loading="lazy"
      />
      <p
        className="text-3xl sm:text-4xl text-warm-brown/80 mb-3"
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        Θάνος & Κέλυ
      </p>
      <div className="flex items-center justify-center gap-2 text-warm-brown/40">
        <span className="text-sm" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          13 Ιουνίου 2026
        </span>
        <Heart className="w-3 h-3 text-gold/50 fill-gold/50" />
      </div>
    </footer>
  );
}

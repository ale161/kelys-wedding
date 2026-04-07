/**
 * PhotoGallerySection — Family photos of the couple and their baby
 * Design: Botanical Gilded Scroll — elegant masonry-style gallery
 */
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { X } from "lucide-react";

const photos = [
  { src: "/family-1.jpg", alt: "Θάνος, Κέλυ και ο μικρός τους" },
  { src: "/family-2.jpg", alt: "Η οικογένεια" },
  { src: "/family-3.jpg", alt: "Θάνος & Κέλυ με το μωρό τους" },
  { src: "/family-4.webp", alt: "Η νέα οικογένεια" },
];

export default function PhotoGallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-cream/50">
      <div className="container max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p
            className="text-gold/70 text-sm tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Η Οικογένειά μας
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-warm-brown mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            Φωτογραφίες
          </h2>
          <div className="gold-line w-24 mx-auto" />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, idx) => (
            <AnimatedSection key={photo.src} delay={idx * 150}>
              <div
                className="relative overflow-hidden rounded-sm border border-gold/20 shadow-md cursor-pointer group"
                onClick={() => setLightbox(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-warm-brown/0 group-hover:bg-warm-brown/10 transition-colors duration-300" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-warm-brown/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-ivory/80 hover:text-ivory transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Φωτογραφία"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

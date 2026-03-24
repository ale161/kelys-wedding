/**
 * SectionDivider — Gold leaf ornamental divider
 * Design: Botanical Gilded Scroll — Art Nouveau Revival
 * Uses generated gold leaf divider image
 */

const DIVIDER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/105873545/ZffQFUTLt9CobzFbFLpxvq/section-divider-leaves-f2EjYUXDnbPG5GvJFqzwgL.webp";

export default function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-6 ${className}`}>
      <img
        src={DIVIDER_IMG}
        alt=""
        className="w-48 sm:w-64 md:w-80 h-auto opacity-70"
        loading="lazy"
      />
    </div>
  );
}

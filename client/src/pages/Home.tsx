/**
 * Home — Main wedding micro site page
 * Design: Botanical Gilded Scroll — Art Nouveau Revival
 * Single-page vertical scroll with all wedding sections
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import CeremonySection from "@/components/CeremonySection";
import ReceptionSection from "@/components/ReceptionSection";
import InvitationSection from "@/components/InvitationSection";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import FamilySection from "@/components/FamilySection";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <CeremonySection />
      <SectionDivider />
      <ReceptionSection />
      <SectionDivider />
      <InvitationSection />
      <SectionDivider />
      <PhotoGallerySection />
      <SectionDivider />
      <FamilySection />
      <SectionDivider />
      <RSVPSection />
      <Footer />
    </div>
  );
}

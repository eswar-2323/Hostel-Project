import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FacilitiesSection } from "@/components/facilities-section";
import { MessSection } from "@/components/mess-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactSection } from "@/components/contact-section";
import { LocationSection } from "@/components/location-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <HeroSection />
      <FacilitiesSection />
      <MessSection />
      <GallerySection />
      <ContactSection />
      <LocationSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
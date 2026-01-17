import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PresentationSection from "@/components/sections/PresentationSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustSection from "@/components/sections/TrustSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ConsultationSection from "@/components/sections/ConsultationSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PresentationSection />
        <ProcessSection />
        <ServicesSection />
        <TrustSection />
        <GallerySection />
        <TestimonialsSection />
        <ConsultationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

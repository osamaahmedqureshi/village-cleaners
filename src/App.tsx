import React, { useState } from 'react';
import { PageReveal } from './components/PageReveal';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HeritageSection } from './components/HeritageSection';
import { ServicesSection } from './components/ServicesSection';
import { GarmentArtSection } from './components/GarmentArtSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { NeighborhoodSection } from './components/NeighborhoodSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { ServiceDetailDrawer } from './components/ServiceDetailDrawer';
import { CareAdvisorModal } from './components/CareAdvisorModal';
import { ServiceItem } from './data/servicesData';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isCareAdvisorOpen, setIsCareAdvisorOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#F8F5EE] text-[#202724] selection:bg-[#C6A77A]/30 selection:text-[#183C35]">
      {/* Luxury Initial Editorial Page Reveal */}
      <PageReveal />

      {/* Desktop Magnetic Follower Cursor */}
      <CustomCursor />

      {/* Sticky 3-Zone Navigation Header */}
      <Navbar onOpenCareAdvisor={() => setIsCareAdvisorOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Section 02: Cinematic Hero */}
        <HeroSection onOpenCareAdvisor={() => setIsCareAdvisorOpen(true)} />

        {/* Section 03: Trust & Heritage */}
        <HeritageSection />

        {/* Section 04: Editorial Services Grid */}
        <ServicesSection onSelectService={(service) => setSelectedService(service)} />

        {/* Section 05: The Art of Garment Care (Full-Width Dark Green) */}
        <GarmentArtSection />

        {/* Section 06: How It Works Timeline */}
        <HowItWorksSection />

        {/* Section 07: Real Customer Reviews & Adapter */}
        <ReviewsSection />

        {/* Section 08: Visual Experience Gallery & Lightbox */}
        <GallerySection />

        {/* Section 09: Local Neighborhood Connection */}
        <NeighborhoodSection />

        {/* Section 10: Premium Contact & Visit Lounge */}
        <ContactSection />
      </main>

      {/* Section 11: Archival Footer */}
      <Footer />

      {/* Floating Action Bar on Mobile Viewports */}
      <FloatingMobileBar />

      {/* Service Detail Drawer Modal */}
      <ServiceDetailDrawer
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* Interactive Garment Care Advisor Modal */}
      <CareAdvisorModal
        isOpen={isCareAdvisorOpen}
        onClose={() => setIsCareAdvisorOpen(false)}
      />
    </div>
  );
}

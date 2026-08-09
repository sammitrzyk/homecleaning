import { useEffect } from "react";
import { initClickTracking, initScrollTracking } from "./analytics";
import { SiteHeader } from "./components/SiteHeader";
import { HeroSection } from "./components/HeroSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { BeforeAfterSection } from "./components/BeforeAfterSection";
import { ShortEstimateForm } from "./components/ShortEstimateForm";
import { TruckBanner } from "./components/TruckBanner";
import { ProjectTypesSection } from "./components/ProjectTypesSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { ServiceAreaSection } from "./components/ServiceAreaSection";
import { FAQSection } from "./components/FAQSection";
import { FinalEstimateForm } from "./components/FinalEstimateForm";
import { ClosingCta } from "./components/ClosingCta";
import { StickyMobileCta } from "./components/StickyMobileCta";
import { SiteFooter } from "./components/SiteFooter";

export default function App() {
  useEffect(() => {
    initClickTracking();
    initScrollTracking();
  }, []);

  return (
    <>
      <StickyMobileCta />
      <SiteHeader />
      <main>
        <HeroSection />
        <ReviewsSection />
        <BeforeAfterSection />
        <ShortEstimateForm />
        <TruckBanner />
        <ProjectTypesSection />
        <WhyChooseUsSection />
        <ServiceAreaSection />
        <FinalEstimateForm />
        <FAQSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}

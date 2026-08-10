import { useEffect } from "react";
import { initClickTracking, initScrollTracking } from "./analytics";
import { SiteHeader } from "./components/SiteHeader";
import { HeroSection } from "./components/HeroSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { AwardSection } from "./components/AwardSection";
import { BeforeAfterSection } from "./components/BeforeAfterSection";
import { ShortEstimateForm } from "./components/ShortEstimateForm";
import { GuaranteeSection } from "./components/GuaranteeSection";
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
        <AwardSection />
        <BeforeAfterSection />
        <ShortEstimateForm />
        <GuaranteeSection />
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

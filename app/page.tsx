import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import SolutionsSection from "@/components/SolutionsSection";
import ReachSection from "@/components/ReachSection";
import ImpactSection from "@/components/ImpactSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import PartnershipSection from "@/components/PartnershipSection";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <HighlightsSection />
      <SolutionsSection />
      <ReachSection />
      <ImpactSection />
      <PartnershipsSection />
      <PartnershipSection />
      <Footer />
    </div>

  );
}

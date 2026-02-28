import { HeroSection } from "@/components/landing/hero";
import { PassiveIncomeSection } from "@/components/landing/passive-income";
import { ChooseAssetSection } from "@/components/landing/choose-asset";

function LandingPage() {
  return (
    <main>
      <HeroSection />
      <PassiveIncomeSection />
      <ChooseAssetSection />
    </main>
  );
}

export default LandingPage;

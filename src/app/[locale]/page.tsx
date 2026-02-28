import { Footer } from "@/components/footer";
import { AppStepsSection } from "@/components/landing/app-steps";
import { AssetShowcaseSection } from "@/components/landing/asset-showcase";
import { ChooseAssetSection } from "@/components/landing/choose-asset";
import { HeroSection } from "@/components/landing/hero";
import { PassiveIncomeSection } from "@/components/landing/passive-income";
import { ProfitCtaSection } from "@/components/landing/profit-cta";
import { QuickStartSection } from "@/components/landing/quick-start";
import { WhyEvShareSection } from "@/components/landing/why-ev-share";

function LandingPage() {
  return (
    <main>
      <HeroSection />
      <PassiveIncomeSection />
      <ChooseAssetSection />
      <AssetShowcaseSection />
      <WhyEvShareSection />
      <QuickStartSection />
      <AppStepsSection />
      <ProfitCtaSection />
    </main>
  );
}

export default LandingPage;

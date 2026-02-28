import { HeroSection } from "@/components/landing/hero";
import { QuickStartSection } from "@/components/landing/quick-start";
import { AppStepsSection } from "@/components/landing/app-steps";
import { ProfitCtaSection } from "@/components/landing/profit-cta";
import { Footer } from "@/components/footer";
import { PassiveIncomeSection } from "@/components/landing/passive-income";
import { ChooseAssetSection } from "@/components/landing/choose-asset";
import { AssetShowcaseSection } from "@/components/landing/asset-showcase";
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
      <Footer />
    </main>
  );
}

export default LandingPage;

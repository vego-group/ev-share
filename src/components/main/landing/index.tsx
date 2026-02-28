import { AppStepsSection } from "./app-steps";
import { AssetShowcaseSection } from "./asset-showcase";
import { ChooseAssetSection } from "./choose-asset";
import { HeroSection } from "./hero";
import { PassiveIncomeSection } from "./passive-income";
import { ProfitCtaSection } from "./profit-cta";
import { QuickStartSection } from "./quick-start";
import { WhyEvShareSection } from "./why-ev-share";

function Landing() {
  return (
    <>
      <HeroSection />
      <PassiveIncomeSection />
      <ChooseAssetSection />
      <AssetShowcaseSection />
      <WhyEvShareSection />
      <QuickStartSection />
      <AppStepsSection />
      <ProfitCtaSection />
    </>
  );
}

export default Landing;

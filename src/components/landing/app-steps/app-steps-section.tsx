"use client";

import { useTranslations } from "next-intl";
import { AppStepCard } from "./app-step-card";

export function AppStepsSection() {
  const t = useTranslations("LandingPage.appSteps");

  const steps = [
    { key: "step1", imageSrc: "/images/app-1.jpg" },
    { key: "step2", imageSrc: "/images/app-2.jpg" },
    { key: "step3", imageSrc: "/images/app-3.jpg" },
    { key: "step4", imageSrc: "/images/app-4.jpg" },
  ];

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, i) => (
            <AppStepCard
              key={step.key}
              imageSrc={step.imageSrc}
              number={t(`${step.key}.number`)}
              title={t(`${step.key}.title`)}
              body={t(`${step.key}.body`)}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

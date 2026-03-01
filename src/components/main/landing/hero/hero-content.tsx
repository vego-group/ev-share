import { HeroActions } from "./hero-actions";

type HeroContentProps = {
  title: string;
  tag: string;
  description: string;
  benefits: string;
  primaryCta: string;
  secondaryCta: string;
};

export function HeroContent({
  title,
  tag,
  description,
  benefits,
  primaryCta,
}: HeroContentProps) {
  return (
    <div className="max-w-xl text-white">
      <h1 className="text-2xl font-semibold leading-relaxed md:text-4xl">
        {title}
      </h1>

      <p className="mt-4 text-sm font-semibold text-primary">{tag}</p>

      <p className="mt-2 max-w-lg text-sm text-white/85 md:text-base">
        {description}
      </p>

      <p className="mt-3 max-w-lg text-sm text-white/85 md:text-base">
        {benefits}
      </p>

      <HeroActions primaryLabel={primaryCta} />
    </div>
  );
}

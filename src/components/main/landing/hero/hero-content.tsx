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
    <div className="w-full max-w-2xl text-white">
      <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
        {tag}
      </p>

      <h1 className="mt-5 text-3xl font-semibold leading-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h1>

      <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
        {description}
      </p>

      <div className="mt-5 h-px w-16 bg-primary/55" />

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
        {benefits}
      </p>

      <HeroActions primaryLabel={primaryCta} />
    </div>
  );
}

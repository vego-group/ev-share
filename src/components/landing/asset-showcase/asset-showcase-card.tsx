import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

type AssetShowcaseCardProps = {
  title: string;
  description: string;
  cta: string;
  imageSrc: string;
  href: string;
};

export function AssetShowcaseCard({
  title,
  description,
  cta,
  imageSrc,
  href,
}: AssetShowcaseCardProps) {
  const locale = useLocale();
  const Arrow = locale === "ar" ? ChevronRight : ChevronLeft;
  return (
    <article className="group relative min-h-[420px] overflow-hidden border border-white/20 bg-black md:min-h-[680px]">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/75" />

      <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-6">
        <div className="flex justify-center">
          <span className="bg-black/55 px-5 py-2 text-lg font-bold text-white md:text-[30px] md:leading-tight">
            {title}
          </span>
        </div>

        <div className="space-y-4">
          <p className="inline-block bg-black/55 px-4 py-2 text-base font-semibold leading-relaxed text-white md:text-[24px] md:leading-[1.35]">
            {description}
          </p>

          <Link
            href={href}
            className="inline-flex items-center gap-3 text-lg font-medium text-white underline decoration-primary decoration-2 underline-offset-8 md:text-[20px]"
          >
            <span className="inline-flex size-8 items-center justify-center rounded-full bg-primary text-secondary">
              <Arrow className="h-5 w-5 md:h-7 md:w-7" />
            </span>
            {cta}
          </Link>
        </div>
      </div>
    </article>
  );
}

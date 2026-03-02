import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactHeaderCard() {
  const t = useTranslations("ContactPage");

  return (
    <div className="rounded-3xl border border-primary/30 bg-linear-to-r from-primary/35 to-primary/12 p-5 md:p-6">
      <div className="flex items-center gap-3">
        <div className="inline-flex size-13 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary shadow-lg shadow-secondary/30">
          <Send className="size-6" />
        </div>
        <h1 className="text-2xl font-bold text-secondary md:text-4xl">
          {t("title")}
        </h1>
      </div>
      <p className="mt-3 max-w-2xl leading-8 text-secondary/90">
        {t("description")}
      </p>
    </div>
  );
}

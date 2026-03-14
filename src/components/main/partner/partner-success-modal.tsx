"use client";

import { Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Modal from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

type PartnerSuccessModalProps = {
  open: boolean;
  onClose: () => void;
};

export function PartnerSuccessModal({
  open,
  onClose,
}: PartnerSuccessModalProps) {
  const locale = useLocale();
  const t = useTranslations("PartnerPage");
  const isArabic = locale === "ar";

  return (
    <Modal
      open={open}
      onClose={onClose}
      contentClassName="rounded-[24px] sm:max-w-xl"
    >
      <div className="flex flex-col items-center text-center py-2.5 sm:py-5">
        <div className="mb-8 flex size-28 items-center justify-center rounded-full border-4 border-[#dff4d8]">
          <Check className="size-14 text-[#9ade7a]" strokeWidth={3} />
        </div>

        <h2
          dir={isArabic ? "rtl" : "ltr"}
          className="text-3xl font-semibold text-[#4b4b4b] sm:text-4xl"
        >
          {t("successModal.title")}
        </h2>

        <p
          dir={isArabic ? "rtl" : "ltr"}
          className="mt-5 max-w-120 text-base leading-8 text-[#5b5b5b] sm:text-xl"
        >
          {t("successModal.description")}
        </p>

        <Button
          type="button"
          onClick={onClose}
          className="mt-8 h-12 rounded-xl border-4 border-[#ffe381] bg-[#ffd11a] px-8 text-lg font-medium text-white shadow-none hover:bg-[#f4c400]"
        >
          {t("successModal.confirmButton")}
        </Button>
      </div>
    </Modal>
  );
}

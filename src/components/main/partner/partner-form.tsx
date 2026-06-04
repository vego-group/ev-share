"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  PartnerFormValues,
  partnerSchema,
  type PartnerSchemaInput,
} from "@/schemas";
import { PartnerDetailsField } from "./partner-details-field";
import { PartnerEmailField } from "./partner-email-field";
import { PartnerFullNameField } from "./partner-full-name-field";
import { PartnerPhoneField } from "./partner-phone-field";
import { PartnerSubmitButton } from "./partner-submit-button";
import { zodResolver } from "@hookform/resolvers/zod";
import { partnerAPI } from "@/services/mutations";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { PartnerSuccessModal } from "./partner-success-modal";

type PartnerFormProps = {
  reduceMotion: boolean;
};

export function PartnerForm({ reduceMotion }: PartnerFormProps) {
  const router = useRouter();
  const t = useTranslations("PartnerPage");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const getValidationMsg = (msg?: string) =>
    msg ? t(msg as never) : undefined;

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<PartnerSchemaInput, unknown, PartnerFormValues>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      details: "",
      email: "",
      name: "",
      phone: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: PartnerFormValues) => {
    const result = await partnerAPI(data);
    if (result?.ok) {
      setIsSuccessModalOpen(true);
      return;
    }
    toast.error(result?.message);
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
    router.push("/");
  };

  return (
    <>
      <motion.form
        initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-5"
      >
        <PartnerFullNameField
          label={t("fullNameLabel")}
          placeholder={t("fullNamePlaceholder")}
          register={register}
          errorMessage={
            getValidationMsg(errors.name?.message) ?? errors.name?.message
          }
        />

        <PartnerEmailField
          label={t("emailLabel")}
          placeholder={t("emailPlaceholder")}
          register={register}
          errorMessage={
            getValidationMsg(errors.email?.message) ?? errors.email?.message
          }
        />

        <PartnerPhoneField
          label={t("phoneLabel")}
          placeholder={t("phonePlaceholder")}
          countryCodeLabel={t("countryCodeLabel")}
          flagAlt={t("flagAlt")}
          register={register}
          errorMessage={
            getValidationMsg(errors.phone?.message) ?? errors.phone?.message
          }
        />

        <PartnerDetailsField
          label={t("detailsLabel")}
          placeholder={t("detailsPlaceholder")}
          register={register}
          errorMessage={
            getValidationMsg(errors.details?.message) ??
            errors.details?.message
          }
        />

        <PartnerSubmitButton
          label={t("submitButton")}
          isSubmitting={isSubmitting}
        />
      </motion.form>

      <PartnerSuccessModal
        open={isSuccessModalOpen}
        onClose={handleSuccessModalClose}
      />
    </>
  );
}

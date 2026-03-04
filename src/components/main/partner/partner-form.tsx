"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { partnerSchema, type PartnerSchema, saudiCityValues } from "@/schemas";
import { PartnerCityField } from "./partner-city-field";
import { PartnerFullNameField } from "./partner-full-name-field";
import { PartnerPhoneField } from "./partner-phone-field";
import { PartnerSubmitButton } from "./partner-submit-button";
import { zodResolver } from "@hookform/resolvers/zod";

type PartnerFormProps = {
  reduceMotion: boolean;
};

export function PartnerForm({ reduceMotion }: PartnerFormProps) {
  const t = useTranslations("PartnerPage");
  const getValidationMsg = (msg?: string) =>
    msg ? t(msg as never) : undefined;

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<PartnerSchema>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      city: "",
      fullName: "",
      phone: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = handleSubmit(() => {});

  const cityOptions = saudiCityValues.map((cityValue) => ({
    label: t(`cities.${cityValue}`),
    value: cityValue,
  }));

  return (
    <motion.form
      initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onSubmit={onSubmit}
      className="mt-8 space-y-5"
    >
      <PartnerFullNameField
        label={t("fullNameLabel")}
        placeholder={t("fullNamePlaceholder")}
        register={register}
        errorMessage={
          getValidationMsg(errors.fullName?.message) ?? errors.fullName?.message
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

      <PartnerCityField
        label={t("cityLabel")}
        placeholder={t("cityPlaceholder")}
        options={cityOptions}
        register={register}
        errorMessage={
          getValidationMsg(errors.city?.message) ?? errors.city?.message
        }
      />

      <PartnerSubmitButton label={t("submitButton")} />
    </motion.form>
  );
}

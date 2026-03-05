import { z } from "zod";

export const saudiCityValues = [
  "riyadh",
  "jeddah",
  "makkah",
  "madinah",
  "dammam",
  "khobar",
  "dhahran",
  "taif",
  "tabuk",
  "abha",
  "khamis_mushait",
  "buraidah",
  "unaizah",
  "hail",
  "jubail",
  "yanbu",
  "najran",
  "jazan",
  "al_bahah",
  "sakaka",
  "arar",
  "qatif",
  "al_hofuf",
  "al_mubarraz",
  "al_kharj",
  "al_ahsa",
  "ras_tanura",
  "al_jouf",
  "qurayyat",
  "bishah",
  "al_ula",
  "rabigh",
  "al_majmaah",
  "wadi_ad_dawasir",
  "al_qunfudhah",
  "sabya",
  "afif",
  "al_namas",
  "turabah",
  "shaqra",
] as const;

function normalizeSaudiPhone(value: unknown) {
  let digits = String(value ?? "").replace(/\D/g, "");

  if (digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  if (digits.startsWith("966")) {
    digits = digits.slice(3);
  }

  return `966${digits}`;
}

export const partnerSchema = z.object({
  name: z.string().trim().min(2, "errors.fullNameMin"),
  phone: z.preprocess(
    normalizeSaudiPhone,
    z.string().regex(/^9665\d{8}$/, "errors.phoneInvalid"),
  ),
  city: z
    .string()
    .min(1, "errors.cityRequired")
    .refine(
      (value) =>
        saudiCityValues.includes(value as (typeof saudiCityValues)[number]),
      "errors.cityRequired",
    ),
});

export type PartnerSchema = z.output<typeof partnerSchema>;
export type PartnerSchemaInput = z.input<typeof partnerSchema>;
export type PartnerFormValues = PartnerSchema;

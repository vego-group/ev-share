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

export const partnerSchema = z.object({
  fullName: z.string().trim().min(2, "errors.fullNameMin").max(80, "errors.fullNameMax"),
  phone: z
    .string()
    .trim()
    .regex(/^\d+$/, "errors.phoneDigitsOnly")
    .regex(/^[1-9]\d{8}$/, "errors.phoneInvalid"),
  city: z
    .string()
    .min(1, "errors.cityRequired")
    .refine(
      (value) =>
        saudiCityValues.includes(value as (typeof saudiCityValues)[number]),
      "errors.cityRequired",
    ),
});

export type PartnerSchema = z.infer<typeof partnerSchema>;
export type PartnerFormValues = PartnerSchema;



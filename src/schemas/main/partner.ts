import { z } from "zod";

function normalizeSaudiPhone(value: unknown) {
  let digits = String(value ?? "").replace(/\D/g, "");

  if (!digits) {
    return "";
  }

  if (digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  if (digits.startsWith("966")) {
    digits = digits.slice(3);
  }

  return `966${digits}`;
}

export const partnerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "errors.fullNameRequired")
    .min(2, "errors.fullNameMin")
    .max(80, "errors.fullNameMax"),
  phone: z.preprocess(
    normalizeSaudiPhone,
    z
      .string()
      .min(1, "errors.phoneRequired")
      .regex(/^9665\d{8}$/, "errors.phoneInvalid"),
  ),
  email: z
    .string()
    .trim()
    .min(1, "errors.emailRequired")
    .email("errors.emailInvalid"),
  details: z.string().trim().min(10, "errors.detailsMin").max(1000, "errors.detailsMax"),
});

export type PartnerSchema = z.output<typeof partnerSchema>;
export type PartnerSchemaInput = z.input<typeof partnerSchema>;
export type PartnerFormValues = PartnerSchema;

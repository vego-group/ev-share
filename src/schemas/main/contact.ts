import { z } from "zod";

export const contactSubjectValues = [
  "general",
  "asset",
  "account",
  "other",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "errors.nameMin").max(80, "errors.nameMax"),
  email: z.string().trim().email("errors.emailInvalid"),
  phone: z
    .string()
    .trim()
    .regex(/^\d+$/, "errors.phoneDigitsOnly")
    .min(8, "errors.phoneInvalid")
    .max(12, "errors.phoneInvalid"),
  subject: z
    .string()
    .min(1, "errors.subjectRequired")
    .refine(
      (value) =>
        contactSubjectValues.includes(
          value as (typeof contactSubjectValues)[number],
        ),
      "errors.subjectRequired",
    ),
  message: z.string().trim().min(10, "errors.messageMin").max(1000, "errors.messageMax"),
});

export type ContactSchema = z.infer<typeof contactSchema>;
export type ContactFormValues = ContactSchema;

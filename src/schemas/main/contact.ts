import { z } from "zod";

export const contactSubjectValues = [
  "general",
  "asset",
  "account",
  "other",
] as const;

type ContactSchemaMessages = {
  emailInvalid: string;
  messageMax: string;
  messageMin: string;
  nameMax: string;
  nameMin: string;
  phoneDigitsOnly: string;
  phoneInvalid: string;
  subjectRequired: string;
};

export const createContactSchema = (messages: ContactSchemaMessages) =>
  z.object({
    name: z.string().trim().min(2, messages.nameMin).max(80, messages.nameMax),
    email: z.string().trim().email(messages.emailInvalid),
    phone: z
      .string()
      .trim()
      .regex(/^\d+$/, messages.phoneDigitsOnly)
      .min(8, messages.phoneInvalid)
      .max(12, messages.phoneInvalid),
    subject: z
      .string()
      .min(1, messages.subjectRequired)
      .refine(
        (value) =>
          contactSubjectValues.includes(value as (typeof contactSubjectValues)[number]),
        messages.subjectRequired,
      ),
    message: z
      .string()
      .trim()
      .min(10, messages.messageMin)
      .max(1000, messages.messageMax),
  });

export type ContactFormValues = z.infer<
  ReturnType<typeof createContactSchema>
>;

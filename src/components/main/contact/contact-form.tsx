import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

const fieldClassName =
  "h-13 w-full rounded-2xl border border-secondary/15 bg-white px-4 text-start text-base text-secondary outline-none transition duration-200 placeholder:text-start placeholder:text-secondary/45 focus:border-primary focus:ring-3 focus:ring-primary/35";
const fieldErrorClassName =
  "border-red-500 focus:border-red-500 focus:ring-red-200";
const errorTextClassName = "mt-2 text-sm text-red-600";

function formatSaudiLocalPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 9);

  if (digits.length <= 2) return digits;
  if (digits.length <= 5) return `${digits.slice(0, 2)} ${digits.slice(2)}`;

  return `${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5)}`;
}

export function ContactForm() {
  const t = useTranslations("ContactPage");
  const reduceMotion = useReducedMotion();
  const getValidationMsg = (msg?: string) =>
    msg ? t(msg as never) : undefined;

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
      phone: "",
      subject: "",
    },
    mode: "onChange",
  });

  const onSubmit = handleSubmit(() => {});

  return (
    <motion.form
      initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.08 }}
      onSubmit={onSubmit}
      className="space-y-5"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="sr-only">{t("fullNameLabel")}</span>
          <input
            type="text"
            placeholder={t("fullNameLabel")}
            className={`${fieldClassName} ${errors.name ? fieldErrorClassName : ""}`}
            {...register("name")}
          />
          {errors.name ? (
            <p className={errorTextClassName}>
              {getValidationMsg(errors.name.message) ?? errors.name.message}
            </p>
          ) : null}
        </label>
        <label className="block">
          <span className="sr-only">{t("emailLabel")}</span>
          <input
            type="email"
            placeholder={t("emailLabel")}
            className={`${fieldClassName} ${errors.email ? fieldErrorClassName : ""}`}
            {...register("email")}
          />
          {errors.email ? (
            <p className={errorTextClassName}>
              {getValidationMsg(errors.email.message) ?? errors.email.message}
            </p>
          ) : null}
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="sr-only">{t("phoneLabel")}</span>
          <div
            dir="ltr"
            className={`flex h-13 w-full overflow-hidden rounded-2xl border bg-white ${
              errors.phone
                ? "border-red-500 focus-within:border-red-500 focus-within:ring-3 focus-within:ring-red-200"
                : "border-secondary/15 focus-within:border-primary focus-within:ring-3 focus-within:ring-primary/35"
            }`}
          >
            <Button
              type="button"
              disabled
              aria-label="Saudi Arabia code +966"
              variant="outline"
              className="h-full shrink-0 cursor-not-allowed items-center gap-1.5 rounded-none border-0 border-e border-secondary/15 bg-secondary/5 px-3 text-secondary/80 shadow-none"
            >
              <Image
                src="/images/flag.png"
                alt="Saudi Arabia Flag"
                width={18}
                height={12}
                aria-hidden="true"
                className="rounded-[2px] object-cover"
              />
              <span className="text-sm font-medium" dir="ltr">
                +966
              </span>
            </Button>
            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9 ]*"
              placeholder="11 500 1468"
              className="h-full w-full bg-transparent px-3 text-base text-secondary outline-none placeholder:text-secondary/45"
              maxLength={11}
              {...register("phone", {
                setValueAs: (value) => String(value ?? "").replace(/\D/g, ""),
              })}
              onInput={(event) => {
                event.currentTarget.value = formatSaudiLocalPhone(
                  event.currentTarget.value,
                );
              }}
            />
          </div>
          {errors.phone ? (
            <p className={errorTextClassName}>
              {getValidationMsg(errors.phone.message) ?? errors.phone.message}
            </p>
          ) : null}
        </label>
        <label className="block">
          <span className="sr-only">{t("subjectLabel")}</span>
          <select
            defaultValue=""
            className={`${fieldClassName} ${errors.subject ? fieldErrorClassName : ""}`}
            {...register("subject")}
          >
            <option value="" disabled>
              {t("selectSubjectPlaceholder")}
            </option>
            <option value="general">{t("subjectGeneral")}</option>
            <option value="asset">{t("subjectAssetSupport")}</option>
            <option value="account">{t("subjectAccountHelp")}</option>
            <option value="other">{t("subjectOther")}</option>
          </select>
          {errors.subject ? (
            <p className={errorTextClassName}>
              {getValidationMsg(errors.subject.message) ??
                errors.subject.message}
            </p>
          ) : null}
        </label>
      </div>

      <label className="block">
        <span className="sr-only">{t("messageLabel")}</span>
        <textarea
          rows={6}
          placeholder={t("messagePlaceholder")}
          className={`w-full rounded-2xl border bg-white px-4 py-4 text-start text-base text-secondary outline-none transition duration-200 placeholder:text-start placeholder:text-secondary/45 ${
            errors.message
              ? "border-red-500 focus:border-red-500 focus:ring-3 focus:ring-red-200"
              : "border-secondary/15 focus:border-primary focus:ring-3 focus:ring-primary/35"
          }`}
          {...register("message")}
        />
        {errors.message ? (
          <p className={errorTextClassName}>
            {getValidationMsg(errors.message.message) ?? errors.message.message}
          </p>
        ) : null}
      </label>

      <Button
        type="submit"
        variant="secondary"
        className="h-14 w-full rounded-2xl bg-secondary px-6 text-lg font-semibold text-primary hover:bg-secondary/95"
      >
        {t("sendMessageButton")}
      </Button>
    </motion.form>
  );
}


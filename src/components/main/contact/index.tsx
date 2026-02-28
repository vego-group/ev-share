import { useTranslations } from "next-intl";

function Contact() {
  const t = useTranslations("ContactPage");
  return (
    <section className="mx-auto w-full max-w-245 px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold text-secondary md:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-3 leading-8 text-secondary">{t("description")}</p>

      <div className="mt-8 space-y-3 text-secondary">
        <p>
          <strong>{t("emailLabel")}:</strong> support@evshare.sa
        </p>
        <p>
          <strong>{t("phoneLabel")}:</strong>
          <span dir="ltr">+966 50 000 0000</span>
        </p>
        <p>
          <strong>{t("hoursLabel")}:</strong> {t("hoursValue")}
        </p>
      </div>
    </section>
  );
}

export default Contact;

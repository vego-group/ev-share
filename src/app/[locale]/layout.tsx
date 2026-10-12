import type { Metadata } from "next";
import { Alexandria, Manrope } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Toaster } from "react-hot-toast";

const manrope = Manrope({
  variable: "--font-latin",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const alexandria = Alexandria({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
  fallback: ["Tahoma", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "EV SHARE",
  description:
    "EV SHARE is a smart mobility sharing platform for scooters, bikes, and cars. Book in minutes, ride freely, and pay based on your usage.",
};
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${manrope.variable} ${alexandria.variable} antialiased`}
      >
        <div className="min-h-svh">
          <NextIntlClientProvider>
            {/* <ClientLoader /> */}
            {children}
            <Toaster />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}

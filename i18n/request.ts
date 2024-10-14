import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as any)) notFound();

  return {
    messages: {
      ...(await import(`../messages/${locale}/common.json`)).default,
      ...(await import(`../messages/${locale}/home.json`)).default,
      ...(await import(`../messages/${locale}/tariffs.json`)).default,
      ...(await import(`../messages/${locale}/audit.json`)).default,
      ...(await import(`../messages/${locale}/referral.json`)).default,
      ...(await import(`../messages/${locale}/faq.json`)).default,
      ...(await import(`../messages/${locale}/contacts.json`)).default,
    },
    defaultTranslationValues: {
      b(chunks) {
        return `<b>${chunks}</b>`;
      },
    },
  };
});

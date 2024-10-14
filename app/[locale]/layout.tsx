import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { FC, ReactNode } from "react";
import classNames from "classnames";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "reset-css";
import "./globals.css";
import { Breadcrumbs, Footer, Header } from "../components";

const inter = Inter_Tight({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Well Wallet",
  description: "Безопасный и прозрачный крипто-кошелек в Telegram",
};

type Props = Readonly<{
  children: ReactNode;
  params: { locale?: string };
}>;

const RootLayout: FC<Props> = ({ children, params: { locale = "en" } }) => {
  const messages = useMessages();
  return (
    <html>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={classNames(`${inter.className}`)}>
          <div className="main">
            <Header />
            <main className="content">
              <Breadcrumbs />
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </NextIntlClientProvider>
    </html>
  );
};

export default RootLayout;

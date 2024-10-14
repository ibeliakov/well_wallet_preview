"use client";

import { FC, useEffect, useId, useState } from "react";
import Image from "next/image";

import icon from "./images/icon.svg";
import classNames from "classnames";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

import styles from "./LanguageSwitch.module.css";

const languages: {
  locale: "en" | "ru";
  name: string;
}[] = [
  {
    locale: "en",
    name: "English",
  },
  {
    locale: "ru",
    name: "Русский",
  },
];

const LanguageSwitch: FC = () => {
  const t = useTranslations("common");
  const currentLocale = useLocale();
  const id = useId();
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // @ts-ignore
      if (!!event?.target?.closest(`[id="${id}"]`)) {
        return;
      }
      setShow(false);
    };
    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, [setShow, id]);

  return (
    <div className={styles.box} id={id}>
      <div
        className={classNames(styles.btn, {
          [styles.active]: show,
        })}
        onClick={() => setShow((show) => !show)}
      >
        <Image src={icon} alt="Well Wallet" width={20} height={20} />
      </div>
      <div className={classNames(styles.list, { [styles.show]: show })}>
        <div className={styles.list_text}>{t("language")}:</div>
        {languages.map(({ locale, name }) => (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            onClick={() => setShow(false)}
            className={classNames(styles.list_text, styles.link, {
              [styles.active]: currentLocale === locale,
            })}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitch;

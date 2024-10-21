import { FC } from "react";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import Image from "next/image";

import mail from "./images/mail.svg";
import telegram from "./images/telegram.svg";
import telegramWhite from "./images/telegram-white.svg";
import styles from "./Helper.module.css";
import { LINK_TO_SUPPORT, SUPPORT_EMAIL } from "@/app/constants";

const Helper: FC = () => {
  const t = useTranslations("common");
  return (
    <div className={styles.box}>
      <div className={styles.links}>
        <a
          href={LINK_TO_SUPPORT}
          target="_blank"
          rel="noreferrer"
          className={classNames(styles.link, styles.support)}
        >
          <Image
            alt="mail"
            className={styles.icon}
            src={telegram}
            height={14}
            width={16}
          />
          <Image
            alt="mail"
            className={styles.hoverIcon}
            src={telegramWhite}
            height={14}
            width={16}
          />
          <span className={styles.link_text}>{t("support")}</span>
        </a>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className={classNames(styles.link, styles.mail)}
        >
          <Image alt="mail" src={mail} height={10} width={14} />
          <span className={styles.link_text}>{SUPPORT_EMAIL}</span>
        </a>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>WELL CORE TECHNOLOGIES SRL</div>
        <div>Registered in the National Registry of Costa Rica</div>
        <div>Legal ID: 3-102-913956</div>
      </div>
    </div>
  );
};

export default Helper;

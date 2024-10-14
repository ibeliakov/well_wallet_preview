import { FC } from "react";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import Image from "next/image";

import mail from "./images/mail.svg";
import telegram from "./images/telegram.svg";
import styles from "./Helper.module.css";

const Helper: FC = () => {
  const t = useTranslations("common");
  return (
    <div className={styles.box}>
      <div className={styles.links}>
        <a
          href="https://t.me/your_bot"
          target="_blank"
          rel="noreferrer"
          className={classNames(styles.link, styles.support)}
        >
          <Image alt="mail" src={telegram} height={14} width={16} />
          {t("support")}
        </a>
        <a
          href="mailto:test.info@wellwallet.com"
          className={classNames(styles.link, styles.mail)}
        >
          <Image alt="mail" src={mail} height={10} width={14} />
          test.info@wellwallet.com
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

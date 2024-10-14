import { FC } from "react";
import Image from "next/image";
import logoIcon from "./images/logo.svg";

import styles from "./ToBot.module.css";
import { useTranslations } from "next-intl";

const ToBot: FC = () => {
  const t = useTranslations("common");
  return (
    <a
      href="https://t.me/your_bot"
      target="_blank"
      rel="noreferrer"
      className={styles.btn}
    >
      {t("to_bot")}
      <Image src={logoIcon} alt="Well Wallet" width={24} height={24} />
    </a>
  );
};

export default ToBot;

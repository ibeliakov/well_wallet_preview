"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import logoIcon from "./images/logo.svg";
import styles from "./ToBot.module.css";
import { useWindowOnEvent } from "@/app/hooks";
import classNames from "classnames";

type Props = Readonly<{
  resizeText?: boolean;
  isFull?: boolean;
}>;

const ToBot: FC<Props> = ({ resizeText, isFull }) => {
  const [showText, setShowText] = useState(
    !resizeText || window.innerWidth > 1200
  );
  const t = useTranslations("common");

  useWindowOnEvent(
    "resize",
    () => {
      if (!resizeText) {
        return;
      }
      setShowText(window.innerWidth > 1200);
    },
    [setShowText, resizeText],
    true
  );

  return (
    <a
      href="https://t.me/your_bot"
      target="_blank"
      rel="noreferrer"
      className={classNames(styles.btn, {
        [styles.without_text]: !showText,
        [styles.full]: isFull,
      })}
    >
      {showText && t("to_bot")}
      <Image
        src={logoIcon}
        className={styles.icon}
        alt="Well Wallet"
        width={24}
        height={24}
      />
    </a>
  );
};

export default ToBot;

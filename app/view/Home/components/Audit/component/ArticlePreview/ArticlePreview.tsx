"use client";
import { FC, useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";

import { PhoneWithMenu } from "@/app/components";
import { useWindowOnEvent } from "@/app/hooks";
import styles from "./ArticlePreview.module.css";

const ArticlePreview: FC = () => {
  const t = useTranslations("home");
  const refPhone = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useWindowOnEvent(
    "scroll",
    () => {
      const top = refPhone.current?.getBoundingClientRect().top || 0;
      const height = refPhone.current?.getBoundingClientRect().height || 0;
      if (
        top >= 0 &&
        window.innerHeight -
          (refPhone.current?.getBoundingClientRect().top || 0) >=
          height
      ) {
        setStartAnimation(true);
      }
    },
    [],
    true
  );

  useEffect(() => {
    if (!startAnimation) {
      return;
    }
    const chat = chatRef.current;
    const items: ChildNode[] = [];

    chat?.childNodes.forEach((item) => {
      items.unshift(item);
    });
    let i = 0;
    const interval = setInterval(() => {
      //@ts-ignore
      items[i]?.classList.add("active");
      i++;
      if (i === items.length) {
        clearInterval(interval);
        return;
      }
    }, 500);
  }, [startAnimation]);
  return (
    <div className={styles.article_preview}>
      <div ref={refPhone} className={styles.phone}>
        <PhoneWithMenu activeBtn={startAnimation ? 6 : undefined} />
      </div>
      <div ref={chatRef} className={styles.article_preview_chat}>
        <div className={styles.message}>{t("chat_message")}</div>
        <div className={styles.currencies}>
          {["TRC20", "ERC20", "BTC"].map((message, i) => (
            <div className={styles.currency} key={i}>
              {message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;

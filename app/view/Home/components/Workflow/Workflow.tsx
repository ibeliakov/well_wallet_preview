"use client";
import { Container, PhoneWithMenu, SectionInfo } from "@/app/components";
import { useTranslations } from "next-intl";
import Image from "next/image";

import styles from "./Workflow.module.css";
import { FC, useRef, useState, useEffect } from "react";
import { useWindowOnEvent } from "@/app/hooks";

const leftList = [
  {
    name: "safe_replenishment",
    image: "/images/wallet_save.svg",
  },
  {
    name: "quick_exchange",
    image: "/images/exchange.svg",
  },
  { name: "convenient_sending", image: "/images/sending.svg" },
];
const rightList = [
  {
    name: "aml_check",
    image: "/images/safety.svg",
  },
  {
    name: "support",
    image: "/images/support.svg",
  },
  { name: "low_fees", image: "/images/percentage.svg" },
];

const Workflow: FC = () => {
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
      items.push(item);
    });
    let i = 0;
    //@ts-ignore
    chat?.parentElement.classList.add("active");
    const interval = setInterval(() => {
      //@ts-ignore
      items[i].classList.add("active");
      i++;
      if (i === items.length) {
        clearInterval(interval);
        return;
      }
    }, 1000);
  }, [startAnimation]);

  return (
    <section className={styles.wrap}>
      <SectionInfo
        title={t("workflow.title")}
        description={t("workflow.description")}
        className={styles.info}
      />
      <Container className={styles.options}>
        <div className={styles.column}>
          {leftList.map(({ name, image }, i) => (
            <div className={styles.option} key={i}>
              <Image src={image} height={50} width={50} alt="icon" />
              <h3 className={styles.option_title}>{t(`${name}.title`)}</h3>
              <div className={styles.option_description}>
                {t(`${name}.description`)}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.example}>
          <div ref={chatRef} className={styles.chat}>
            <div className={styles.today}>Today</div>
            <div className={styles.start}>/start</div>
            <div className={styles.welcome}>{t("welcome")}</div>
          </div>
          <div ref={refPhone}>
            <PhoneWithMenu className={styles.phone} />
          </div>
        </div>
        <div className={styles.column}>
          {rightList.map(({ name, image }, i) => (
            <div className={styles.option} key={i}>
              <Image src={image} height={50} width={50} alt="icon" />
              <h3 className={styles.option_title}>{t(`${name}.title`)}</h3>
              <div className={styles.option_description}>
                {t(`${name}.description`)}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Workflow;

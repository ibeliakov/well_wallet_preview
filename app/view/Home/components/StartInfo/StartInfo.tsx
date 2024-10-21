"use client";
import { BtnStartUse, Container } from "@/app/components";
import { useTranslations } from "next-intl";
import styles from "./StartInfo.module.css";
import Image from "next/image";
import classNames from "classnames";
import { FC, useEffect, useRef } from "react";

const StartInfo: FC = () => {
  const t = useTranslations("home");
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = [ref1, ref2, ref3, ref4];
    let i = 0;
    ref1.current?.classList.add(styles.active);
    const interval = setInterval(() => {
      i++;
      if (i === 4) {
        clearInterval(interval);
        return;
      }
      refs[i].current?.classList.add(styles.active);
    }, 500);
    return () => {
      interval && clearInterval(interval);
    };
  }, []);

  return (
    <section>
      <Container className={styles.content}>
        <h1 className={styles.title}>{t("title")}</h1>
        <div className={styles.btnBox}>
          <BtnStartUse />
        </div>
        <div className={styles.option}>
          <div className={classNames(styles.option_line, "clearfix")}>
            <div
              ref={ref1}
              className={classNames(styles.option_item, styles.item1)}
            >
              <div className={styles.option_item_content}>
                <Image
                  src="/images/wallet_save.svg"
                  height={40}
                  width={40}
                  alt={t("replenishment")}
                />
                <div className={styles.option_item_text}>
                  {t("replenishment")}
                </div>
              </div>
            </div>
            <div
              ref={ref2}
              className={classNames(styles.option_item, styles.item2)}
            >
              <div className={styles.option_item_content}>
                <Image
                  src="/images/sending.svg"
                  height={40}
                  width={40}
                  alt={t("sending")}
                />
                <div className={styles.option_item_text}>{t("sending")}</div>
              </div>
            </div>
          </div>
          <div
            className={classNames(
              styles.option_line,
              styles.option_line_1,
              "clearfix"
            )}
          >
            <div
              ref={ref3}
              className={classNames(styles.option_item, styles.item3)}
            >
              <div className={styles.option_item_content}>
                <Image
                  src="/images/exchange.svg"
                  height={40}
                  width={40}
                  alt={t("exchange")}
                />
                <div className={styles.option_item_text}>{t("exchange")}</div>
              </div>
            </div>
            <div
              ref={ref4}
              className={classNames(styles.option_item, styles.item4)}
            >
              <div className={styles.option_item_content}>
                <Image
                  src="/images/safety.svg"
                  height={40}
                  width={40}
                  alt={t("aml")}
                />
                <div className={styles.option_item_text}>{t("aml")}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StartInfo;

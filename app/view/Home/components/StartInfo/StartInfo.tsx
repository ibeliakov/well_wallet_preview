import { BtnStartUse, Container } from "@/app/components";
import { useTranslations } from "next-intl";
import styles from "./StartInfo.module.css";
import Image from "next/image";
import classNames from "classnames";
import { FC } from "react";

const StartInfo: FC = () => {
  const t = useTranslations("home");
  return (
    <section>
      <Container className={styles.content}>
        <h1 className={styles.title}>{t("title")}</h1>
        <div className={styles.btnBox}>
          <BtnStartUse />
        </div>
        <div className={styles.option}>
          <div className={classNames(styles.option_line, "clearfix")}>
            <div className={styles.option_item}>
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
            <div className={styles.option_item}>
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
            <div className={styles.option_item}>
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
            <div className={styles.option_item}>
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

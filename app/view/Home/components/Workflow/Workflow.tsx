import { Container, PhoneWithMenu, SectionInfo } from "@/app/components";
import { useTranslations } from "next-intl";
import Image from "next/image";

import styles from "./Workflow.module.css";
import { FC } from "react";

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
          <div className={styles.chat}>
            <div className={styles.today}>Today</div>
            <div className={styles.start}>/start</div>
            <div className={styles.welcome}>{t("welcome")}</div>
          </div>
          <PhoneWithMenu className={styles.phone} />
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

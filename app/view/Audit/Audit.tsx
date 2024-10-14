import { Container, SectionInfo } from "@/app/components";
import { useTranslations } from "next-intl";
import { FC } from "react";

import styles from "./Audit.module.css";
import { Article } from "./componets";
import Image from "next/image";

const Audit: FC = () => {
  const t = useTranslations("audit");

  const options = [
    "/images/safe_card.svg",
    "/images/safe_wallet.svg",
    "/images/safe_exchange.svg",
    "/images/safe_audit.svg",
  ];

  return (
    <div className={styles.wrap}>
      <SectionInfo title={t("title")} className={styles.content} />
      <Container className={styles.content}>
        <Article
          title={t("section_1.title")}
          description={t("section_1.description")}
        />
        <Article
          title={t("section_2.title")}
          description={t("section_2.description")}
        />
        <Article
          title={t("section_3.title")}
          description={t("section_3.description")}
        />
        <div className={styles.options}>
          {options.map((option, i) => (
            <div key={i} className={styles.option}>
              <Image src={option} alt="option" width={48} height={48} />
              <h4 className={styles.option_title}>
                {t(`options.option_${i + 1}.title`)}
              </h4>
              <p className={styles.option_description}>
                {t(`options.option_${i + 1}.description`)}
              </p>
            </div>
          ))}
        </div>
        <Article
          title={t("section_4.title")}
          description={t("section_4.description")}
        />
        <div>
          <h4 className={styles.list_title}>{t("list_title")}</h4>
          <ul className={styles.list}>
            {Array(4)
              .fill(1)
              .map((_, i) => (
                <li key={i} className={styles.list_item}>
                  {t(`list.item_${i + 1}`)}
                </li>
              ))}
          </ul>
        </div>
        <Article
          title={t("section_5.title")}
          description={t("section_5.description")}
        />
        <Article
          title={t("section_6.title")}
          description={t("section_6.description")}
        />
      </Container>
    </div>
  );
};

export default Audit;

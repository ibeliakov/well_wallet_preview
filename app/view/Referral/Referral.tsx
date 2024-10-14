import { BtnStartUse, Container, SectionInfo } from "@/app/components";
import { FC } from "react";
import { useTranslations } from "next-intl";

import styles from "./Referral.module.css";

const Referral: FC = () => {
  const t = useTranslations("referral");
  return (
    <Container className={styles.container}>
      <div>
        <SectionInfo
          title={t("title")}
          description={t("description")}
          className={styles.info}
        />
        <div className={styles.explanation}>
          <h3 className={styles.explanation_title}>{t("explanation.title")}</h3>
          <div>
            <p
              className={styles.explanation_text}
              dangerouslySetInnerHTML={{
                __html: `${t(
                  "explanation.p_1"
                )} <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">${t(
                  "explanation.link"
                )}</a>.`,
              }}
            />
            <div>
              {Array.from({ length: 3 }).map((_, i) => (
                <p
                  className={styles.explanation_text}
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: t(`explanation.p_${i + 2}`),
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.exemplar}>
          <h3 className={styles.exemplar_title}>{t("exemplar.title")}</h3>
          <div className={styles.exemplar_content}>
            <div>
              <p>{t("exemplar.p_1")}</p>
              <p>
                <b>{t("exemplar.p_2")}</b>
              </p>
            </div>
            <div>
              <BtnStartUse />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Referral;

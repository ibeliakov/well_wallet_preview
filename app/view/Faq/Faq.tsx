import { Container, SectionInfo } from "@/app/components";
import { useTranslations } from "next-intl";
import { FC } from "react";

import styles from "./Faq.module.css";
import { Question } from "./components";
import Image from "next/image";
import { LINK_TO_SUPPORT } from "@/app/constants";
import { Link } from "@/i18n/routing";

const convertToLink = (link: string): string =>
  link.match(/(((https?:\/\/)|(www\.))[^\s]+)/g) ? link : `http://${link}`;

const Faq: FC = () => {
  const t = useTranslations("faq");
  const tc = useTranslations("common");
  return (
    <Container className={styles.container}>
      <div className={styles.preview}>
        <SectionInfo
          title={t("title")}
          description={t("description")}
          className={styles.info}
        />
        <div className={styles.image} />
      </div>
      <div className={styles.questions}>
        <h3 className={styles.questions_title}>{t("questions_title")}</h3>
        {Array.from({ length: 11 }).map((_, i) => (
          <Question
            key={i}
            title={t(`question_${i + 1}.title`)}
            description={t.rich(`question_${i + 1}.description`, {
              link: (chunks) => {
                const values = Array.isArray(chunks) ? chunks : [chunks];
                return values
                  .filter((value) => typeof value === "string")
                  .map((value, i) => {
                    return (
                      <Link key={i} target="_blank" href={convertToLink(value)}>
                        {value}
                      </Link>
                    );
                  });
              },
            })}
            active={i === 0}
          />
        ))}
      </div>
      <div className={styles.footer}>
        <div>
          <h3 className={styles.leave_question}>{t("leave_question")}</h3>
          <p className={styles.leave_question_description}>
            {t.rich("leave_question_description")}
          </p>
        </div>
        <div>
          <a
            className={styles.btn}
            href={LINK_TO_SUPPORT}
            target="_blank"
            rel="noopener noreferrer"
          >
            {tc("support")}{" "}
            <Image
              src="/images/telegram_icon.svg"
              width={20}
              height={20}
              alt="icon"
            />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Faq;

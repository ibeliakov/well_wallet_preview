import { useTranslations } from "next-intl";

import styles from "./Audit.module.css";
import Image from "next/image";
import classNames from "classnames";
import { Link } from "@/i18n/routing";
import { FC } from "react";
import { Partners, ArticlePreview } from "./component";
import { Container, SectionInfo } from "@/app/components";

const Audit: FC = () => {
  const t = useTranslations("home");
  const standards = [
    {
      title: "OWASP Top 10:",
      description: t("owasp"),
    },
    {
      title: "ISO/IEC 27001:",
      description: t("iso_27001"),
    },
    {
      title: "PCI DSS: ",
      description: t("pci_dss"),
    },
  ];
  const listKey = Array.from({ length: 4 }, (_, i) =>
    t(`article.list.item${i + 1}`)
  );

  return (
    <section className={styles.wrap}>
      <SectionInfo
        title={t("audit.title")}
        description={t("audit.description")}
        className={styles.container}
      />
      <Container className={classNames(styles.standards, styles.container)}>
        {standards.map((standard, index) => (
          <div key={index} className={styles.standard}>
            <Image
              src={`/images/check-mark.svg`}
              alt={standard.title}
              width={48}
              height={48}
            />
            <h3 className={styles.standard__title}>{standard.title}</h3>
            <div className={styles.standard__description}>
              {standard.description}
            </div>
          </div>
        ))}
      </Container>
      <Container className={styles.container}>
        <Link className={styles.link__audit} href="/audit">
          {t("details")}{" "}
          <Image
            src="/images/arrow-right-white.svg"
            alt="arrow"
            width={16}
            height={16}
          />
        </Link>
      </Container>
      <Container className={styles.bg_line}>
        <div className={styles.article}>
          <Container>
            <h3 className={styles.article_title}>{t("article.title")}</h3>
            <div className={styles.article_wrap}>
              <div className={styles.article_content}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("article.p1"),
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("article.p2"),
                  }}
                />
                <div>
                  <h4 className={styles.article_subtitle}>
                    {t("article.subtitle")}
                  </h4>
                  <ul>
                    {listKey.map((text, i) => (
                      <li key={i}>{text}</li>
                    ))}
                  </ul>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t("article.p3"),
                    }}
                  />
                </div>
              </div>
              <ArticlePreview />
              {/*  <div className={styles.article_preview}>
                <div>
                  <PhoneWithMenu activeBtn={6} className={styles.phone} />
                </div>
                <div className={styles.article_preview_chat}>
                  <div className={styles.message}>{t("chat_message")}</div>
                  <div className={styles.currencies}>
                    {["TRC20", "ERC20", "BTC"].map((message, i) => (
                      <div className={styles.currency} key={i}>
                        {message}
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
          </Container>
        </div>
      </Container>
      <Container className={styles.container}>
        <h3 className={styles.partners_title}>{t("about_us")}</h3>
        <Partners />
      </Container>
    </section>
  );
};

export default Audit;

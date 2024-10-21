import { Container, SectionInfo } from "@/app/components";
import { FC } from "react";

import styles from "./Contacts.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ContactForm } from "./components";
import { LAGAL_EMAIL } from "@/app/constants";

const Contacts: FC = () => {
  const t = useTranslations("contacts");
  return (
    <div className={styles.wrap}>
      <Container className={styles.content}>
        <div className={styles.column}>
          <SectionInfo
            title={t("title")}
            description={t("description")}
            className={styles.section}
          />
          <div>
            <h4 className={styles.contact_us}>{t("contact_us")}</h4>
            <div className={styles.contact_box}>
              <Image
                height={56}
                width={56}
                alt="icon"
                src="/images/email_icon.svg"
              />
              <div>
                <div className={styles.contact_label}>e-mail:</div>
                <a
                  className={styles.contact_email}
                  href={`mailto:${LAGAL_EMAIL}`}
                  target="_blank"
                >
                  {LAGAL_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default Contacts;

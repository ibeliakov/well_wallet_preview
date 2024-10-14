import { useTranslations } from "next-intl";

import styles from "./BtnStartUse.module.css";
import { FC } from "react";

const BtnStartUse: FC = () => {
  const t = useTranslations("common");
  return (
    <a href="/start-use" className={styles.btn}>
      {t("start_use")}
    </a>
  );
};

export default BtnStartUse;

import { FC } from "react";

import { useTranslations } from "next-intl";
import styles from "./ColonTitle.module.css";

const ColonTitle: FC = () => {
  const t = useTranslations("common");

  return (
    <div className={styles.info}>
      <div>
        © <span className={styles.title}>Well Wallet</span>. 2024
      </div>
      <div>{t("all_rights_reserved")}</div>
    </div>
  );
};

export default ColonTitle;

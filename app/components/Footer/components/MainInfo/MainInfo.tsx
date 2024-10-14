import { Logo } from "@/app/components";
import { useTranslations } from "next-intl";
import { FC } from "react";

import styles from "./MainInfo.module.css";

const MainInfo: FC = () => {
  const t = useTranslations("common");
  return (
    <div className={styles.box}>
      <Logo zoom={1.11} />
      <div className={styles.info}>
        <div>
          © <span className={styles.title}>Well Wallet</span>. 2024
        </div>
        <div>{t("all_rights_reserved")}</div>
      </div>
    </div>
  );
};

export default MainInfo;
